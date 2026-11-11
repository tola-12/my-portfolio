"use server";

import { prisma } from "@/lib/prisma";
import { sendTelegramNotification } from "@/lib/telegram";
import { revalidatePath } from "next/cache";

export interface ContactFormState {
  success?: boolean;
  message?: string;
  error?: string;
}

export async function submitContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please provide a valid email address." };
  }

  if (message.length < 5) {
    return { error: "Your message must be at least 5 characters long." };
  }

  try {
    // 1. Persist to Database via Prisma
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });

    // 2. Dispatch real-time Telegram notification
    await sendTelegramNotification({ name, email, message });

    revalidatePath("/admin");

    return {
      success: true,
      message: `Thank you, ${name}! Your transmission has been queued and stored in our database.`,
    };
  } catch (err) {
    console.error("Error storing contact message:", err);
    return {
      error: "Unable to transmit message at this moment. Please try again later.",
    };
  }
}

export async function getContactMessages() {
  try {
    return await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.error("Failed to load messages:", err);
    return [];
  }
}

export async function updateMessageStatus(id: string, status: string) {
  try {
    await prisma.contactMessage.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (err) {
    return { success: false, error: "Failed to update status" };
  }
}

export async function deleteContactMessage(id: string) {
  try {
    await prisma.contactMessage.delete({
      where: { id },
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (err) {
    return { success: false, error: "Failed to delete message" };
  }
}

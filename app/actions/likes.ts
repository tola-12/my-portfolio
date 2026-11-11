"use server";

import { prisma } from "@/lib/prisma";

export async function getProjectLikes(projectId: string) {
  try {
    const record = await prisma.projectReaction.findUnique({
      where: { projectId },
    });
    return record?.likes ?? 0;
  } catch {
    return 0;
  }
}

export async function likeProject(projectId: string) {
  try {
    const updated = await prisma.projectReaction.upsert({
      where: { projectId },
      update: { likes: { increment: 1 } },
      create: { projectId, likes: 1, views: 1 },
    });
    return { success: true, likes: updated.likes };
  } catch (err) {
    console.error("Failed to like project:", err);
    return { success: false, error: "Database error" };
  }
}


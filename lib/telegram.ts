/**
 * Real-time Telegram notification webhook
 * Sends incoming client inquiries instantly to your phone
 */
export async function sendTelegramNotification({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.log("[Telegram Notification Skipped - No Token Configured]:", {
      name,
      email,
      message,
    });
    return { success: false, reason: "NOT_CONFIGURED" };
  }

  const text = `🚀 *New Portfolio Inquiry!*\n\n*Name:* ${name}\n*Email:* ${email}\n*Time:* ${new Date().toLocaleString()}\n\n*Message:*\n${message}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    const data = await res.json();
    return { success: data.ok, data };
  } catch (error) {
    console.error("Failed to deliver Telegram notification:", error);
    return { success: false, error };
  }
}


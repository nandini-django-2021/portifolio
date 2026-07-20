import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { message, conversationHistory } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    // Use Vercel AI Gateway with Anthropic Claude
    // No API key needed - uses Vercel's credentials
    const client = new Anthropic();

    // Build messages array with conversation history
    const messages = [
      ...(conversationHistory || []),
      {
        role: "user",
        content: message,
      },
    ];

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: `You are a helpful AI assistant for a premium portfolio website. You help visitors learn about the portfolio owner's work, skills, and services. Be concise, professional, and friendly. Keep responses to 2-3 sentences unless asked for more detail.`,
      messages: messages,
    });

    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    res.status(200).json({
      reply: assistantMessage,
      conversationHistory: [
        ...messages,
        {
          role: "assistant",
          content: assistantMessage,
        },
      ],
    });
  } catch (error) {
    console.error("Chatbot API error:", error);
    res.status(500).json({
      error: "Failed to process message",
      details: error.message,
    });
  }
}

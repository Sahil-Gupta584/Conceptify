import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const openAiApiKey = process.env.OPENAI_API_KEY;
  const OpenAiBaseUrl = process.env.OPENAI_BASE_URL;

  try {
    const formdata = await req.formData();
    const textInput = formdata.get("textInput");
    const mermaidCode = formdata.get("mermaidCode");

    if (!textInput || !mermaidCode)
      return NextResponse.json({
        status: 400,
        ok: false,
        error: "Invalid input",
      });
    const client = new OpenAI({
      baseURL: OpenAiBaseUrl,
      apiKey: openAiApiKey,
    });
    const res = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Give simple ,effective, easy to memorize, summary of the this  diagram >   ${mermaidCode}` },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });
    console.log("res", res.choices);

    // fallbackText = res.choices[0].message.content;
    return NextResponse.json({
      status: 200,
      ok: true,
      summary: res.choices[0].message.content,
    });
  } catch (error) {
    console.log("error", error);

    return NextResponse.json({
      status: 500,
      ok: false,
      error: "Internal server error",
    });
  }
}

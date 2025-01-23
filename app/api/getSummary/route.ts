import { auth } from "@/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) return NextResponse.json({ error: "unauthenticated", ok: false, status: 401 });

    const geminiKey = process.env.GEMINI_KEY;
    if (!geminiKey)return NextResponse.json({ status: 400, ok: false, error: "Invalid env's" });

    const formdata = await req.formData();
    const textInput = formdata.get("textInput");
    const mermaidCode = formdata.get("mermaidCode");
    console.log("formdata", formdata);

    if (!textInput && !mermaidCode)
      return NextResponse.json({
        status: 400,
        ok: false,
        error: "Invalid input",
      });

    const genAI = new GoogleGenerativeAI(geminiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(
      `Give simple ,effective, easy to memorize,and in the form of markdown, summary of the this diagram >${
        mermaidCode || textInput
      } `
    );
    const response = result.response;
    const text = response.text();
    console.log("text", text);

    return NextResponse.json({
      status: 200,
      ok: true,
      summary: text,
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

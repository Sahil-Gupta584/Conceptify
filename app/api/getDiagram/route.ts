import { auth } from "@/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    console.log("session", session);
    if(!session?.user)return NextResponse.json({error:'unauthenticated',ok:false,status:401});

    const diagramApiUrl = process.env.DIAGRAM_API_URL;
    const geminiKey = process.env.GEMINI_KEY;
    if (!diagramApiUrl || !geminiKey)
      return NextResponse.json({
        ok: false,
        error: "Invalid env's",
        status: 500,
      });

    const formdata = await req.formData();
    const textInput = formdata.get("textInput");
    const ocrText = formdata.get("ocrText");
    const timestamp = Number(formdata.get("timestamp"));
    const itsHashedBro = formdata.get("itsHashedBro");
    console.log("formdata", formdata);

    if (!ocrText && !textInput) {
      return NextResponse.json({
        ok: false,
        error: "Provide either 'ocrText' or 'textInput'.",
        status: 400,
      });
    }

    if (!timestamp || !itsHashedBro) {
      return NextResponse.json({
        ok: false,
        error: "Missing required fields",
        status: 400,
      });
    }

    if (itsHashedBro !== (timestamp * timestamp + 9 + timestamp).toString()) {
      return NextResponse.json({
        ok: false,
        error: "Invalid itsHashedBro",
        status: 400,
      });
    }

    const apiResponse = await fetch(diagramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        type: "flow",
        content: ocrText || textInput,
      }),
    });

    const apiResult = await apiResponse.json();
    if (!apiResult.success)
      return NextResponse.json({
        ok: false,
        error: "Failed to generate diagram",
        status: 500,
      });

    let fallbackText = "";
    if (!apiResult.result.mermaidCode) {
      const genAI = new GoogleGenerativeAI(geminiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(textInput as string);
      const response = result.response;
      const text = response.text();
      console.log("text", text);

      fallbackText = text;
    }

    return NextResponse.json({
      ok: true,
      mermaidCode: apiResult.result.mermaidCode,
      fallbackText,
    });
    //   Dummy response
    //     //   if (textInput === "d") {
    //     return NextResponse.json({
    //       ok: true,
    //       mermaidCode:
    //         "flowchart TD\n    A[Charge] -->|Type| B[Negative]\n    A -->|Type| C[Positive]",
    //     });
    //   }
    //   if (textInput === "nd") {
    //     return NextResponse.json({
    //       ok: true,
    //       fallbackText:
    //         "fineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    //     });
    //   }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ ok: false, error: error, status: 500 });
  }
}

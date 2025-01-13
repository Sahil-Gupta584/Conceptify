import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formdata = await req.formData();
    const textInput = formdata.get("textInput");
    // const imageInput = formdata.getAll("imageInput");
    const timestamp = Number(formdata.get("timestamp"));
    const hash = formdata.get("hash");
    if (hash !== (timestamp * timestamp + 9 + timestamp).toString()) {
      return NextResponse.json({ ok: false, error: "Invalid hash", status: 400 });
    }

    // Call external API to generate Mermaid code
    const apiResponse = await fetch("https://app.leiga.com/api/free-tools/generate-diagram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        type: "flow",
        content: textInput || "Default flow description", // Provide default content if none
      }),
    });

    const apiResult = await apiResponse.json();
    if (!apiResult.success) {
      return NextResponse.json({ ok: false, error: "Failed to generate diagram", status: 500 });
    }

    return NextResponse.json({
      ok: true,
      mermaidCode: apiResult.result.mermaidCode,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ ok: false, error: error, status: 500 });
  }
}

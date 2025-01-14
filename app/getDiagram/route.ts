import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const diagramApiUrl = process.env.DIAGRAM_API_URL;
    const openAiApiKey = process.env.OPENAI_API_KEY;
    const OpenAiBaseUrl = process.env.OPENAI_BASE_URL;
    if (!diagramApiUrl || !openAiApiKey|| !OpenAiBaseUrl)  return NextResponse.json({ ok: false, error: "Invalid env's", status: 500 });
    
    const formdata = await req.formData();
    const textInput = formdata.get("textInput");
    // const imageInput = formdata.getAll("imageInput");
    const timestamp = Number(formdata.get("timestamp"));
    const itsHashedBro = formdata.get("itsHashedBro");
    if (itsHashedBro !== (timestamp * timestamp + 9 + timestamp).toString()) {
      return NextResponse.json({ ok: false, error: "Invalid itsHashedBro", status: 400 });
    }

    const apiResponse = await fetch(diagramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        type: "flow",
        content: textInput || "Default flow description", 
      }),
    });

    const apiResult = await apiResponse.json();
    if (!apiResult.success) return NextResponse.json({ ok: false, error: "Failed to generate diagram", status: 500 });
    
    let fallbackText;
    if(!apiResult.result.mermaidCode) {
      const client = new OpenAI({baseURL:OpenAiBaseUrl,apiKey:openAiApiKey})
      const res =  await client.chat.completions.create({
            model:"gpt-4o",
            messages:[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": textInput as string}
            ],
            temperature:0.7,
            max_tokens:1000
        })
        console.log('res',res.choices);
        
        fallbackText = res.choices[0].message.content
      }

    return NextResponse.json({
      ok: true,
      mermaidCode: apiResult.result.mermaidCode,
      fallbackText,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ ok: false, error: error, status: 500 });
  }
}

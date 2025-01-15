import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const diagramApiUrl = process.env.DIAGRAM_API_URL;
    const openAiApiKey = process.env.OPENAI_API_KEY;
    const OpenAiBaseUrl = process.env.OPENAI_BASE_URL;
    if (!diagramApiUrl || !openAiApiKey || !OpenAiBaseUrl)
      return NextResponse.json({
        ok: false,
        error: "Invalid env's",
        status: 500,
      });

    const formdata = await req.formData();
    const textInput = formdata.get("textInput");
    // const imageInput = formdata.getAll("imageInput");
    const timestamp = Number(formdata.get("timestamp"));
    const itsHashedBro = formdata.get("itsHashedBro");
    if (itsHashedBro !== (timestamp * timestamp + 9 + timestamp).toString()) {
      return NextResponse.json({
        ok: false,
        error: "Invalid itsHashedBro",
        status: 400,
      });
    }

    // const apiResponse = await fetch(diagramApiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     type: "flow",
    //     content: textInput || "Default flow description",
    //   }),
    // });

    // const apiResult = await apiResponse.json();
    // if (!apiResult.success)
    //   return NextResponse.json({
    //     ok: false,
    //     error: "Failed to generate diagram",
    //     status: 500,
    //   });

    // let fallbackText;
    // if (!apiResult.result.mermaidCode) {
    //   const client = new OpenAI({
    //     baseURL: OpenAiBaseUrl,
    //     apiKey: openAiApiKey,
    //   });
    //   const res = await client.chat.completions.create({
    //     model: "gpt-4o",
    //     messages: [
    //       { role: "system", content: "You are a helpful assistant." },
    //       { role: "user", content: textInput as string },
    //     ],
    //     temperature: 0.7,
    //     max_tokens: 1000,
    //   });
    //   console.log("res", res.choices);

      // fallbackText = res.choices[0].message.content;
    // }

    // return NextResponse.json({
    //   ok: true,
    //   mermaidCode: apiResult.result.mermaidCode,
    //   fallbackText,
    // });
    console.log('textInput', textInput);
    if (textInput === "d") {
      return NextResponse.json({
        ok: true,
        mermaidCode:
          "flowchart TD\n    A[Charge] -->|Type| B[Negative]\n    A -->|Type| C[Positive]",
      });
    }
    if (textInput === "nd") {
      return NextResponse.json({
        ok: true,
        fallbackText: "fineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      });
    }
    // const res = [  "I am ChatGPT, a large language model developed by OpenAI. I am designed to converse with aaaaaaaaaaaaaaaaaaa"];
    //    let textPosition=0
    //     let speed= 20;
    //      const typewriter = () => document.getElementById("txt-holder").innerHTML = res[0].substring(0, textPosition) + "<span id='blinker'>\u25ae</span>"; if (textPosition++ <res[0].length) { setTimeout(typewriter, speed); } else { setTimeout(() = { document.getElementById("blinker").remove(); }, 3000); } Upgrade for More Features

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ ok: false, error: error, status: 500 });
  }
}

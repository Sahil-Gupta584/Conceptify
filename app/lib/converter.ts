import { createWorker } from "tesseract.js";

async function convertor (img: string) {
  const worker = await createWorker("eng");
  const ret = await worker.recognize(img);
  const text = ret.data.text;
  await worker.terminate();
  return text;
};

export default convertor;
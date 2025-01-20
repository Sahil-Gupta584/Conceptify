import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  from: String,
  content: {
    fallbackText: String,
    image: String,
    svgDiagram: String,
    summary: String,
    mermaidCode: String,
    inputText: String,
  },
});

const Messages = mongoose.models?.messages || mongoose.model("messages", MessageSchema);
export { Messages };

import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
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

const FeedbackSchema = new Schema({
  title: String,
  description: String,
  upvotes: Number,
  upvotedBy: {
    type: [Schema.Types.ObjectId],
    ref: "users",
  },
});

const Messages =
  mongoose.models?.messages || mongoose.model("messages", MessageSchema);
const Feedbacks =
  mongoose.models?.feedbacks || mongoose.model("feedbacks", FeedbackSchema);
export { Messages, Feedbacks };

"use server";
import { auth, signIn, signOut } from "@/auth";
import { Feedbacks, Messages } from "./model";
import { dbConnect } from "./db";
import { Feedback } from "../feedbacks/feedbackPage";

export async function handleMagicLink(email: string) {
  console.log("calling");
  await signIn("nodemailer", { redirectTo: "/", email });
}

export async function handleGoogleAuth() {
  await signIn("google", { redirectTo: "/" });
}

export async function logOut() {
  await signOut({ redirectTo: "/landing" });
}

export async function uploadMessage(formdata: FormData) {
  try {
    await dbConnect();
    const session = await auth();
    const messageRaw = formdata.get("message");
    const blob = formdata.get("blob");
    if (!messageRaw) throw new Error("message not found!");
    const message = JSON.parse(messageRaw as string);
    if (blob) {
      const form = new FormData();
      form.append("image", blob as Blob, "Conceptify.png");

      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=b10b7ca5ecd048d6a0ed9f9751cebbdc",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await res.json();
      message.content.image = result.data.display_url;
    }

    const msg = await Messages.create({ user: session?.user?.id, ...message });
    return JSON.stringify({ msgId: msg._id });
  } catch (error) {
    console.log("error uploadingMsg", error);
    throw error;
  }
}

export async function getMessages() {
  try {
    const session = await auth();
    await dbConnect();

    const msgs = await Messages.find({ user: session?.user?.id });
    return JSON.stringify(msgs);
  } catch (error) {
    console.log("error uploadingMsg", error);
    throw error;
  }
}

export async function updateFeedback(
  feedback: Feedback,
  type: "new" | "update"
) {
  try {
    if (type === "update") {
      await Feedbacks.findByIdAndUpdate(feedback._id, feedback);
      return;
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {_id,...values}=feedback
     await Feedbacks.create({...values});
  } catch (error) {
    console.log(error, "error updatingFeedback");
    throw error;
  }
}

export async function getAllFeedbacks() {
  try {
    const res= await Feedbacks.find()
    return JSON.stringify(res)
  } catch (error) {
    console.log('err getting all feedbacks',error);
    throw error
  }
}
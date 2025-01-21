"use server";
import { auth, signIn, signOut } from "@/auth";
import { TMessage } from "../components/chatSection";
import { Messages } from "./model";
import { dbConnect } from "./db";

export async function handleMagicLink(email: string) {
  await signIn("nodemailer", { redirectTo: "/", email });
}

export async function handleGoogleAuth() {
  await signIn("google", { redirectTo: "/" });
}

export async function logOut() {
  await signOut({ redirectTo: "/auth" });
}

export async function uploadMessage(message: Omit<TMessage, "_id">) {
  try {
    console.log("message to upload:", message);

    await dbConnect();
    const session = await auth();

    const msg = await Messages.create({ user: session?.user?.id, ...message });
    console.log("created msg", msg);
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

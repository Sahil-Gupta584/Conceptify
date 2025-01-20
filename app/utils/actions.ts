"use server";
import { signIn, signOut } from "@/auth";
import { TMessage } from "../components/chatSection";
import client from "./db";
import { Messages } from "./model";

export async function handleMagicLink(email: string) {
  await signIn("nodemailer", {
    redirectTo: "/",
  });
}

export async function handleGoogleAuth() {
  await signIn('google', { redirectTo: '/' });
}


export async function logOut() {
  await signOut({ redirectTo: '/auth' })
}

export async function uploadMessage(message:TMessage) {
  try {
    const res =await client.connect()
    console.log('connectRes',res);
    
    const msg = await Messages.create(message)
    console.log('created msg', msg);
    
  } catch (error) {
    console.log('error uploadingMsg',error);
    throw error
  }
}
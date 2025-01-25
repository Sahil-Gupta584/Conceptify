import { NextResponse, NextRequest } from "next/server";


export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  // response.headers.set(
  //   "x-forwarded-host",
  //   req.headers.get("origin")?.replace(/(http|https):\/\//, "") || "*",
  // );
  return response;
}
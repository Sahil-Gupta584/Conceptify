'use client';
import dynamic from "next/dynamic"

const AuthPage = dynamic(()=>import('./authPage'),{ssr:false})
export default function AuthPageWrapper() {
  return <AuthPage/>
}

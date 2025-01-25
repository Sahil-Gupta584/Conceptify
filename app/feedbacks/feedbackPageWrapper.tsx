'use client';
import dynamic from "next/dynamic"

const FeedbackPage = dynamic(()=>import('./feedbackPage'),{ssr:false})
export default function FeedbackPageWrapper() {
  return <FeedbackPage/>
}

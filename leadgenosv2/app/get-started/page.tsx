import type { Metadata } from "next";
import { Suspense } from "react";
import WaitlistPage from "./WaitlistPage";

export const metadata: Metadata = {
  title: "Get Early Access — LeadGenOS",
  description: "AI-powered lead generation platform. Find, enrich, and email leads from 13+ sources in one dashboard.",
  robots: { index: false, follow: false },
};

export default function GetStarted() {
  return (
    <Suspense>
      <WaitlistPage />
    </Suspense>
  );
}

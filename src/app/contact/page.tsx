import type { Metadata } from "next";
import { LegalPageView } from "@/components/legal-page";
import { getLegalPage, getLegalPagePath } from "@/lib/legal-pages";
import { siteName } from "@/lib/site";

const page = getLegalPage("contact");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: getLegalPagePath(page),
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: getLegalPagePath(page),
    siteName,
    type: "website",
  },
};

export default function ContactPage() {
  return <LegalPageView page={page} />;
}

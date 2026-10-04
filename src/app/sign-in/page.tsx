import type { Metadata } from "next";
import { SignInPage } from "@/features/auth";

export const metadata: Metadata = { title: "Sign in | CrawlAi" };

export default function Page({ searchParams }: PageProps<"/sign-in">) {
  return <SignInPage searchParams={searchParams} />;
}

import type { Metadata } from "next";
import { SignUpPage } from "@/features/auth";

export const metadata: Metadata = { title: "Sign up | CrawlAi" };

export default function Page({ searchParams }: PageProps<"/sign-up">) {
  return <SignUpPage searchParams={searchParams} />;
}

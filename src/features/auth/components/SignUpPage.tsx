import { site } from "@/shared/lib/site";
import type { AuthSearchParams } from "../types/types";
import { AuthCard, AuthField, AuthSubmit } from "./AuthCard";

export async function SignUpPage({ searchParams }: { searchParams: Promise<AuthSearchParams> }) {
  const { error } = await searchParams;

  return (
    <AuthCard
      title="Create your CrawlAi account"
      description="Free for every developer. No card needed."
      error={typeof error === "string" ? error : undefined}
      switchText="Already have an account?"
      switchLabel="Sign in"
      switchHref={site.signInUrl}
    >
      <form action={`${site.authUrl}/sign-up`} method="post" className="flex flex-col gap-4">
        <AuthField label="Name" name="name" autoComplete="name" />
        <AuthField label="Email" name="email" type="email" autoComplete="email" />
        <AuthField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
        />
        <AuthSubmit>Create account</AuthSubmit>
      </form>
    </AuthCard>
  );
}

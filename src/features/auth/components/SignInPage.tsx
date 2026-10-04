import { site } from "@/shared/lib/site";
import { safeNextPath } from "../lib/next";
import type { AuthSearchParams } from "../types/types";
import { AuthCard, AuthField, AuthSubmit } from "./AuthCard";
import { PasswordField } from "./PasswordField";

export async function SignInPage({ searchParams }: { searchParams: Promise<AuthSearchParams> }) {
  const { error, next } = await searchParams;
  const nextPath = safeNextPath(next);

  return (
    <AuthCard
      title="Sign in to CrawlAi"
      description="See every LLM call in one place."
      error={typeof error === "string" ? error : undefined}
      switchText="New to CrawlAi?"
      switchLabel="Create an account"
      switchHref={site.signUpUrl}
    >
      <form action={`${site.authUrl}/sign-in`} method="post" className="flex flex-col gap-4">
        <AuthField label="Email" name="email" type="email" autoComplete="email" />
        <PasswordField autoComplete="current-password" />
        {nextPath && <input type="hidden" name="next" value={nextPath} />}
        <AuthSubmit>Sign in</AuthSubmit>
      </form>
    </AuthCard>
  );
}

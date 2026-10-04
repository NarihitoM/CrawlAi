import { site } from "@/shared/lib/site";
import { safeNextPath } from "../lib/next";
import type { AuthSearchParams } from "../types/types";
import { AuthCard, AuthField } from "./AuthCard";
import { AuthForm } from "./AuthForm";
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
      <AuthForm
        action={`${site.authUrl}/sign-in`}
        submitLabel="Sign in"
        pendingLabel="Signing in..."
      >
        <AuthField label="Email" name="email" type="email" autoComplete="email" />
        <PasswordField autoComplete="current-password" />
        {nextPath && <input type="hidden" name="next" value={nextPath} />}
      </AuthForm>
    </AuthCard>
  );
}

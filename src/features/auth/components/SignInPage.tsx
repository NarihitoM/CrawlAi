import { site } from "@/shared/lib/site";
import type { AuthSearchParams } from "../types/types";
import { AuthCard, AuthField, AuthSubmit } from "./AuthCard";

export async function SignInPage({ searchParams }: { searchParams: Promise<AuthSearchParams> }) {
  const { error, next } = await searchParams;
  const nextPath = typeof next === "string" && /^\/(?![/\\])/.test(next) ? next : null;

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
        <AuthField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        {nextPath && <input type="hidden" name="next" value={nextPath} />}
        <AuthSubmit>Sign in</AuthSubmit>
      </form>
    </AuthCard>
  );
}

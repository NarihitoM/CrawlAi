import { site } from "@/shared/lib/site";
import type { AuthSearchParams } from "../types/types";
import { AuthCard, AuthField } from "./AuthCard";
import { AuthForm } from "./AuthForm";
import { PasswordField } from "./PasswordField";

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
      <AuthForm
        action={`${site.authUrl}/sign-up`}
        submitLabel="Create account"
        pendingLabel="Creating account..."
      >
        <AuthField label="Name" name="name" autoComplete="name" />
        <AuthField label="Email" name="email" type="email" autoComplete="email" />
        <PasswordField autoComplete="new-password" showStrength />
      </AuthForm>
    </AuthCard>
  );
}

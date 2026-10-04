import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/shared/components/ui/Logo";
import { BrandIcon } from "@/shared/components/ui/BrandIcon";
import { github, google } from "@/shared/lib/brandMarks";
import { site } from "@/shared/lib/site";
import { AuthToast } from "./AuthToast";

const errorMessages: Record<string, string> = {
  invalid: "Check your details. The password needs at least 8 characters.",
  invalid_credentials: "Wrong email or password.",
  email_taken: "An account with this email already exists. Sign in instead.",
  rate_limited: "Too many attempts. Try again in 15 minutes.",
  oauth: "Could not sign in with that provider. Try again.",
  server: "Something went wrong on our side. Try again.",
};

const providers = [
  { id: "github", label: "Continue with GitHub", icon: github },
  { id: "google", label: "Continue with Google", icon: google },
];

type AuthCardProps = {
  title: string;
  description: string;
  error?: string;
  switchText: string;
  switchLabel: string;
  switchHref: string;
  children: ReactNode;
};

export function AuthCard({
  title,
  description,
  error,
  switchText,
  switchLabel,
  switchHref,
  children,
}: AuthCardProps) {
  const message = error ? (errorMessages[error] ?? errorMessages.server) : null;

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-zinc-50 px-4 py-16">
      {message && <AuthToast message={message} />}
      <Logo />
      <div className="flex w-full max-w-[400px] flex-col gap-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_1px_3px_rgb(0_0_0/0.04)] sm:p-8">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-xl font-semibold tracking-[-0.02em]">{title}</h1>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {providers.map((provider) => (
            <a
              key={provider.id}
              href={`${site.authUrl}/${provider.id}`}
              className="flex items-center justify-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-50"
            >
              <BrandIcon icon={provider.icon} size={16} />
              {provider.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <span className="h-px flex-1 bg-zinc-200" />
          or
          <span className="h-px flex-1 bg-zinc-200" />
        </div>
        {children}
        <p className="text-center text-xs leading-normal text-zinc-500">
          By continuing you agree to the Terms of Service and Privacy Policy.
        </p>
      </div>
      <p className="flex gap-1 text-sm text-zinc-500">
        {switchText}
        <Link href={switchHref} className="font-medium text-zinc-950 hover:underline">
          {switchLabel}
        </Link>
      </p>
    </main>
  );
}

type AuthFieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete: string;
};

export function AuthField({ label, name, type = "text", autoComplete }: AuthFieldProps) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        maxLength={128}
        required
        className="rounded-lg border border-zinc-200 bg-white px-3 py-2.5 font-normal outline-none transition-colors placeholder:text-zinc-400 focus:border-lime-500"
      />
    </label>
  );
}

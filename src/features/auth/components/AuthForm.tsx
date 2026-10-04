"use client";

import { useEffect, useState, type ReactNode } from "react";

type AuthFormProps = {
  action: string;
  submitLabel: string;
  pendingLabel: string;
  children: ReactNode;
};

export function AuthForm({ action, submitLabel, pendingLabel, children }: AuthFormProps) {
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const reset = (event: PageTransitionEvent) => {
      if (event.persisted) setPending(false);
    };
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  return (
    <form
      action={action}
      method="post"
      onSubmit={() => setPending(true)}
      className="flex flex-col gap-4"
    >
      {children}
      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="flex items-center justify-center gap-2 rounded-lg bg-lime-500 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-lime-500"
      >
        {pending && (
          <span className="size-3.5 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
        )}
        {pending ? pendingLabel : submitLabel}
      </button>
    </form>
  );
}

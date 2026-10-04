"use client";

import { useState } from "react";
import { Icon } from "@/shared/components/ui/Icon";

const rules = [
  { label: "At least 8 characters", test: (value: string) => value.length >= 8 },
  {
    label: "Upper and lowercase letters",
    test: (value: string) => /[a-z]/.test(value) && /[A-Z]/.test(value),
  },
  { label: "A number", test: (value: string) => /\d/.test(value) },
  { label: "A symbol", test: (value: string) => /[^A-Za-z0-9]/.test(value) },
];

const levels = [
  { label: "Weak", color: "bg-red-600", text: "text-red-600" },
  { label: "Weak", color: "bg-red-600", text: "text-red-600" },
  { label: "Fair", color: "bg-amber-500", text: "text-amber-600" },
  { label: "Good", color: "bg-lime-500", text: "text-lime-900" },
  { label: "Strong", color: "bg-lime-500", text: "text-lime-900" },
];

type PasswordFieldProps = {
  autoComplete: "current-password" | "new-password";
  showStrength?: boolean;
};

export function PasswordField({ autoComplete, showStrength = false }: PasswordFieldProps) {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const passed = rules.filter((rule) => rule.test(value)).length;
  const level = levels[passed];

  return (
    <div className="flex flex-col gap-2">
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Password
        <span className="relative flex">
          <input
            name="password"
            type={visible ? "text" : "password"}
            autoComplete={autoComplete}
            minLength={showStrength ? 8 : undefined}
            maxLength={128}
            required
            value={value}
            onChange={(event) => setValue(event.target.value)}
            aria-describedby={showStrength ? "password-strength" : undefined}
            className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pr-10 pl-3 font-normal outline-none transition-colors focus:border-lime-500"
          />
          <button
            type="button"
            onClick={() => setVisible((current) => !current)}
            aria-label={visible ? "Hide password" : "Show password"}
            aria-pressed={visible}
            className="absolute inset-y-0 right-0 grid w-10 place-items-center text-zinc-400 transition-colors hover:text-zinc-950"
          >
            <Icon name={visible ? "eyeOff" : "eye"} size={16} />
          </button>
        </span>
      </label>
      {showStrength && value.length > 0 && (
        <div id="password-strength" className="flex flex-col gap-2" aria-live="polite">
          <div className="flex items-center gap-3">
            <div className="flex flex-1 gap-1">
              {rules.map((rule, index) => (
                <span
                  key={rule.label}
                  className={`h-1 flex-1 rounded-full transition-colors ${index < passed ? level.color : "bg-zinc-200"}`}
                />
              ))}
            </div>
            <span className={`text-xs font-medium ${level.text}`}>{level.label}</span>
          </div>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
            {rules.map((rule) => {
              const ok = rule.test(value);
              return (
                <li
                  key={rule.label}
                  className={`flex items-center gap-1.5 ${ok ? "text-zinc-950" : "text-zinc-400"}`}
                >
                  <Icon
                    name={ok ? "check" : "x"}
                    size={12}
                    className={ok ? "text-lime-500" : undefined}
                  />
                  {rule.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

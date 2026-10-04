"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@/shared/components/ui/Icon";

export function AuthToast({ message }: { message: string }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("error");
    window.history.replaceState(null, "", url);

    const timer = setTimeout(() => setOpen(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 top-4 z-50 mx-auto flex max-w-[400px] items-start gap-3 rounded-lg border border-zinc-200 bg-white p-3.5 text-sm shadow-lg"
        >
          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-red-600" />
          <p className="flex-1 text-zinc-950">{message}</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss"
            className="shrink-0 text-zinc-400 transition-colors hover:text-zinc-950"
          >
            <Icon name="x" size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

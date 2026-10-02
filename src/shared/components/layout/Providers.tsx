"use client";

import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ anchors: true }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}

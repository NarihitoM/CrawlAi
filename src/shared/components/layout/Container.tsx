import type { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export function Container({ className = "", children }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[120px] ${className}`}>
      {children}
    </div>
  );
}

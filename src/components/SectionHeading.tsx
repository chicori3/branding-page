import clsx from "clsx";
import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, children, invert = false }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <p
          className={clsx(
            "text-sm font-semibold uppercase tracking-[0.2em]",
            invert ? "text-white/70" : "text-slate-500"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={clsx("text-2xl font-semibold", invert ? "text-white" : "text-slate-900")}>
        {title}
      </h2>
      {children && (
        <p className={clsx("text-base", invert ? "text-white/80" : "text-slate-600")}>{children}</p>
      )}
    </div>
  );
}

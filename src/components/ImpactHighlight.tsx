import clsx from "clsx";
import { ImpactItem } from "@/data/impactGrid";

type ImpactHighlightProps = ImpactItem & {
  variant?: "light" | "dark";
};

export function ImpactHighlight({
  label,
  problem,
  approach,
  outcome,
  variant = "light",
}: ImpactHighlightProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={clsx(
        "flex h-full flex-col rounded-2xl border p-5 text-sm backdrop-blur",
        isDark
          ? "border-white/15 bg-white/5 text-white"
          : "border-slate-100 bg-white/80 text-slate-900"
      )}
    >
      <p
        className={clsx(
          "text-[0.7rem] font-semibold uppercase tracking-[0.35em]",
          isDark ? "text-white/70" : "text-slate-400"
        )}
      >
        {label}
      </p>
      <dl className="mt-4 space-y-3 text-pretty">
        <div>
          <dt className="font-semibold">문제</dt>
          <dd className={clsx("text-[0.9rem]", isDark ? "text-white/80" : "text-slate-600")}>
            {problem}
          </dd>
        </div>
        <div>
          <dt className="font-semibold">접근</dt>
          <dd className={clsx("text-[0.9rem]", isDark ? "text-white/80" : "text-slate-600")}>
            {approach}
          </dd>
        </div>
        <div>
          <dt className="font-semibold">결과</dt>
          <dd className={clsx("text-[0.9rem]", isDark ? "text-white/80" : "text-slate-600")}>
            {outcome}
          </dd>
        </div>
      </dl>
      <div className="mt-auto" />
    </div>
  );
}

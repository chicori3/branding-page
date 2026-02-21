import { Highlight } from "@/data/highlights";

const chartStyles: Record<string, { beforeWidth: string; afterWidth: string; tone: "up" | "down" }> = {
  "클라우드 비용": { beforeWidth: "w-full", afterWidth: "w-3/5", tone: "down" },
  "배치 처리": { beforeWidth: "w-1/2", afterWidth: "w-full", tone: "up" },
  "운영 자동화": { beforeWidth: "w-full", afterWidth: "w-1/5", tone: "down" },
};

export function KpiCard({ title, metric, before, after, description, ariaLabel }: Highlight) {
  const chart = chartStyles[title] ?? { beforeWidth: "w-full", afterWidth: "w-3/4", tone: "up" };

  return (
    <div
      className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
      aria-label={ariaLabel}
    >
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <div className="mt-2 flex flex-wrap items-baseline gap-2 text-pretty">
        <p className="text-3xl font-bold text-slate-900">{metric}</p>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Before vs After
        </span>
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-600">
        <div className="space-y-1 break-words">
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
            Before
          </dt>
          <dd className="text-sm font-semibold text-slate-800">{before}</dd>
        </div>
        <div className="space-y-1 break-words">
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
            After
          </dt>
          <dd className="text-sm font-semibold text-emerald-600">{after}</dd>
        </div>
      </dl>

      <div className="mt-3 space-y-3">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-400">Before</p>
          <div className="h-2 rounded-full bg-slate-100">
            <div
              className={`h-2 rounded-full bg-slate-400 ${chart.beforeWidth}`}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-400">After</p>
          <div className="h-2 rounded-full bg-slate-100">
            <div
              className={`h-2 rounded-full ${
                chart.tone === "up" ? "bg-emerald-500" : "bg-rose-500"
              } ${chart.afterWidth}`}
              aria-hidden="true"
            />
          </div>
        </div>
        <p className="text-xs text-slate-400">각 카드의 특성에 맞게 Before/After 비율을 시각적으로 표현했습니다.</p>
      </div>

      <p className="mt-3 text-sm text-slate-600 text-pretty">{description}</p>
      <div className="mt-auto" />
    </div>
  );
}

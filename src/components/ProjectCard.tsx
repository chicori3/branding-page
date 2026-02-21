import { Project } from "@/data/projects";

export function ProjectCard({ title, period, problem, approach, result, tech, metrics }: Project) {
  return (
    <article className="group rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <header className="flex flex-col gap-1">
        <p className="text-sm font-medium text-slate-500">{period}</p>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </header>
      <dl className="mt-4 space-y-3 text-sm text-slate-600">
        <div>
          <dt className="font-semibold text-slate-500">문제</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">접근</dt>
          <dd>{approach}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">결과</dt>
          <dd>{result}</dd>
        </div>
      </dl>
      <ul className="mt-4 flex flex-wrap gap-2">
        {metrics.map((metric) => (
          <li key={metric} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {metric}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((stack) => (
          <span key={stack} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
            {stack}
          </span>
        ))}
      </div>
    </article>
  );
}

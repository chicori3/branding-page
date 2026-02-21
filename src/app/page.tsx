import { highlights } from "@/data/highlights";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { KpiCard } from "@/components/KpiCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-50 py-12 sm:py-16">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[48px] border border-white/60 bg-white/95 p-8 shadow-[0_40px_100px_rgba(15,23,42,0.06)] sm:p-10">
          <div className="space-y-10">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400/80">
                {siteConfig.role}
              </p>
              <h1 className="text-3xl font-semibold leading-snug text-slate-900 sm:text-[2.3rem] sm:leading-snug">
                {siteConfig.headline}
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:max-w-2xl sm:text-[0.98rem] whitespace-pre-line">
              {siteConfig.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.resumeUrl}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                레주메 다운로드
              </a>
              <a
                href={siteConfig.email}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              >
                이메일로 연락하기
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <KpiCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="space-y-8 rounded-[32px] border border-white/70 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
          <SectionHeading eyebrow="Projects" title="운영과 제품 병목을 없앤 대표 사례"/>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Impact/Contact 섹션은 헤더 + 프로젝트에 통합되었습니다. 필요하면 여기서 새 섹션으로 확장하세요. */}
      </main>
    </div>
  );
}

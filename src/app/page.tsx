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
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">{siteConfig.role}</p>
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {siteConfig.headline}
              </h1>
            </div>
            <p className="max-w-2xl text-lg text-slate-600">{siteConfig.summary}</p>
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
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">철학</p>
              <p className="mt-2 text-base font-medium text-slate-700">{siteConfig.philosophy}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <KpiCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="space-y-8 rounded-[32px] border border-white/70 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
          <SectionHeading eyebrow="Projects" title="운영과 제품 병목을 없앤 대표 사례">
            문제→접근→결과를 일관된 템플릿으로 정리해 빠르게 훑을 수 있도록 배치했습니다.
          </SectionHeading>
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

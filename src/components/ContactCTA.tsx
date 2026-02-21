import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="rounded-3xl border border-slate-100 bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white">
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-[0.2em] text-white/70">CONTACT</p>
        <h2 className="text-3xl font-semibold">팀과 제품의 다음 단계를 함께 만들고 싶습니다.</h2>
        <p className="text-base text-white/80">{siteConfig.summary}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={siteConfig.resumeUrl}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          레주메 다운로드
        </a>
        <a
          href={siteConfig.email}
          className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          이메일로 연락하기
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
        {siteConfig.socials.map((social) => (
          <a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="hover:text-white">
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}

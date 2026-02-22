export const siteConfig = {
  name: "이시안",
  role: "백엔드 엔지니어",
  headline: "성장하는 팀에서 함께 자라온 개발자 이시안입니다.",
  summary:
      String.raw`LMS와 백오피스, 운영 자동화 시스템을 통해 
      반복 업무를 줄이고 운영 효율을 높여 온 백엔드 개발자입니다.
      팀이 더 잘 일할 수 있는 환경을 만드는 데 집중합니다.`,
  resumeUrl: "/resume.pdf",
  email: "mailto:chicori3@gmail.com",
  socials: [
    {label: "GitHub", url: "https://github.com/chicori3"},
    {label: "LinkedIn", url: "https://www.linkedin.com/in/%EC%8B%9C%EC%95%88-%EC%9D%B4-798100249/"},
  ],
};

export type SiteConfig = typeof siteConfig;

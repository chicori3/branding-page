export const siteConfig = {
  name: "이시안",
  role: "백엔드 엔지니어",
  headline: "성장하는 팀에서 함께 자라온 개발자 이시안입니다.",
  summary:
      String.raw`LMS와 운영 자동화 시스템 설계·구축 경험이 있는 백엔드 개발자입니다. 
       저는 좋은 커뮤니케이션이 빠른 실행력과 높은 품질을 만든다고 믿습니다.
       팀원들과 아이디어를 주고받으며 문제를 함께 풀어가는 과정이 제일 즐겁습니다.
       
       맡은 일은 끝까지 책임지며, 동료가 믿고 맡길 수 있는 사람이 되고자 합니다. `,
  resumeUrl: "/resume.pdf",
  email: "mailto:sian.engineer@gmail.com",
  socials: [
    {label: "GitHub", url: "https://github.com/chicori3"},
    {label: "LinkedIn", url: "https://www.linkedin.com/in/isian"},
  ],
};

export type SiteConfig = typeof siteConfig;

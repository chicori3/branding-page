export type Highlight = {
  title: string;
  metric: string;
  before: string;
  after: string;
  description: string;
  ariaLabel: string;
};

export const highlights: Highlight[] = [
  {
    title: "클라우드 비용",
    metric: "40% 절감",
    before: "상시 가동 비용 지출 100%",
    after: "온디맨드 전환 후 60%",
    description: "Slack → Lambda → ECS 온디맨드 전환으로 테스트/QA 인프라 낭비 제거",
    ariaLabel: "클라우드 비용을 40퍼센트 줄였습니다",
  },
  {
    title: "배치 처리",
    metric: "2배 처리량",
    before: "중복 실행으로 1배 처리량",
    after: "락 최적화로 2배 처리량",
    description: "낙관적 락 + FOR UPDATE SKIP LOCKED로 대용량 스크립트 처리 안정화",
    ariaLabel: "배치 처리량을 두 배로 높였습니다",
  },
  {
    title: "운영 자동화",
    metric: "80% 리소스 절감",
    before: "수작업 중심 운영 100% 리소스",
    after: "시스템 자동화로 20% 리소스",
    description: "멘토링 운영·정산 플로우를 시스템화해 운영팀 반복 업무를 제거",
    ariaLabel: "운영 리소스를 80퍼센트 절감했습니다",
  },
];

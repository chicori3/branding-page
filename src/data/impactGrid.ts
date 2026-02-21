export type ImpactItem = {
  label: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const impactItems: ImpactItem[] = [
  {
    label: "인프라 비용",
    problem: "테스트/QA 서버 상시 가동으로 비용 누수",
    approach: "Slack 명령 기반 온디맨드 컨트롤과 목표 상태 검증",
    outcome: "클라우드 비용 40% 절감 및 운영 책임 명확화",
  },
  {
    label: "데이터 처리",
    problem: "동일 녹화본 중복 실행과 장시간 DB 락",
    approach: "MySQL FOR UPDATE SKIP LOCKED와 낙관적 락 조합",
    outcome: "스크립트 처리량 2배, 락 유지 시간 수 ms 수준으로 축소",
  },
  {
    label: "운영 자동화",
    problem: "엑셀 기반 일정/정산 프로세스의 휴먼 에러",
    approach: "상태 전이 모델링 + 캘린더/정산 시스템 자동화",
    outcome: "운영 리소스 80% 절감, 문의량 90% 감소",
  },
];

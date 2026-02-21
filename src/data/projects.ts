export type Project = {
  title: string;
  period: string;
  problem: string;
  approach: string;
  result: string;
  metrics: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Slack 기반 온디맨드 인프라 제어",
    period: "2025.07",
    problem:
      "테스트/QA 서버 상시 기동으로 비용 누수와 운영 책임 구간이 불명확했습니다.",
    approach:
      "Slack 명령 → AWS Lambda → ECS 태스크로 이어지는 제어 흐름과 목표 상태 검증 패턴을 설계했습니다.",
    result:
      "상시 가동 환경을 온디맨드로 전환해 비용을 절감하고 운영팀 셀프서비스화를 달성했습니다.",
    metrics: ["클라우드 비용 40% 절감", "요청 ID 기반 트레이싱", "재시도 가이드 표준화"],
    tech: ["AWS Lambda", "ECS", "Slack API", "TypeScript"],
  },
  {
    title: "LLM 기반 AI 멘토 서비스",
    period: "2025.05 ~ 2025.06",
    problem:
      "OpenAI 스트리밍 지연·중단으로 실시간 멘토링 경험과 대화 연속성이 흔들렸습니다.",
    approach:
      "SSE 기반 토큰 스트리밍과 입력 즉시 저장, 스트림 복원 로직을 도입해 신뢰도를 높였습니다.",
    result:
      "토큰 단위 응답과 요약 기반 컨텍스트 구성으로 실시간성을 확보하고 토큰 비용도 절감했습니다.",
    metrics: ["실시간 토큰 스트리밍", "입력 데이터 유실 0건", "네트워크 오류 복원"],
    tech: ["Spring Boot", "SSE", "OpenAI API", "MySQL"],
  },
  {
    title: "멘토링 일정 관리 시스템",
    period: "2024.05 ~ 2024.07",
    problem:
      "엑셀 기반 일정 관리로 휴먼 에러와 일정 변경 지연이 빈번했습니다.",
    approach:
      "상태 전이 규칙을 모델링하고 Google Calendar 연동 및 알림 자동화를 구축했습니다.",
    result:
      "문의량을 일 평균 40건에서 3건으로 줄이고 다국어/타임존 대응 기반을 마련했습니다.",
    metrics: ["일정 관련 문의 90% 감소", "전이 규칙 모델링", "다국어/타임존 지원"],
    tech: ["Spring Boot", "Google Calendar API", "MySQL", "Redis"],
  },
  {
    title: "멘토 급여 정산 자동화",
    period: "2023.11 ~ 2024.01",
    problem: "엑셀 중심 수작업 정산으로 오류와 지연이 잦았습니다.",
    approach:
      "출석/세금 데이터 연동과 자동 계산 플로우를 구축해 정산을 표준화했습니다.",
    result: "정산 소요 시간을 7일에서 2시간으로 단축했습니다.",
    metrics: ["정산 시간 7일 → 2시간", "자동 검증 규칙 도입"],
    tech: ["Spring Batch", "MySQL", "AWS S3"],
  },
];

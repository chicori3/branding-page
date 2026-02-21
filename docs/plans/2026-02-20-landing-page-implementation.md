# 백엔드 임팩트 랜딩 페이지 - 구현 계획 (2026-02-20)

## 1. 범위 요약
- Hero (자기소개 + KPI 카드 3개)와 CTA 버튼 2개
- 대표 프로젝트 카드 섹션 (문제/접근/결과, 스택 배지, KPI 서브 텍스트)
- 문제→접근→결과 3열 하이라이트 섹션
- Contact/Resume CTA 섹션
- 밝은 톤, 반응형, 접근성 준수

## 2. 작업 순서
1. **데이터 정의**
   - `data/highlights.ts`: KPI 3개 (비용 40%↓, 처리량 2x, 운영 80% 자동화)
   - `data/projects.ts`: 핵심 프로젝트 4개 내외 정보 구조화
   - `data/impactGrid.ts`: 문제/접근/결과 3열 콘텐츠
   - `data/site.ts`: 자기소개 문구, CTA 링크(레주메, 이메일), 소셜
2. **UI 컴포넌트**
   - `components/SectionHeading.tsx` (제목/설명)
   - `components/KpiCard.tsx`
   - `components/ProjectCard.tsx`
   - `components/ImpactItem.tsx`
   - `components/ContactCTA.tsx`
3. **페이지 조립** (`app/page.tsx`)
   - Hero + Highlights + Projects + ImpactGrid + ContactCTA
4. **스타일링**
   - `app/globals.css`에 CSS 변수, 공통 유틸
   - Tailwind config 확장 (색상 팔레트, 폰트)
5. **검증**
   - `npm run lint`, `npm run test`(없으면 생략), `npm run build`
   - 뷰포트별 수동 확인 (모바일 375px, 태블릿 768px)
6. **배포**
   - Git 초기화 이미 존재 → main 커밋 후 Vercel 배포 가이드 제공

## 3. 주의 사항
- KPI 수치 텍스트에 `aria-label` 제공
- 프로젝트 데이터 내 수치/성과 명시해 skim-friendly하게 구성
- 다국어 고려: 텍스트 한글 유지, 필요 시 `lang` 속성 추가 검토

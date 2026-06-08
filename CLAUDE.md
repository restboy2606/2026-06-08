# CLAUDE.md — PIXELFORGE STUDIOS 프로젝트 컨텍스트

> **이 파일은 Claude Code(및 다른 AI)가 이 프로젝트를 이어받을 때 즉시 읽어야 할 문서입니다.**
> 커밋 히스토리에는 없는 결정 배경, 규칙, 실패 사례가 담겨 있습니다.

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 이름 | PIXELFORGE STUDIOS 공식 홈페이지 |
| 레포 | `restboy2606/2026-06-08` |
| 배포 | https://restboy2606.github.io/2026-06-08/ |
| 기술 | React 19 + Vite 6 + 순수 CSS |
| 작업자 | 임종권 (restboy2606) |
| 연락처 | ssujklim@gmail.com ← **유일한 실제 연락처, 절대 바꾸지 말 것** |

## 회사 컨셉

- **이름**: PIXELFORGE STUDIOS (픽셀포지 스튜디오)
- **개업**: 2025년 12월 25일
- **장르**: 레트로 픽셀 RPG 모바일 게임 (포켓몬 1세대 감성)
- **개발 중인 게임 3종**:
  1. Monster Chronicle (몬스터 크로니클) — 수집형 턴제 RPG, 초록 계열
  2. Dungeon Bits (던전 비츠) — 퍼마데스 로그라이크, 빨간 계열
  3. Pixel Knights Online (픽셀 나이츠 온라인) — 픽셀 MMORPG, 파란 계열

---

## 디자인 규칙 (절대 어기지 말 것)

### ✅ 해야 하는 것
- **전체 다크 배경**: `#080808`, `#0f0f0f`, `#131313` 계열만 사용
- **단일 강조색**: `#2563eb` 로열블루만 CTA/강조에 사용
- **Mona 픽셀 폰트**: 헤딩, 배지, 라벨 (`font-family: 'Mona12', 'Mona10', monospace`)
  - CDN: `https://cdn.jsdelivr.net/gh/MonadABXY/mona-font/web/mona.css`
- **Plus Jakarta Sans**: 본문 설명 텍스트 (`color: var(--text-muted)`)
- **실제 콘텐츠만**: 있는 것만 표시. 없으면 없다고 하거나 빈칸

### ❌ 절대 하지 말 것
- 흰 배경 섹션 (`background: white` 또는 `#fafafa`) 추가 금지
- 가짜 통계 수치 추가 금지 (플레이어 수, 다운로드 수, 팀원 수 등)
- 가짜 후기/testimonials 추가 금지
- 없는 SNS 링크 추가 금지 (Discord, YouTube, Twitter 등 — 실제 계정 없음)
- 없는 페이지 링크 추가 금지 (Careers, Blog, Press 등)
- "스크롤 힌트" 애니메이션 (`▼ SCROLL DOWN` 류) 추가 금지
- `.hwpx`, `.hwp`, `.pdf`, `.docx` 등 개인정보 파일 절대 커밋 금지
- 전화번호, 주소, 생년월일 등 개인정보 HTML에 넣지 말 것

---

## 현재 구조

```
App.jsx
├── Navbar      — 스크롤 글래스모피즘, Games/Contact 링크만
├── Hero        — 풀스크린 다크, 글래스모피즘 CTA
├── Features    — 3 게임 지그재그 레이아웃 + CSS 게임 화면 목업
├── Gallery     — 2행 무한 마키 (row1: 왼쪽, row2: 오른쪽)
├── BottomCTA   — 이메일 CTA (ssujklim@gmail.com)
└── Footer      — Games + Contact 컬럼만
```

**삭제된 컴포넌트 (복원하지 말 것):**
- `Testimonials.jsx` — 가짜 후기라 삭제
- `About.jsx` — 가짜 통계 포함이라 삭제
- `Team.jsx` — 실제 팀원 정보 없어 삭제
- `Contact.jsx` — BottomCTA로 대체됨
- `Header.jsx` — Navbar.jsx로 대체됨

---

## CSS 변수 시스템

```css
--bg:           #080808   /* 메인 배경 */
--bg-2:         #0f0f0f   /* 보조 배경 (Features, BottomCTA) */
--bg-card:      #131313   /* 카드 배경 */
--text:         #e8e8e8   /* 주요 텍스트 */
--text-muted:   #555      /* 부제목, 설명 */
--text-dim:     #333      /* 매우 연한 텍스트 */
--border:       rgba(255,255,255,0.07)
--accent:       #2563eb   /* 로열블루 — 유일한 강조색 */
```

---

## Git / 배포

- **GitHub 계정**: `restboy2606`
- **이 PC에는 `iggn-official` 계정도 있어 403 발생 위험**
- **push 방법**: remote URL에 토큰 embed → push → URL 원복

```powershell
$TOKEN = (Get-Content "C:\Users\USER\Desktop\restboy2606_FULL\restboy2606\.env" | Select-String "GITHUB_TOKEN").ToString().Split("=")[1].Trim()
git remote set-url origin "https://restboy2606:$TOKEN@github.com/restboy2606/2026-06-08.git"
git push origin main
git remote set-url origin "https://github.com/restboy2606/2026-06-08.git"
```

- **GitHub Actions**: push → `npm ci` → `npm run build` → `dist/` → Pages 자동 배포
- **배포 URL**: https://restboy2606.github.io/2026-06-08/
- `vite.config.js`의 `base: '/2026-06-08/'` 절대 변경하지 말 것 (경로 깨짐)

---

## 알려진 이슈 / 미완성 항목

| 항목 | 상태 | 메모 |
|------|------|------|
| 모바일 햄버거 메뉴 | ❌ 미구현 | 768px 이하에서 nav 링크 `display: none` 상태 |
| 실제 게임 아트 | ❌ 없음 | Gallery는 이모지 플레이스홀더 |
| 각 게임 상세 페이지 | ❌ 없음 | Features 섹션에서 바로 상세로 이동 불가 |
| Mona 폰트 로드 검증 | ⚠️ 미확인 | CDN 로드 실패 시 `Press Start 2P` 폴백 |

---

## 개발 히스토리 요약

자세한 내용: `docs/개발일지.md`

1. **v1** — Press Start 2P 풀 픽셀, 섹션 많음, AI 슬롭 느낌
2. **v2** — 프리미엄 SaaS 리디자인 (흰/검 교차, 글래스모피즘)
3. **v3 (현재)** — 전체 다크, Mona 폰트, 가짜 콘텐츠 전부 제거

# PIXELFORGE STUDIOS

> 수도권ICT이노베이션스퀘어 · 쉬었음 청년 디지털 맞춤 교육 실습
> 배포: https://restboy2606.github.io/2026-06-08/
> 게임: https://restboy2606.github.io/2026-06-08/play.html

레트로 픽셀 RPG 모바일 게임 회사 `PIXELFORGE STUDIOS`의 공식 홈페이지입니다.  
React 19와 Vite 6로 제작했고, Mona 픽셀 폰트 기반의 다크 랜딩 페이지 안에 아주 작은 웹 클리커 게임 `FORGE POP`을 넣었습니다.

## 브랜드 설정

- 회사명: `PIXELFORGE STUDIOS`
- 개업일: `2025-12-25`
- 장르: 레트로 픽셀 웹게임 / 모바일 게임
- 대표 게임: `FORGE POP`
- 게임 방식: 로열 코어를 클릭해 비트를 모으고, 업그레이드로 파워/자동 채굴/크리티컬을 키우는 픽셀 클리커

## 디자인 원칙

- 전체 다크 배경: `#080808`, `#0f0f0f`, `#131313`
- 단일 강조색: `#2563eb`
- 헤딩/배지/라벨/게임 UI: `Mona` 픽셀 폰트
- 이모지 스프라이트: `Mona12 Color Emoji`, `Mona12 Emoji`
- 본문: `Plus Jakarta Sans`
- 없는 정보는 만들지 않음

## 기술 스택

- React 19
- Vite 6
- 순수 CSS
- GitHub Actions
- GitHub Pages

## 주요 섹션

1. `Navbar` - 스크롤 시 글래스모피즘 처리
2. `Hero` - 픽셀 브랜드 메시지와 CTA
3. `Features` - `FORGE POP` 단일 게임 소개
4. `BottomCTA` - 실제 메일 주소로 연결되는 문의 CTA
5. `Footer` - 게임과 연락처

## 게임 페이지

`play.html`은 메인 랜딩과 분리된 독립 페이지입니다.

- 클릭 타격감: 스케일 다운, 화면 흔들림, 데미지 팝업, 코어 파괴 플래시
- 성장 요소: 코어 레벨, 콤보, 총 비트, 랭크
- 업그레이드: `HAMMER`, `AUTO BOT`, `LUCK`
- 폰트: 버튼과 게임 UI까지 Mona 픽셀 폰트 적용

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포 메모

- `vite.config.js`의 `base`는 `/2026-06-08/`로 유지
- push 시 GitHub Actions가 `npm ci` → `npm run build` → `dist/` 배포
- 이 PC는 GitHub 멀티계정 충돌이 있어 push 전에 토큰 embed 방식이 필요할 수 있음

## 문서

- 개발일지: [docs/개발일지.md](docs/개발일지.md)
- AI 인계 문서: [CLAUDE.md](CLAUDE.md)

# PIXELFORGE STUDIOS

> 수도권ICT이노베이션스퀘어 · 쉬었음 청년 디지털 맞춤 교육 실습
> 배포: https://restboy2606.github.io/2026-06-08/

레트로 픽셀 RPG 모바일 게임 회사 `PIXELFORGE STUDIOS`의 공식 홈페이지입니다.  
React 19와 Vite 6로 제작했고, 포켓몬 1세대 감성의 픽셀 무드와 다크한 프리미엄 랜딩 구조를 결합했습니다.

## 브랜드 설정

- 회사명: `PIXELFORGE STUDIOS`
- 개업일: `2025-12-25`
- 장르: 레트로 픽셀 RPG 모바일 게임
- 대표 게임:
  - `Monster Chronicle`
  - `Dungeon Bits`
  - `Pixel Knights Online`

## 디자인 원칙

- 전체 다크 배경: `#080808`, `#0f0f0f`, `#131313`
- 단일 강조색: `#2563eb`
- 헤딩/배지/라벨: `Mona` 픽셀 폰트
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
3. `Features` - 3종 게임 소개와 CSS 게임 화면 목업
4. `Gallery` - 무한 마키 기반 갤러리
5. `BottomCTA` - 실제 메일 주소로 연결되는 문의 CTA
6. `Footer` - 게임 목록과 연락처

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

- 개발일지: [docs/개발일지.md](/C:/Users/USER/Desktop/restboy2606_FULL/restboy2606/2026-06-08/docs/개발일지.md)
- AI 인계 문서: [CLAUDE.md](/C:/Users/USER/Desktop/restboy2606_FULL/restboy2606/2026-06-08/CLAUDE.md)

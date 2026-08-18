# 우담 (WOO DAM) — 프리미엄 한우 다이닝 공식 홈페이지

서울 강남의 프리미엄 한우 다이닝 브랜드 **우담(WOO DAM)** 의 공식 홈페이지입니다.
Next.js App Router 기반의 정적 싱글 페이지 브랜드 사이트이며, 데이터베이스 없이 **GitHub + Vercel** 만으로 운영·배포합니다.

> ⚠️ 현재 사이트의 **상호 정보 · 메뉴 · 가격 · 주소 · 연락처 · 운영시간 · 예약 링크 · 이미지는 모두 임시 데이터**입니다.
> 실제 오픈 전에 아래 [공개 전 교체 체크리스트](#17-공개-전-교체-체크리스트)를 반드시 확인해 주세요.

---

## 1. 프로젝트 소개

| 항목 | 값 |
| --- | --- |
| 한글 브랜드명 | 우담 |
| 영문 브랜드명 | WOO DAM |
| 업종 | 프리미엄 한우 전문점 / 한우 다이닝 |
| 사이트 제목 | 우담 \| 프리미엄 한우 다이닝 |
| 언어 / 지역 | 한국어 / 대한민국 서울 |
| GitHub 저장소 | `woodam-dining` |
| Vercel 프로젝트 | `woodam-dining` |
| 임시 배포 주소 | `https://woodam-dining.vercel.app` |

디자인 콘셉트는 **"현대적으로 재해석한 한국적 프리미엄"** 입니다.
블랙·차콜 배경 위에 웜 아이보리 텍스트, 황동빛 골드를 포인트로 절제해 사용하고,
헤드라인은 명조(Noto Serif KR), 본문은 산세리프(Noto Sans KR)로 구성했습니다.

---

## 2. 주요 기능

- **싱글 페이지 브랜드 사이트** — 헤더 메뉴 클릭 시 해당 섹션으로 부드럽게 이동
- **섹션 구성** — 히어로 / 브랜드 스토리 / 한우 품질 / 대표 메뉴 / 다이닝 공간 / 예약 안내 / 오시는 길
- **고정 헤더** — 최상단에서는 투명, 스크롤 시 반투명 다크 + 블러 배경으로 전환
- **모바일 메뉴** — 햄버거 토글, 배경 스크롤 잠금, ESC·외부 영역 클릭으로 닫기, 포커스 트랩
- **모바일 하단 고정 CTA** — 히어로를 지나면 `전화하기` / `예약하기` 버튼 노출 (푸터와 겹치지 않도록 하단 여백 확보)
- **다이닝 공간 갤러리** — 데스크톱 비대칭 모자이크 + 가벼운 라이트박스(ESC·←/→ 키 지원)
- **전체 메뉴 토글** — `<details>` 기반이라 JavaScript 없이도 동작
- **주소 복사** — Clipboard API → `execCommand` 순서로 시도하고, 모두 실패하면 직접 복사 안내 노출
- **지도 플레이스홀더** — 독립 컴포넌트로 분리해 추후 네이버/카카오맵 연동만 교체하면 됨
- **접근성** — 시맨틱 HTML, 제목 계층, 키보드 전체 조작, 명확한 포커스 링, WCAG AA 명암 대비, 한국어 대체 텍스트
- **모션** — 스크롤 페이드 인, 히어로 미세 확대, 부드러운 호버. `prefers-reduced-motion` 존중
- **SEO** — 메타데이터, Open Graph, Twitter Card, `robots.ts`, `sitemap.ts`, 음식점 JSON-LD 구조화 데이터

---

## 3. 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router, Turbopack) |
| 언어 | TypeScript 5 (strict) |
| 스타일 | Tailwind CSS v4 (CSS-first `@theme` 토큰) |
| 아이콘 | lucide-react |
| 폰트 | `next/font/google` — Noto Serif KR / Noto Sans KR |
| 이미지 | `next/image` (외부 도메인 최적화) |
| 패키지 매니저 | npm |
| 린트 | ESLint (`eslint-config-next`) |
| 배포 | Vercel |

**사용하지 않는 것**: Supabase, 데이터베이스, 인증/회원가입, 관리자 페이지, API Route, 문의 폼, 지도 API, 환경변수.
별도의 `.env` 파일 없이 그대로 빌드·배포됩니다.

---

## 4. 폴더 구조

```
woodam-dining/
├─ public/
│  ├─ images/           # 실제 매장 사진을 넣을 자리 (현재 비어 있음)
│  └─ og-image.jpg      # 임시 OG 이미지 (1200×630)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx     # 루트 레이아웃 · 폰트 · 메타데이터 · JSON-LD
│  │  ├─ page.tsx       # 메인 싱글 페이지
│  │  ├─ globals.css    # 디자인 토큰 · 공통 스타일 · 모션
│  │  ├─ icon.svg       # favicon (임시 모노그램)
│  │  ├─ robots.ts
│  │  ├─ sitemap.ts
│  │  ├─ privacy/page.tsx
│  │  └─ terms/page.tsx
│  ├─ components/
│  │  ├─ layout/        # Header, Footer, MobileCtaBar, LegalPage
│  │  ├─ sections/      # Hero, BrandStory, Quality, MenuSection, Spaces, SpaceGallery, Reservation, Location
│  │  └─ ui/            # ActionLink, Reveal, SmartImage, SectionHeading, CopyAddressButton, MapPlaceholder, InstagramGlyph
│  ├─ config/
│  │  └─ site.ts        # ★ 브랜드 · 연락처 · 주소 · 운영시간 · 예약/SNS 링크 · SEO
│  ├─ data/
│  │  ├─ images.ts      # ★ 모든 이미지 경로 · 대체 텍스트 · 비율
│  │  ├─ menu.ts        # ★ 메뉴와 가격
│  │  ├─ quality.ts     # 한우 품질 지표
│  │  ├─ story.ts       # 브랜드 스토리
│  │  └─ spaces.ts      # 다이닝 공간 갤러리
│  └─ lib/
│     ├─ cn.ts
│     ├─ jsonld.ts      # 음식점 구조화 데이터
│     └─ useBodyScrollLock.ts
├─ next.config.ts       # 외부 이미지 도메인 · 이미지 품질 설정
└─ package.json
```

★ 표시된 파일만 수정하면 사이트 전체 정보가 바뀝니다.

---

## 5. 로컬 실행 방법

**요구 사항**: Node.js 20.9 이상 (권장 22 LTS 이상), npm

```bash
git clone https://github.com/<본인-계정>/woodam-dining.git
```

```bash
cd woodam-dining
```

## 6. 패키지 설치

```bash
npm install
```

## 7. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 으로 접속합니다.

## 8. 프로덕션 빌드

```bash
npm run build
```

빌드 결과를 로컬에서 확인하려면:

```bash
npm run start
```

검사 명령:

```bash
npx tsc --noEmit
```

```bash
npx eslint .
```

---

## 9. 브랜드 정보 수정 위치

`src/config/site.ts` 한 파일에서 모두 수정합니다.

| 대상 | 수정할 값 |
| --- | --- |
| 브랜드명 · 사이트 제목 · 설명 | `brand` |
| 상호명 · 대표자명 · 사업자등록번호 | `business` |
| 전화번호 (표시용 / `tel:` 링크) | `contact` |
| 주소 · 지하철 · 주차 · 발렛 안내 | `address` |
| 운영시간 · 브레이크 · 라스트 오더 · 휴무일 | `hours` |
| 예약 링크 · 룸 안내 문구 | `reservation` |
| Instagram · 네이버 플레이스 | `social` |
| 지도 링크 · 좌표 | `map` |
| 도메인 · OG 이미지 · 키워드 · 가격대 | `seo` |
| 헤더/푸터 메뉴 항목 | `navItems` |

## 10. 메뉴와 가격 수정

`src/data/menu.ts` 의 `menuItems` 배열을 수정합니다.

```ts
{
  id: "signature-course",
  name: "우담 시그니처 한우 코스",
  nameEn: "Signature Hanwoo Course",
  description: "육회부터 등심, 식사까지 한 흐름으로 잇는 우담의 기준.",
  price: 150000,        // 숫자만 입력 → 화면에는 ₩150,000 으로 표기
  unit: "1인",           // 선택 항목
  signature: true,       // true 인 항목이 대표 메뉴 영역에 노출
  image: images.menuCourse,
}
```

- `price` 는 **숫자**로만 입력합니다. `formatPrice()` 가 `₩150,000` 형태로 변환합니다.
- `signature: true` 인 항목이 상단 대표 메뉴 3종 영역에, `false` 인 항목이 "전체 메뉴 보기" 목록에 표시됩니다.
- 하단 안내 문구는 같은 파일의 `menuNotice` 에서 수정합니다.

## 11. 매장 주소와 연락처 수정

`src/config/site.ts` 의 `address` / `contact` / `hours` 를 수정합니다.

```ts
export const contact = {
  phoneDisplay: "02-1234-5678",   // 화면에 보이는 번호
  phoneHref: "tel:0212345678",    // 링크용 (숫자만, 하이픈 없이)
};
```

전화번호를 바꿀 때는 **`phoneDisplay` 와 `phoneHref` 를 함께** 수정해야 합니다.
푸터, 예약 섹션, 모바일 하단 CTA, JSON-LD가 모두 이 값을 참조합니다.

## 12. 네이버 예약 링크 수정

`src/config/site.ts` 의 `reservation.naverUrl` 을 실제 URL로 교체합니다.

```ts
export const reservation = {
  naverUrl: "https://booking.naver.com/booking/...",
};
```

- 값이 `http` 로 시작하면 자동으로 새 창(`target="_blank"`)으로 열리고, 구조화 데이터의 `acceptsReservations` 에도 반영됩니다.
- 기본값은 `#reservation` (페이지 내 이동)이라 실제 URL 입력 전에도 링크가 깨지지 않습니다.

## 13. 임시 이미지 교체

현재 모든 사진은 **Unsplash의 무료 이미지(별도 출처 표기 불필요)** 를 임시로 사용합니다.

1. 실제 매장 사진을 `public/images/` 에 넣습니다. (예: `public/images/hero.jpg`)
2. `src/data/images.ts` 에서 해당 항목을 수정합니다.

```ts
hero: {
  src: "/images/hero.jpg",   // 외부 URL → 로컬 경로로 변경
  alt: "우담 메인 홀의 저녁 전경",   // 의미 있는 한국어 대체 텍스트
  width: 1920,               // 실제 이미지 가로
  height: 1280,              // 실제 이미지 세로
},
```

3. 모든 이미지를 로컬 파일로 교체했다면 `next.config.ts` 의 `images.remotePatterns` 항목을 삭제해도 됩니다.

> **이미지 최적화 동작 방식**
> 외부(Unsplash) 임시 이미지는 `src/lib/imageLoader.ts` 의 커스텀 로더를 통해 **Unsplash CDN이 직접 리사이즈**합니다.
> 원본이 2~3MB로 커서 서버에서 다시 최적화할 필요가 없고, Vercel 이미지 최적화 사용량도 소모하지 않습니다.
> `src` 를 `/images/...` 로컬 경로로 바꾸면 자동으로 **Next.js 기본 이미지 최적화**를 사용합니다. (`SmartImage` 가 판별)

**권장 사항**

- `width` / `height` 는 **실제 픽셀 크기**를 입력해야 레이아웃 이동(CLS)이 발생하지 않습니다.
- 전체 톤을 **어둡고 따뜻한 색감**으로 통일해 주세요.
- 히어로 이미지는 가로가 긴 고해상도(최소 1920px)를 권장합니다.
- 외부 이미지 로딩이 실패해도 같은 크기의 어두운 플레이스홀더가 자리를 지키므로 레이아웃은 무너지지 않습니다.

## 14. SEO 및 도메인 정보 수정

`src/config/site.ts` 의 `seo` 객체를 수정합니다.

```ts
export const seo = {
  siteUrl: "https://woodam-dining.vercel.app",  // ← 실제 도메인으로 교체
  ogImage: "/og-image.jpg",
  priceRange: "₩₩₩₩",
};
```

- `siteUrl` 하나만 바꾸면 **canonical URL, Open Graph, sitemap.xml, robots.txt, JSON-LD** 가 모두 함께 갱신됩니다.
- OG 이미지는 `public/og-image.jpg` (1200×630) 를 교체합니다.
- favicon 은 `src/app/icon.svg` 를 교체합니다. (필요 시 `src/app/apple-icon.png` 180×180 추가 권장)
- 구조화 데이터는 `src/lib/jsonld.ts` 에 있으며, 값은 모두 `site.ts` / `menu.ts` 를 참조합니다.

---

## 15. GitHub 저장소 생성 및 업로드

이미 초기 커밋이 되어 있다면 원격만 연결하면 됩니다.
처음부터 진행하는 경우:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial premium hanwoo dining website"
```

```bash
git branch -M main
```

원격 저장소를 연결합니다. **아래 URL은 반드시 본인이 GitHub에서 직접 생성한 저장소의 실제 주소로 바꿔야 합니다.**

```bash
git remote add origin https://github.com/<본인-GitHub-계정>/woodam-dining.git
```

```bash
git push -u origin main
```

GitHub CLI(`gh`)를 사용한다면 저장소 생성과 푸시를 한 번에 할 수 있습니다.

```bash
gh repo create woodam-dining --public --source=. --remote=origin --push
```

## 16. Vercel 배포

**웹에서 배포하기**

1. [vercel.com/new](https://vercel.com/new) 접속
2. `woodam-dining` GitHub 저장소를 **Import**
3. 설정 확인 — 값은 모두 기본값 그대로 두면 됩니다.
   - Framework Preset: `Next.js` (자동 인식)
   - Build Command: `next build` (기본값)
   - Output Directory: 기본값
   - Install Command: `npm install`
   - Root Directory: `./`
4. **Project Name 은 `woodam-dining` 으로 지정**
5. **Environment Variables 는 추가하지 않습니다.** (Supabase·DB·지도 API 모두 사용하지 않음)
6. **Deploy** 클릭 → `https://woodam-dining.vercel.app` 로 배포됩니다.

**CLI로 배포하기**

```bash
npx vercel --prod
```

**배포 후 확인 사항**

- [ ] 헤더 메뉴 클릭 시 각 섹션으로 이동하는지
- [ ] 새로고침 후에도 정상 동작하는지
- [ ] 모바일 햄버거 메뉴 열기/닫기
- [ ] 모바일 하단 CTA(전화/예약) 동작
- [ ] 전화 버튼 `tel:` 링크 연결
- [ ] 외부 이미지가 모두 정상 로딩되는지
- [ ] `/robots.txt`, `/sitemap.xml` 접근 가능 여부
- [ ] 카카오톡/슬랙에 링크를 붙여 OG 이미지가 뜨는지

**커스텀 도메인 연결 시**: Vercel > Project > Settings > Domains 에서 도메인을 추가한 뒤,
`src/config/site.ts` 의 `seo.siteUrl` 을 새 도메인으로 반드시 교체하고 다시 배포하세요.

---

## 17. 공개 전 교체 체크리스트

실제 오픈 전에 아래 임시 정보를 모두 실제 정보로 교체해야 합니다.

### 사업자 정보 — `src/config/site.ts`

- [ ] 대표자명 (`business.ceo` — 현재 `홍길동`)
- [ ] 사업자등록번호 (`business.registrationNumber` — 현재 `000-00-00000`)
- [ ] 상호명 (`business.legalName`)

### 매장 정보 — `src/config/site.ts`

- [ ] 실제 주소 (`address.full` 외 — 현재 `서울특별시 강남구 테헤란로 123`)
- [ ] 실제 전화번호 (`contact.phoneDisplay` + `contact.phoneHref` — 현재 `02-1234-5678`)
- [ ] 실제 영업시간 · 브레이크 타임 · 라스트 오더 · 휴무일 (`hours`)
- [ ] 지하철 / 주차 / 발렛 안내 문구 (`address`)
- [ ] 지도 좌표 (`map.latitude`, `map.longitude`)

### 메뉴 — `src/data/menu.ts`

- [ ] 실제 메뉴 구성 (`menuItems`)
- [ ] 실제 가격 (`price`)
- [ ] 메뉴 하단 안내 문구 (`menuNotice`)
- [ ] 한우 품질·등급 문구 검증 (`src/data/quality.ts`) — 확인되지 않은 등급/산지를 단정하지 않도록 주의

### 링크 — `src/config/site.ts`

- [ ] 실제 예약 URL (`reservation.naverUrl` — 현재 `#reservation`)
- [ ] 네이버 플레이스 URL (`social.naverPlace`)
- [ ] Instagram URL (`social.instagram`)
- [ ] 네이버 지도 / 카카오맵 링크 (`map`)

### 이미지 — `src/data/images.ts`, `public/`

- [ ] 실제 매장 이미지 19종 (현재 Unsplash 임시 이미지)
- [ ] favicon (`src/app/icon.svg`)
- [ ] OG 이미지 (`public/og-image.jpg`)

### SEO — `src/config/site.ts`

- [ ] 실제 도메인 (`seo.siteUrl` — 현재 `https://woodam-dining.vercel.app`)
- [ ] 가격대 (`seo.priceRange`)
- [ ] JSON-LD 최종 검토 (`src/lib/jsonld.ts` → [리치 결과 테스트](https://search.google.com/test/rich-results))

### 법적 고지 — `src/app/`

- [ ] 개인정보처리방침 (`src/app/privacy/page.tsx`) — 법무 검토 후 교체
- [ ] 이용약관 (`src/app/terms/page.tsx`) — 법무 검토 후 교체

### 지도 연동 (선택)

- [ ] `src/components/ui/MapPlaceholder.tsx` 내부를 네이버 지도 또는 카카오맵 임베드로 교체

---

## 라이선스 / 이미지 출처

- 코드: 우담(WOO DAM) 전용
- 임시 이미지: [Unsplash](https://unsplash.com/license) (무료 상업적 이용 가능, 출처 표기 불필요) — 실제 매장 사진으로 교체 예정

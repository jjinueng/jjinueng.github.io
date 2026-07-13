"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ExternalLink, Linkedin, Earth, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

type ProjectItem = {
  role: string
  description: string
  image?: string
}

type ProjectDetailSection = {
  title: string
  problem: string
  solutions: string[]
  result: string
}

type BaseProject = {
  id: number
  title: string
  period: string
  periodStart: string
  description: string
  tags: string[]
  platforms?: string[]
  thumbnail?: string
  detailImages?: string[]
  overview?: string
  keywords?: string[]
  detailSections?: ProjectDetailSection[]
  items?: ProjectItem[]
}

type PersonalProject = BaseProject & {
  github?: string
  demo?: string
}

type CompanyProject = BaseProject

type PortfolioProject = PersonalProject | CompanyProject

const personalProjects: PersonalProject[] = [
  {
    id: 1,
    title: "나눠나눠",
    period: "2026.01 - 2026.01",
    periodStart: "2026-01",
    description: "모임별 1차/2차/3차 금액과 참여자를 입력하면 각자 부담액을 계산해주는 정산 서비스입니다.",
    tags: ["Next.js"],
    platforms: ["모바일", "PC"],
    thumbnail: "/projects/nanonano/thumbnail.png",
    detailImages: [
      "/projects/nanonano/detail-01.png",
      "/projects/nanonano/detail-02.png",
      "/projects/nanonano/detail-03.png",
      "/projects/nanonano/detail-04.png",
    ],
    github: "https://github.com/jn-time-capsule/nanonano-frontend",
    demo: "https://jntimecapsule.cloud/nanonano",
    overview:
      "개인 프로젝트 나눠나눠는 모임별로 1차/2차/3차 금액과 참여자를 입력하면 각자 부담액을 계산해주는 정산 서비스입니다. 프론트엔드에서 기본 UI를 구현하고, 사용 흐름에 맞춰 정산/모임/공유/로그인 관련 API를 연동해 기능을 완성했습니다.",
    keywords: [
      "프론트엔드 중심 UI 구현 + API 연동",
      "정산 CRUD(조회/수정/메모) + 정산 완료 처리",
      "모임 관리(목록/삭제) + 계산 결과 저장",
      "공유 링크 기능, 소셜 로그인, 프로필 UI 개선",
    ],
    detailSections: [
      {
        title: "담당 업무 1) 기본 화면/핵심 사용 흐름(UI) 구현",
        problem:
          "사용자가 로그인 여부와 관계없이 정산 계산을 바로 시작할 수 있어야 하고, 로그인 후에는 모임/공유 등 확장 기능을 자연스럽게 이어서 사용할 수 있어야 했습니다.",
        solutions: [
          "서비스의 기본 UI 및 핵심 기능 흐름을 구현했습니다.",
          "새 모임 만들기, 공유 링크 열기, 로그인 등 랜딩 화면에서 주요 CTA가 보이도록 구성했습니다.",
        ],
        result:
          "초기 진입 시 사용자가 기능을 빠르게 이해하고, 로그인 전후 사용 경험이 끊기지 않는 기본 구조를 만들었습니다.",
      },
      {
        title: "담당 업무 2) 정산 데이터 입력/조회/수정 API 연동(정산 UX 완성)",
        problem:
          "정산 서비스는 입력한 데이터를 기반으로 계산이 이루어지므로, 정산 내용이 저장되고 필요 시 조회/수정/메모 기록까지 이어져야 사용성이 확보됩니다.",
        solutions: [
          "정산 내용 조회 API를 연결했습니다.",
          "정산 내용 수정 API를 연결했습니다.",
          "정산 내용 메모 추가 기능을 반영했습니다.",
          "송금/정산완료 API를 연결했습니다.",
        ],
        result:
          "정산이 계산만 되는 기능이 아니라, 기록·관리·완료 처리까지 가능한 사용자 흐름으로 완성되었습니다.",
      },
      {
        title: "담당 업무 3) 계산 결과 저장 및 모임 단위 데이터 관리 API 연동",
        problem:
          "모임 기반 서비스에서는 계산 결과가 누적되고 모임 목록이 관리되어야 재방문 시에도 가치를 제공합니다.",
        solutions: [
          "계산 결과 저장 API를 연결했습니다.",
          "모임 목록 조회 API를 연결했습니다.",
          "모임 삭제 API를 연결했습니다.",
        ],
        result:
          "사용자가 모임 단위로 정산 결과를 관리하고, 불필요한 모임 정리까지 가능한 운영 흐름을 구성했습니다.",
      },
      {
        title: "담당 업무 4) 공유 링크 기능(API 연동)으로 공유/재접근성 강화",
        problem:
          "정산 결과는 참여자들과 공유되는 경우가 많아서, 링크 기반 접근이 가능해야 사용성이 크게 좋아집니다.",
        solutions: ["공유 링크 조회 API를 연결했습니다."],
        result:
          "로그인 후 공유 링크를 통해 모임/정산 정보를 다시 열람할 수 있는 공유 흐름을 만들었습니다.",
      },
      {
        title: "담당 업무 5) 소셜 로그인 및 프로필 UX 개선",
        problem:
          "개인 서비스는 가입 장벽이 높으면 이탈이 커서, 로그인 경험이 간단해야 했습니다.",
        solutions: [
          "소셜 로그인 API를 연결했습니다.",
          "구글 프로필 사진 추가로 사용자 식별 UI를 개선했습니다.",
        ],
        result:
          "로그인 진입 장벽을 낮추고, 로그인 상태에서 사용자 정보가 자연스럽게 보이도록 경험을 개선했습니다.",
      },
      {
        title: "품질/마무리) 배포 경로 및 문서 정리",
        problem:
          "개발 결과를 실제 사용 가능한 형태로 배포하고, 이후에도 참고 가능한 문서화가 필요했습니다.",
        solutions: [
          "서비스 경로를 /nananonano로 변경해 배포 URL을 정리했습니다.",
          "프로젝트 README 작성을 진행했습니다.",
          "개인 프로젝트 생성 및 작업 단위 정리를 진행했습니다.",
        ],
        result:
          "개발 결과를 배포/공유 가능한 형태로 정리하고, 문서로 맥락을 남길 수 있게 했습니다.",
      },
    ],
  },
  {
    id: 2,
    title: "도쿠도쿠(Dokudoku)",
    period: "2026.02 - 2026.03",
    periodStart: "2026-02",
    description:
      "도서 검색부터 읽기 상태 관리, 컬렉션, 문장 저장, 마이페이지 통계까지 한 곳에서 관리하는 반응형 독서 기록 웹 서비스입니다.",
    tags: ["Next.js"],
    platforms: ["모바일", "PC"],
    github: "https://github.com/jn-time-capsule/dokudoku-frontend",
    demo: "https://jntimecapsule.cloud/dokudoku",
    thumbnail: "/projects/dokudoku/thumbnail.png",
    detailImages: [
      "/projects/dokudoku/detail-01.png",
      "/projects/dokudoku/detail-02.png",
      "/projects/dokudoku/detail-03.png",
      "/projects/dokudoku/detail-04.png",
    ],
    overview:
      "개인 프로젝트 도쿠도쿠(Dokudoku)는 도서 검색부터 읽기 상태 관리(위시/읽는 중/완독), 컬렉션, 인상 깊은 문장(Quote) 저장, 마이페이지 통계까지 한 곳에서 관리할 수 있는 반응형 독서 기록 웹 서비스입니다. 프론트엔드에서 UI 구현을 중심으로 화면 흐름을 구성하고, 로그인/홈/책/팔로우/캘린더 등 주요 기능을 API 연동 기반으로 구현했습니다.",
    keywords: [
      "프론트엔드 중심 UI 구현 + API 연동",
      "비회원 검색 + 로그인 후 확장 기능 흐름",
      "책/서재 기록 관리(상태/진행률/평점/리뷰)",
      "팔로우/캘린더 확장 기능 연동",
      "QA, README, 인프라 포트 정리",
    ],
    detailSections: [
      {
        title: "담당 업무 1) 비회원 도서 검색 + 로그인 후 확장 기능 흐름 설계(UI)",
        problem:
          "독서 서비스는 사용자가 써볼까를 결정하는 구간이 중요해서, 로그인 없이도 도서 검색을 먼저 제공하고 로그인 이후에는 저장/조회 기능으로 자연스럽게 확장되어야 했습니다.",
        solutions: [
          "비회원도 도서 검색을 사용할 수 있는 사용 흐름을 구성했습니다.",
          "로그인 시 내 서재/문장/컬렉션 저장 및 조회가 가능하도록 서비스 기능을 분리해 설계했습니다.",
        ],
        result:
          "진입 장벽을 낮추면서도 로그인 이후에는 개인화 데이터 관리까지 이어지는 제품 구조를 만들었습니다.",
      },
      {
        title: "담당 업무 2) 소셜 로그인 연동 및 사용자 기반 기능 활성화",
        problem:
          "개인화 기능(서재/문장/컬렉션)은 인증이 필요하므로, 로그인 경험이 복잡하면 이탈이 커질 수 있었습니다.",
        solutions: ["소셜 로그인 API 연결을 통해 인증 흐름을 구현했습니다."],
        result:
          "로그인 이후 개인 데이터 저장/조회 기능을 안정적으로 제공할 수 있는 기반을 마련했습니다.",
      },
      {
        title: "담당 업무 3) 홈 화면 데이터 연동(초기 경험 강화)",
        problem:
          "홈은 서비스의 첫 인상이자 기능 탐색의 시작점이어서, 추천/최근 활동 등 사용자 컨텍스트를 보여줄 수 있도록 데이터 연동이 필요했습니다.",
        solutions: ["홈화면 API 연결을 통해 홈 화면에 필요한 데이터를 연동했습니다."],
        result:
          "서비스 진입 시점에 사용자에게 필요한 정보가 보이도록 홈 경험을 강화했습니다.",
      },
      {
        title: "담당 업무 4) 책(서재) 중심 기능 API 연동으로 기록/관리 기능 구현",
        problem:
          "도쿠도쿠의 핵심은 책을 내 서재에 추가하고 상태/진행률/평점/리뷰를 기록하며 관리하는 것이므로, 책 관련 CRUD와 상태 전이가 자연스럽게 동작해야 했습니다.",
        solutions: [
          "책 관련 API 연결을 통해 내 서재/책 데이터 저장 및 조회 흐름을 구현했습니다.",
          "읽기 상태 관리(위시리스트/읽는 중/완독), 진행률/평점/리뷰 기록 흐름을 UI 관점에서 정리했습니다.",
        ],
        result:
          "도서 검색 이후 기록이 쌓이는 서비스로 이어지는 핵심 기능 사용성을 확보했습니다.",
      },
      {
        title: "담당 업무 5) 팔로우/캘린더 등 확장 기능 연동",
        problem:
          "독서 기록 서비스는 개인 기록뿐 아니라 사용자 활동 확장(팔로우)이나 일정 기반 정리(캘린더)가 붙으면 유지 동기가 강화될 수 있었습니다.",
        solutions: ["팔로우 API 연결을 수행했습니다.", "캘린더 API 연결을 수행했습니다."],
        result:
          "기록 중심 서비스에서 확장 기능으로 자연스럽게 확장 가능한 구조를 갖췄습니다.",
      },
      {
        title: "품질/운영) QA, 문서, 인프라(포트) 정리",
        problem:
          "기능 구현 이후 공개 가능한 서비스 품질을 확보하려면 QA, 문서화, 운영 설정 정리가 필요했습니다.",
        solutions: [
          "기능 안정화를 위한 QA를 진행했습니다.",
          "프로젝트 공유/협업을 위한 리드미 작성을 진행했습니다.",
          "서비스 운영을 위한 3002 포트 추가 작업을 반영했습니다.",
        ],
        result:
          "개발뿐 아니라 배포/운영/문서화까지 포함해, 개인 프로젝트를 공개 가능한 서비스 형태로 정리했습니다.",
      },
    ],
  },
  {
    id: 3,
    title: "간헐적 단식 타이머",
    period: "2026.04 - 2026.04",
    periodStart: "2026-04",
    description:
      "16:8, 18:6 등 단식 모드를 선택해 단식·식사 사이클을 추적하는 앱인토스 미니앱입니다. 단계 완료 시 햅틱 피드백과 알림을 제공합니다.",
    tags: ["React", "TypeScript", "Apps In Toss"],
    platforms: ["모바일"],
    github: "https://github.com/jjinueng/fasting-timer",
    demo: "https://minion.toss.im/zqv7zx6b",
    thumbnail: "/projects/fasting-timer/thumbnail.png",
    detailImages: [
      "/projects/fasting-timer/detail-01.png",
      "/projects/fasting-timer/detail-02.png",
    ],
    overview:
      "개인 프로젝트 간헐적 단식 타이머는 16:8, 18:6, 20:4, 23:1 단식 모드를 선택해 단식과 식사 사이클을 연속으로 추적하는 앱인토스 미니앱입니다. 원형 프로그레스 타이머로 남은 시간을 시각화하고, 단계 전환 시 햅틱 피드백·인앱 알림·브라우저 Web Notification을 제공합니다. 앱을 닫아도 타이머가 유지되며, 앱인토스 배너 광고를 연동했습니다.",
    keywords: [
      "단식·식사 사이클 자동 전환 타이머",
      "원형 프로그레스 + 남은 시간 시각화",
      "단계 완료 알림(햅틱·인앱 오버레이·Web Notification)",
      "localStorage 기반 앱 종료 후 상태 복원",
      "앱인토스 배너 광고(TossAds) 연동",
    ],
    detailSections: [
      {
        title: "담당 업무 1) 단식·식사 사이클 타이머 구현",
        problem:
          "단식 앱은 단식 시간과 식사 시간이 연속으로 이어져야 하므로, 단계가 끝나면 다음 단계로 자동 전환되고 중간에 앱을 닫아도 타이머가 이어져야 했습니다.",
        solutions: [
          "16:8, 18:6, 20:4, 23:1 프리셋 모드를 선택해 단식·식사 사이클이 자동 전환되는 타이머를 구현했습니다.",
          "localStorage에 시작 타임스탬프와 단계 정보를 저장해, 앱 재진입 시 경과 시간을 계산하여 타이머를 복원했습니다.",
        ],
        result:
          "앱을 닫았다가 다시 열어도 타이머가 정확하게 이어지는 사용성을 확보했습니다.",
      },
      {
        title: "담당 업무 2) 단계 완료 알림(햅틱·인앱 오버레이·Web Notification) 구현",
        problem:
          "타이머가 끝났을 때 사용자가 앱을 보고 있지 않을 수 있어서, 다양한 방식으로 완료 시점을 알려야 했습니다.",
        solutions: [
          "앱인토스 web-bridge의 generateHapticFeedback API로 단계 완료 시 햅틱 진동을 발생시켰습니다.",
          "화면 중앙에 인앱 오버레이 카드를 표시해 단식 완료/식사 종료 메시지를 전달했습니다.",
          "브라우저 Web Notification API를 연동해 백그라운드에서도 시스템 알림이 전송되도록 했습니다.",
        ],
        result:
          "앱 화면 안팎에서 단계 전환을 놓치지 않도록 세 가지 알림 수단을 제공했습니다.",
      },
      {
        title: "담당 업무 3) 앱인토스 배너 광고(TossAds) 연동 및 앱 패키징",
        problem:
          "앱인토스 미니앱으로 배포하려면 TossAds 광고 연동과 ait 빌드 패키징이 필요했습니다.",
        solutions: [
          "TossAds.initialize와 TossAds.attachBanner로 하단 배너 광고를 연동했습니다.",
          "ait build 명령으로 웹 번들과 React Native 번들(0.84.0/0.72.6)을 포함한 .ait 파일을 생성해 배포했습니다.",
        ],
        result:
          "앱인토스 플랫폼에 배포 가능한 형태로 패키징을 완료했습니다.",
      },
    ],
  },
  {
    id: 4,
    title: "데이트 코스 AI추천",
    period: "2026.05 - 현재",
    periodStart: "2026-05",
    description:
      "AI가 취향·시간·분위기를 반영해 데이트 코스를 추천하고, 지도에서 장소를 교체·공유할 수 있는 앱인토스 미니앱입니다.",
    tags: ["React", "TypeScript", "Apps In Toss", "Naver Maps"],
    platforms: ["모바일"],
    github: "https://github.com/jn-time-capsule/here-and-now-apps-in-toss-frontend",
    demo: "https://minion.toss.im/9XRbm5ed",
    thumbnail: "/projects/here-and-now/thumbnail.png",
    detailImages: [
      "/projects/here-and-now/detail-01.png",
      "/projects/here-and-now/detail-02.png",
      "/projects/here-and-now/detail-03.png",
      "/projects/here-and-now/detail-04.png",
    ],
    overview:
      "데이트 코스 AI추천은 취향·시간·그날의 분위기를 반영해 AI가 데이트 코스를 추천하고, 다녀온 곳을 인터랙티브 지도에 기록으로 남기는 앱인토스 미니앱입니다. 프론트엔드로 참여해 AI 추천 코스 결과 화면(네이버 지도·리스트 뷰), 장소 교체 인터랙션, 인기 공유 코스 랜덤 추천, 코스 공유/공유받기, 오류 안내 토스트와 공지사항 패널까지 핵심 사용 흐름을 구현했습니다. 설치 없이 토스에서 바로 실행되는 미니앱으로 MVP를 빠르게 검증하고, 출시 후 3차 디자인 QA를 반영하며 완성도를 높였습니다.",
    keywords: [
      "AI 데이트 코스 추천 미니앱 (앱인토스)",
      "네이버 지도 커스텀 핀·경로·딤 오버레이",
      "장소 교체 인터랙션(핀↔︎카드 동기화)",
      "인기 공유 코스 랜덤 추천 API 연동",
      "코스 공유 딥링크 + 공유받기 화면",
      "실패 안내 토스트 4종 · 원격 공지 패널",
    ],
    detailSections: [
      {
        title: "담당 업무 1) AI 추천 코스 결과 화면(지도·리스트 뷰) 구현",
        problem:
          "AI가 추천한 코스를 사용자가 한눈에 파악하고, 지도와 목록을 오가며 동선·장소 정보를 확인할 수 있어야 했습니다.",
        solutions: [
          "네이버 지도에 커스텀 핀과 경로 폴리라인을 렌더링해 코스 전체 동선을 시각화했습니다.",
          "지도뷰/리스트뷰 세그먼트와 드래그 가능한 바텀시트로 코스를 탐색하도록 구현했습니다.",
        ],
        result:
          "코스 전체 동선과 장소별 정보를 지도·목록 양쪽에서 자연스럽게 확인하는 흐름을 완성했습니다.",
      },
      {
        title: "담당 업무 2) 장소 교체(대안 추천) 인터랙션 구현",
        problem:
          "추천 장소가 마음에 들지 않을 때, 지도에서 바로 다른 후보로 교체할 수 있어야 했습니다.",
        solutions: [
          "장소 교체 시 지도에 딤과 대안 핀(활성/비활성)을 표시하고, 핀을 누르면 하단 후보 카드가 해당 장소로 슬라이드되도록 캐러셀을 controlled 구조로 구현했습니다.",
          "고정 후보 풀에서 현재 코스에 담긴 장소를 제외한 3개만 노출되도록 처리했습니다.",
        ],
        result:
          "지도 핀과 후보 카드가 동기화되어, 원하는 장소로 즉시 교체하는 경험을 제공했습니다.",
      },
      {
        title: "담당 업무 3) 인기 공유 코스 랜덤 추천 기능 구현",
        problem:
          "조건 입력이 번거로운 사용자를 위해, 입력 없이도 코스를 받아볼 수 있는 진입점이 필요했습니다.",
        solutions: [
          "'랜덤 코스보기' 버튼과 확인 바텀시트를 추가하고, 공유 수 상위 코스를 랜덤으로 불러오는 API를 연동했습니다.",
          "결과 화면의 '재실행'으로 다른 인기 코스를 다시 추첨하도록 구성하고, 랜덤 결과가 입력 조건에 스며들지 않도록 상태를 분리했습니다.",
        ],
        result:
          "조건 입력 없이도 검증된 인기 코스를 바로 추천받는 대안 흐름을 제공했습니다.",
      },
      {
        title: "담당 업무 4) 코스 공유 및 공유받기 화면 구현",
        problem:
          "만든 코스를 친구에게 공유하고, 링크로 받은 사람도 코스를 확인할 수 있어야 했습니다.",
        solutions: [
          "공유 토큰 발급 API와 토스 공유 딥링크를 연동했습니다.",
          "코스 썸네일과 장소 스테퍼로 구성된 공유/공유받기 화면을 구현했습니다.",
        ],
        result:
          "코스 제작 → 공유 → 재확인으로 이어지는 바이럴 흐름을 완성했습니다.",
      },
      {
        title: "담당 업무 5) 오류/예외 안내 UX(스팟 실패 토스트·공지사항) 정비",
        problem:
          "일부 장소를 못 찾거나 전체 실패하는 상황을 매끄럽게 안내해야 했고, 업데이트 소식도 앱 안에서 전달할 수 있어야 했습니다.",
        solutions: [
          "실패 유형(부분/다수/전체/폴백)별 커스텀 토스트 4종을 제작해 코스 결과·생성 실패 시점에 연결했습니다.",
          "원격 JSON을 불러와 최신순으로 노출하는 공지사항 사이드 패널을 구현했습니다.",
        ],
        result:
          "실패 상황에서도 백엔드 원문 노출 없이 친근한 안내를 제공하고, 공지를 코드 배포 없이 갱신할 수 있게 했습니다.",
      },
      {
        title: "담당 업무 6) 입력 UX 개선 및 디자인 QA 반영",
        problem:
          "출시 후 시안과 빌드 사이의 미세한 간극과 입력 편의성 이슈가 드러났습니다.",
        solutions: [
          "시작 시각 현재 시각 자동 표기, 종료 시각 +1시간 기본값·드롭다운 스크롤 시작점을 반영했습니다.",
          "스팟 선택사항 표기, 전역 스크롤 차단, 툴팁·화살표 정비 등 3차에 걸친 디자인 QA를 적용했습니다.",
        ],
        result:
          "세부 사용성과 시안 일치도를 높여 출시 이후에도 품질을 지속적으로 끌어올렸습니다.",
      },
    ],
  },
]

const companyProjects: CompanyProject[] = [
  {
    id: 1,
    title: "DiTAP JS",
    period: "2025.01 - 2025.04",
    periodStart: "2025-01",
    description: "2D/3D 지도 뷰어의 사용성과 분석 기능을 강화하기 위한 UI/기능 개선, 품질 정비를 수행했습니다.",
    tags: ["JavaScript"],
    platforms: ["PC"],
    thumbnail: "/projects/ditap-js/thumbnail.png",
    detailImages: [
      "/projects/ditap-js/detail-01.png",
      "/projects/ditap-js/detail-02.png",
      "/projects/ditap-js/detail-03.png",
      "/projects/ditap-js/detail-04.png",
    ],
    overview:
      "DiTAP JS 개선작업에서 2D/3D 지도 뷰어의 사용성과 분석 기능을 강화하기 위해 UI/기능 개선, 신규 기능 개발, 퍼블리싱 정비, 테스트/문서화 작업을 수행했습니다. 주요 작업은 스타일 패널(포인트/라인/폴리곤) 개선, 일조권/일조량 분석 고도화, 침수 시뮬레이션 개선, 가로등 설치 시뮬레이션, 2D/3D 모드 전환, 각도/고도 측정 기능, 나침반 위젯 개선, 모델 업로드 가시화, 퍼블리싱 가이드/네이밍 규칙 적용, 추가 기능 테스트 및 매뉴얼 작성, API 주석 및 샌드캐슬 오류 수정입니다.",
    keywords: [
      "지도/3D 뷰어 UX 개선",
      "스타일 패널(포인트/라인/폴리곤)",
      "2D/3D 전환, 측정 도구, 나침반",
      "일조권·일조량 분석 및 차트/재생",
      "침수·가로등 시뮬레이션",
      "퍼블리싱 가이드/네이밍 규칙/테스트/매뉴얼/API 정비",
    ],
    detailSections: [
      {
        title: "담당 업무 1) 스타일 편집 UI(포인트/라인/폴리곤 패널) 개선",
        problem:
          "지도 편집/표현 기능에서 스타일 설정 UI가 직관적이지 않거나 조작 흐름이 불편하면, 사용자 작업 시간이 길어지고 오류가 발생하기 쉬웠습니다.",
        solutions: [
          "포인트 스타일 패널 개선을 수행했습니다.",
          "라인 스타일 패널 개선을 수행했습니다.",
          "폴리곤 스타일 패널 개선을 수행했습니다.",
        ],
        result:
          "사용자가 도형 스타일을 더 빠르고 일관되게 조정할 수 있는 편집 UX를 확보했습니다.",
      },
      {
        title: "담당 업무 2) 일조권/일조량 분석 기능 개발 및 고도화",
        problem:
          "분석 기능은 결과를 보여주는 것뿐 아니라, 사용자가 해석 가능한 형태(차트/재생/옵션)로 확인할 수 있어야 했습니다.",
        solutions: [
          "일조권 분석을 개발/개선했습니다.",
          "일조량 분석을 개발했습니다.",
          "일조량 분석 결과 차트를 추가해 결과 가시화를 강화했습니다.",
          "일조권 애니메이션 생성 유무 파라미터를 추가해 실행 옵션을 확장했습니다.",
          "일조권 재생 기능을 추가해 사용자 인터랙션을 개선했습니다.",
        ],
        result:
          "일조 분석을 계산 결과 중심에서 사용자 해석/검토가 가능한 분석 도구로 확장했습니다.",
      },
      {
        title: "담당 업무 3) 시뮬레이션 기능(침수/가로등) 개선",
        problem:
          "시뮬레이션 기능은 시각화 정확도와 함께, 사용자가 영역을 정의하고 결과를 확인하는 전체 플로우가 중요했습니다.",
        solutions: [
          "침수 시뮬레이션 기능을 개선해 뷰어 적용, 영역 설정, 피해 건물 분석 흐름을 반영했습니다.",
          "가로등 설치 시뮬레이션을 개발하고 야간 광원 효과, 타임라인 슬라이더 등 기능 보완을 반영했습니다.",
        ],
        result:
          "현실 시나리오 기반으로 검토 가능한 시뮬레이션 기능 품질을 높였습니다.",
      },
      {
        title: "담당 업무 4) 뷰어 공통 기능(2D/3D 전환, 측정 도구, 나침반) 개발/개선",
        problem:
          "지도 뷰어에서 공통 도구의 완성도는 사용자 만족도와 직결되며, 좌표계/표시 정책 같은 세부 설정이 실제 업무에서 자주 문제가 됐습니다.",
        solutions: [
          "2D/3D 지도 모드 전환 기능을 개발했습니다.",
          "각도 측정 기능을 개발했습니다.",
          "고도 측정 추가 정보 표기를 반영했습니다.",
          "고도 측정 좌표계 설정 기능 및 좌표 소수점 절삭을 적용했습니다.",
          "고도 측정 좌표계 표시를 추가했습니다.",
          "나침반 위젯을 개발하고 클릭 시 정북방향 회전 등 나침반 기능 개선을 수행했습니다.",
        ],
        result:
          "측정/전환/방향 같은 기본 도구들의 사용 흐름을 정리해, 뷰어 전반의 사용성과 신뢰도를 높였습니다.",
      },
      {
        title: "담당 업무 5) 3D 자산/데이터 활용 기능(모델 업로드 가시화) 개발",
        problem:
          "3D 뷰어에서는 외부 모델을 업로드하고 즉시 확인할 수 있는 기능이 요구되며, 실제 사용 사례에 맞는 가시화 플로우가 필요했습니다.",
        solutions: ["모델 업로드 가시화 기능을 개발했습니다."],
        result:
          "사용자가 모델을 업로드하고 결과를 즉시 확인할 수 있는 3D 활용 기반을 마련했습니다.",
      },
      {
        title: "담당 업무 6) 퍼블리싱/코드 정비 및 품질 확보(테스트/문서/API 주석/샌드캐슬)",
        problem:
          "기능이 늘어날수록 UI 일관성과 유지보수성이 떨어지기 쉬우며, 릴리즈를 위해서는 테스트와 문서화가 필수였습니다.",
        solutions: [
          "디자인 변경에 따른 JS 레이아웃 수정을 수행했습니다.",
          "JS 태그 네이밍 규칙 적용으로 코드 일관성을 맞췄습니다.",
          "퍼블리싱 가이드 문서 작성을 통해 협업 기준을 정리했습니다.",
          "추가 기능 테스트를 수행했습니다.",
          "매뉴얼 작성을 진행했습니다.",
          "API 주석 및 샌드캐슬 오류 수정으로 개발/테스트 환경 품질을 개선했습니다.",
        ],
        result:
          "기능 개발뿐 아니라 퍼블리싱 표준화, 테스트, 문서화를 함께 수행해 배포/운영 관점의 완성도를 높였습니다.",
      },
    ],
  },
  {
    id: 2,
    title: "농식품 팜맵 서비스",
    period: "2025.05 - 2026.07",
    periodStart: "2025-05",
    description: "운영/사용자 기능 확장과 모바일·웹 공통 기능 안정화를 위한 개발과 품질 정비를 수행했습니다.",
    tags: ["Java", "JSP", "Oracle", "PostgreSQL"],
    platforms: ["PC"],
    thumbnail: "/projects/farmmap-service/thumbnail.png",
    detailImages: [
      "/projects/farmmap-service/detail-01.png",
      "/projects/farmmap-service/detail-02.png",
      "/projects/farmmap-service/detail-03.png",
      "/projects/farmmap-service/detail-04.png",
    ],
    overview:
      "농식품 팜맵 서비스에서 운영/사용자 기능을 확장하고, 모바일·웹 공통 기능을 안정화하기 위해 팜맵 기능 개발/개선, 연계 기능, 하이브리드 맵 조회, 시계열 비교, 통합이력/인덱스맵, 매뉴얼/시스템 진단 관련 작업을 수행했습니다.",
    keywords: [
      "모바일 기능: 메모 등록, 수시개선 요청/조회",
      "지도 서비스 확장: 하이브리드 맵 조회, 연계 정보",
      "분석/비교: 팜맵 비교(복합조건)",
      "지도 UX: 지적 범례, 다필지",
      "운영 기능: 통합이력, 인덱스맵",
      "시스템진단, 매뉴얼, 배포 준비",
    ],
    detailSections: [
      {
        title: "담당 업무 1) 모바일 기반 현장 피드백 기능(메모/수시개선) 구현",
        problem:
          "현장 사용자는 이동 중에도 팜맵과 관련된 의견/이슈를 남기고 개선 요청을 전달할 수 있어야 했고, 운영자는 등록된 내용의 조회와 관리가 필요했습니다.",
        solutions: [
          "모바일에서 팜맵 메모 등록 기능을 구현했습니다.",
          "모바일에서 팜맵 수시 개선 요청 기능을 구현했습니다.",
          "운영/관리 측면에서 팜맵 수시 개선 조회 기능을 구현했습니다.",
        ],
        result:
          "현장(모바일)에서의 입력과 운영(조회/관리) 흐름을 연결해, 개선 요구가 서비스 내에서 누적·추적될 수 있는 기반을 마련했습니다.",
      },
      {
        title: "담당 업무 2) 외부/내부 데이터 연계 및 하이브리드 맵 조회 기능 제공",
        problem:
          "팜맵은 단일 레이어만으로는 활용성이 떨어지며, 연계 정보와 다양한 배경지도 표시 방식이 필요했습니다.",
        solutions: [
          "팜맵 연계 정보 기능을 구현해 연동되는 정보를 서비스에서 확인할 수 있게 했습니다.",
          "하이브리드 맵 조회 기능을 구현해 위성/혼합 배경 기반의 조회를 지원했습니다.",
        ],
        result:
          "팜맵의 조회 경험을 확장하고, 외부/연계 정보를 서비스 화면에서 활용할 수 있는 구조를 강화했습니다.",
      },
      {
        title: "담당 업무 3) 시계열/비교 기능 고도화(복합조건)",
        problem:
          "팜맵 데이터는 시점별 변화 비교가 중요한데, 단순 비교만으로는 현업 사용자의 다양한 조건(복합조건)을 충족하기 어려웠습니다.",
        solutions: ["팜맵 비교(복합조건) 기능을 구현했습니다."],
        result:
          "사용자가 조건을 조합해 시계열 데이터를 비교할 수 있게 하여, 데이터 해석과 의사결정을 돕는 기능을 제공했습니다.",
      },
      {
        title: "담당 업무 4) 지도 표현 요소 강화(범례/다필지 등)",
        problem:
          "지도 서비스에서는 레이어/지적 정보의 의미가 명확히 전달되어야 하며, 필지 단위 활용 시 단일 필지 중심 UX만으로는 한계가 있었습니다.",
        solutions: [
          "지적 범례 추가로 지도 정보의 가독성과 이해도를 개선했습니다.",
          "다필지 기능(추가)을 구현해 필지 활용 범위를 확장했습니다.",
        ],
        result:
          "지도 해석에 필요한 정보(범례)를 강화하고, 필지 단위 활용 기능을 확장했습니다.",
      },
      {
        title: "담당 업무 5) 통합이력/인덱스맵 기반 운영 기능 정리",
        problem:
          "데이터가 누적될수록 변경 이력과 접근 경로가 복잡해지며, 운영 관점에서는 무엇이 언제 어떻게 바뀌었는지 빠르게 확인할 수 있어야 했습니다.",
        solutions: [
          "통합 이력 관련 작업을 수행했습니다.",
          "통합 이력 인덱스맵 관련 작업을 수행했습니다.",
        ],
        result:
          "이력 기반의 조회/관리 흐름을 정리해 운영 편의성을 높일 수 있는 토대를 마련했습니다.",
      },
      {
        title: "품질/운영) 시스템 진단, 매뉴얼, 배포(준공) 관점 정리",
        problem:
          "기능 제공과 함께 운영/배포를 위한 시스템 진단, 문서화, 데이터 반영 절차 정리가 필요했습니다.",
        solutions: [
          "시스템진단 관련 작업을 수행했습니다.",
          "매뉴얼 작성 작업에 참여했습니다.",
          "신규 DB/테이블 정리, 업로드 경로/권한별 메뉴/테스트 담당자 정리, 실서버 DB 업로드(DDL/INSERT/레이어·스타일 반영), dev 브랜치 데이터 업로드 및 테스트, 최종 테스트/배포 일정 등 운영 절차를 정리했습니다.",
        ],
        result:
          "기능 개발뿐 아니라 운영/배포를 위한 점검과 문서화를 함께 수행해 서비스 안정화에 기여했습니다.",
      },
    ],
  },
  {
    id: 3,
    title: "포항 AI 인파 플랫폼",
    period: "2024.08 - 2024.12",
    periodStart: "2024-08",
    description: "지도 기반 모니터링 기능부터 운영/분석 기능, 테스트 및 문서화까지 전반을 담당했습니다.",
    tags: ["Spring", "Next.js", "TypeScript", "PostgreSQL"],
    platforms: ["PC"],
    thumbnail: "/projects/pohang-ai-crowd/thumbnail.png",
    detailImages: [
      "/projects/pohang-ai-crowd/detail-01.png",
      "/projects/pohang-ai-crowd/detail-02.png",
      "/projects/pohang-ai-crowd/detail-03.png",
      "/projects/pohang-ai-crowd/detail-04.png",
    ],
    overview:
      "포항 인파 분석 플랫폼에서 관제/관리자 업무를 지원하는 지도 기반 모니터링 웹 기능을 개발했습니다. 주요 범위는 레이어 패널 및 시설물(센서/CCTV) 관리, CCTV 영상 표출, 장소 검색(상가/행정망 주소), 사각지대 분석, 공지사항/게시판, 테스트/문서화까지 포함했습니다.",
    keywords: [
      "지도 기반 모니터링 UI",
      "레이어/시설물 패널",
      "장소검색(상가/주소)",
      "CCTV/센서 관리 및 영상 표출",
      "사각지대 분석",
      "테스트 데이터/이슈 대응/문서화",
    ],
    detailSections: [
      {
        title: "담당 업무 1) 지도 기반 모니터링 UI(레이어 패널) 개발",
        problem:
          "운영자가 다양한 관제 정보를 보기 위해서는 지도 위 레이어를 빠르게 켜고 끄고, 상황에 맞는 정보(레이어/시설물)를 일관된 방식으로 탐색할 수 있어야 했습니다.",
        solutions: [
          "레이어 패널(레이어) 기능을 개발해 지도에서 레이어를 체계적으로 관리할 수 있게 했습니다.",
          "레이어 패널(시설물) 기능을 개발해 시설물(센서/CCTV)과 연동되는 구성으로 확장했습니다.",
        ],
        result:
          "운영자가 지도 화면에서 필요한 정보를 패널 중심으로 빠르게 탐색할 수 있는 사용 흐름을 확보했습니다.",
      },
      {
        title: "담당 업무 2) 장소검색 기능(상가/행정망 주소) 구현",
        problem:
          "관제/운영 환경에서는 대상 위치를 신속히 찾아야 하며, 상가 검색과 행정망 주소 검색 등 다양한 요구가 존재했습니다.",
        solutions: [
          "상가 검색 기능을 구현해 운영자가 관심 지점을 빠르게 찾을 수 있게 했습니다.",
          "행정망 주소 검색 기능을 구현해 주소 기반 탐색을 지원했습니다.",
        ],
        result:
          "운영자가 텍스트 입력만으로 지도를 원하는 위치로 이동시키는 업무 효율적인 탐색 기능을 제공했습니다.",
      },
      {
        title: "담당 업무 3) 시설물 관리(센서/CCTV) 및 CCTV 영상 표출",
        problem:
          "현장 운영에서는 시설물 정보 관리와 함께, 관제 화면에서 CCTV 영상을 확인하는 기능이 필수였습니다.",
        solutions: [
          "CCTV 관리 기능을 개발해 시설물 운영 정보를 체계적으로 관리할 수 있게 했습니다.",
          "센서 관리 기능을 개발해 센서 자산과 운영 정보를 관리할 수 있게 했습니다.",
          "CCTV 영상 표출 기능을 개발해 관제 화면에서 영상 확인이 가능하도록 구성했습니다.",
        ],
        result:
          "시설물 데이터 관리부터 영상 확인까지 이어지는 운영자 중심의 관제 흐름을 구현했습니다.",
      },
      {
        title: "담당 업무 4) 분석 기능(사각지대 분석) 개발",
        problem:
          "플랫폼 관점에서 인파/관제 데이터를 보여주는 것에서 그치지 않고, 운영 의사결정을 돕는 분석 기능이 필요했습니다.",
        solutions: ["사각지대 분석 기능을 개발해 운영자가 취약 지점을 파악할 수 있게 했습니다."],
        result: "단순 조회가 아닌 분석 기반의 운영 지원 기능을 제공했습니다.",
      },
      {
        title: "담당 업무 5) 운영 기능(공지사항/게시판) 개발",
        problem:
          "운영자 조직 내 공지 전달과 커뮤니케이션을 위해 기본적인 콘텐츠 관리 기능이 필요했습니다.",
        solutions: ["공지사항 기능을 개발했습니다.", "게시판 기능을 개발했습니다."],
        result:
          "플랫폼 내에서 운영 공지와 커뮤니케이션이 가능한 기본 운영 체계를 구성했습니다.",
      },
      {
        title: "품질/산출물) 테스트 데이터, 이슈 수정, 문서화",
        problem:
          "기능 개발 이후 안정적인 배포와 인수를 위해 테스트, 데이터 준비, 문서화가 함께 필요했습니다.",
        solutions: [
          "개발 및 검증을 위한 더미 데이터 생성을 수행했습니다.",
          "이슈 수정 및 테스트를 통해 기능 안정화를 진행했습니다.",
          "메뉴얼 및 테스트 문서, 추가 문서를 작성해 인수/운영 관점의 산출물을 정리했습니다.",
          "필요 데이터 기반 마련을 위해 도로 데이터 추출 작업을 수행했습니다.",
        ],
        result:
          "개발뿐 아니라 테스트/문서화까지 포함해 배포 및 인수에 필요한 준비 작업을 함께 마무리했습니다.",
      },
    ],
  },
  {
    id: 4,
    title: "Digital Garam+ (K-Water)",
    period: "2026.06 - 2026.07",
    periodStart: "2026-06",
    description:
      "K-Water 디지털 가람+ JSP 기반 3D GIS 플랫폼을 Next.js로 이식하며, 지도·분석·기상·저장소 등 핵심 프론트엔드 기능을 구현했습니다.",
    tags: ["Next.js", "TypeScript", "Cesium", "React Query"],
    platforms: ["PC"],
    thumbnail: "/projects/digital-garam/thumbnail.png",
    detailImages: [
      "/projects/digital-garam/detail-01.png",
      "/projects/digital-garam/detail-02.png",
      "/projects/digital-garam/detail-03.png",
      "/projects/digital-garam/detail-04.png",
    ],
    overview:
      "Digital Garam+는 K-Water 수자원 3D GIS 통합 플랫폼의 Next.js 이식 프로젝트입니다. 기존 Spring MVC/JSP(main.jsp) 기반 화면을 App Router 구조로 옮기면서, Cesium 3D 뷰어·사이드바·플로팅 위젯 중심의 UI를 유지하는 것이 핵심이었습니다. 담당 범위는 공통 레이아웃/상태 관리, GIS 측정·분석 도구, 레이어·배경지도 전환, 기상(호우실황·레이더·호우특보·태풍), 사용자 스토리지 열람 등이며, 원본 JSP의 마크업·동작·API 호출 흐름을 대조해 1:1에 가깝게 맞추는 방식으로 진행했습니다.",
    keywords: [
      "JSP → Next.js 이식 (Cesium 3D GIS)",
      "측정·분석 도구 (면적분석·단면도·수위체적)",
      "레이어/배경지도·주제도·침수 시각화",
      "기상 UI (호우실황·레이더·호우특보·태풍)",
      "사용자 스토리지 열람·마이페이지 연동",
      "Zustand·React Query·i18n 정비",
    ],
    detailSections: [
      {
        title: "담당 업무 1) 공통 프레임워크·레이아웃·상태 관리 기반 구축",
        problem:
          "기존 JSP는 단일 main.jsp 안에서 팝업·패널로 기능이 열리는 구조였고, Next.js로 옮기면서 세션 가드·라우팅·공통 UI(모달/폼/토스트)·Zustand 스토어 설계가 먼저 정리되어야 했습니다.",
        solutions: [
          "App Router 기반 레이아웃(루트·protected·auth)과 세션 가드 구조를 구성했습니다.",
          "공통 UI 컴포넌트(Modal/Confirm/Form/DatePicker/File 등)와 Zustand 스토어 패턴을 정리했습니다.",
          "테마 토글, 하단 화면정보(MapLocalInfo) 등 누락 보정 항목을 기존 JSP 동선에 맞게 연결했습니다.",
        ],
        result:
          "이후 도메인 기능(지도·기상·저장소)을 같은 패턴으로 쌓을 수 있는 프론트엔드 기반을 마련했습니다.",
      },
      {
        title: "담당 업무 2) GIS 측정·분석 도구 이식 (면적분석·단면도·수위체적)",
        problem:
          "원본은 KWater3d 라이브러리와 jQuery DOM 조작 기반이었고, Next.js에서는 Cesium 컴포넌트·Zustand·팝업 컴포넌트로 동일 UX를 재현해야 했습니다. 단면도·면적분석·SHP 업로드 분석 등 팝업 마크업/스타일까지 JSP와 맞춰야 했습니다.",
        solutions: [
          "거리·표고·면적·반경 측정 도구와 초기화 버튼을 floating widget 구조로 이식했습니다.",
          "면적분석(클릭/SHP 파일), 단면도(TerrainProfile), 수위체적 팝업을 JSP id/class·Chart.js 옵션 기준으로 구현했습니다.",
          "정북·확대축소·이동·기울기·인덱스맵 등 지도 컨트롤 UI를 연동했습니다.",
        ],
        result:
          "메인 지도 화면에서 JSP와 동일한 진입점·팝업·측정 흐름으로 분석 업무를 수행할 수 있게 했습니다.",
      },
      {
        title: "담당 업무 3) 레이어·배경지도·주제도 표출 (BaseMap / Thematic / Visualization)",
        problem:
          "배경지도(일반·하이브리드)·항공사진 연도·밝기 조절, 범람·침수·행정 주제 레이어 등 WMS/GeoJSON 기반 레이어 ON/OFF가 사이드바 Map 패널에서 동작해야 했습니다.",
        solutions: [
          "BaseMapSection에서 배경지도·항공사진 전환 및 밝기 슬라이더를 useImageryLayerStore와 연동했습니다.",
          "ThematicMapSection·VisualizationSection·floodLayers.ts로 주제/침수 레이어 토글 로직을 mapLayerActions에 통합했습니다.",
          "권역 GeoJSON locale(en/ko) 분기, alternate datasource 숨김 등 i18n 연동을 반영했습니다.",
        ],
        result:
          "사이드바에서 레이어 가시성·배경지도를 JSP와 유사한 방식으로 제어할 수 있는 구조를 완성했습니다. (일부 레이어는 내부망·GeoServer 환경에서 추가 검증 필요)",
      },
      {
        title: "담당 업무 4) 기상 기능 이식 (호우실황·레이더·호우특보·태풍)",
        problem:
          "기상 메뉴는 JSP에서 호우실황·호우특보·태풍 3종 중심이며, 레이더 강수 애니메이션·하단 타임라인·지도 오버레이·영문 UI까지 함께 맞춰야 했습니다. 셰이더·zip 데이터 등 내부망 의존 리소스도 있었습니다.",
        solutions: [
          "WeatherPanel/WeatherMenuSection과 HeavyRain·RainAlert·Typhoon Section을 연결하고 메인 page에 패널·레이어를 마운트했습니다.",
          "RadarLayer, RadarRainfallTimeline, 호우실황 비주얼라이저·범례·로딩 오버레이를 구현했습니다.",
          "message-common_en.properties 기준 영문 area/기상 UI 키를 en.json에 정렬하고, POI·GeoJSON locale 연동을 보완했습니다.",
        ],
        result:
          "기상 사이드바 진입부터 지도 표출·하단 타임라인 재생까지 이어지는 흐름을 Next.js에서 재현했습니다. (호우/레이더 zip·오라클 등 내부망 데이터 검증은 진행 중)",
      },
      {
        title: "담당 업무 5) 사용자 스토리지 열람·마이페이지 연동",
        problem:
          "JSP userStorageDetailList.jsp는 사용량 차트(Highcharts)·폴더별 용량·파일 이용 내역·삭제까지 한 화면에서 처리하며, 마이페이지 사이드바 menu07으로 진입합니다.",
        solutions: [
          "getMypageUser → getStorageInsertLogDetail → getUserDetailStroage API 체인을 storageService·React Query로 구현했습니다.",
          "StorageUsagePanel(바·파이·막대 차트), StorageFileList(페이지네이션·삭제)를 JSP 마크업 id/class 기준으로 구성했습니다.",
          "마이페이지 간단 사이드바 셸·/storage 라우트 연동, 삭제 확인/성공 모달(public_confirm) UX를 JSP와 맞췄습니다.",
        ],
        result:
          "로그인 사용자가 스토리지 사용량·파일 목록을 조회·삭제할 수 있는 화면을 Next.js protected 라우트로 제공했습니다.",
      },
      {
        title: "품질/협업) JSP 대조·코드 스타일·이식 범위 정리",
        problem:
          "다수 업체가 영역별로 나뉘어 이식하는 프로젝트라, 화면 단위로 JSP와 diff를 맞추고 불필요한 리팩터링 없이 범위를 지켜야 했습니다.",
        solutions: [
          "원본 JSP/JS(userStorageManage.js, main_left_menu.jsp 등)와 UI·API·표시 포맷을 대조하며 차이를 수정했습니다.",
          "파일 타입 표시(zip/png vs img/shp)처럼 화면별 변환 규칙이 다른 경우 원본 동작을 기준으로 맞췄습니다.",
          "WBS·CLAUDE.md 기준 컴포넌트 위치·네이밍·주석 스타일을 팀 컨벤션에 맞게 유지했습니다.",
        ],
        result:
          "이식 품질을 '동작 일치' 기준으로 관리하면서, 후속 Wave(홍수·관리자·성능 최적화)로 넘길 수 있는 상태를 유지했습니다.",
      },
    ],
  },
  {
    id: 5,
    title: "연속복합측위 지원 서버 (실내측위)",
    period: "2026.04 - 2026.07",
    periodStart: "2026-04",
    description:
      "WiFi 지문 기반 CNN 실내측위 알고리즘을 직접 구현하고, KNN 하이브리드·측위 안정화와 BLE 비콘 보정, 비콘·학습 관리 기능까지 측위 파이프라인 전반을 개발했습니다.",
    tags: ["Java", "Spring Boot", "Python", "PyTorch", "PostgreSQL", "Docker"],
    platforms: ["PC"],
    thumbnail: "/projects/etri-indoor-positioning/thumbnail.png",
    detailImages: [
      "/projects/etri-indoor-positioning/detail-01.png",
      "/projects/etri-indoor-positioning/detail-02.png",
      "/projects/etri-indoor-positioning/detail-03.png",
      "/projects/etri-indoor-positioning/detail-04.png",
    ],
    overview:
      "연속복합측위 지원 서버의 WiFi 지문 기반 CNN 실내측위를 처음부터 직접 구현했습니다. PyTorch로 CNN 모델·전처리·학습 파이프라인을 구축하고, 이를 Spring Boot 측위 서버와 연동해 실시간 측위를 제공했습니다. 여기에 KNN 하이브리드와 튐 완화·층 우선 필터로 정확도와 안정성을 개선하고, WiFi가 약하거나 없는 구역을 보완하는 BLE 비콘 보정을 설계·구현했습니다. 비콘 위치 등록 관리 페이지와 건물별 CNN 학습 관리 페이지를 개발하고, 측위 결과를 실측 데이터로 시각화·검증했습니다.",
    keywords: [
      "WiFi 지문 CNN 실내측위 직접 구현(PyTorch · Spring 연동)",
      "KNN 하이브리드 · 튐 완화 · 층 우선 필터로 정확도/안정성 개선",
      "BLE 비콘 보정(RSSI 가중평균 · delta 보정)",
      "비콘 위치 등록 관리 페이지(실내지도 기반)",
      "CNN 학습 관리 페이지(weight 파일 · Docker 볼륨 기반)",
      "측위 정확도 실측 검증(WiFi 사각지대 평균 1m대)",
    ],
    detailSections: [
      {
        title: "담당 업무 1) WiFi 지문 CNN 실내측위 알고리즘 직접 구현",
        problem:
          "WiFi 지문(수집한 AP별 신호 세기)만으로 실내 위치를 추정하는 CNN 측위 엔진을 처음부터 구축하고, 측위 서버에서 실시간으로 동작하도록 연동해야 했습니다.",
        solutions: [
          "PyTorch로 CNN 모델과 전처리(AP 사전 구성·지문 벡터화), 건물·층별 학습 파이프라인을 신규 구현했습니다.",
          "Python 측위 엔진과 Spring Boot 서버를 HTTP로 연동해, 수집 데이터로 학습하고 측위 요청 시 CNN이 좌표를 추론하는 전 과정을 구축했습니다.",
          "학습 페어 생성 시 건물·층을 구분하고 MAC 가중치를 반영해, 서로 다른 공간이 섞이지 않도록 측위 정확도를 높였습니다.",
        ],
        result:
          "WiFi 지문만으로 실내 위치를 추정하는 CNN 측위 시스템을 자체 구현해, 연속복합측위 지원 서버의 실내측위 기능으로 제공했습니다.",
      },
      {
        title: "담당 업무 2) 측위 정확도·안정성 개선 및 오측위 원인 분석",
        problem:
          "초기 CNN 결과가 위치가 튀거나(불안정), 특정 지점에서 실제와 다른 건물·층으로 측위되는 문제가 있어 정확도와 안정성을 함께 개선해야 했습니다.",
        solutions: [
          "CNN 단독 대신 KNN 하이브리드로 후보를 보정하고, 층 우선(floor-first) 필터·이동량 제한(max-step)·EKF로 위치 튐을 완화했습니다.",
          "서버 로그와 수집 데이터(DB)를 분석해, 오측위가 해당 구역의 WiFi 지문 부족과 여러 건물에 걸친 공용 AP에서 비롯됨을 규명했습니다.",
          "좌표와 건물·층이 서로 다른 경로로 결정되어 불일치하는 구조적 원인을 찾아, 비콘 보정이라는 보완 방향을 도출했습니다.",
        ],
        result:
          "측위 안정성을 확보하고, 오측위가 알고리즘 결함이 아닌 데이터 공백에서 비롯됨을 확인해 다음 보완(비콘 보정) 방향을 세웠습니다.",
      },
      {
        title: "담당 업무 3) BLE 비콘 보정 로직 설계·구현",
        problem:
          "WiFi 지문이 없거나 약한 구역에서는 CNN 측위가 부정확했고, 학습에 영향을 주지 않으면서 이를 보완할 방법이 필요했습니다.",
        solutions: [
          "비콘은 CNN 학습에 넣지 않고, WiFi 측위 결과가 나온 뒤 마지막 단계에서 등록된 비콘으로 좌표를 보정하도록 설계했습니다.",
          "여러 비콘이 감지되면 신호 세기(RSSI)를 가중치로 위치(가중 중심)를 계산하고, 측위 결과를 그 지점으로 delta 보정하도록 구현했습니다(비콘 여러 개 설치 구역 대응).",
          "강한 신호만 사용하고 1회 이동량을 제한해, 위치가 급격히 튀지 않도록 안정성을 확보했습니다.",
        ],
        result:
          "WiFi 지문이 없는 구역에서도 비콘 보정만으로 실제 위치를 평균 약 1m 오차로 측위함을 실측으로 확인했습니다.",
      },
      {
        title: "담당 업무 4) 비콘 위치 등록 관리 페이지 개발",
        problem:
          "비콘을 측위 보정에 활용하려면 각 비콘의 실제 설치 위치를 등록·관리할 수 있어야 했습니다.",
        solutions: [
          "비콘 MAC 화이트리스트 등록·수정·삭제 기능과 조회 캐시를 개발했습니다.",
          "실내지도 위에서 포인트를 클릭해 비콘의 건물·층·좌표를 등록하는 UI를 구현했습니다.",
        ],
        result:
          "설치한 비콘의 위치를 지도에서 직접 등록·관리하고 측위 보정에 활용할 수 있는 기반을 마련했습니다.",
      },
      {
        title: "담당 업무 5) CNN 학습 관리 페이지 개발",
        problem:
          "건물별 CNN 측위 모델의 학습 상태와 결과를 화면에서 확인할 수 있어야 했습니다.",
        solutions: [
          "건물을 선택해 학습을 실행하고, 최근 학습일자와 결과(오차 등)를 조회하는 페이지를 개발했습니다.",
          "가중치·메타 파일을 Docker 볼륨으로 분리·영속화하고, 별도 이력 DB 없이 weight/결과 파일로 건물별 최신 상태를 표시하도록 구성했습니다.",
        ],
        result:
          "학습 실행부터 결과 확인까지 한 화면에서 관리하고, 별도 이력 테이블 없이 가볍게 최신 상태를 파악할 수 있게 했습니다.",
      },
      {
        title: "담당 업무 6) 측위 정확도 실측 검증",
        problem:
          "구현·개선한 측위와 보정이 실제로 정확한지 수치로 검증할 필요가 있었습니다.",
        solutions: [
          "측위 로그와 수집 데이터를 좌표로 시각화하고, 실제 위치 기준 오차(평균·중앙·최대)를 계산했습니다.",
          "WiFi 지문이 없는 구역에서 측위 결과 분포와 실제 위치를 비교해 보정 효과를 확인했습니다.",
        ],
        result:
          "WiFi 사각지대에서 비콘 보정으로 평균 1m대 정확도를 달성함을 실측 데이터로 검증했습니다.",
      },
    ],
  },

]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const sortedPersonalProjects = [...personalProjects].sort((a, b) => b.periodStart.localeCompare(a.periodStart))
  const sortedCompanyProjects = [...companyProjects].sort((a, b) => b.periodStart.localeCompare(a.periodStart))
  const projectHighlights = [
    ...sortedPersonalProjects.map((project) => ({ ...project, projectType: "개인 프로젝트" })),
    ...sortedCompanyProjects.map((project) => ({ ...project, projectType: "회사 프로젝트" })),
  ].sort((a, b) => b.periodStart.localeCompare(a.periodStart))

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <span className="text-[#00C8FF] text-[12px] tracking-widest font-bold">JJINUENG.DEV</span>
          <nav className="hidden md:flex gap-8">
            {["about","projects","contact"].map(id => (
              <a key={id} href={`#${id}`}
                className="text-[12px] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                {id}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/jjinueng" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://jjinueng.tistory.com/" target="_blank" rel="noopener noreferrer">
                <Earth className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="테마 전환"
            >
              {mounted && (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            </Button>
          </div>
        </div>
      </header>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Hero */}
          <div className="flex flex-col items-center text-center mb-20">
            <div className="mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-[#00C8FF]/10 blur-xl scale-110" />
              <Image
                src="https://avatars.githubusercontent.com/u/115696442?v=4"
                alt="김지윤"
                width={96}
                height={96}
                className="rounded-full relative border-2 border-[#00C8FF]/30"
              />
            </div>
            <p className="text-[12px] text-muted-foreground tracking-widest uppercase mb-3">
              Full-Stack Developer
            </p>
            <h1 className="text-[36px] text-foreground mb-4 leading-tight">
              김지윤
            </h1>
            <p className="text-[12px] text-muted-foreground max-w-md leading-relaxed">
              AI를 활용해 빠르게 개발하고, 품질을 높이는 풀스택 개발자.<br/><br/>
              기능 구현에 그치지 않고,<br/>
              왜 이 구조를 선택했는지 설명할 수 있는 코드를 지향합니다.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-20">
            <h2 className="text-[12px] text-muted-foreground tracking-widest uppercase mb-6">경력</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-5 rounded-lg bg-card border border-border hover:border-[#00C8FF]/30 transition-colors">
                <div>
                  <p className="text-[12px] text-foreground mb-1">Full-Stack Developer</p>
                  <p className="text-[12px] text-muted-foreground">Heliosen</p>
                </div>
                <span className="text-[12px] text-[#00C8FF]/70">2024.07 — 2026.07</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="text-[12px] text-muted-foreground tracking-widest uppercase mb-6">교육</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-5 rounded-lg bg-card border border-border hover:border-[#00C8FF]/30 transition-colors">
                <div>
                  <p className="text-[12px] text-foreground mb-1">9roomthon Training</p>
                  <p className="text-[12px] text-muted-foreground">Full-Stack Developer</p>
                </div>
                <span className="text-[12px] text-muted-foreground">2023.11 — 2024.02</span>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div>
            <h2 className="text-[12px] text-muted-foreground tracking-widest uppercase mb-6">프로젝트 하이라이트</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectHighlights.map((project) => (
                <div
                  key={`${project.projectType}-${project.id}`}
                  className="p-4 rounded-lg bg-card border border-border hover:border-[#00C8FF]/30 transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <p className="text-[12px] text-[#00C8FF]/60 mb-2">{project.projectType}</p>
                  <p className="text-[12px] text-foreground mb-1">{project.title}</p>
                  <p className="text-[12px] text-muted-foreground">{project.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[24px] text-foreground mb-3">주요 프로젝트</h2>
            <p className="text-[12px] text-muted-foreground">
              개인 프로젝트와 실무 프로젝트를 통해 수행한 작업을 소개합니다.
            </p>
          </div>

          {/* Personal Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[12px] text-muted-foreground tracking-widest uppercase">개인 프로젝트</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sortedPersonalProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group bg-card border border-border hover:border-[#00C8FF]/40 transition-all duration-300 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.thumbnail && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} 썸네일`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {(project.github || project.demo) && (
                        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.github && (
                            <Button size="sm" className="h-7 px-3 bg-background/90 text-foreground hover:bg-background text-[12px]" asChild onClick={(e) => e.stopPropagation()}>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3 mr-1" /> Code
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button size="sm" className="h-7 px-3 bg-[#00C8FF] text-background hover:bg-[#00C8FF]/90 text-[12px]" asChild onClick={(e) => e.stopPropagation()}>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" /> Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h4 className="text-[14px] text-foreground mb-2 group-hover:text-[#00C8FF] transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-[12px] text-muted-foreground mb-3">{project.period}</p>
                    <p className="text-[12px] text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[12px] px-2 py-0.5 border-border text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.platforms && project.platforms.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.platforms.map((p) => (
                          <Badge key={p} className="text-[11px] px-2 py-0.5 bg-[#00C8FF]/10 text-[#00C8FF] border border-[#00C8FF]/30 hover:bg-[#00C8FF]/20">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Projects */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[12px] text-muted-foreground tracking-widest uppercase">회사 프로젝트</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sortedCompanyProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group bg-card border border-border hover:border-[#00C8FF]/40 transition-all duration-300 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.thumbnail && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} 썸네일`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h4 className="text-[14px] text-foreground mb-2 group-hover:text-[#00C8FF] transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-[12px] text-muted-foreground mb-3">{project.period}</p>
                    <p className="text-[12px] text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[12px] px-2 py-0.5 border-border text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.platforms && project.platforms.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.platforms.map((p) => (
                          <Badge key={p} className="text-[11px] px-2 py-0.5 bg-[#00C8FF]/10 text-[#00C8FF] border border-[#00C8FF]/30 hover:bg-[#00C8FF]/20">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Project Detail Dialog */}
            {selectedProject && (
              <Dialog open={true} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="!max-w-[95vw] md:!max-w-[64vw] w-full max-h-[90vh] overflow-y-auto overflow-x-hidden p-6 bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="text-[24px] text-foreground mb-1">
                      {selectedProject.title}
                    </DialogTitle>
                    <p className="text-[12px] text-muted-foreground">{selectedProject.period}</p>
                  </DialogHeader>
                  <div className="space-y-6 mt-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[12px] px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                      {selectedProject.platforms && selectedProject.platforms.map((p) => (
                        <Badge key={p} className="text-[12px] px-2 py-0.5 bg-[#00C8FF]/10 text-[#00C8FF] border border-[#00C8FF]/30">
                          {p}
                        </Badge>
                      ))}
                    </div>

                    {selectedProject.overview && (
                      <section className="rounded-lg border border-border bg-background/50 p-4">
                        <h3 className="text-[12px] text-[#00C8FF] tracking-wider mb-3 uppercase">프로젝트 개요</h3>
                        <p className="text-[12px] text-muted-foreground leading-relaxed whitespace-pre-line break-words">
                          {selectedProject.overview}
                        </p>
                      </section>
                    )}

                    {selectedProject.detailImages && selectedProject.detailImages.length > 0 && (
                      <section>
                        <h3 className="text-[12px] text-[#00C8FF] tracking-wider mb-3 uppercase">예시 화면</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.detailImages.slice(0, 4).map((imagePath, index) => (
                            <div key={imagePath} className={`relative overflow-hidden rounded-lg border border-border bg-background/50 ${selectedProject.platforms?.length === 1 && selectedProject.platforms[0] === '모바일' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                              <Image
                                src={imagePath}
                                alt={`${selectedProject.title} 예시 화면 ${index + 1}`}
                                fill
                                className="object-cover object-center"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {selectedProject.keywords && selectedProject.keywords.length > 0 && (
                      <section>
                        <h3 className="text-[12px] text-[#00C8FF] tracking-wider mb-3 uppercase">핵심 키워드</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.keywords.map((keyword) => (
                            <Badge key={keyword} variant="outline" className="text-[12px] px-2 py-0.5 whitespace-normal break-words border-border text-muted-foreground">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </section>
                    )}

                    {selectedProject.detailSections && selectedProject.detailSections.length > 0 && (
                      <section className="space-y-4">
                        {selectedProject.detailSections.map((section) => (
                          <article key={section.title} className="rounded-lg border border-border p-4">
                            <h3 className="text-[12px] text-foreground mb-4 leading-relaxed">{section.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div className="rounded-lg border border-rose-400/50 bg-rose-500/10 p-3">
                                <p className="text-[12px] text-rose-400 mb-2 tracking-wider">문제</p>
                                <p className="text-[12px] text-muted-foreground leading-relaxed whitespace-pre-line break-words">
                                  {section.problem}
                                </p>
                              </div>
                              <div className="rounded-lg border border-blue-400/50 bg-blue-500/10 p-3">
                                <p className="text-[12px] text-blue-400 mb-2 tracking-wider">해결</p>
                                <ul className="list-disc pl-4 space-y-1 text-[12px] text-muted-foreground leading-relaxed break-words">
                                  {section.solutions.map((solution) => (
                                    <li key={solution}>{solution}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="rounded-lg border border-emerald-400/50 bg-emerald-500/10 p-3">
                                <p className="text-[12px] text-emerald-400 mb-2 tracking-wider">성과</p>
                                <p className="text-[12px] text-muted-foreground leading-relaxed whitespace-pre-line break-words">
                                  {section.result}
                                </p>
                              </div>
                            </div>
                          </article>
                        ))}
                      </section>
                    )}

                    {selectedProject.items && selectedProject.items.length > 0 && (
                      <section className="space-y-4">
                        {selectedProject.items.map((item, index) => (
                          <div key={index} className="pb-5 border-b border-border last:border-b-0 last:pb-0">
                            <h3 className="text-[12px] text-foreground mb-3">{item.role}</h3>
                            <div className="flex flex-col md:flex-row gap-4">
                              {item.image && (
                                <div className="relative w-full md:w-64 aspect-video flex-shrink-0 rounded-lg overflow-hidden border border-border">
                                  <Image src={item.image} alt={item.role} fill className="object-cover" loading="lazy" />
                                </div>
                              )}
                              <p className="text-[12px] text-muted-foreground leading-relaxed whitespace-pre-line flex-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </section>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[24px] text-foreground mb-3">Contact</h2>
          <p className="text-[12px] text-muted-foreground mb-8">
            언제든 편하게 연락 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" asChild className="text-[12px] border-border hover:border-[#00C8FF]/50 hover:text-[#00C8FF]">
              <a href="https://github.com/jjinueng" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="text-[12px] border-border hover:border-[#00C8FF]/50 hover:text-[#00C8FF]">
              <a href="https://jjinueng.tistory.com/" target="_blank" rel="noopener noreferrer">
                <Earth className="h-4 w-4 mr-2" /> Blog
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[12px] text-[#00C8FF] tracking-widest">JJINUENG.DEV</span>
          <p className="text-[12px] text-muted-foreground">© 2025–{new Date().getFullYear()} jjinueng</p>
          <div className="flex gap-4">
            <a href="https://github.com/jjinueng" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://jjinueng.tistory.com/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Earth className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ExternalLink, Linkedin, Earth } from 'lucide-react'

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
    period: "2025.01 - 2025.01",
    periodStart: "2025-01",
    description: "모임별 1차/2차/3차 금액과 참여자를 입력하면 각자 부담액을 계산해주는 정산 서비스입니다.",
    tags: ["Next.js"],
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
]

const companyProjects: CompanyProject[] = [
  {
    id: 1,
    title: "DiTAP JS",
    period: "2025.01 - 2025.04",
    periodStart: "2025-01",
    description: "2D/3D 지도 뷰어의 사용성과 분석 기능을 강화하기 위한 UI/기능 개선, 품질 정비를 수행했습니다.",
    tags: ["JavaScript"],
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
    period: "2025.05 - 현재",
    periodStart: "2025-05",
    description: "운영/사용자 기능 확장과 모바일·웹 공통 기능 안정화를 위한 개발과 품질 정비를 수행했습니다.",
    tags: ["Java", "JSP", "Oracle", "PostgreSQL"],
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

]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const sortedPersonalProjects = [...personalProjects].sort((a, b) => b.periodStart.localeCompare(a.periodStart))
  const sortedCompanyProjects = [...companyProjects].sort((a, b) => b.periodStart.localeCompare(a.periodStart))
  const projectHighlights = [
    ...sortedPersonalProjects.map((project) => ({ ...project, projectType: "개인 프로젝트" })),
    ...sortedCompanyProjects.map((project) => ({ ...project, projectType: "회사 프로젝트" })),
  ].sort((a, b) => b.periodStart.localeCompare(a.periodStart))

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              JJINUENG.DEV
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/jjinueng" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/jjinueng" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://jjinueng.tistory.com/" target="_blank" rel="noopener noreferrer">
                  <Earth className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image and Introduction */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <Image
                src="https://avatars.githubusercontent.com/u/115696442?v=4"
                alt="김지윤"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-gray-100"
              />
            </div>
            <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide mb-3">
              문제를 끝까지 해결하는 풀스택 개발자
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              김지윤
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              나다.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              경력
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Full Stack Developer</h3>
                  <p className="text-gray-600">Heliosen</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                    2024 - 현재
                  </span>
                </div>
              </div>
              
            </div>
          </div>

          {/* Project Highlights */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              프로젝트 하이라이트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectHighlights.map((project) => (
                <div key={`${project.projectType}-${project.id}`} className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {project.projectType}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div> */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              주요 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              개인 프로젝트와 실무 프로젝트를 통해 수행한 작업을 소개합니다.
            </p>
          </div>

          {/* Personal Projects */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="flex-grow h-px bg-gray-200"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 px-8 tracking-tight">
                개인 프로젝트
              </h3>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sortedPersonalProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.thumbnail && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} 썸네일`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="flex flex-col h-full">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">{project.period}</p>
                      <p className="text-gray-600 leading-relaxed text-base mb-2">{project.description}</p>
                      {(project.github || project.demo) && (
                        <div className="flex gap-2 mb-4">
                          {project.github && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 px-3"
                              asChild
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                코드
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button
                              size="sm"
                              className="h-8 px-3 bg-blue-600 hover:bg-blue-700 text-white"
                              asChild
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                데모
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-sm px-3 py-1 border-gray-300 text-gray-600 hover:border-gray-400 transition-colors">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Projects */}
          <div>
            <div className="flex items-center mb-12">
              <div className="flex-grow h-px bg-gray-200"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 px-8 tracking-tight">
                회사 프로젝트
              </h3>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sortedCompanyProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.thumbnail && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} 썸네일`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="flex flex-col h-full">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {project.period}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-base mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-sm px-3 py-1 border-gray-300 text-gray-600 hover:border-gray-400 transition-colors">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Project Detail Dialog */}
            {selectedProject && (
              <Dialog open={true} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="!max-w-[95vw] md:!max-w-[66.67vw] w-full max-h-[90vh] overflow-y-auto overflow-x-hidden p-4 sm:p-6">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {selectedProject.overview && (
                      <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">프로젝트 개요</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line break-words">
                          {selectedProject.overview}
                        </p>
                      </section>
                    )}

                    {selectedProject.detailImages && selectedProject.detailImages.length > 0 && (
                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">예시 화면</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.detailImages.slice(0, 4).map((imagePath, index) => (
                            <div key={imagePath} className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
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
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">핵심 키워드</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.keywords.map((keyword) => (
                            <Badge key={keyword} variant="outline" className="text-sm px-3 py-1 whitespace-normal break-words">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </section>
                    )}

                    {selectedProject.detailSections && selectedProject.detailSections.length > 0 && (
                      <section className="space-y-5">
                        {selectedProject.detailSections.map((section) => (
                          <article key={section.title} className="rounded-xl border border-gray-200 p-5">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="rounded-lg border border-rose-100 bg-rose-50/70 p-4">
                                <p className="text-sm font-semibold text-rose-700 mb-2">문제</p>
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line break-words">
                                  {section.problem}
                                </p>
                              </div>
                              <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-4">
                                <p className="text-sm font-semibold text-blue-700 mb-2">해결</p>
                                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700 leading-relaxed break-words">
                                  {section.solutions.map((solution) => (
                                    <li key={solution}>{solution}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-4">
                                <p className="text-sm font-semibold text-emerald-700 mb-2">성과</p>
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line break-words">
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
                          <div key={index} className="pb-6 border-b last:border-b-0 last:pb-0">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.role}</h3>
                            <div className="flex flex-col md:flex-row gap-4">
                              {item.image && (
                                <div className="relative w-full md:w-64 lg:w-80 aspect-video flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                                  <Image
                                    src={item.image}
                                    alt={item.role}
                                    fill
                                    className="object-cover object-center"
                                    loading="lazy"
                                  />
                                </div>
                              )}
                              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line flex-1">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">

          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 jjinueng. 모든 권리 보유.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/jjinueng" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/jjinueng" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://jjinueng.tistory.com/" className="text-gray-400 hover:text-white transition-colors">
                <Earth className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

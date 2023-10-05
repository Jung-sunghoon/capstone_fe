1. 구동 환경 설치

- npm create vite@latest my-vue-app -- --template react-ts <br />
- cd (폴더 명) <br />
- npm install <br />
- npm run dev <br />

2. layout 생성

- header 및 login, serviceinfo, signup 컴포넌트 생성

3. AppRouter 기능 추가

- AppRouter를 통해 SPA가 가능하게 만듦(컴포넌트 간의 이동)

4. AuthContext 추가

- 사용자 인증 정보 관리
- 로그인 및 로그아웃 기능 제공
- 컴포넌트 간 데이터 공유
- 컨텍스트 프로바이더 기능

5. Antd 다운로드 및 활용

- npm install antd
- antd를 활용하여 컴포넌트 제작 용이

# 23.09.21 추가

1. 로그인 시 로컬 스토리지에 로그인 값을 저장하여 새로고침하였을 때에도 로그인 상태 고정

2. 로그인 css 및 회원가입 css 추가

3. 빈 칸에서 로그인 시 로그인이 성공하는 오류 수정

4. 검색 버튼 클릭 시 검색창 나오게 하기, 엔터 눌렀을 때 검색되게 바꾸기, 검색창이 비었을 때 아무 곳이나 클릭하면 검색창 사라지게 하기

5. Search, Filter, Card 컴포넌트 Board 컴포넌트에서 분리

6. Board에 정렬 기능 추가

# 23.09.24 추가

1. Board 정렬 시 진행 중과 완료 상태 왔다갔다 혹은 모든 게시물이 보여지는 오류 수정

2. api상의 데이터 입력 완료(아직 입력 안 한 것은 주석 처리)

# 23.09.26 추가

1. 게시물 생성하는 Generate.tsx 컴포넌트 생성

2. 로그인 시 로컬 스토리지에 userId를 저장하여 게시물 생성 시 creatorId에 userId 대입(변경 필요)

3. router와 app에 generate 컴포넌트 링크 연결

4. Board에 페이지네이션 추가

# 23.10.05 추가

1. 게시물 개수 3개, 페이지 당 12개로 조정

2. 정렬 기능 select 컴포넌트로 변경

3. 회원가입 UI 변경

4. 프로젝트 카드 이미지 assets/images 에 추가 및 상대 경로 지정

5. 프로젝트 타입 재정의

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

  23.09.21 추가

1. 로그인 시 로컬 스토리지에 로그인 값을 저장하여 새로고침하였을 때에도 로그인 상태 고정

2. 로그인 css 및 회원가입 css 추가

3. 빈 칸에서 로그인 시 로그인이 성공하는 오류 수정

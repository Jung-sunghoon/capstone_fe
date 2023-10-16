export const mockProjects = [
  {
    projectInfo: {
      projectId: 1,
      projectTitle: '[FE] 개발자들의 랭킹',
      description: `<div class="readme-markdown">
      <h1>opgc_frontend</h1>
      <p>Over Programmed Good Coding 프론트엔드 레포지토리<br>React 학습을 위한 토이프로젝트입니다.</p>
      <p>개발자들의 랭킹을 보여줍니다!</p>
      <h2>Usage</h2>
      <h3>Project setup</h3>
      <pre><code class="language-shell">&gt; git clone https://github.com/DirtyBoyz/opgc_frontend
      &gt; cd opgc_frontend
      &gt; npm install
      </code></pre>
      <br />
      <h3>Run in local for development</h3>
      <pre><code class="language-shell">&gt; npm run dev
      </code></pre>
      <br />
      <h3>Build for production</h3>
      <pre><code class="language-shell">&gt; npm run build
      </code></pre>
      <br />
      <h2>Tech Stack</h2>
      <ul>
        <li>HTML5, CSS3 - 마크업</li>
        <li>Typescript - 타입기반의 javascript superset</li>
        <li>eslint, prettier, husky - 소스 품질관리</li>
        <li>React - 컴포넌트개발 라이브러리</li>
        <li>Redux - 상태관리</li>
        <li>ReduxSaga - 비동기작업</li>
        <li>Webpack - 빌드 자동화 및 최적화</li>
        <li>Jest - unit/intergration test runner &amp; assertion library</li>
        <li>Cypress - e2e testing framework</li>
      </ul>
      <br />
      <h2>Proejct Structure (major factors)</h2>
      <pre><code class="language-bash">├── dist # 빌드산출물 디렉토리
      ├── src
      │   ├── apis # api 비동기 호출 함수들
      │   ├── assets # 정적리소스
      │   ├── components # presentational components, atomic 하게 구성
      │   ├── containers # container components, redux에서 상태값을 가져다쓰는 컴포넌트들의 모음 
      │   ├── layouts # 여러 페이지에서 공용으로 사용할 수 있는 레이아웃
      │   ├── constants # 앱 공통으로 사용하는 상수 값, enum
      │   │   ├── api.config.js # api 설정과 관련된 상수
      │   │   ├── application # 앱 전체 공용으로 사용하는 상수
      │   │   ├── router # 라우팅 정보
      │   │   ├── menu # 메뉴 리스트들
      │   ├── utils # 사용자 정의 util
      │   ├── modules # redux module
      │   └── types # type 정의
      ├── ... # 기타 환경설정파일들
      └── README.md
      </code></pre>
      <br />
      <br />
      <p>대부분의 구성요소(<code>containers</code>, <code>component</code>, ...)는 가독성 향상을 위해 단일파일이 아닌 디렉토리구조로 구성이 되어있다.<br>디렉토리는 아래 파일들을 포함할 수 있으며, index.ts(x)를 제외한 나머지는 Optional 하다.</p>
      <pre><code class="language-bash">-   index.ts(x) # 디렉토리를 대표하는 main 파일
      -   constants.ts # 변하지 않는 상수값
      -   service.ts # 순수함수
      -   type.ts
      </code></pre>
      </div>`,
      userId: 'alice123',
      projectStatus: 'Ps_pr',
      status: 'S_pr',
      recruitmentCount: 3,
      generateDate: '2023-09-14 10:34',
      likes: 4,
      views: 1848,
      thumbnail: '',
    },
    techNames: ['Redux', 'JavaScript', 'HTML'],
    thumbnail: '',
  },
  /// 20 개정도 ?
]

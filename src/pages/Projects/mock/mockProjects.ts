// export const mockProjects = [
//   {
//     projectId: 1,
//     projectTitle: '미니멀한 디자인과 신기술을 응용한 빠른 블로그',
//     description: `<div style="font-size:16px;" class="readme-markdown"><p align="center"><a href="https://github.com/baealex/BLEX" target="_blank"><img alt="blex color logo"  src="https://user-images.githubusercontent.com/35596687/76856570-de2b8a80-6896-11ea-8827-fc2f1966fa23.png"></a></p><p align="center"><strong>BLOG EXPRESS ME</strong></p><p align="center"><img src="https://img.shields.io/badge/nextjs-11.0.1-yellow?style=flat-square"><img src="https://img.shields.io/badge/django-3.2.5-blue?style=flat-square"></p><h2>Service</h2><p><em><strong>"예쁘고 유니크한 블로그 없을까요?"</strong></em> 🙋&zwj;♂️ <a href="https://blex.me" target="_blank">여기 있습니다!</a> 연락은 <a href="mailto:baealex@hey.com" target="_blank">baealex@hey.com</a> 의견은 <a href="https://github.com/baealex/BLEX/discussions" target="_blank">discussions</a>에!</p><p><img style="width:1000px" src="https://user-images.githubusercontent.com/35596687/128170987-c76cb8ad-5e14-4728-9b16-15f1e14d52cb.png" alt="1"><img style="width:1000px" src="https://user-images.githubusercontent.com/35596687/128170993-8efe31c1-ffa4-4d7a-8c52-ff7016df00dc.png" alt="2"><img style="width:1000px" src="https://user-images.githubusercontent.com/35596687/128170997-1f0cd0af-7b7d-45f2-baf5-678e70791f78.png" alt="3"></p><h2>Features</h2><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> 마크다운으로 글 · 댓글 작성 ✍️</li></ul><h2>Links</h2><h4>For Developer</h4><ul><li>사용하는 기술들 (<code>documents/Tech-Stack.md</code>)</li></ul><h4>For User</h4><ul><li><a href="https://blex.me/notion" target="_blank">블렉스 노션</a></li></ul><h2>Contributors</h2><a href="https://github.com/baealex/BLEX/graphs/contributors" target="_blank"><img src="https://contributors-img.web.app/image?repo=baealex/BLEX"></a><h2>License</h2><p>This is released under the MIT license. See <a href="https://github.com/baealex/BLEX/blob/master/LICENSE" target="_blank">LICENSE</a> for details.</p></div>`,
//     userId: 'test1',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-10-06 13:34',
//     likes: 10,
//     views: 123,
//     thumbnail: 'thumbnail1',
//     techIds: [1, 3, 4],
//   },
//   {
//     projectId: 2,
//     projectTitle: '[BE] ARS(Algorithm Review Service) 개인 프로젝트 Backend',
//     description: `<div style="font-size:16px;"  class="readme-markdown">
//       <h2>개인 프로젝트</h2>
//       <h1>ARS (Algorithm Review Service)</h1>
//       <p>알고리즘 복습을 편하게 할 수 있는 "저"만의 웹서비스입니다.<br>태그별 문제 리스트를 조회할 수 있고, 검색을 통해 리뷰 리스트를 조회할 수 있습니다.<br>등록된 문제에 계속해서 복습 내용을 추가할 수 있고, 문제 상세 보기에 복습 목록이 함께 보여집니다.<br>복습 알림 서비스 기능으로 알림 날짜를 설정하면 해당 날짜에 Slack을 통해 복습 알림을 받을 수 있습니다.<br></p>
//       <h2>🔗 Link</h2>
//       <ul>
//         <li><a href="https://ars.vercel.app/" target="_blank">ARS 웹사이트</a></li>
//         <li><a href="https://velog.io/@ayoung0073/Project-ARS-%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0" target="_blank">프로젝트 정리 및 후기</a></li>
//         <li><a href="https://github.com/ayoung0073/ARS-backend/wiki" target="_blank">API 명세서</a></li>
//         <li><a href="https://github.com/ayoung0073/ARS-frontend" target="_blank">프론트엔드 레포지토리</a></li>
//       </ul>
//       <h2>🛠 Architecture</h2>
//       <p>
//         <img src="https://images.velog.io/images/ayoung0073/post/cadb8c1a-7029-45c5-a0aa-d41da203bc28/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.07.20.png" alt="Architecture" style="max-width: 100%;">
//       </p>
//       <h2>📝 페이지</h2>
//       <h3>메인 페이지</h3>
//       <p>
//         <img src="https://images.velog.io/images/ayoung0073/post/06e01bcb-a7b9-4fa6-8df0-14ca8d8a7c4b/image.png" alt="" style="max-width: 100%;">
//       </p>
//       <h3>상세 페이지</h3>
//       <p>"저"임이 인증이 되었다면 알림 날짜와 난이도를 즉시 수정할 수 있습니다.<br><br>
//         <img src="https://images.velog.io/images/ayoung0073/post/007d9a58-d5a7-4d57-908d-12cee1a376e5/image.png" alt="" style="max-width: 100%;"><br><br>오른쪽 영역은 고정되어 있습니다.<br><br>
//         <img src="https://user-images.githubusercontent.com/69340410/128628683-82af6401-53a0-4181-bed9-33b04f365265.gif" alt="상세 페이지 스크롤" style="max-width: 100%;">
//       </p>
//       <h3>태그별 문제 리스트 조회</h3>
//       <p>
//         <img src="https://user-images.githubusercontent.com/69340410/128629434-18159c9a-6468-48f0-a158-881a25921ff6.gif" alt="태그별 문제 리스트 조회" style="max-width: 100%;">
//       </p>
//       <h3>슬랙 알림</h3>
//       <p>
//         <img src="https://images.velog.io/images/ayoung0073/post/bf9c1032-6f6e-475f-9e66-adc2e4826e76/image.png" alt="" style="max-width: 100%;">
//       </p>
//       </div>`,
//     userId: 'test2',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2023-10-01 13:34',
//     likes: 3,
//     views: 12,
//     thumbnail: 'thumbnail2',
//     techIds: [4, 6, 7],
//   },
//   {
//     projectId: 3,
//     projectTitle: '썸네일 메이커(thumbnail_maker)',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <p>
//         <img src="https://media.vlpt.us/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif" alt="" style="max-width: 100%;">
//       </p>
//       <hr>
//       <h1>썸네일 메이커 만들기</h1>
//       <hr>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/b0c0d7ab-d5fc-462a-80d0-cba412283931/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.38.31.png" alt="" style="max-width: 100%;">
//       </p>
//       <h2>개요 📋</h2>
//       <blockquote>
//         <p><strong>프로젝트명</strong> : 썸네일 메이커 (Thumbnail-Maker)</p>
//       </blockquote>
//       <p>
//         <strong>기획 및 제작</strong> : <strong><code>WONKOOK LEE</code></strong>
//         <strong>분류</strong> : 토이 프로젝트 (개인)
//         <strong>제작 기간 | 배포일</strong> : 2021.08.09 (1-day)
//         <strong>주요 기능</strong> : 간편한 썸네일 구성, 편집, 이미지 포맷(PNG) 컨버팅
//         <strong>타겟 유저</strong> : 포토샵 등 편집 프로그램이 익숙치 않거나 썸네일 만드는게 번거로운 유저
//         <strong>사용 툴</strong> : <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code>, <code>HTML2CANVAS(JS-Library)</code>
//         <strong>링크</strong> : <a href="https://wonkooklee.github.io/thumbnail_maker/" target="_blank">썸네일 메이커 - 벨로그 포맷 v 1.2.1</a>
//       </p><br>
//       <hr><br>
//       <h2>1. 만든 이유?</h2>
//       <blockquote>
//         <p><strong>누구든지 10초 안에 무난한 벨로그 썸네일을 만들 수 있습니다.</strong></p>
//       </blockquote>
//       <p>어도비, 오피스 없어도 됩니다. 당신은 개발과 글쓰기에만 집중하세요.</p>
//       <p>같이 공부하는 기수 분들 중에 포토샵 같은 편집 프로그램이 익숙치 않은 분들도 계실 것이다. 벨로그에 기술블로그를 꾸준히 쓰는것도 일인데 썸네일 만드는데 엄한 시간을 뺏기진 않을까 생각이 들었다.</p>
//       <p>썸네일 메이커는 '배경색 랜덤 생성과 필드 입력 값을 헤더에 출력하는 정도의 간단한 기술로 무난한 썸네일 정도는 만들 수 있지 않을까' 라는 생각에서 시작됐다. DOM API로 HTML과 CSS 조작하는 것도 배웠는데 쓸모있는 것을 만들어보고 싶었고 아이디어를 실제로 구현하는 연습도 필요했기에 그냥 한 번 만들었다.</p>
//       <p><em>단지 기능을 구현하는 것을 목표로 만들어서 코드 퀄리티는 절대 보장할 수 없다 (심지어 모두 전역 접근 가능). Release Notes 적는법과 배포 방법 조차 모르고 공부 삼아 만들었기 때문에 테스트용 MVP(minimum viable product)로서 의미만 있다. 이 점 감안하여 봐주셨으면 좋겠다.</em><br></p>
//       <hr><br>
//       <h2>2. 기획과 디자인</h2>
//       <h3>2-1. 내멋대로 만든 유저 플로우 🗺</h3>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/732581c1-ef49-4856-ad03-79ce2af7cb8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%204.26.38.png" alt="" style="max-width: 100%;">
//       </p>
//       <blockquote>
//         <p><strong>썸네일 메이커의 목표</strong>는 표현의 다양성 대신 선택지를 줄여 사용자의 고민을 덜어주는 것이다. 기본적인 텍스트 구성과 랜덤 배경색, 이미지 백그라운드 설정 등 필요한 기능 외엔 모두 덜어내기 위해 고민했다.</p>
//       </blockquote>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/3b8f7621-198b-4a70-8352-b2a3014f0472/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.28.00.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>목표 사용자는 편집 프로그램이 익숙하지 않은데 썸네일이 필요한 분들이다. 썸네일 제작에 포토샵, 일러스트레이터 같은 프로그램을 사용하는 분들이야 원하는대로 개성있는 썸네일을 만들 수 있고, 자신의 마음에 드는 썸네일이 나올 때 까지 만들고자 하는 의지가 있다. 만약 사용자가 썸네일이라는 개념 조차 생소하다면 오히려 선택지를 줄이고, 일률적이더라도 무난한 템플릿으로 구성하는 것이 좋겠다고 생각했다.<br></p>
//       <h3>2-2. 화면 구성 🎨</h3>
//       <h4>2-2-1. 화면 구획 및 구성 (Wireframing) 🏗</h4>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/31cfc3ab-09e9-479d-8b01-c9f73eb97c3d/id-Artboard%201%20copy%202@2x-100.jpg" alt="" style="max-width: 100%;">
//       </p>
//       <blockquote>
//         <p>썸네일을 블로그 포맷에 넣었을때 어떻게 보일지 짐작할 수 있는 화면 구성이 좋지 않을까?</p>
//       </blockquote>
//       <p>썸네일은 결국 플랫폼의 포스팅 용도로 사용되기 때문에, 플랫폼의 화면 구성과 썸네일에 이질감이 없는지 실시간으로 보여져야 한다는 결론으로 귀결되었다.</p>
//       <h4>2-2-2. 디자인 구체화 👨🏻&zwj;🎨</h4>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/64df2e7c-ac8b-4749-bf8c-fbe7f03419e5/id-Artboard%201@2x-100.jpg" alt="" style="max-width: 100%;">
//       </p>
//       <p>따라서 인터페이스 디자인은 벨로그의 화면 구성 중 #태그 검색했을때 나타나는 레이아웃을 참고하고 각각의 컴포넌츠들이 플랫폼의 디자인 컨텍스트와 궤를 함께 하도록 의도하였다. 사용자 프로필 썸네일, 사용자 아이디와 같이 깨알같은 요소들을 반영하는 것은 만드는 재미를 더했다.</p>
//       <blockquote>
//         <p>내가 참고한 벨로그 화면 구성</p>
//       </blockquote>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/e9bec783-60be-40a0-977f-705657ad1072/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.51.25.png" alt="" style="max-width: 100%;">
//       </p><br>
//       <hr><br>
//       <h2>3. 주요 기능</h2>
//       <h3>⌨️ 제목과 부제목, 분류 텍스트 입력</h3>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/7958ea07-00f4-4633-b49b-6674468cdbb1/ezgif-7-b4a332d1436f.gif" alt="" style="max-width: 100%;">사용자는 제목과 부제목, 분류를 인풋창을 통해 입력하게 된다. <code>addEventListener</code>로 <code>input</code> 이벤트를 감지하여 입력 필드에 타이핑이 될 때마다 <code>textContent</code>를 갱신하는 방법을 사용했다.
//       </p>
//       <pre><code class="language-js">const inputFields = document.querySelectorAll('.input__field');

//       inputFields.forEach(e =&gt; {
//         e.addEventListener('input', updateInputValue);
//       });
//       </code></pre>
//       <p>리팩토링 할 땐 <code>input</code> 요소마다 각각의 이벤트 핸들러를 생성하는 대신 이벤트 위임(Event Delegation)으로 간결하게 수정할 예정.<br></p>
//       <hr><br>
//       <h3>🎲 랜덤 그라디언트, 단색 배경 만들기</h3>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/35758997-135c-4129-ae6c-34c0864e6bec/ezgif-7-0622eb62a251.gif" alt="" style="max-width: 100%;">사용자가 고민하는 시간을 최대한 줄여주고 싶었다. 요즘처럼 선택장애라는 말이 자주 언급되는 때도 없을 것이다. 어떤 색상으로 시리즈, 포스트 썸네일을 만들까 고민하기 전에 사용자에게 색상을 마구 집어던지는 기능이 되어버렸다.
//       </p>
//       <p>버튼을 누르면 무작위의 색상 코드가 만들어져서 사용자는 마음에 드는 색상이 나올때까지 클릭하면 된다. <del>이중에하나는사용자취향이겠지</del></p>
//       <p>랜덤 컬러라고 해서 너무 칙칙한 색이 나와버리면 안되기 때문에 <code>RGB</code> 값 각각 0에서 255까지의 범위 중 최소 150 이상, 너무 밝으면 글자가 안보이니 150과 240 사이의 범위에서 값이 생성되도록 <code>Math.random</code> 함수를 만들었다.</p>
//       <p>또한 DOM으로 백그라운드 색상 코드 전달할때 <code>rgb(??, ??, ??)</code>는 적용이 안되어 16진법 hex 코드로 각각 변환 후 이어붙여줬다. 이때 사용한 메소드는 <code>toString(16)</code>.</p>
//       <pre><code class="language-js">const randomRGB = function() {
//         let rgb = '';
//         rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
//         rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
//         rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
//         return rgb;
//       }
//       </code></pre><br>
//       <hr><br>
//       <h3>🌅 URL 입력해서 배경에 이미지 삽입</h3>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/748ba38f-e953-4124-acec-72c42dc7d026/ezgif-7-c16ba6bc2e63.gif" alt="" style="max-width: 100%;">배경색만 있으면 활용도가 너무 떨어질 것 같아 선택지를 추가했다. 바로 이미지 주소를 입력해서 배경에 이미지를 삽입하는 기능이다. <code>prompt</code>로 주소값을 전달하여 DOM의 <code>style</code> 프로퍼티로 간단하게 만들었다.
//       </p>
//       <p>썸네일이 만들어지는 프레임 뿐만 아니라 <code>body</code>에도 블러 처리된 이미지를 깔아주어 사용자가 썸네일의 테마를 경험할 수 있도록 고려해봤다.<br></p>
//       <hr><br>
//       <h3>💾 핵심기능: 이미지 포맷으로 화면 저장하기 - HTML2CANVAS</h3>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/d8137495-951d-4702-88ab-c37a682c7676/ezgif-7-5fdecfa9bd2f.gif" alt="" style="max-width: 100%;">DOM으로 화면에서 꾸미는 것은 어떻게든 해결이 된다지만, 특정 화면을 이미지로 캡쳐해서 파일로 저장하는 것은 지금 내가 구현할 수 없는 기술이었다.
//       </p>
//       <p><strong>HTML2CANVAS</strong> 라는 자바스크립트 라이브러리를 사용하여 해결하였다. 이 라이브러리는 HTML 내의 특정 DOM 요소의 영역을 캡쳐해서 이미지 포맷으로 출력, 저장이 가능하도록 만들어준다.</p>
//       <p>아래는 라이브러리의 사용 예제 스니펫</p>
//       <pre><code class="language-html">&lt;!-- HTML --&gt;
//       &lt;div id="capture" style="padding: 10px; background: #f5da55"&gt;
//           &lt;h4 style="color: #000; "&gt;Hello world!&lt;/h4&gt;
//       &lt;/div&gt;
//       </code></pre>
//       <pre><code class="language-js">// JavaScript
//       html2canvas(document.querySelector("#capture")).then(canvas =&gt; {
//           document.body.appendChild(canvas)
//       });
//       </code></pre>
//       <p><code>capture</code>라는 <code>id</code>값을 가진 요소를 캡쳐하여 해당 이미지를 담은 <code>canvas</code>를 <code>body</code>의 자식 요소로 추가한다. 옵션 기능을 잘 몰라서 이미지 배경이 최종 결과에 반영되지 않아 많이 해메였지만 다행히 StackOverflow에서 답을 찾아 해결할 수 있었다.</p>
//       <p><strong><a href="https://html2canvas.hertzen.com/" target="_blank">HTML2CANVAS</a></strong><br></p>
//       <hr><br>
//       <h3>📐 구성 요소(레이아웃) 변경과 텍스트 스타일 옵션</h3>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/f692231c-6b7b-4218-a27e-90a5221943e6/ezgif-7-e306b4c29906.gif" alt="" style="max-width: 100%;">내가 만든 썸네일 메이커의 핵심은 다양한 커스터마이징 기능을 제공하는 것이 아니다. 최대한 단순한 사용성을 추구하는 것이 목적이기 때문에 몇 안되는 간단한 레이아웃, 텍스트 스타일 옵션을 만들어 텍스트가 배경에 묻히지 않도록 고려했다.
//       </p>
//       <p>각 스타일 옵션별로 부모 요소에 특정 <code>id</code>를 부여하고 자식 요소들은 <code>id</code>값에 따라 CSS 스타일이 달라지도록, 옵션 값에 맞게 따로 프리셋을 만들었다.</p><br>
//       <hr><br>
//       <h2>4. 사용 예시 🖨</h2>
//       <blockquote>
//         <p>최소한의 옵션으로 최대한의 바리에이션을 만들 수 있도록 시도해보았다.</p>
//       </blockquote>
//       <p>아래는 예제로 만든 샘플들이다.</p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/9b08d976-7f1a-4c94-92b3-a43b1bded6d7/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(6).png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/e79515a9-4ac8-4a70-b525-c5caec6d1651/module.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/bbdd1745-6660-4c8c-92af-36de0dcf7613/3.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/ab598e34-066b-4860-a363-e5934325d0f2/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(1).png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/48562a05-9c6c-48b5-92e8-c7f11e0d3556/15.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/3cda059d-c541-4da2-bcfb-a9d52b172508/as.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/4ff903b2-402c-42e2-9306-b7f4747208f9/37.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/0d43fce1-0193-4040-9d90-c861428afff8/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/393fb2ba-4627-4696-8830-73da166cdf2b/3.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/8d31b114-c440-4994-9d61-a4a120974c2d/12.png" alt="" style="max-width: 100%;">
//       </p>
//       <p><a href="https://unsplash.com/" target="_blank">배경 이미지 - Unsplash</a></p><br>
//       <hr><br>
//       <h2>5. 남은 과제</h2>
//       <h3>🧹 리팩토링</h3>
//       <p>일단 만드는 것은 달성했으니 이제 코드를 깔끔하게 정리하여 효율을 높이는 일이 남았다. 하지만 이게 만드는 것 보다 더 어려울 것 같다.</p>
//       <p>급하게 만들다보니 중복되는 요소도 많고, 변수 선언과 함수도 난무한다. DRY(Don't Repeat Yourself) 원칙에 맞게 리팩토링 하는 과정이 남았는데, 이 과정이 내가 발전할 수 있는 진짜 계기가 되지 않을까 생각한다.</p>
//       <blockquote>
//         <h4>개선 예정</h4>
//       </blockquote>
//       <ul>
//         <li>
//           <p>Encapsulation (Private Variables, Functions)</p>
//         </li>
//         <li>
//           <p>Implementing JS Module Pattern or 👇🏻</p>
//         </li>
//         <li>
//           <p>Organizing Properties in Prototypes</p>
//         </li>
//         <li>
//           <p>Implementing CSS cross-browsing (e.g. web-kit)</p>
//         </li>
//         <li>
//           <p>Undo / Redo (5 steps)</p>
//         </li>
//         <li>
//           <p>More Vivid Color Range 👇</p>
//         </li>
//       </ul>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/323cb9af-d24a-4445-994d-f040d0a2e47a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.58.48.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>RGB 모두 같은 범위 내에서 생성된 난수이기 때문에 쨍한 색감 대신 밋밋한 색상이 나오기도 한다. 트렌디한 파스텔톤 그라디언트를 목표로 만들었는데, 모호한 색이 적게 나오도록 비비드, 파스텔 톤의 색상 위주로 개선할 예정이다.<br></p>
//       <hr><br>
//       <h2>6. Log 💻</h2><br>
//       <h3>새로 발견된 문제점 (08/11)</h3>
//       <ul>
//         <li>CORS 정책을 따르는 사이트의 이미지 URL은 CANVAS 출력이 안된다.</li>
//       </ul>
//       <p>이번에 처음 알게된 CORS의 개념을 살펴보았다. 기술적으로 피해간다고 하더라도 윤리상 위배되는 일이기 때문에 이미지는 Unsplash 같은 CC-0 License 사이트를 이용할 것을 권고하는것이 나을 수도 있겠다.</p>
//       <blockquote>
//         <h4>CORS(Cross-Origin Resource Sharing)란?</h4>
//       </blockquote>
//       <p>
//         보안 상의 이유로 JavaScript에서 보내는 교차 출처(자신과 다른 출처) HTTP 요청을 제한하기 위한 정책
//         [출처] CORS (Cross-Origin Resource Sharing)가 무엇일까 | 작성자 이노그리드
//       </p>
//       <hr>
//       <h3>사용성 개선 의견 (08/12)</h3>
//       <p>
//         <strong>Boram Kim</strong> 님께서 사용성 개선 의견(<code>issue</code>)을 보내주셨습니다. (감사합니다 🥰)
//         골자는 이미지 링크 값이 <code>falsy</code>일때 <code>alert</code>를 띄운 후 함수가 종료되는 <code>validation</code> 절차에서 불필요한 <code>alert</code>의 제거에 대한 의견입니다.
//       </p>
//       <blockquote>
//         <p>
//           <img src="https://images.velog.io/images/oneook/post/88c8d2b2-59d3-4046-aaee-d37eb02ea532/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.52.57.png" alt="" style="max-width: 100%;">
//         </p>
//       </blockquote>
//       <p>
//         <strong>답변</strong>
//         소중한 의견 주셔서 정말정말 감사합니다. 불필요하게 <code>alert</code>을 띄워 사용자의 불편감을 야기하는 것은 말씀하신 바와 같이 좋은 방식이 아닌 것 같습니다. <code>alert</code> 다이얼로그 대신 버튼 위에 작게 툴팁 같은 메시지(e.g. '잘못된 형식의 주소입니다')를 띄우는 방법으로 교체하고, 이미지의 유효성을 비동기적으로 확인할 수 있는 별도의 validation process를 연구하겠습니다. 감사합니다 🙇🏻
//       </p><br>
//       <hr><br>
//       <h2>🙏🏻 감사한 일</h2>
//       <p>처음 만들어서 동기 채널에 처음으로 배포한 미니 프로젝트라서 별 기대는 안했다. 너무나 감사하게도 내가 만든 앱을 사용하여 블로그 썸네일로 활용하는 분들이 계셨다.</p>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/4e9e01bb-0546-499e-9592-ee876b8cd416/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%204.13.01.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>디자이너나 개발자나 자신이 만든 제품과 서비스를 기꺼이 사용해주시는 고마운 분들이 계시기에 직업적 보람을 느끼지 않을까 생각하게 된다. 이 자리를 빌어 다시 한번 감사한다는 말을 표현하고 싶다. 🤗</p>
//       <h2>🙇🏻 감사한 일 2</h2>
//       <p>
//         <img src="https://images.velog.io/images/oneook/post/86736ef1-542a-4a48-bdbc-4297f3701b89/Artboard%201@2x.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>
//         소중한 분들의 관심 덕분에 썸네일 메이커 포스팅이 벨로그 주간 트렌딩 포스트 상단에 올라갔습니다. 🥰
//         제가 만든 컨텐츠가 많은 분들에게 보여질 수 있는 기회를 얻은 것에 그저 감사할 따름입니다.
//       </p><br>
//       <hr><br>
//       <h2>👉🏻 <a href="https://wonkooklee.github.io/thumbnail_maker/" target="_blank">썸네일 메이커 구경하기</a></h2>
//       <p>
//         글과 이미지
//         Wonkook Lee ⓒ All Rights Reserved
//       </p>
//       <blockquote>
//         <p><em>Thumbnail-Maker is the simplest thumbnail generator for blogging. Thumbnail-Maker has been built as part of a toy project which in my very first phase of being a web developer.</em></p>
//       </blockquote>
//       <p>
//         credit: <code>Wonkook Lee (@oneook)</code>
//         contact: <code>const.wonkook@gmail.com</code>
//       </p>
//       <p>Thank you.</p>
//       <p>
//         🙏🏻 잘못된 정보가 있다면 지적해주세요

//         <img src="https://images.velog.io/images/oneook/post/b77a8951-215a-49d0-a61b-0a78723d22b8/shckinghand.png" alt="" style="max-width: 100%;">
//       </p>
//       </div>`,
//     userId: 'test3',
//     projectStatus: 'Ps_pr',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2023-10-12 13:34',
//     likes: 0,
//     views: 1,
//     thumbnail: 'thumbnail3',
//     techIds: [2, 6, 9],
//   },
//   {
//     projectId: 4,
//     projectTitle: '실시간 브레인스토밍 협업 플랫폼',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>STORM Android</h1>
//       <img src="https://user-images.githubusercontent.com/55133871/87793056-b0277880-c87f-11ea-9f5a-62bcb3054a31.gif" width="100%" style="max-width: 100%;">
//       <img src="https://user-images.githubusercontent.com/56873136/87791082-a7817300-c87c-11ea-919b-9d77ccdaf75e.png" width="70%" style="max-width: 100%;">
//       <p><a href="https://play.google.com/store/apps/details?id=com.stormers.storm" target="_blank"><img src="https://img.shields.io/endpoint?color=green&amp;logo=google-play&amp;logoColor=green&amp;url=https%3A%2F%2Fplayshields.herokuapp.com%2Fplay%3Fi%3Dcom.stormers.storm%26l%3DPlayStore%26m%3D%24version" alt="Release" style="max-width: 100%;"></a></p>
//       <p>실시간 브레인스토밍 협업 플랫폼<br>STORM은 효율적인 아이디어 회의를 돕는 온라인 툴이자 브레인스토밍을 함께하는 서비스입니다 라운드마다 목표와 제한 시간을 설정해 각자 아이디어를 고민해보고, 각 라운드 후에는 팀원들이 함께 의견을 나눌 수 있습니다. 프로젝트가 끝난 뒤에는 최종 정리를 통해 라운드 및 카드 목록을 한눈에 볼 수 있으며, 좋은 아이디어 카드들은 따로 스크랩해 모아볼 수 있습니다.</p>
//       <hr>
//       <h1>리팩토링 계획</h1>
//       <p>상용 서비스로서 충분한 기능을 가지고 있지만 부족한 실력과 조급한 개발로 인해 불안정하고 유지보수가 거의 불가능한 코드로 작성되어있다. 약 1년만에 프로젝트를 전반적으로 리팩토링하여 안정적이고 추가 기능 확장이 가능한 형태로 만들고자 한다.</p>
//       <p>참여 인원 : 김성규, 손평화<br>기간 : 21.06 ~ (미정)</p>
//       <h2>Team Rule</h2>
//       <ol>
//         <li><a href="https://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html" target="_blank">Git flow</a> 를 지켜 개발한다.</li>
//         <li>Task 단위로 리팩토링을 진행한다. (Login, Main, MyPage, Round, History ...)</li>
//         <li>Pull Request는 다음 내용을 포함한다.
//           <ul>
//             <li>해당 브랜치에서 작업한 것들 나열 및 설명</li>
//             <li>다른 기능에서 사용가능한 클래스를 개발한 경우, 사용방법을 자세히 설명</li>
//             <li>다른 기능에서 완성해주어야 할 기능이 있다면 명확하게 명시</li>
//             <li>Reviewer의 의견을 묻고 싶은 부분이 있다면 작성</li>
//           </ul>
//         </li>
//         <li>develop 브랜치로의 Merge는 반드시 1명 이상의 Reviewer의 Approve를 받아야 가능하다.</li>
//         <li>Reviewer는 Pull Request를 정독하고 피드백을 상세하게 남긴다.</li>
//         <li>Pull Request 코멘트로 의견을 주고받기에 내용이 많고 연속되는 경우, Slack의 #android_refactor 채널을 사용한다.</li>
//         <li><b>해당 브랜치의 목적에 맞는 개발만 한다.</b></li>
//         <li>해당 브랜치의 목적에 맞지 않지만 테스트를 위해 수정이 불가피하다면 수정하되, 커밋에 포함하지 않는다.</li>
//         <li>다른 브랜치에서 완성해야할 기능이 있다면 Todo 주석을 남긴다.</li>
//         <li>develop 브랜치의 최신 상태는 반드시 정상적으로 어플리케이션을 실행가능한 상태여야한다.</li>
//         <li>PR 시 develop 브랜치에 수정 사항이 있거나, develop 브랜치에 추가된 기능이 필요하다면 rebase를 사용한다.</li>
//       </ol>
//       <h2>패키지 구조</h2>
//       <p>
//         ex) 로그인 기능을 리팩토링하면서 아래와 같은 패키지구조로 클래스 파일들을 생성하였다.

//         <img src="https://user-images.githubusercontent.com/57310034/121476815-140be000-ca02-11eb-8cf3-1782586b655d.png" alt="image" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>controller 패키지 : 해당 기능을 처리하기 위한 Controller 클래스들을 모아둔다.
//           <ul>
//             <li>Controller 클래스란? : ViewModel에서 사용한다. 클라이언트가 특정 기능을 요청하기 위해 사용하는 클래스로, 기능을 직접 처리하지 않는다. 기능을 처리할 수 있는 클래스들을 적절히 선택해서 동작을 위임하는 역할을 함</li>
//           </ul>
//         </li>
//         <li>model 패키지 : 해당 기능을 처리할 때 사용하는 모델 클래스들을 모아둔다. API 요청 및 응답 객체도 우선은 해당 패키지에 두고, 추후에 클라이언트에서 사용하고 비즈니스 로직을 포함하는 모델 클래스들과 구분이 어려워지면 분리할 예정</li>
//         <li>service 패키지 : Retrofit을 사용한 API 요청 메서드를 정의하는 인터페이스를 모아둔다.</li>
//         <li>XXXFragment : 해당 기능에 사용되는 Fragment이다. 둘 이상의 Fragment가 사용된다면 fragment 패키지로 묶는다.</li>
//         <li>XXXModule : Hilt의 provide 메서드들을 모아두는 Module 클래스이다.</li>
//         <li>XXXViewModel : 해당 기능에 사용될 ViewModel이다. 둘 이상의 ViewModel이 사용된다면 viewmodel 패키지로 묶는다.</li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/57310034/121480194-c72a0880-ca05-11eb-96e2-d8164e8f9e73.png" alt="무제" style="max-width: 100%;">
//       </p>
//       <p>위와 같은 구조를 지키면 기능마다 별도의 package를 가질 수 있기 때문에 협업에 효과적(conflict 해소)</p>
//       <h2>코딩 컨벤션</h2>
//       <ul>
//         <li>기본적으로 <a href="https://naver.github.io/hackday-conventions-java/" target="_blank">캠퍼스 핵데이 Java 코딩 컨벤션</a>를 따른다. (Kotlin 형태로 유동적으로 변경)</li>
//         <li>변수명은 약어를 사용하지 않는다.
//           <blockquote>
//             <p>ex)<br>settingBtn(X) → settingButton(O)<br>ll(X) → linearLayout(O)<br>tv_card(X) → textview_card(O)</p>
//           </blockquote>
//         </li>
//       </ul><br>
//       <ul>
//         <li>
//           resource naming은 다음 규칙을 따른다.

//           <img src="https://user-images.githubusercontent.com/37680108/89560970-d030d300-d852-11ea-8060-585e7632469e.png" width="600" style="max-width: 100%;">
//         </li>
//       </ul>
//       <h2>커밋 메시지 컨벤션</h2>
//       <pre><code>type: subject

//       body

//       footer
//       </code></pre><br>
//       <h3>1) Commit Type</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>의미</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>feat</td>
//             <td>기능 (새로운 기능)</td>
//           </tr>
//           <tr>
//             <td>fix</td>
//             <td>버그 (버그 수정)</td>
//           </tr>
//           <tr>
//             <td>refactor</td>
//             <td>리팩토링 (네이밍 변경 포함)</td>
//           </tr>
//           <tr>
//             <td>style</td>
//             <td>스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)</td>
//           </tr>
//           <tr>
//             <td>docs</td>
//             <td>문서 (문서 추가, 수정, 삭제)</td>
//           </tr>
//           <tr>
//             <td>test</td>
//             <td>테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)</td>
//           </tr>
//           <tr>
//             <td>chore</td>
//             <td>기타 변경사항 (빌드 스크립트, 패키지 매니저 수정 등)</td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>cf) View에 대한 수정 -&gt; <strong>style</strong></p>
//       </blockquote>
//       <h3>2) Subject</h3>
//       <p>제목은 명령어로 작성한다. 마침표를 붙이지 않는다. 한글 및 영어 모두 사용 가능하다.</p>
//       <h3>3) Body (선택)</h3>
//       <p>부연 설명이나 커밋의 이유를 작성한다.</p>
//       <h3>4) Footer (선택)</h3>
//       <p>주로 이슈번호를 남긴다.</p>
//       <blockquote>
//         <p>ex) Issue: #00, Resolves: #00, See Also: #00, etc</p>
//       </blockquote>
//       <h3>5) References</h3>
//       <ul>
//         <li><a href="https://doublesprogramming.tistory.com/256" target="_blank">Git - 커밋 메시지 컨벤션</a></li>
//         <li><a href="https://junwoo45.github.io/2020-02-06-commit_template/" target="_blank">좋은 커밋 메시지를 작성하기 위한 커밋 템플릿 만들어보기</a></li>
//       </ul>
//       </div>`,
//     userId: 'test4',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-09-06 13:34',
//     likes: 2,
//     views: 3,
//     thumbnail: 'thumbnail4',
//     techIds: [3],
//   },
//   {
//     projectId: 5,
//     projectTitle: '오늘의 부동산',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <div align="center"><br>
//         <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/today-real-estate_logo.png" alt="오늘의 부동산" style="max-width: 100%;"><br>
//         <h1>오늘의 부동산</h1><br>
//       </div>
//       <h2>목차</h2>
//       <ol>
//         <li>[<strong>웹 서비스 소개</strong>]</li>
//         <li>[<strong>기술 스택</strong>]</li>
//         <li>[<strong>주요 기능</strong>]</li>
//         <li>[<strong>프로젝트 구성도</strong>]</li>
//         <li>[<strong>데모 영상</strong>]</li>
//         <li>[<strong>개발 팀 소개</strong>]</li>
//         <li>[<strong>개발 기간</strong>]</li>
//         <li><a href="#8" target="_blank"><strong>실행 방법</strong></a></li>
//       </ol><br>
//       <div id="1"></div>
//       <h2>💁 웹 서비스 소개</h2>
//       <p><a href="https://www.data.go.kr/data/15057511/openapi.do" target="_blank">공공 데이터 포탈</a>에서 제공하는 아파트 실거래가 데이터를 활용하여 사용자가 이사를 하고자 하는 동네에서의 아파트 매매 정보 및 주변 편의 시설 정보를 제공하는 <strong>부동산 서비스</strong></p><br>
//       <p><a href="https://github.com/today-real-estate/today-real-estate_front-end" target="_blank"><strong>🔗 '오늘의 부동산' Front-end 저장소로 바로가기 Click !</strong></a> 👈</p>
//       <blockquote>
//         <p>새 창 열기 방법 : CTRL+click (on Windows and Linux) | CMD+click (on MacOS)</p>
//       </blockquote><br>
//       <div id="2"></div>
//       <h2>🛠 기술 스택</h2>
//       <h3><strong>Front-end</strong></h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/sass-original.svg" alt="SCSS" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th>
//               <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">HTML5</td>
//             <td style="text-align: center;">CSS3</td>
//             <td style="text-align: center;">SCSS</td>
//             <td>JavaScript(ES6)</td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg" alt="Vue.js" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://yamoo9.github.io/vuex/images/vuex.png" alt="Vuex" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">Vue.js</td>
//             <td style="text-align: center;">Vuex</td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Ant Design" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">Ant Design</td>
//           </tr>
//         </tbody></table>
//       <h3><strong>Back-end</strong></h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F0101CE3E51A8D88901" alt="Jsoup" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://perfectacle.github.io/2018/07/22/spring-boot-2-env/thumb.png" alt="Spring boot" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">Java</td>
//             <td style="text-align: center;">Jsoup</td>
//             <td style="text-align: center;">Spring boot</td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://media.vlpt.us/images/wavvy1022/post/d05e49ea-341a-4e6a-80db-ff322533464a/jpa.png" alt="JPA" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">JPA</td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">MySQL</td>
//           </tr>
//         </tbody></table>
//       <h3><strong>Version Control</strong></h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="GitHub" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">Git</td>
//             <td style="text-align: center;">GitHub</td>
//           </tr>
//         </tbody></table><br>
//       <div id="3"></div>
//       <h2>💡 주요 기능</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">기능</th>
//             <th style="text-align: center;">내용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">지역별 아파트 매매 정보 제공 서비스</td>
//             <td style="text-align: center;">동 검색을 통한 아파트 매매 정보를 제공합니다.<br>시 · 구 · 동 옵션 선택을 통한 아파트 매매 정보를 제공합니다.</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">최저가 · 최고가 아파트 매매 정보 제공 서비스</td>
//             <td style="text-align: center;">검색한 지역별 아파트 목록에서의 최저가 · 최고가 매매 정보를 제공합니다.</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">선택한 아파트의 로드뷰 제공 서비스</td>
//             <td style="text-align: center;">선택한 아파트 주변의 카카오 로드뷰를 제공하여 사용자가 아파트 주변의 환경을 확인할 수 있는 서비스를 제공합니다.</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">주변 편의시설 정보 제공 서비스</td>
//             <td style="text-align: center;">은행 · 마트 · 약국 · 주유소 · 카페 · 편의점 정보들을 제공합니다.</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">관심목록 서비스</td>
//             <td style="text-align: center;">관심목록 등록을 통해 등록한 아파트 매물을 관심목록 페이지에서 한 번에 확인할 수 있습니다.</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">추천 매물 서비스</td>
//             <td style="text-align: center;">랜덤으로 아파트 매물을 추천합니다. (로그인 전)<br>사용자의 최근 검색어를 바탕으로 아파트 매물을 추천합니다. (로그인 후)</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">1대1 문의하기 서비스</td>
//             <td style="text-align: center;">고객센터에 1대1 문의를 할 수 있는 서비스입니다. (수정 및 삭제가 가능합니다.)<br>관리자 아이디로 로그인 시 모든 사용자들의 1대1 문의를 확인할 수 있으며 답글을 남기거나 삭제가 가능합니다.</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">오늘의 부동산 뉴스 제공 서비스</td>
//             <td style="text-align: center;">실시간 네이버 부동산 뉴스 페이지 크롤링을 통해 당일 부동산 뉴스를 사용자에게 제공합니다.</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">회원정보 수정 서비스</td>
//             <td style="text-align: center;">사용자가 이름 및 닉네임을 변경할 수 있는 회원정보 수정 서비스를 제공합니다.</td>
//           </tr>
//         </tbody></table><br>
//       <div id="4"></div>
//       <h2>📂 프로젝트 구성도</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">아키텍처(Architecture)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/architecture.png" alt="Architecture" width="1100px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">개체-관계 모델(ERD)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/ERD.png" alt="ERD" width="1100px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table><br>
//       <div id="5"></div>
//       <h2>🎥 데모 영상</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">메인 페이지 (로그인 전)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/main-page.gif" alt="메인 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>로그인 전에는 랜덤으로 매물을 추천합니다.</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">회원가입</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/signup-page.gif" alt="회원가입" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">로그인</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/login.gif" alt="로그인" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>아이디 저장 기능을 제공합니다.</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">시 · 구 · 동 옵션 선택을 통한 아파트 매매 정보 검색</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/search-with-select-option.gif" alt="시 · 구 · 동 옵션 선택을 통한 아파트 매매 정보 검색" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>검색된 목록에서 최저가 · 최고가 매물을 뱃지로 표시합니다.</p>
//       </blockquote>
//       <blockquote>
//         <p>상세 정보에서 아파트 주변의 로드뷰 기능을 제공합니다.</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">동 이름을 통한 아파트 매매 정보 검색</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/search-with-dong-name.gif" alt="동 이름을 통한 아파트 매매 정보 검색" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">최근 검색어를 기반으로 추천매물 서비스</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/recommendation.gif" alt="최근 검색어를 기반으로 추천매물 서비스" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">주변 편의시설 정보 제공 서비스</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/convenient-facilities.gif" alt="주변 편의시설 정보 제공 서비스" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>은행, 마트, 약국, 주유소, 카페, 편의점 정보를 제공하고 카카오 맵 상세 정보 페이지로도 링크를 제공합니다.</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">관심목록 서비스</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/liked-list.gif" alt="관심목록 서비스" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">1대1 문의 서비스 (등록, 조회, 수정, 삭제)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/inquiry.gif" alt="1대1 문의 서비스" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">운영진 1대1 문의 관리 서비스</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/inquiry-with-admin.gif" alt="운영진 1대1 문의 관리 서비스 " style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>운영진 계정으로 로그인 시 모든 사용자들이 남긴 1대1 문의들을 확인할 수 있고 답변을 등록하거나 삭제할 수 있습니다.</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">오늘의 부동산 뉴스 제공 서비스</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/today-news-page.gif" alt="오늘의 부동산 뉴스 제공 서비스" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>네이버 부동산 뉴스 페이지 실시간 크롤링을 통해 부동산 뉴스 정보와 링크를 제공합니다.</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">회원정보 수정 서비스</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/user-info.gif" alt="회원정보 수정 서비스" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">404 Not Found 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/404-not-found-page.gif" alt="404 Not Found 페이지 " style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>사용자가 URL을 직접 조작하여 잘못된 페이지로 이동하지 않도록 404 Not Found 페이지를 구현하였습니다.</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">스켈레톤 UI와 로딩 스핀 적용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/skeleton-ui.gif" alt="스켈레톤 UI와 로딩 스핀 적용" style="max-width: 100%;">
//             </td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/loading-spin.gif" alt="로딩 스핀 적용" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>더 나은 UX를 사용자에게 제공하기 위해 스켈레톤 UI와 로딩 스핀을 사용하여 단순히 빈 흰색 화면을 보여주지 않고 컨텐츠가 렌더링 되고 있음을 인지시킵니다.</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">첫 페이지 렌더링 속도 측정 (약 3초 이내)</th>
//           </tr>
//         </thead></table>
//       <p>|
//         <img src="https://github.com/today-real-estate/today-real-estate_front-end/raw/master/readme_assets/initial-rendering.gif" alt="첫 페이지 렌더링 속도 측정" style="max-width: 100%;"> |
//       </p>
//       <blockquote>
//         <p>싱글 페이지 애플리케이션의 단점인 초기 구동 속도가 느린 것을 보완하기 위해 첫 페이지에서 크롬의 동시 HTTP 요청 최대 건수 6건 이하로 HTTP 요청을 설계를 하여 첫 페이지 렌더링 속도를 약 3초 이하로 개발하였습니다.</p>
//       </blockquote>
//       <blockquote>
//         <p>첫 페이지 렌더링 속도가 5초가 넘어가게 되면 많은 사용자가 이탈한다는 통계 보고서를 참고하였습니다.</p>
//       </blockquote><br>
//       <div id="6"></div>
//       <h2>👪 개발 팀 소개</h2>
//       <table>
//         <tbody>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/JeongHwan-dev" target="_blank"><img src="https://avatars.githubusercontent.com/u/68452755?v=4" alt="박정환 프로필" width="150px" style="max-width: 100%;"></a></td>
//             <td style="text-align: center;"><a href="https://github.com/jhj960918" target="_blank"><img src="https://avatars.githubusercontent.com/u/65895403?v=4" alt="진형준 프로필" width="150px" style="max-width: 100%;"></a></td>
//           </tr>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/JeongHwan-dev" target="_blank">박정환<br>(Front-end)</a></td>
//             <td style="text-align: center;"><a href="https://github.com/jhj960918" target="_blank">진형준<br>(Back-end)</a></td>
//           </tr>
//         </tbody></table><br>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">이름</th>
//             <th style="text-align: center;">역할</th>
//             <th style="text-align: center;">개발 내용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">박정환</td>
//             <td style="text-align: center;">Front-end</td>
//             <td style="text-align: center;">지역별 아파트 매매 정보 검색 서비스 개발<br>아파트 상세 정보 제공 서비스 개발<br>최저가 · 최고가 정보 제공 서비스 개발<br>주변 편의시설 정보 제공 서비스 개발<br>추천 매물 서비스 개발<br>관심목록 서비스 개발<br>1대1 문의하기 서비스<br>오늘의 부동산 뉴스 제공 서비스 개발<br>로그인 및 회원가입 서비스 개발<br>회원정보 수정 서비스 개발</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">진형준</td>
//             <td style="text-align: center;">Back-end</td>
//             <td style="text-align: center;">지역별 아파트 매매 정보 검색 서비스 도메인 개발<br>추천 매물 서비스 도메인 개발<br>관심목록 서비스 도메인 개발<br>1대1 문의 서비스 도메인 개발<br>회원 관련 도메인 개발<br>관심목록 서비스 도메인 개발<br>오늘의 부동산 뉴스 크롤링<br>DB 설계</td>
//           </tr>
//         </tbody></table><br>
//       <div id="7"></div>
//       <h2>📅 개발 기간</h2>
//       <p>21.11.16. ~ 21.11.26. (11일)</p><br>
//       <div id="8"></div>
//       <h2>💻 실행 방법</h2>
//       <h3>client 실행</h3>
//       <ol>
//         <li><strong>원격 저장소 복제</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ git clone https://github.com/today-real-estate/today-real-estate_front-end.git
//       </code></pre>
//       <ol start="2">
//         <li><strong>프로젝트 폴더로 이동</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ cd today-real-estate_front-end
//       </code></pre>
//       <ol start="3">
//         <li><strong>필요한 node_modules 설치</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ npm install
//       </code></pre>
//       <ol start="4">
//         <li><strong>개발 서버 실행</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ npm run serve
//       </code></pre><br>
//       <h3>server 실행</h3>
//       <ol>
//         <li><strong>원격 저장소 복제</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ git clone https://github.com/today-real-estate/today-real-estate_back-end.git
//       </code></pre>
//       <ol start="2">
//         <li><strong>프로젝트 폴더로 이동</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ cd today-real-estate_back-end
//       </code></pre>
//       <ol start="3">
//         <li><strong>main 메서드 실행하기</strong></li>
//       </ol>
//       </div>`,
//     userId: 'test5',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-09-08 13:34',
//     likes: 23,
//     views: 23,
//     thumbnail: 'thumbnail5',
//     techIds: [1, 2, 3],
//   },
//   {
//     projectId: 6,
//     projectTitle: '실시간 날씨 현황 확인 사이트',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>WeatherApp</h1>
//       <blockquote>
//         <p>날씨 OpenAPI를 이용해서 Apple 기본 날씨앱 또는 Yahoo 날씨앱과 유사한 기능셋을 구현하기</p>
//       </blockquote>
//       <p>&nbsp;</p>
//       <h3>Index</h3>
//       <ul>
//         <li><a href="#%EA%B8%B0%EB%8A%A5" target="_blank">기능</a></li>
//         <li><a href="#%EC%84%A4%EA%B3%84-%EB%B0%8F-%EA%B5%AC%ED%98%84" target="_blank">설계 및 구현</a></li>
//         <li><a href="#trouble-shooting" target="_blank">trouble shooting</a></li>
//         <li><a href="#%EA%B4%80%EB%A0%A8-%ED%95%99%EC%8A%B5-%EB%82%B4%EC%9A%A9" target="_blank">학습한 내용</a></li>
//       </ul>
//       <hr>
//       <p float="left">
//         <img src="https://raw.githubusercontent.com/daheenallwhite/WeatherApp/master/images/display-1.gif" width="250" style="max-width: 100%;">
//         <img src="https://raw.githubusercontent.com/daheenallwhite/WeatherApp/master/images/display-2.gif" width="250" style="max-width: 100%;">
//         <img src="https://raw.githubusercontent.com/daheenallwhite/WeatherApp/master/images/display-3.gif" width="250" style="max-width: 100%;">
//       </p>
//       <p>&nbsp;</p>
//       <hr>
//       <h2>기능</h2>
//       <ul>
//         <li><a href="#%EB%82%A0%EC%94%A8-%EC%A0%95%EB%B3%B4" target="_blank">날씨 정보</a></li>
//         <li><a href="#%EC%9E%A5%EC%86%8C-%EC%A0%80%EC%9E%A5-%EB%A6%AC%EC%8A%A4%ED%8A%B8" target="_blank">장소 저장 리스트</a></li>
//         <li><a href="#%EC%9E%A5%EC%86%8C-%EA%B2%80%EC%83%89-%EB%B0%8F-%EC%B6%94%EA%B0%80" target="_blank">장소 검색 및 추가</a></li>
//         <li><a href="#%EC%98%A8%EB%8F%84-%EB%8B%A8%EC%9C%84-%EC%84%A4%EC%A0%95" target="_blank">온도 단위 설정</a></li>
//         <li><a href="#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%84%A4%EC%A0%95-%EC%A0%80%EC%9E%A5" target="_blank">사용자 설정 저장</a></li>
//       </ul>
//       <h3>날씨 정보</h3>
//       <p>위치 리스트(현재 위치 + 저장된 위치)의 날씨를 각각 가로 스크롤로 전환하여 조회 가능</p>
//       <p>
//         <img src="./images/display-4.gif" alt="" style="max-width: 100%;">
//       </p>
//       <h3>장소 저장 및 리스트 조작</h3>
//       <p>추가했던 장소 리스트를 볼 수 있고, 삭제할 수 있다</p>
//       <p>
//         <img src="./images/display-5.gif" alt="" style="max-width: 100%;">
//       </p>
//       <h3>장소 검색 및 추가</h3>
//       <p>원하는 장소를 검색하여 추가하고, 관련 날씨 정보를 볼 수 있다</p>
//       <p>
//         <img src="./images/display-6.gif" alt="" style="max-width: 100%;">
//       </p>
//       <h3>온도 단위 설정</h3>
//       <p>온도 단위를 <strong>섭씨 혹은 화씨</strong>로 변환하여 볼 수 있다</p>
//       <p>
//         <img src="./images/display-7.gif" alt="" style="max-width: 100%;">
//       </p>
//       <h3>사용자 설정 저장</h3>
//       <p>다음 설정을 저장하여 앱을 다시 실행시, 기존의 설정대로 실행되도록 한다</p>
//       <table>
//         <thead>
//           <tr>
//             <th>추가한 장소</th>
//             <th>온도 단위 설정</th>
//             <th>마지막으로 본 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <img src="./images/display-8.gif" alt="" style="max-width: 100%;">
//             </td>
//             <td>
//               <img src="./images/display-9.gif" alt="" style="max-width: 100%;">
//             </td>
//             <td>
//               <img src="./images/display-10.gif" alt="" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <p>&nbsp;</p>
//       <hr>
//       <h2>설계 및 구현</h2>
//       <h3>View Controller 구성</h3>
//       <p>
//         <img src="./images/implementation-1.jpeg" alt="" style="max-width: 100%;">
//       </p>
//       <p>&nbsp;</p>
//       <h3>날씨 모델과 View - MVVM</h3>
//       <h4>WeatherViewController - WeatherViewModel</h4>
//       <p>
//         <img src="./images/implementation-2.jpeg" alt="" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>ViewModel 의 view 관련 type 에 Observer 를 등록할 수 있는 타입을 구현
//           <ul>
//             <li><code>Observable</code> protocol</li>
//             <li>ViewModel - CurrentWeather, HourlyWeatherItem, DailyWetherItem, DetailWeather 대상 data 변화에 대해 observer 를 등록할 수 있다</li>
//             <li>observer handler 에 관련 view 나 label text 를 변경할 수 있는 함수를 등록</li>
//             <li>view model 변경시에 해당 observer가 실행되어 view 도 같이 그에 맞게 업데이트 된다</li>
//           </ul>
//         </li>
//       </ul>
//       <p>&nbsp;</p>
//       <h3>역할 분배</h3>
//       <h4>view 관련</h4>
//       <table>
//         <thead>
//           <tr>
//             <th>class / struct</th>
//             <th>역할</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><code>PageViewController</code></td>
//             <td>LocationManager 사용해서 받은 현재위치를 포함하여, 저장된 위치의 날씨를 보여줄 WeatherViewController 를 보여준다</td>
//           </tr>
//           <tr>
//             <td><code>WeatherViewController</code></td>
//             <td>Location 객체에 해당하는 위치 정보를 보여준다</td>
//           </tr>
//           <tr>
//             <td><code>WeatherViewModel</code></td>
//             <td>- OpenWeatherMapService 를 이용하여 위치에 맞는 날씨 정보를 가져온다<br>- WeatherBuilder 객체를 통해 가져온 정보를 view 에 필요한 데이터 타입들로 만든다</td>
//           </tr>
//           <tr>
//             <td><code>WeatherBuilder</code></td>
//             <td>네트워킹을 통해 받아온 <code>WeatherData</code> 객체를 view model 의 각 필요에 맞게 가공한다</td>
//           </tr>
//           <tr>
//             <td><code>LocationListViewController</code></td>
//             <td>- 저장된 위치를 사용자에게 보여준다<br>- 저장된 위치를 삭제한다<br>- 온도 단위를 바꾼다<br>- SearchViewController 를 보여준다</td>
//           </tr>
//           <tr>
//             <td><code>SearchViewController</code></td>
//             <td>- 사용자 검색 문자열을 사용하여 위치 자동완성<br>- 사용자가 선택한 위치 정보(장소이름, 위도, 경도) 를 LocationViewController delegate 통해 넘긴다</td>
//           </tr>
//           <tr>
//             <td><code>Observable</code></td>
//             <td>- ViewModel 의 각 데이터 타입에 observer 기능을 구현하기 위한 generic type<br>- <code>WeatherViewModel</code> 에서 observer 등록이 필요한 속성에 사용됨</td>
//           </tr>
//         </tbody></table>
//       <h4>Utilities</h4>
//       <table>
//         <thead>
//           <tr>
//             <th>class / struct</th>
//             <th>역할</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><code>LocationManager</code></td>
//             <td>CLLocationManager 사용하여 현재 위치 가져오기</td>
//           </tr>
//           <tr>
//             <td><code>OpenWeatherMapService</code></td>
//             <td>- 네트워킹 통한 날씨 예측 정보 가져오기<br>- <code>WeatherData</code> 타입으로 json decoding 하기</td>
//           </tr>
//           <tr>
//             <td><code>WeatherBuilder</code></td>
//             <td><code>WeatherData</code> → <code>WeatherViewModel</code> 이 가진 각 type으로 데이터 가공</td>
//           </tr>
//           <tr>
//             <td><code>WindDirection</code></td>
//             <td>바람의 방향 값(360도 내)을 compass direction으로 변환</td>
//           </tr>
//           <tr>
//             <td><code>DateConverter</code></td>
//             <td>주어진 timezone 을 사용하여 문자열로 된 날짜를 변환해 주는 역할</td>
//           </tr>
//         </tbody></table>
//       <p>&nbsp;</p>
//       <h3>Weather Model Hierarchy</h3>
//       <p>
//         <img src="./images/weather-hierarchy.png" alt="" style="max-width: 100%;">
//       </p>
//       <p>&nbsp;</p>
//       <h3>ViewController 간 Data 주고 받기 - Delegate 사용</h3>
//       <p><a href="#view-controller-%EC%96%91%EB%B0%A9%ED%96%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EB%8B%AC" target="_blank"><em>관련 학습한 내용- 1</em></a> <a href="https://daheenallwhite.github.io/ios/2019/07/22/Delegation/" target="_blank"><em>관련 학습한 내용- 2</em></a></p>
//       <p>view controller 간 데이터를 backward 로 받기 위해서, delegate protocol 을 구현하여 사용</p>
//       <p>
//         <img src="./images/implementation-delegate.jpg" alt="" style="max-width: 100%;">
//       </p>
//       <p>&nbsp;</p>
//       <h3>현재 위치 - CLLocationManager 활용</h3>
//       <blockquote>
//         <p><code>LocationMagnager</code> class 로 구현</p>
//       </blockquote>
//       <h4>위치 가져오는 과정</h4>
//       <ol>
//         <li><code>CLLocationManager</code> 객체 생성</li>
//         <li>location 데이터의 정확도 설정 : <code>desiredAccuracy</code> property 설정</li>
//         <li>사용자에게 위치정보 사용 허가 받기 : <code>requestWhenInUseAuthorization()</code> method</li>
//         <li>위치 요청이 가능한 허가 상태 <code>CLAuthorizationStatus</code> : <code>.authorizedWhenInUse</code> / <code>.authorizedAlways</code></li>
//         <li>위치 요청: <code>requestLocation()</code>
//           <ul>
//             <li>해당 method는 즉각 return 한다</li>
//             <li>위치 값을 얻은 후, delegate 의 <code>didUpdateLocation</code> method 를 호출한다</li>
//           </ul>
//         </li>
//         <li>Delegate method - <code>didUpdateLocation</code></li>
//       </ol>
//       <p>&nbsp;</p>
//       <h3>날씨 정보 받아오기 &amp; 파싱하기 - OpenWeather API / URLSession / Codable</h3>
//       <blockquote>
//         <p><a href="https://openweathermap.org/forecast5" target="_blank">5 days / 3 hours forecast api</a></p>
//       </blockquote>
//       <p><em>API JSON 구조 (orange color : 배열 구조)</em></p>
//       <p>
//         <img src="./images/api-data-structure.png" alt="" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li><a href="#url-loading-system" target="_blank">URLSession 학습한 내용</a></li>
//         <li>Codable : <code>Data</code> → <code>WeatherData</code> 변환하기
//           <ul>
//             <li><code>WeatherData</code> 는 <code>Codable</code> protocol 을 준수</li>
//             <li><code>JSONDecoder</code> 사용하여 변환</li>
//           </ul>
//         </li>
//       </ul>
//       <p>&nbsp;</p>
//       <h3>장소 검색 &amp; 자동완성 - MKLocalSearchCompleter</h3>
//       <blockquote>
//         <p>문자열로 위치를 제공하면 그에 맞는 자동완성된 comletion string list 를 제공하는 utility 객체</p>
//       </blockquote>
//       <ul>
//         <li>
//           <p>구현 원리</p>
//           <p>
//             <img src="./images/implementation-search.jpeg" alt="" style="max-width: 100%;">
//           </p>
//         </li>
//         <li>
//           <p><code>results</code> property : <code>MKLocalSearchCompleter</code> 의 자동완성 처리된 데이터를 얻는 속성</p>
//           <ul>
//             <li><code>MKLocalSearchCompletion</code> type</li>
//             <li>직접 생성할 수는 없다. Completer 에 의해서만 생성되는 객체</li>
//           </ul>
//         </li>
//         <li>
//           <p>completion 될 대상 지정 방법</p>
//           <ul>
//             <li>위치 문자열, 지역, 필터 타입 등을 지정할 수 있다.</li>
//             <li>도시명 검색 : <code>queryFragment</code> property 에 사용자가 입력하는 문자열 설정</li>
//             <li>필터 타입 : locationAndQueries / locationsOnly</li>
//           </ul>
//         </li>
//         <li>
//           <p>delgate : search completion data 를 가져오기 위한 메소드가 정의됨</p>
//           <ul>
//             <li><code>MKLocalSearchCompleterDelegate</code></li>
//             <li><code>completerDidUpdateResults()</code> 메소드 : completer 가 검색 완성 배열을 업데이트 한 뒤 호출하는 메소드.</li>
//             <li>이 메소드 안에 search 결과 table view 를 reload 하도록 구현함</li>
//           </ul>
//         </li>
//       </ul>
//       <p>&nbsp;</p>
//       <h3>사용자 설정 저장 - UserDefaults</h3>
//       <p><a href="" target="_blank"><em>관련 학습한 내용</em></a></p>
//       <p>사용자 설정 항목</p>
//       <ul>
//         <li>마지막으로 본 날씨의 위치</li>
//         <li>사용자가 저장한 위치 리스트</li>
//         <li>온도 단위 선택 정보</li>
//       </ul>
//       <p>UserDefaults 에 사용될 key 관리하는 struct <code>DataKeys</code></p>
//       <p>&nbsp;</p>
//       <h3>API 데이터 기반 시간 구하기</h3>
//       <p>API 에서 받아온 date &amp; time (UTC 표준) → 각 나라별 시간으로 변환하기</p>
//       <ol>
//         <li><code>list.dt_text</code> string (utc 단위 시간) → <code>Date</code> 객체로 변환</li>
//         <li><code>city.timezone</code> : 해당 도시의 시간을 UTC로부터 변환하기 위한 차이값. 단위는 초</li>
//         <li>각 도시의 시간 = <code>list.dt_txt</code> 를 date로 변환한 객체 + <code>city.timezone</code></li>
//         <li>차이값 더해주기 : <code>Date</code> - <code>addingTimeInterval()</code> method 사용</li>
//       </ol>
//       <p>&nbsp;</p>
//       <h3>온도 단위 설정대로 정보 보여주기 - Singleton 활용</h3>
//       <ul>
//         <li>
//           <p>Singleton 으로 구현한 이유</p>
//           <ul>
//             <li>view controller 뿐만 아니라 날씨 관련된 거의 모든 data model 에서 온도와 관련된 부분이 많음</li>
//             <li>Singleton 통해서 하나의 인스턴스로 사용자가 설정한 온도 단위를 이용하는게 적절하다고 판단</li>
//           </ul>
//         </li>
//         <li>
//           <p><code>TemperatureUnit</code> 의 <code>shared</code> property 로 단위 접근 가능</p>
//         </li>
//       </ul>
//       <p>&nbsp;</p>
//       <hr>
//       <h2>Trouble Shooting</h2>
//       <h3>Page View Controller 에서 계속해서 WeatherViewController 를 생성하는 문제</h3>
//       <ul>
//         <li>문제상황
//           <ul>
//             <li>PageViewController 에서 swipe 에 따른 이전/이후 페이지 요청시마다 새롭게 view controller instance (WeatherViewController) 를 생성</li>
//             <li>메모리 부하로 인해 갑자기 꺼지는 현상</li>
//           </ul>
//         </li>
//         <li>해결 방법 : <strong>View Controller Caching - NSCache</strong>
//           <ul>
//             <li>
//               <p>NSCache</p>
//               <ul>
//                 <li>캐싱을 구현한 클래스로 mutable dictionary type 처럼 사용할 수 있다 - key 를 통해 캐싱한 인스턴스 접근 가능</li>
//                 <li>디바이스가 메모리 부족을 겪을 때 이 캐시에 있는 인스턴스의 메모리 공간을 자동으로 회수함</li>
//               </ul>
//               <pre><code class="language-swift">var cachedWeatherViewControllers = NSCache&lt;NSNumber, WeatherViewController&gt;()
//       </code></pre>
//             </li>
//             <li>
//               <p>view controller를 한번 생성한 뒤, caching 하여 이후의 view controller 의 요청이 있을 때, 이미 인스턴스가 있다면 이를 반환하는 기능을 구현</p>
//             </li>
//             <li>
//               <p>PageViewController 에서 캐싱한 WeatherViewController 인스턴스 관리</p>
//               <ul>
//                 <li>Key: page index (<code>NSNumber</code> type)</li>
//                 <li>Value: <code>WeatherViewController</code> instance</li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//       </ul>
//       <p>&nbsp;</p>
//       <h3>마지막으로 본 위치를 리스트에서 삭제할 경우</h3>
//       <ul>
//         <li>문제상황
//           <ul>
//             <li>마지막으로 날씨 정보를 본 위치를 리스트에서 삭제할 경우, 다시 page view 로 돌아갔을 때 page index 가 불일치 하는 현상</li>
//           </ul>
//         </li>
//         <li>해결 방법
//           <ul>
//             <li>삭제시 위치정보의 index 가 마지막일 경우, 마지막으로 본 list index 를 0으로 설정한다.</li>
//           </ul>
//         </li>
//       </ul>
//       <p>&nbsp;</p>
//       <h3>API 에서 받아온 데이터 - 시간별 O 일별 X</h3>
//       <ul>
//         <li>문제상황
//           <ul>
//             <li>open weather map 의 5일 / 3시간 api 에는 3시간 마다의 날씨 예측 정보는 있지만, 일별 예측 정보는 없다.</li>
//             <li>따라서, 3시간 마다의 데이터를 일별로 분류하고 이를 다시 가공하는 절차가 필요</li>
//           </ul>
//         </li>
//         <li>해결방법
//           <ul>
//             <li><code>WeatherData</code> → <code>WeatherViewModel</code> 이 가진 각 model 별로 가공하는 역할을 담당하는 클래스 구현</li>
//             <li><code>WeatherBuilder</code></li>
//             <li>3시간 별 데이터를 일자별로 모아서, 일자별 최대/최소 온도를 계산 → <code>HourlyWeatherItem</code> 으로 만들기</li>
//           </ul>
//         </li>
//       </ul>
//       <p>&nbsp;</p>
//       <hr>
//       <h2>관련 학습 내용</h2>
//       <h3>URL Loading System</h3>
//       <blockquote>
//         <p>표준 인터넷 프로토콜을 사용하여 서버와 url 로 소통하는 방식</p>
//       </blockquote>
//       <p>URL로 확인할 수 있는 리소스에 접근하는 방식을 URL Loading System 이라 한다.</p>
//       <p>resource loading 은 <strong>asynchronously</strong> (<strong>비동기</strong>) 로 수행되므로, 유저의 이벤트에 응답할 수 있고 들어오는 데이터나 에러를 처리할 수 있다.</p>
//       <h4>URLSession</h4>
//       <blockquote>
//         <p>Url 로 request 를 보내거나 받는 일을 담당하는 객체</p>
//       </blockquote>
//       <ul>
//         <li>설정 : <code>URLSessionConfiguration</code>
//           <ul>
//             <li>default</li>
//             <li>ephemeral</li>
//             <li>background</li>
//           </ul>
//         </li>
//         <li><code>URLSession</code> instance 는 <code>URLSessionTask</code> 인스턴스를 한개 이상 생성하여 사용한다.
//           <ul>
//             <li>GET request 통해 데이터를 받아오는 일 : <code>URLSessionDataTask</code></li>
//             <li>POST / PUT request 통해 파일을 업로드 하는 일 : <code>URLSessionUploadTask</code></li>
//             <li>원격 서버에서 파일을 다운로드 해오는 일 : <code>URLSessionDownloadTask</code></li>
//           </ul>
//         </li>
//         <li>Task 상태
//           <ul>
//             <li>suspend</li>
//             <li>resume</li>
//             <li>cancel</li>
//           </ul>
//         </li>
//         <li>URLSession 이 데이터를 반환하는 두가지 방법 (비동기적으로 수행되므로, 끝남을 알리는 방법)
//           <ol>
//             <li>completion handler - task 가 끝날 때 실행됨</li>
//             <li>delegate 의 method 호출</li>
//           </ol>
//         </li>
//       </ul>
//       <h4>URLComponents</h4>
//       <blockquote>
//         <p>URL 을 구성하는 요소들을 구조체로 나타냄</p>
//       </blockquote>
//       <ul>
//         <li>queryItem property : URLQueryItem (name -value 짝으로 구성되어 URL 의 query 부분을 담당)</li>
//         <li>url property : 구성요소들로부터 생성된 URL</li>
//       </ul>
//       <h3>네트워크</h3>
//       <p>데이터를 URL 로부터 가져오려면</p>
//       <ul>
//         <li>어떤 데이터를 주세요 : request</li>
//         <li>응답 : reponse</li>
//       </ul>
//       <h4>URLSession 활용한 data GET</h4>
//       <pre><code class="language-swift">func dataTask(with url: URL,
//       completionHandler: @escaping (Data?, URLResponse?, Error?) -&gt; Void) -&gt; URLSessionDataTask
//       </code></pre>
//       <ul>
//         <li><code>shared</code> : singleton URLSession instance - 간단한 request 용도</li>
//       </ul>
//       <pre><code class="language-swift">let task = URLSession.shared.dataTask(with: url) {
//         // completion handler
//       }
//       </code></pre>
//       <ul>
//         <li>
//           <p>Data : bytes or nil(error)</p>
//         </li>
//         <li>
//           <p>reponse: reponse 의 구현체. HTTPURLReponse 로 타입 캐스팅 가능</p>
//         </li>
//         <li>
//           <p>error: error 발생시 값 있음. Nil 이면 성공</p>
//         </li>
//         <li>
//           <p>네트워크 종료시 resume()</p>
//         </li>
//       </ul>
//       <h3>GCD (Grand Central Dispatch)</h3>
//       <p>비동기 수행을 원할 때, main queue(main flow) 말고 다른 수행 queue 로 작업을 보내고 싶을 때 사용</p>
//       <p>main queue : system 이 제공하는 queue로 모든 UI code 가 수행되어야 하는 곳</p>
//       <pre><code class="language-swift">var items: [Item]?

//       DispatchQueue.main.async {
//           items = findItems(matching: "News")
//       }
//       // async 클로져가 실행 완료 될 때, item 에 값이 할당 된다.
//       // 단순히 저 선언문 지나갔다고 실행 완료된게 아님
//       </code></pre>
//       <p>network request 같은 무거운 작업을 할 때는 background queue 에서 실행되는게 앱의 main 에서 실행되는것보다 권장됨. - UI 는 다른 일을 하는 동안 무거운 작업들을 뒤에서 할 수 있으므로</p>
//       <h3>View Controller 양방향 데이터 전달</h3>
//       <ul>
//         <li>view controller present 관계
//           <ul>
//             <li>presenting view controller : 나(view controller) 를 띄워준, 보여준 view controller</li>
//             <li>presented view controller : 내가 (view controller) present 하는, 띄운, 보여준 view controller</li>
//           </ul>
//         </li>
//       </ul>
//       <p>
//         <img src="https://github.com/daheenallwhite/swift-photoframe/raw/daheenallwhite/images/vc-relationship.jpeg" alt="" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>view controller 간 데이터 전달
//           <ul>
//             <li>보여줄 view controller 인스턴스를 생성하여 <code>present()</code> method</li>
//             <li>다시 현재의 view controller 를 보여준 이전의 view controller 로 데이터를 보내려면? delegate 통해 전달~전달
//               <ul>
//                 <li>쉽게 말해서 새로운 view controller 를 instantiate 해서 present 하기 전에 내가 널 보냈다는 연결을 delegate 를 통해 하는 것이다</li>
//                 <li>그 연결 방식은 protocol 을 통해서 해당 protocol을 구현한 타입이라면 누구나 delegate 로 소통할 수 있다는 뜻이다.</li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//       </ul>
//       <h3>UserDefaults</h3>
//       <p>앱의 data 를 백그라운드 상태 혹은 종료시에도 없어지지 않고 persistent(영구) 보존할 수 있도록 해주는 user default database</p>
//       <ul>
//         <li>key-value 형태로 저장된다. Key 는 String 만 가능</li>
//         <li>저장 가능한 Value 형태 : NSData, NSString, NSNumber, NSArray, NSDictionary</li>
//         <li>특성
//           <ul>
//             <li>UserDefaults 통해 가져온 데이터는 immutable</li>
//             <li>plist extension 으로 저장됨</li>
//             <li>app launch 될 때, memory 에 올라온다.</li>
//           </ul>
//         </li>
//         <li>UserDefaults 변경에 알림을 받고 싶다면
//           <ul>
//             <li>didChangeNotification 에 observer 를 등록하면 된다.</li>
//           </ul>
//         </li>
//       </ul>
//       </div>`,
//     userId: 'test6',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-09-10 13:34',
//     likes: 3,
//     views: 13,
//     thumbnail: 'thumbnail6',
//     techIds: [7],
//   },
//   {
//     projectId: 7,
//     projectTitle: '백엔드 없는 태스크 플래너 플러터 앱',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h2>Flutter Task Planner App Design</h2>
//       <p>
//         Task Planner App is built in flutter. App design is based on <a href="https://dribbble.com/shots/10951333/attachments/2566966?mode=media" target="_blank">Task Planner App</a> designed by <a href="https://dribbble.com/purrwebui" target="_blank">Purrweb UI</a>.
//         This app is static. I mean, This is a UI design. No backend.
//       </p>
//       <h2>Screenshots</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">HomePage</th>
//             <th style="text-align: center;">Calendar Page</th>
//             <th style="text-align: center;">Task Create Page</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/TheAlphaApp/flutter-task-planner-app/blob/master/screenshots/screenshot1.jpg?raw=true" alt="" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">
//               <img src="https://github.com/TheAlphaApp/flutter-task-planner-app/blob/master/screenshots/screenshot2.jpg?raw=true" alt="" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">
//               <img src="https://github.com/TheAlphaApp/flutter-task-planner-app/blob/master/screenshots/screenshot3.jpg?raw=true" alt="" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <h2>Pull Requests</h2>
//       <p>I welcome and encourage all pull requests. It usually will take me within 24-48 hours to respond to any issue or request.</p>
//       <h2>Created &amp; Maintained By</h2>
//       <p><a href="https://github.com/TheAlphaApp" target="_blank">Sourav Kumar Suman</a></p>
//       <h2>Support Me</h2>
//       <p>I am from different profession but fall in love with programming. I make this in my free time.</p>
//       <h2>Getting Started</h2>
//       <p>A few resources to get started if this is your first Flutter project:</p>
//       <ul>
//         <li><a href="https://flutter.dev/docs/get-started/codelab" target="_blank">CodeLab: Write your first Flutter app</a></li>
//         <li><a href="https://flutter.dev/docs/cookbook" target="_blank">Cookbook: Useful Flutter samples</a></li>
//       </ul>
//       <p>
//         For help getting started with Flutter, view
//         <a href="https://flutter.dev/docs" target="_blank">online documentation</a>, which offers tutorials,
//         samples, guidance on mobile development, and a full API reference.
//       </p>
//       </div>`,
//     userId: 'test7',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-08-06 13:34',
//     likes: 543,
//     views: 1233,
//     thumbnail: 'thumbnail7',
//     techIds: [7, 8, 9],
//   },
//   {
//     projectId: 8,
//     projectTitle: '아동 급식 카드 가맹점을 조회할 수 있는 앱 `드림트리`',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h3 align="center">🏆 제 12기 SW 마에스트로 해커톤 2등 수상 🏆</h3>
//       <h1 align="center">🌳 DreamTree 🌳</h1>
//       <p align="center">
//         <img width="50%" src="https://user-images.githubusercontent.com/54823396/118192618-60a2e080-b481-11eb-881d-eeba9102ea6c.png" style="max-width: 100%;">
//       </p>
//       <p align="center"><a href="https://dreamtree-front-vlgsh.run.goorm.io" target="_blank">DreamTree 웹 바로가기</a> &amp; <a href="https://dreamtree-front-vlgsh.run.goorm.io/apk/apkQR.png" target="_blank">DreamTree 앱 다운받기</a></p>
//       <h1>Android Application</h1>
//       <h2>💬 Language</h2>
//       <p><code>Kotlin</code></p>
//       <h2>🔎 Architecture</h2>
//       <p><code>MVVM</code></p>
//       <h2>🛠️ Technical Stack</h2>
//       <p><code>AAC</code>, <code>Koin</code>, <code>Databinding</code>, <code>Retrofit</code>, <code>RxJava</code>, <code>Okhttp</code>, <code>Glide</code>, <code>NaverMap</code></p>
//       <h2>📷 Screenshot</h2>
//       <ul>
//         <li><strong>항공뷰 &amp; 시티뷰</strong></li>
//       </ul>
//       <p>
//         <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193250-5a613400-b482-11eb-962a-c87f21cce769.jpg" style="max-width: 100%;">
//         <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193246-59300700-b482-11eb-92fe-f3d915c4b450.jpg" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li><strong>반경거리조절</strong></li>
//       </ul>
//       <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193237-559c8000-b482-11eb-8296-07039bd2a1a9.jpg" style="max-width: 100%;">
//       <ul>
//         <li><strong>마커 클러스터링</strong></li>
//       </ul>
//       <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193248-59c89d80-b482-11eb-8d61-46334da7970a.jpg" style="max-width: 100%;">
//       <ul>
//         <li><strong>검색 기능</strong></li>
//       </ul>
//       <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193222-503f3580-b482-11eb-98c0-7e717fc7b7b1.jpg" style="max-width: 100%;">
//       <ul>
//         <li><strong>가맹점 상세정보 조회</strong></li>
//       </ul>
//       <p>
//         <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193242-57664380-b482-11eb-84eb-6891cd4f4e12.jpg" style="max-width: 100%;">
//         <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193243-57feda00-b482-11eb-8465-c78179249266.jpg" style="max-width: 100%;">
//         <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193244-58977080-b482-11eb-9204-e639b803a6e3.jpg" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li><strong>잔액조회</strong></li>
//       </ul>
//       <img width="30%" src="https://user-images.githubusercontent.com/54823396/118193247-59c89d80-b482-11eb-9258-7c8635d92e6f.jpg" style="max-width: 100%;">
//       <h1>Web Application</h1>
//       <h2>💬 Language</h2>
//       <p><code>Javascript</code></p>
//       <h2>🔎 Architecture</h2>
//       <p><code>MVVM</code></p>
//       <h2>🛠️ Technical Stack</h2>
//       <p><code>VueJS</code> <code>Vuetify</code> <code>vue-naver-maps</code> <code>Axios</code></p>
//       <h2>📷 Screenshot</h2>
//       <ul>
//         <li><strong>메인뷰</strong></li>
//       </ul>
//       <img width="1680" height="500" alt="기본화면" src="https://user-images.githubusercontent.com/12512382/118198729-6a7e1100-b48c-11eb-918e-8c3b5c2e1b06.png" style="max-width: 100%;">
//       <ul>
//         <li><strong>검색 기능</strong></li>
//       </ul>
//       <img width="1680" height="500" alt="상세검색화면" src="https://user-images.githubusercontent.com/43667316/118195589-72d34d80-b486-11eb-8cf2-e347b0e03cbc.png" style="max-width: 100%;">
//       <img width="1680" height="500" alt="없는가게" src="https://user-images.githubusercontent.com/43667316/118196283-bbd7d180-b487-11eb-9f58-96fe2f4e1ca6.png" style="max-width: 100%;">
//       <ul>
//         <li><strong>가맹점 상세정보 조회</strong></li>
//       </ul>
//       <img width="1680" height="500" alt="가게상세정보" src="https://user-images.githubusercontent.com/43667316/118196165-80d59e00-b487-11eb-971c-d10f2a809cf2.png" style="max-width: 100%;">
//       <img width="1680" height="500" alt="메뉴없음" src="https://user-images.githubusercontent.com/43667316/118196457-00636d00-b488-11eb-8595-e16181d1d3da.png" style="max-width: 100%;">
//       <ul>
//         <li><strong>위치기반 가맹점탐색</strong></li>
//       </ul>
//       <img width="1680" height="500" alt="메뉴없음" src="https://user-images.githubusercontent.com/43667316/118197278-921faa00-b489-11eb-9b47-43968c3f69be.gif" style="max-width: 100%;">
//       <h1>Server</h1>
//       <h2><strong>💬&nbsp;Language</strong></h2>
//       <p><code>Javascript</code></p>
//       <h2><strong>🔎 Architecture</strong></h2>
//       <p><code>REST</code></p>
//       <h2><strong>🛠️&nbsp;Technical Stack</strong></h2>
//       <p><code>Node.js</code>&nbsp;<code>Express</code>&nbsp;<code>mongoDB</code> <code>naverMaps-api-Geocoding</code></p>
//       <h2>💻&nbsp;<strong>APIs</strong></h2>
//       <h3>1. 꿈나무 카드 가맹점 전체 조회 쿼리</h3>
//       <pre><code>index router를 통해 마포구에 있는 가게들의 전체 데이터를 받아옵니다.
//       공공데이터 '꿈나무카드가맹점 현황'과 naver-Maps-Geocoding으로 데이터 생성
//       </code></pre>
//       <ul>
//         <li><strong>HTTP Method:</strong> <code>GET</code></li>
//         <li><strong>Endpoint:</strong> <code>https://dreamtree-dywzy.run.goorm.io/</code></li>
//       </ul>
//       <h3>2. 위경도 기반 주변 가맹점 정보 쿼리</h3>
//       <pre><code>위치 정보 (위도, 경도, 거리)를 전달하여 현재 위치로부터
//       거리 안에 있는 모든 가게 들 중 가까운 가게부터 데이터를 받아옵니다.
//       </code></pre>
//       <ul>
//         <li><strong>HTTP Method:</strong> <code>GET</code></li>
//         <li><strong>Endpoint:</strong> <code>https://dreamtree-dywzy.run.goorm.io/location?latitude={latitude}&amp;logitude={logitude}&amp;distance={distance}</code></li>
//       </ul>
//       <h3>3. 키워드(업체명) 검색 기반 가맹점 정보 쿼리</h3>
//       <pre><code>업체명 중 일부를 쿼리 파라미터로 전달하여
//       가맹점 정보를 받아옵니다(검색 기능).
//       </code></pre>
//       <ul>
//         <li><strong>HTTP Method:</strong> <code>GET</code></li>
//         <li><strong>Endpoint:</strong> <code>https://dreamtree-dywzy.run.goorm.io/keyword?storename={storename}</code></li>
//       </ul>
//       <h1>✋ Part</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Part</th>
//             <th>Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><strong>Front-end</strong></td>
//             <td>이지훈, 황수민</td>
//           </tr>
//           <tr>
//             <td><strong>Android</strong></td>
//             <td>김현준, 박해민</td>
//           </tr>
//           <tr>
//             <td><strong>Back-end</strong></td>
//             <td>이인서, 이현민</td>
//           </tr>
//         </tbody></table>
//       </div>`,
//     userId: 'test8',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2023-07-06 13:34',
//     likes: 0,
//     views: 12324,
//     thumbnail: 'thumbnail8',
//     techIds: [1, 5, 8],
//   },
//   {
//     projectId: 9,
//     projectTitle: '[IOS] 🐟가슴속 3천원🐟',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <p>
//         <img src="https://user-images.githubusercontent.com/7058293/110066182-30213500-7db4-11eb-881e-fa3ea0537b7a.png" alt="KakaoTalk_Photo_2021-03-05-13-10-26" style="max-width: 100%;">
//       </p>
//       <h3>설명</h3>
//       <p>🐟<strong>가슴속 3천원</strong>🐟은 전국 붕어빵 지도로 시작하여 전국 길거리 음식점 정복을 꿈꾸는 프로젝트입니다. <strong>디프만</strong>(디자이너와 프로그래머가 만났을 때) 7기 파이널 프로젝트에서 개발되었으며 이후에 지속적으로 업데이트하고있습니다.</p>
//       <h3>다운로드</h3>
//       <ul>
//         <li><a href="https://apps.apple.com/kr/app/%EA%B0%80%EC%8A%B4%EC%86%8D3%EC%B2%9C%EC%9B%90-%EB%82%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EB%B6%95%EC%96%B4%EB%B9%B5/id1496099467" target="_blank">AppStore</a></li>
//         <li><a href="https://play.google.com/store/apps/details?id=com.zion830.threedollars" target="_blank">PlayStore</a></li>
//       </ul>
//       <h3>인증샷🎉</h3>
//       <p>
//         <img src="https://user-images.githubusercontent.com/7058293/110067262-b179c700-7db6-11eb-8451-223956dca69d.jpg" alt="appStore" style="max-width: 100%;">
//       </p>
//       <h3>외부 인터뷰</h3>
//       <ul>
//         <li><a href="https://www.youtube.com/watch?v=KUZHQpH0M_E" target="_blank">14F 인터뷰 영상</a></li>
//         <li><a href="https://youtu.be/v_uhNhJL2g8" target="_blank">스파르타 코딩클럽 리개때 영상</a></li>
//         <li><a href="https://news.naver.com/main/read.nhn?mode=LSD&amp;mid=sec&amp;sid1=102&amp;oid=018&amp;aid=0004791608" target="_blank">이데일리 인터뷰 기사</a></li>
//         <li><a href="https://heybunny.io/blog/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&amp;bmode=view&amp;idx=5770611&amp;t=board" target="_blank">헤이버니 인터뷰 기사</a></li>
//         <li><a href="https://post.naver.com/viewer/postView.nhn?volumeNo=30131742&amp;memberNo=27908841&amp;vType=VERTICAL" target="_blank">jobsN 인터뷰 기사</a></li>
//       </ul>
//       <h3>아키텍처 및 디자인 패턴</h3>
//       <ul>
//         <li>RxSwift + MVVM 사용</li>
//         <li>Code base로 UI 구현 (SnapKit 사용)</li>
//         <li>Feature별 디렉토리 구성 (실제 앱 화면 접근 플로우와 동일하게 디렉토리 구성)</li>
//       </ul>
//       <h3>Git-flow 전략 사용</h3>
//       <ul>
//         <li><a href="https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html" target="_blank">https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html</a></li>
//         <li>코드 리뷰는 진행하고있지 않습니다. (iOS 개발자가 1명이라 아쉽습니다..)</li>
//         <li>Swift Lint로 조금이나마 스스로 리뷰를 진행해볼까 합니다. 😭</li>
//       </ul>
//       <h3>Code style guide</h3>
//       <ul>
//         <li>StyleShare에서 정의한 <a href="https://github.com/StyleShare/swift-style-guide" target="_blank">Code style guide</a>를 따릅니다. (너무 잘 만들어주신 것 같아요..🙇&zwj;♂️)</li>
//         <li>가이드에 적혀있는대로 가이드에서 정의되지 않은 규칙은 <a href="https://swift.org/documentation/api-design-guidelines/" target="_blank">Swift API design guide</a>를 따릅니다.</li>
//       </ul>
//       <h3>리소스 관리</h3>
//       <ul>
//         <li>문자열의 경우에는 Google spread sheet로 관리중입니다.</li>
//         <li>해당 시트에서 key, value에 맞게 문자열을 만들고 Xcode프로젝트에서 빌드버튼을 누르면 자동으로 문자열이 생성됩니다.</li>
//         <li>리소스 시스템 관련해서 <a href="https://let-us-go-2020-fall.vercel.app/" target="_blank">let us go 2020 fall</a>에서 발표를 진행했습니다.</li>
//       </ul>
//       </div>`,
//     userId: 'test9',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-06-06 13:34',
//     likes: 56,
//     views: 188,
//     thumbnail: 'thumbnail9',
//     techIds: [2, 6, 7],
//   },
//   {
//     projectId: 10,
//     projectTitle: '[풀스택] 이거사면 내 평균 주식 단가는 얼마?',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <div align="center">
//         <img src="https://github.com/ddongule/stockulator/raw/master/public/logo.png" alt="logo" style="max-width: 100%;"><br><br><a href="" target="_blank"><img src="https://img.shields.io/badge/license-MIT-red" alt="license" style="max-width: 100%;">
//       <img src="https://img.shields.io/badge/version-1.0.0-yellow" alt="license" style="max-width: 100%;"></a>
//         <div>✨ Simple Stock Calculator for Korean Stocks ✨</div><br><br>
//       </div>
//       <h1>🌟 Stockulator: Stock Calculator (Real Time!)</h1>
//       <blockquote>
//         <p>Stockulator allows you to search real-time Korean Stock Prices. And you can predict how the average price will fluctuate if you buy more stocks.</p>
//       </blockquote>
//       <h2>Features</h2>
//       <ul>
//         <li>Search real-time Stock Price</li>
//         <li>Calculate the Average Unit Price of Stocks</li>
//       </ul>
//       <h2>Built With</h2>
//       <ul>
//         <li><a href="https://reactjs.org/" target="_blank"><code>React.js</code></a></li>
//         <li><a href="https://sass-lang.com/" target="_blank"><code>Sass(SCSS)</code></a></li>
//         <li><a href="https://expressjs.com/" target="_blank"><code>Express.js</code></a></li>
//         <li><a href="https://www.snowpack.dev/" target="_blank"><code>Snowpack</code></a></li>
//       </ul>
//       <h2>How to Start?</h2>
//       <p>Use <code>yarn</code></p>
//       <pre><code>yarn

//       yarn start
//       </code></pre>
//       <p>Use <code>npm</code></p>
//       <pre><code>npm install

//       npm start
//       </code></pre>
//       <h2>How to Contribute?</h2>
//       <ol>
//         <li><strong>Fork</strong> this repository</li>
//         <li><strong>Create</strong> your own branch: <code>git checkout -b new-feature</code></li>
//         <li><strong>Add</strong> and <strong>Commit</strong>: <code>git commit -am 'feat: add new feature</code></li>
//         <li><strong>Push</strong> to your branch: <code>git push origin new-feature</code></li>
//         <li><strong>Submit</strong> a Pull Request!🌟</li>
//       </ol>
//       <h2>License</h2>
//       <ul>
//         <li><a href="javascript:void(0)" target="_blank"><code>MIT License</code></a></li>
//       </ul>
//       </div>`,
//     userId: 'test10',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-07-07 13:34',
//     likes: 45,
//     views: 12123,
//     thumbnail: 'thumbnail10',
//     techIds: [4, 5, 8],
//   },
//   {
//     projectId: 11,
//     projectTitle: '리액트로 만든 픽셀 아트 CSS 생성기',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <p align="center">
//         <img width="200" src="https://github.com/jvalen/pixel-art-react/raw/master/screenshots/tree-pixelartcss.png" style="max-width: 100%;">
//       </p>
//       <h1 align="center">Pixel Art to CSS</h1>
//       <p align="center"></p>
//       <h3 align="center">Animate pixel art and get CSS</h3>
//       <p></p>
//       <p align="center">
//         <a target="_blank" href="http://www.recurse.com" title="Made at the Recurse Center"><img src="https://cloud.githubusercontent.com/assets/2883345/11325206/336ea5f4-9150-11e5-9e90-d86ad31993d8.png" height="20px" style="max-width: 100%;"></a>
//         <a href="https://travis-ci.com/jvalen/pixel-art-react" target="_blank"><img src="https://travis-ci.com/jvalen/pixel-art-react.svg?branch=master" alt="travis ci" style="max-width: 100%;"></a>
//       </p>
//       <h2>CSS를 사용하여 픽셀 아트를 만들 수 있다는 것을 알고 계셨습니까?</h2>
//       <p>Pixel Art to CSS 는 이러한 작업을 도와주는 온라인 편집기입니다.</p>
//       <p>box-shadow 및 keyframes CSS 속성 의 장점을 결합하면 사이트에서 CSS 코드를 사용할 수 있습니다.</p>
//       <p>또한 정적 이미지, 애니메이션 GIF 또는 이미지와 같은 스프라이트와 같은 다양한 형식으로 작업을 다운로드할 수 있습니다.</p>
//       <p><a href="https://www.pixelartcss.com/" target="_blank">Try it out</a></p>
//       <p align="center">
//         <img width="600" src="https://github.com/jvalen/pixel-art-react/raw/master/screenshots/screenshot-potion.png" style="max-width: 100%;">
//       </p>
//       <p><strong>Pixel Art to CSS</strong> 는 단순함 때문에 직관적인 도구를 목표로 하지만 다양한 기능을 갖추고 있습니다. 색상 팔레트 사용자 지정, 시간 이동, 애니메이션 설정 수정, 프로젝트 저장 또는 로드 등.</p>
//       <h2>Example</h2>
//       <p>기본적으로 LOAD 섹션 에서 다음 프로젝트를 찾을 수 있습니다. <b>LOAD</b> section:</p>
//       <p>
//         <img src="https://github.com/jvalen/pixel-art-react/raw/master/screenshots/animation-cat.gif" alt="Cat animation example" style="max-width: 100%;">
//       </p>
//       <p>See it live at <a href="https://www.pixelartcss.com/" target="_blank">pixelartcss</a></p>
//       <p>You can also import it directly submitting <a href="examples/import-export/cat.txt" target="_blank">this</a> code.</p>
//       <h2>Technical overview</h2>
//       <p>이 응용 프로그램은 다음 기술로 구축되었습니다.:</p>
//       <ul>
//         <li><a href="https://facebook.github.io/react/" target="_blank">React</a>: Library to build the UI.</li>
//         <li><a href="http://redux.js.org/" target="_blank">Redux</a>: Implements a Flux like architecture.</li>
//         <li><a href="https://facebook.github.io/immutable-js/" target="_blank">ImmutableJS</a> Helps to keep the data immutable aiming to avoid side effects.</li>
//         <li><a href="https://github.com/postcss/postcss" target="_blank">PostCSS</a> Handle the app CSS.</li>
//         <li><a href="https://nodejs.org/en/" target="_blank">NodeJS</a> + <a href="http://expressjs.com/" target="_blank">Express</a> (Server side to build an universal application, create and serve the generated drawings).</li>
//       </ul>
//       <h2>Installation</h2>
//       <pre><code class="language-bash">npm install
//       </code></pre>
//       <h2>Development</h2>
//       <p>If you just want to develop the interface with no need of the back-end side.</p>
//       <pre><code class="language-bash">npm run development
//       </code></pre>
//       <h2>Deploy</h2>
//       <p>Create the final build and run the generated React HTML on the server using SSR.</p>
//       <pre><code class="language-bash">npm run deploy

//       npm run server
//       </code></pre>
//       <p>A <code>config.json</code> is needed for deployment with the Twitter and express keys.</p>
//       <h2>Lint</h2>
//       <p>There are several libraries used in the project that help us to keep our codebase healthy:</p>
//       <ul>
//         <li><a href="https://eslint.org/" target="_blank">ESlint</a></li>
//         <li><a href="https://stylelint.io/" target="_blank">stylelint</a></li>
//         <li><a href="https://prettier.io/" target="_blank">Prettier</a></li>
//       </ul>
//       <p>Every time we commit something it will execute the linters and format the staged files if needed.</p>
//       <p>If you want to check them individually you could execute the following scripts:</p>
//       <pre><code class="language-bash">npm run lint
//       npm run csslint
//       npm run format
//       </code></pre>
//       <h2>Testing</h2>
//       <p>We are using <a href="https://jestjs.io/" target="_blank">Jest</a> as the testing platform.</p>
//       <pre><code class="language-bash">npm run test
//       </code></pre>
//       <h2>Contributing</h2>
//       <h4>Help me to improve it :seedling:</h4>
//       <p>Create a GitHub issue if there is something wrong or to be improved.</p>
//       <p>Pull requests are also welcome, please take the following requirements as a checklist before opening one:</p>
//       <ul class="contains-task-list">
//         <li class="task-list-item"><input type="checkbox" disabled="" checked=""> The PR does fix a problem or adds a new feature, not just cosmetic or syntactic sugar changes.</li>
//         <li class="task-list-item"><input type="checkbox" disabled="" checked=""> It would be great to open an issue in advance.</li>
//         <li class="task-list-item"><input type="checkbox" disabled="" checked=""> The PR should be issued to the <strong>develop</strong> branch.</li>
//         <li class="task-list-item"><input type="checkbox" disabled="" checked=""> The PR should have a explanation or be related to an issue.</li>
//       </ul>
//       <p>Thank you!</p>
//       <h2>License</h2>
//       <p>
//         <a href="https://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>
//         Copyright © 2016 Javier Valencia Romero (@jvalen)
//       </p>
//       </div>`,
//     userId: 'test11',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-07-31 13:34',
//     likes: 97,
//     views: 423,
//     thumbnail: 'thumbnail11',
//     techIds: [3, 4, 8],
//   },
//   {
//     projectId: 12,
//     projectTitle:
//       '[풀스택]🐇 토닥토닥 (Todak-Todak) /사회적 연대 강화를 위한 지역 기반 커뮤니티 서비스',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <div align="center"><br>
//         <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/todak_logo.png" alt="토닥토닥" height="150px" style="max-width: 100%;"><br>
//         <h1>토닥토닥 (Todak-Todak)</h1><a href="https://blackpink.fashion-scanner.site/" target="_blank"><img src="https://img.shields.io/badge/NGINX-Deactivate-ff7f00?&amp;logo=nginx&amp;logoColor=white" alt="NGINX" style="max-width: 100%;"></a><br>
//       </div>
//       <h2>💁🏻&zwj;♂ 웹 서비스 소개</h2>
//       <p>&nbsp;&nbsp;동병상련의 아픔을 가진 유저들의 사회적 연대 강화를 목적으로 하는 <code>지역 기반 커뮤니티 서비스</code></p><br>
//       <blockquote>
//         <p><a href="https://www.notion.so/778b4912ba9541d3b580ea0456b216b0?v=4d328bd617f44c65af188114148bf23b" target="_blank">🔗 79개의 1차 데이터세트</a></p>
//       </blockquote><br>
//       <div id="2"></div>
//       <h2>🎯 웹 서비스 목표</h2>
//       <p>&nbsp;&nbsp;사회적 연결망의 강화가 <code>의료 사각지대를 해소</code>하는 데 도움을 줄 수 있다.</p>
//       <details>
//         <summary>문제의 인식</summary>
//         <div>
//           <ol>
//             <li>의료 사각지대에 놓인 사람들의 실질적 데이터는 집계되지 않는다.</li>
//             <li>의료 사각지대의 해소를 위해 범정부적 차원에서 많은 리소스들이 이미 투입되고 있다.</li>
//             <li>실질적 의료 사각지대의 해소에는 오프라인의 도움이 필요하다.</li>
//             <li>상시적으로 의료 사각지대 해소의 욕구와 해소가 순환할 수 있는 시스템이 필요하다.</li>
//             <li>현대사회에서 지역 커뮤니티의 사회적 연결성이 약화되어 있다.</li>
//           </ol>
//         </div>
//       </details>
//       <details>
//         <summary>데이터를 통한 가설 검증 방법</summary>
//         <div>
//           <ol>
//             <li>실질적 의료 사각지대의 데이터 검증은 서비스 실행으로 집게된 유저 데이터를 통해 분석하여 검증한다.</li>
//             <li>지역별 종합요소[독립변수]와 지역별 미충족의료률[종속변수]를 회귀/인공신경망 분석을 통해 주요 독립변수를 찾을 수 있을 것이다.</li>
//             <li>도출된 주요 독립변수에 질환 분류를 추가한 회귀/인공신경망 분석 결과는 불일치도가 높은지 확인한다.</li>
//             <li>사회적 활동요소[독립변수]와 지역별 사회적만족도[종속변수]를 회귀분석한 결과는 낮은 손실함수 값을 가지는 지 확인한다.</li>
//             <li>의료 서비스 개선을 위해 투입된 예산과 의료 서비스 만족도, 미충족의료률[전국 시계열데이터] 분석 결과 예산 상승 분에 비해 낮은 지표 개선을 보이는지 확인한다.</li>
//             <li>지역별 사회적 연결망과 지역별 의료 서비스 만족도, 미충족의료율[지역별 시계열데이터] 분석 결과 양의 상관관계를 가지는 지 확인한다.</li>
//           </ol>
//         </div>
//       </details>
//       <details>
//         <summary>문제 해결을 위한 자료 해석과 가설 제시</summary>
//         <div>
//           <ol>
//             <li>실질적 의료 사각지대는 통계 데이터로 집계되지 않는다.</li>
//             <li>명목적 의료 사각지대의 통계는 지역별 미충족의료률로 가늠할 수 있다.</li>
//             <li>지역별 [소득/경제활동유형/교육/혼인/주거형태/사회적만족도 등]의 데이터를 회귀분석/인공신경망분석하여 주요 독립변수를 찾을 수 있다.</li>
//             <li>질환별 의료 사각지대는 서로 다른 범주로 나타날 것이다.</li>
//             <li>사회적 활동 [지역 내 단체활동/지역 커뮤니티 시설의 수/봉사활동]이 활발한 지역일수록 사회적 만족도가 높을 것이다.</li>
//             <li>범정부 차원에서 투입되는 많은 리소스들은 정보 불균형 및 정보 미수집의 요인으로 확산되지 못해 불균형을 초래한다.</li>
//             <li>사회적 연결망의 강화가 정보 불균형 및 정보 미수집의 문제를 해결할 수 있을 것이다.</li>
//             <li>사회적 연결망의 강화가 의료 사각지대를 해소하는 데 도움을 줄 수 있다.</li>
//           </ol>
//         </div>
//       </details><br>
//       <blockquote>
//         <p><a href="https://www.notion.so/DataAnalysis-Result-52edbbb430ee40a7834a60283746834f" target="_blank">🔗 데이터 분석 결과</a></p>
//       </blockquote><br>
//       <div id="3"></div>
//       <h2>🛠 기술 스택</h2>
//       <p><strong>Front-end</strong></p>
//       <ul>
//         <li>
//           <img src="https://img.shields.io/badge/-HTML5-E34F26?&amp;logo=html5&amp;logoColor=white" alt="HTML5" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-CSS3-1572B6?&amp;logo=css3&amp;logoColor=white" alt="CSS3" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?&amp;logo=javascript&amp;logoColor=white" alt="JavaScript" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-React-61DAFB?&amp;logo=react&amp;logoColor=white" alt="React" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-Bootstrap-7952B3?&amp;logo=bootstrap&amp;logoColor=white" alt="Bootstrap" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-Material_UI-0081CB?&amp;logo=material-ui&amp;logoColor=white" alt="Material-UI" style="max-width: 100%;">
//         </li>
//       </ul>
//       <p><strong>Back-end</strong></p>
//       <ul>
//         <li>
//           <img src="https://img.shields.io/badge/-Python-3776AB?&amp;logo=python&amp;logoColor=white" alt="Python" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-Flask-333?&amp;logo=flask&amp;logoColor=white" alt="Flask" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-Socket.io-010101?&amp;logo=socket.io&amp;logoColor=white" alt="Socket.io" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-MySQL-4479A1?&amp;logo=mysql&amp;logoColor=white" alt="MySQL" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-MongoDB-47A248?&amp;logo=mongodb&amp;logoColor=white" alt="MongoDB" style="max-width: 100%;">
//         </li>
//       </ul>
//       <p><strong>Data Analysis</strong></p>
//       <ul>
//         <li>
//           <img src="https://img.shields.io/badge/-Pandas-150458?&amp;logo=pandas&amp;logoColor=white" alt="Pandas" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-scikit_learn-F7931E?&amp;logo=scikit-learn&amp;logoColor=white" alt="scikit-learn" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-Neo4j-008CC1?&amp;logo=neo4j&amp;logoColor=white" alt="Neo4j" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-D3.js-F9A03C?&amp;logo=d3.js&amp;logoColor=white" alt="D3.js" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-Folium-77B829?&amp;logo=folium&amp;logoColor=white" alt="Folium" style="max-width: 100%;">
//         </li>
//       </ul>
//       <p><strong>DevOps</strong></p>
//       <ul>
//         <li>
//           <img src="https://img.shields.io/badge/-Git-F05032?&amp;logo=git&amp;logoColor=white" alt="Git" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-GitLab-FCA121?&amp;logo=gitlab&amp;logoColor=white" alt="GitLab" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-Docker-2496ED?&amp;logo=docker&amp;logoColor=white" alt="Docker" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-NGINX-009639?&amp;logo=nginx&amp;logoColor=white" alt="NGINX" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-Azure-0078D4?&amp;logo=microsoftazure&amp;logoColor=white" alt="Azure" style="max-width: 100%;">
//         </li>
//       </ul><br>
//       <div id="4"></div>
//       <h2>💡 주요 기능</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: left;">기능</th>
//             <th style="text-align: left;">내용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: left;">커뮤니티 기능</td>
//             <td style="text-align: left;">자신과 같은 유형으로 분류된 혹은 유사 유형으로 분류된 인근 지역 유저들과의 커뮤니티</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">같이해요 기능</td>
//             <td style="text-align: left;">지역 내에서 1회성 운동 모임을 개최하고 참가신청 할 수 있는 기능</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">채팅 기능</td>
//             <td style="text-align: left;">유저간 1:1 채팅 기능</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">지역 데이터 시각화</td>
//             <td style="text-align: left;">지역의 유저 데이터와 의료 정보 데이터를 시각화하여 제공</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">유저 사회망 시각화</td>
//             <td style="text-align: left;">자신과 네트워킹이 발생하고 있는 유저들과의 사회적 연결망을 시각화하여 제공</td>
//           </tr>
//         </tbody></table>
//       <h3>상세 기능</h3>
//       <ul>
//         <li>로그인 및 회원가입</li>
//         <li>커뮤니티 게시글 CRUD(Create, Read, Update, Delete)</li>
//         <li>커뮤니티 게시글 댓글 및 좋아요 기능</li>
//         <li>유저 간의 1:1 채팅 기능</li>
//         <li>유저 사회망 시각화 맵 기능</li>
//       </ul><br>
//       <div id="5"></div>
//       <h2>📂 프로젝트 구성도</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;"><a href="https://www.figma.com/file/CluTmxhDDigtZG9rCeXKkE/Storyboard-Draft-Ver0.1?node-id=0%3A1" target="_blank">🔗와이어프레임(Wireframe)</a></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/wireframe.png" alt="Wireframe" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;"><a href="https://whimsical.com/codename-wesick-SXPvCHJqfSwQZwzPUPm6z" target="_blank">🔗아키텍처(Architecture)</a></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/overall_flow.png" alt="Overall Flow" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/sequence_flow.png" alt="Sequence Flow" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table><br>
//       <div id="6"></div>
//       <h2>🎥 데모 영상</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">회원가입 &amp; 프로필 작성 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/signup-page.gif" alt="회원가입 &amp; 프로필 작성 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">로그인 &amp; 메인 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/signin-main-page.gif" alt="로그인 &amp; 메인 페이지  " style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">게시물 댓글 및 좋아요 기능</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/comment-like.gif" alt="게시물 댓글 및 좋아요 기능" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">새 게시물 작성 기능</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/create-posting.gif" alt="새 게시물 작성 기능 " style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">실시간 채팅 기능</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/live-chatting.gif" alt="실시간 채팅 기능" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">유저 사회망 기능</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/todak-todak/raw/Azure/readme_assets/user-network.gif" alt="유저 사회망 기능" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table><br>
//       <div id="7"></div>
//       <h2>🔆 서비스 차별점 및 기대 효과</h2>
//       <ol>
//         <li>지속적으로 집계되는 유저들의 데이터와 공공데이터를 분석하여 제공하는 우리동네 이슈 투표 기능은 정책 의사 결정 과정에 근거로 작용할 수 있습니다. 이를 통해 집계되지 않은 데이터를 공론화 할 수 있습니다.</li>
//       </ol>
//       <blockquote>
//         <p><em>예시) 흡연률이 높은 지역, 금연 욕구가 있으나 지원 시설이 없음 &gt;&gt; 지역내 금연 지원 시설 설치 의견 수렴</em></p>
//       </blockquote>
//       <ol start="2">
//         <li>
//           <p>유저들의 서비스 내 활동 결과를 분석하여(neo4j) 나의 우리동네 네트워크 시각화 기능을 제공하여 심리적으로 사회적 안전망을 체감하게 해줍니다.</p>
//         </li>
//         <li>
//           <p>가능한 많은 연령대의 참여가 중요하므로 온라인 서비스에 익숙하지 않은 노령세대를 위한 UI/UX를 제공합니다.</p>
//         </li>
//       </ol><br>
//       <div id="8"></div>
//       <h2>👪 개발 팀 소개</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">이름</th>
//             <th style="text-align: center;">역할</th>
//             <th style="text-align: center;">개발 내용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">황정우</td>
//             <td style="text-align: center;">PM<br>Data Analysis</td>
//             <td style="text-align: center;">와이어 프레임 및 아키텍처 작성<br>데이터 분석<br>실시간 데이터 시각화 구현<br>백엔드 개발</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">박정환</td>
//             <td style="text-align: center;">Front-end</td>
//             <td style="text-align: center;">로그인 및 회원가입 기능 구현<br>커뮤니티 게시글 기능 구현<br>웹 스타일링</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">김수영</td>
//             <td style="text-align: center;">Front-end</td>
//             <td style="text-align: center;">1:1 채팅 기능 구현<br>채팅 페이지 웹 스타일링</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">강인선</td>
//             <td style="text-align: center;">Back-end</td>
//             <td style="text-align: center;">로그인 및 회원가입 API 구현<br>커뮤니티 게시글 API 구현<br>DB 설계</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">윤수진</td>
//             <td style="text-align: center;">Back-end</td>
//             <td style="text-align: center;">1:1 채팅 기능 구현</td>
//           </tr>
//         </tbody></table>
//       <h3>멤버별 responsibility(R&amp;R, Role and Responsibilities)</h3>
//       <details>
//         <summary>PM</summary>
//         <div>
//           <ul>
//             <li><strong>기획 단계</strong> : 구체적인 설계와 지표에 따른 프로젝트 제안서 작성</li>
//             <li><strong>개발 단계</strong> : 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발</li>
//             <li><strong>수정 단계</strong> : 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비</li>
//           </ul>
//         </div>
//       </details>
//       <details>
//         <summary>Front-end</summary>
//         <div>
//           <ul>
//             <li><strong>기획 단계</strong> : 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성</li>
//             <li><strong>개발 단계</strong> : 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성</li>
//             <li><strong>수정 단계</strong> : 피드백 반영해서 프론트 디자인 수정</li>
//           </ul>
//         </div>
//       </details>
//       <details>
//         <summary>Back-end &amp; Data Analysis</summary>
//         <div>
//           <ul>
//             <li><strong>기획 단계</strong> : 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의</li>
//             <li><strong>개발 단계</strong> : 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기</li>
//             <li><strong>수정 단계</strong> : 코치님 피드백 반영해서 분석/ 시각화 방식 수정</li>
//           </ul>
//         </div>
//       </details><br>
//       <div id="9"></div>
//       <h2>💻 실행 방법</h2>
//       <ol>
//         <li><strong>원격 저장소 복제</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ git clone https://github.com/JeongHwan-dev/todak-todak.git
//       </code></pre>
//       <ol start="2">
//         <li><strong>프로젝트 폴더로 이동</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ cd todak-todak
//       </code></pre>
//       <ol start="2">
//         <li><strong>Flask 서버 실행</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ export FLASK_APP=medical
//       $ export FLASK_ENV=development
//       $ flask run

//       </code></pre>
//       <ol start="3">
//         <li><strong>MongoDB 설치</strong> (새 터미널 오픈)</li>
//       </ol>
//       <pre><code class="language-bash">$ curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
//       $ sudo echo "deb http://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
//       $ sudo apt-get update
//       $ sudo apt-get install -y mongodb-org
//       </code></pre>
//       <ol start="4">
//         <li><strong>MongoDB 설정 및 실행</strong> (project 폴더에 data/db 생성)</li>
//       </ol>
//       <pre><code class="language-bash">$ mongod --dbpath data/db/
//       $ mongo
//       </code></pre>
//       <ol start="5">
//         <li><strong>client 폴더로 이동</strong> (새 터미널 오픈)</li>
//       </ol>
//       <pre><code class="language-bash">$ cd client
//       </code></pre>
//       <ol start="6">
//         <li><strong>필요한 node_modules 설치</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ npm install
//       </code></pre>
//       <ol start="7">
//         <li><strong>리액트 앱 실행</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ npm start
//       </code></pre><br>
//       <div id="10"></div>
//       <h2>📢 FAQ</h2>
//       <h3>환경설정 및 에러 대응</h3>
//       <p><strong><em>Ubuntu 18.04 LTS를 기준으로 작성되었습니다</em></strong></p>
//       <ul>
//         <li>
//           <h4>Flask 서버 구동 시 설정 사항</h4>
//           <blockquote>
//             <p><em>Bash Script에 포함되어 있습니다.</em></p>
//           </blockquote>
//         </li>
//       </ul>
//       <pre><code>~ % export FLASK_APP=medical
//       ~ % export FLASK_ENV=development
//       ~ % flask run
//       </code></pre><br>
//       <ul>
//         <li>
//           <h4>MongoDB 설치 및 설정사항</h4>
//           <blockquote>
//             <p><em>MongoDB 설치 및 실행 설정</em></p>
//           </blockquote>
//         </li>
//       </ul>
//       <pre><code>~ % curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
//       ~ % sudo echo "deb http://repo.mongodb.org/apt/ubuntu bionic/~ % mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
//       ~ % sudo apt-get update
//       ~ % sudo apt-get install -y mongodb-org
//       ~ % mkdir data
//       ~ % cd data
//       ~ data % mkdir db
//       ~ data % cd ..
//       ~ % mongod --dbpath=data/db/
//       </code></pre><br>
//       <ul>
//         <li>
//           <h4>MySQL 관련 이슈</h4>
//           <blockquote>
//             <p><em>MySQL 실행법</em></p>
//           </blockquote>
//         </li>
//       </ul>
//       <pre><code>~ % mysql -u root -r
//       # 위 코드 실행 시 root@localhost permission denied 에러가 발생한다면 아래 스크립트를 실행해주세요
//       </code></pre>
//       <pre><code>~ % sudo mysql -u root

//       mysql&gt; USE mysql;
//       mysql&gt; SELECT User, Host, plugin FROM mysql.user;
//       mysql&gt; UPDATE user SET PLUGIN='mysql_native_password' WHERE user='root';
//       mysql&gt; FLUSH PRIVILEGES;
//       mysql&gt; SELECT user, host, plugin FROM user;
//       </code></pre><br>
//       <blockquote>
//         <p><em>git pull 이후 실행 시</em></p>
//       </blockquote>
//       <pre><code>~ % service mysql restart
//       # 새로 git pull 후에 위 스크립트를 실행해주세요
//       </code></pre><br>
//       <blockquote>
//         <p><em>ERROR 2002 (HY000): Can’t connect to local MySQL server through socket ‘/var/lib/mysql/mysql.sock’ 에러 발생 시</em></p>
//       </blockquote>
//       <pre><code>~ % service mysql restart
//       # 위 코드로 에러가 해결 되지 않을 시 아래 스크립트를 실행해주세요
//       </code></pre>
//       <pre><code>~ % service mysql stop
//       ~ % chmod 755 -R /var/lib/mysql
//       ~ % chown mysql:mysql -R /var/lib/mysql
//       ~ % service mysql start
//       </code></pre><br>
//       <blockquote>
//         <p>SQLalchemy 실행 설정</p>
//       </blockquote>
//       <pre><code># SQLalchemy 실행 전 MySQL에서 database를 생성한 뒤 실행해주세요

//       # 최초 1회 실행
//       ~ % flask db init

//       # 모델링 이후 1회
//       ~ % flask db migrate

//       # 이후 실행 시 모델이 생성됩니다
//       ~ % flask db upgrade
//       </code></pre><br>
//       <blockquote>
//         <p><em>SQLalchemy 리모델링</em></p>
//       </blockquote>
//       <pre><code># 이미 만든 모델을 다시 만들어야 할 경우 아래 스크립트를 실행해주세요

//       mysql&gt; DROP DATABASE medical;
//       mysql&gt; CREATE DATABASE medical;

//       ~ % flask upgrade

//       # 리모델링이 안된다면 migration 디렉토리를 삭제 후 SQLalchemy를 최초 실행해주세요
//       </code></pre>
//       </div>`,
//     userId: 'test12',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-09-26 13:34',
//     likes: 1,
//     views: 4,
//     thumbnail: 'thumbnail12',
//     techIds: [5, 7, 8],
//   },
//   {
//     projectId: 13,
//     projectTitle: '내 손 안의 스트레스 휴지통, [비움] Server repository',
//     description: `<div style="font-size:16px;"  class="readme-markdown">
//       <h1>비움 B-um</h1>
//       <p>
//         <img src="https://github.com/TeamB-um/B-umServer/raw/main/bum.JPG" alt="ex_screenshot" style="width: 600px;"><br>살아가며 필연적으로 마주치는 크고 작은 스트레스들...<br>완벽한 해결이 아니더라도 한 스푼 덜어드리겠습니다.
//         당신을 괴롭히는 스트레스, 휴지통에 버려버리세요!
//       </p>
//       <h2>서비스 설명</h2>
//       <p>하루 동안 스트레스 받은 일을 글로 적어 보관함에 저장하고, 휴지통에 버림으로써 스트레스를 해소할 수 있습니다.<br>또한 보관함 통계를 통해 자신이 어떤 유형의 스트레스를 가장 많이 받는지 알아볼 수 있고,<br>일정량 이상의 스트레스를 받은 사용자에게 위로와 응원의 글귀가 적힌 리워드를 제공합니다.</p>
//       <h2>서비스 팀원</h2>
//       <div id="about_team">
//         <table>
//           <thead>
//             <tr>
//               <th style="text-align: left;">
//                 <center>이름</center>
//               </th>
//               <th style="text-align: center;">
//                 <center>파트</center>
//               </th>
//               <th style="text-align: right;">
//                 <center>리딩/팔로잉</center>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style="text-align: left;"><strong>정석현</strong></td>
//               <td style="text-align: center;">
//                 <center>서버</center>
//               </td>
//               <td style="text-align: right;">리딩</td>
//             </tr>
//             <tr>
//               <td style="text-align: left;"><strong>박신현</strong></td>
//               <td style="text-align: center;">
//                 <center>서버</center>
//               </td>
//               <td style="text-align: right;">팔로잉</td>
//             </tr>
//           </tbody>
//         </table>
//         <h2>서버 아키텍쳐</h2>
//         <table>
//           <thead>
//             <tr>
//               <th style="text-align: left;">
//                 <center>용도/역할</center>
//               </th>
//               <th style="text-align: center;">
//                 <center>이름</center>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style="text-align: left;"><strong>서버 구축 플랫폼</strong></td>
//               <td style="text-align: center;">
//                 <center>Node.js</center>
//               </td>
//             </tr>
//             <tr>
//               <td style="text-align: left;"><strong>서버 구축 언어</strong></td>
//               <td style="text-align: center;">
//                 <center>Typescript</center>
//               </td>
//             </tr>
//             <tr>
//               <td style="text-align: left;"><strong>데이터베이스</strong></td>
//               <td style="text-align: center;">
//                 <center>MongoDB</center>
//               </td>
//             </tr>
//             <tr>
//               <td style="text-align: left;"><strong>ORM</strong></td>
//               <td style="text-align: center;">
//                 <center>Mongoose</center>
//               </td>
//             </tr>
//             <tr>
//               <td style="text-align: left;"><strong>푸쉬 알림</strong></td>
//               <td style="text-align: center;">
//                 <center>FCM 라이브러리</center>
//               </td>
//             </tr>
//             <tr>
//               <td style="text-align: left;"><strong>백업 및 복원</strong></td>
//               <td style="text-align: center;">
//                 <center>구글 연동 검토중</center>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <h2>Dependencies Module</h2>
//         <pre><code class="language-javascript"> {
//         "name": "beum_server",
//         "version": "1.0.0",
//         "description": "",
//         "main": "index.js",
//         "scripts": {
//           "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
//           "dev": "ts-node src",
//           "build": "tsc &amp;&amp; node dist"
//         },
//         "author": "",
//         "license": "ISC",
//         "devDependencies": {
//           "@types/express": "^4.17.11",
//           "@types/mongoose": "^5.10.5",
//           "@types/node": "^16.0.0",
//           "ts-node": "^10.0.0",
//           "typescript": "^4.3.5"
//         },
//         "dependencies": {
//           "dotenv": "^9.0.2",
//           "express": "^4.17.1",
//           "mongoose": "^5.12.10"
//         },
//         "repository": {
//           "type": "git",
//           "url": "git+https://github.com/TeamB-um/B-umServer.git"
//         },
//         "bugs": {
//           "url": "https://github.com/TeamB-um/B-umServer/issues"
//         },
//         "homepage": "https://github.com/TeamB-um/B-umServer#readme"
//       }
//       </code></pre>
//         <h2>Coding convention</h2>
//         <p><strong>Camel Case</strong><br>첫 단어는 소문자로, 그 뒤는 대문자로, 단어와 단어 사이는 붙이는 것을 원칙으로 함.</p>
//         <p><strong>Eslint Extension</strong><br>tab 사이즈를 space 2 size로 적용.</p>
//         <p><strong>Prettier Formatting</strong><br>Formatting 형식을 VS Code Extesion 중 prettier 형식에 맞체 적용.</p>
//         <pre><code class="language-javascript">npx prettier --write "index.js" // prettier 형태로 바꿔줌

//       npx prettier "index.js" // prettier 형태로 출력
//       </code></pre>
//         <p><strong>주석 규칙</strong><br>한줄을 "//"로 적고, 그 이상은 "/* */"로 함.</p>
//         <pre><code class="language-javascript">// 한줄 주석일 때
//       /**
//        * 여러줄
//        * 주석일 때
//        */
//       </code></pre>
//         <p><strong>데이터베이스 명명 규칙</strong><br></p>
//         <ul>
//           <li>DB 이름 (스키마)
//             <ul>
//               <li>데이터베이스 명은 영어 대문자로 구성한다.</li>
//               <li>길이는 8자 이내로 구성한다.</li>
//             </ul>
//           </li>
//           <li>테이블
//             <ul>
//               <li>테이블은 영어 대문자로 구성, 대분류_의미있는 테이블 명 형태로 작성한다.</li>
//               <li>테이블 명의 구성은 최대 3단어까지 사용할 수 있다.</li>
//               <li>각 단어의 최대 길이는 8자 이내로 구성한다.</li>
//               <li>최대 길이는 26자 이내로 구성한다.</li>
//             </ul>
//           </li>
//           <li>컬럼
//             <ul>
//               <li>컬럼은 snake 표기법을 따르고, 의미있는 컬럼명_접미사 형태로 작성한다.</li>
//               <li>컬럼의 성질을 나타내는 접미사를 사용한다. (사용하는 데이터의 타입을 나타내는 것이 아님에 유의)</li>
//             </ul>
//           </li>
//         </ul>
//         <p><strong>접미사 list</strong><br></p>
//         <ul>
//           <li>CNT : count 조회수 등의 count에 사용된다.</li>
//           <li>DT : date 날짜인 경우를 나타낸다.</li>
//           <li>FK : foreign key를 나타내는데 사용한다.</li>
//           <li>FL : flag 0, 1로 구성된 상태를 나타낸다.</li>
//           <li>ID : id 계정 등의 아이디를 나타낸다.</li>
//           <li>NM : name 이름, 별명 등 식별 가능하며 중복이 가능한 문자열 나타내는 데 사용한다.</li>
//           <li>NO : number 나이, 휴대폰 번호 등 숫자를 나타낸다.</li>
//           <li>ORD : order 정렬에 사용되는 index를 나타낸다.</li>
//           <li>PK : primary key를 나타내는데 사용한다.</li>
//           <li>ST : status 회원의 등급, 성별 등의 상태를 나타낸다.</li>
//         </ul>
//         <p><strong>그 외 항목</strong><br></p>
//         <ol>
//           <li>async await 사용하기</li>
//           <li>파일명
//             <ul>
//               <li>폴더: 복수형</li>
//               <li>파일명: 언더바</li>
//               <li>메소드에 라우터명 붙이지 않기</li>
//               <li>각 폴더에 인덱스 넣기</li>
//             </ul>
//           </li>
//           <li>변수명
//             <ul>
//               <li>배열이 들어가는 변수면 마지막에 List</li>
//               <li>통신 API 리턴되는건 그냥 data</li>
//               <li>함수가 동사가 제일 먼저와야하고, 데이터를 담는 변수는 동사가 오면 않도록 함</li>
//               <li>메소드: READ(찾기) CREATE(만들기) UPDATE(수정하기) DELETE(삭제하기)</li>
//             </ul>
//           </li>
//         </ol>
//         <h2>Commit, Branch 전략</h2>
//         <p><strong>Branch 중심 운영</strong><br></p>
//         <ul>
//           <li>main - 실제 올라가는 Branch</li>
//           <li>develop - 테스트용 Branch</li>
//           <li>feat/~~ - 새로운 기능 개발용 Branch</li>
//           <li>fix/~~ - 오류 기능을 수정 Branch</li>
//         </ul>
//         <p><strong>Branch Senario</strong><br></p>
//         <ul>
//           <li>새 기능 개발 시</li>
//           <li>main, develop (branch pull) → feat/users(개발완료) → develop 머지(develop문제없음) → main로 머지</li>
//           <li>오류 발생 시</li>
//           <li>main (branch pull) → fix/users(수정완료) → develop 머지(develop문제없음 → master머지</li>
//         </ul>
//         <p><strong>머지 규칙</strong><br></p>
//         <ol>
//           <li>풀리퀘스트 날리기</li>
//           <li>작성자 외 1명 이상이 리뷰를 해줌 (develop) 후 머지</li>
//           <li>로컬에서 작업하고 풀리퀘하기전에 풀받기</li>
//         </ol>
//         <p><strong>Commit Message</strong><br></p>
//         <ul>
//           <li>Feat: 새기능</li>
//           <li>Refactor: 원래있던 코드의 수정(기능도 변경)</li>
//           <li>Style: 원래있던 코드의 수정(기능이 안변경)</li>
//           <li>Docs: 문서변경</li>
//           <li>Fix: 오류 수정</li>
//           <li>Etc: 기타</li>
//           <li>한글로 커밋하기. 커밋은 이해하기 편한 단위로 잘게 쪼개기(독자가 읽기 편하게)</li>
//         </ul>
//       </div>
//       </div>`,
//     userId: 'test13',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-09-16 13:34',
//     likes: 2,
//     views: 7,
//     thumbnail: 'thumbnail13',
//     techIds: [2, 4, 5],
//   },
//   {
//     projectId: 14,
//     projectTitle: '[BE] 👨‍🦯시각 장애인을 위한 딥 러닝 기반의 스마트 지팡이',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>SmartCane-Back-end</h1>
//       <p>SmartCane-Back-end</p>
//       <h3>4학년 1학기 졸업작품 시각장애인용 딥러닝 기반 스마트 지팡이</h3>
//       <h4>안드로이드 APP에서 딥러닝 호출을 위한 API 개발</h4>
//       <p>💻서버 실행 방법</p>
//       <ol>
//         <li>git clone</li>
//         <li>SmartCane 진입</li>
//         <li>가상환경 생성</li>
//       </ol>
//       <blockquote>
//         <p>python -m venv &lt;가상환경 이름&gt;</p>
//       </blockquote>
//       <ol start="4">
//         <li>가상 환경 실행</li>
//       </ol>
//       <blockquote>
//         <p>source 가상환경/bin/activate</p>
//       </blockquote>
//       <ol start="5">
//         <li>패키지 다운로드</li>
//       </ol>
//       <blockquote>
//         <p>pip install -r requirements.txt</p>
//       </blockquote>
//       <ol start="6">
//         <li>SmartCane 진입</li>
//         <li>manage.py 파일 경로에서 명령어 실행</li>
//       </ol>
//       <blockquote>
//         <p>python3 manage.py runserver</p>
//       </blockquote>
//       </div>`,
//     userId: 'test14',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-05-06 13:34',
//     likes: 0,
//     views: 18,
//     thumbnail: 'thumbnail14',
//     techIds: [6, 9],
//   },
//   {
//     projectId: 15,
//     projectTitle: '👭 Autoencoder를 사용한 딥페이크 영상 프로젝트',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>DeepFake v1</h1>
//       <h4>* I do not allow malicious video production through this source code. This is just a practice code. (해당 소스 코드를 통한 악의적인 영상 제작을 불허합니다.)</h4>
//       <h2>Version</h2>
//       <p>Tensorflow 2.0, Ubuntu 18.04</p>
//       <h2>1. Make dataset</h2>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79987173-09357980-84e8-11ea-8663-a2e0c96a40f5.png" width="70%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>You have to get character images from youtube or other media.</h4>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79987452-65989900-84e8-11ea-8c8a-60b753d43185.png" width="70%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>If you have a video editing tool, just bring the part where the face of the person is shown.</h4>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79148660-cc3ef800-7e00-11ea-94f4-17c062df5b63.png" width="40%" style="max-width: 100%;">
//         <img src="https://user-images.githubusercontent.com/52908154/79193092-e4486300-7e64-11ea-8e65-f1b5e0850a84.gif" alt="ezgif com-resize (3)" style="max-width: 100%;">
//         <img src="https://user-images.githubusercontent.com/52908154/79193102-e90d1700-7e64-11ea-969b-4ff20e1efb6d.gif" alt="ezgif com-resize (2)" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>We will extract the landmarks of the characters through the dlib Library</h4>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79988221-56feb180-84e9-11ea-9159-205814f31c02.png" width="20%" style="max-width: 100%;">
//         <img src="https://user-images.githubusercontent.com/52908154/79988263-641ba080-84e9-11ea-86a7-50daea14225e.png" width="20%" style="max-width: 100%;">
//         <img src="https://user-images.githubusercontent.com/52908154/79988407-94fbd580-84e9-11ea-90f7-021246f6d058.png" width="20%" style="max-width: 100%;">
//         <img src="https://user-images.githubusercontent.com/52908154/79988392-90cfb800-84e9-11ea-859f-41999886af32.png" width="20%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>You have to save both face and landmark images.</h4>
//         </li>
//       </ul>
//       <h1>Model</h1>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79988633-d5f3ea00-84e9-11ea-990b-0af9eedc25a8.png" width="60%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>We will use an auto-encoder.</h4>
//         </li>
//         <li>
//           <h4>But if you look closely at the picture, there is one encoder and two decoder.</h4>
//         </li>
//         <li>
//           <h4>You have to share an encoder when you learn two characters. The reason is to compress the features of the face in the encoder well.</h4>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79994857-70a3f700-84f1-11ea-8788-abe6289bbe11.png" width="60%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>Introducing 'warping' in the learning process improves performance. 'Warping' is distorting the image. From this, when a new look comes in, it can produce better results.</h4>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79994939-86b1b780-84f1-11ea-97fd-59e39507e0a9.png" width="20%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>'warping' applies to the Landmark image, which is input data of the model.</h4>
//         </li>
//         <li>
//           <h4>Do not 'warping' on original face images other than Landmark images.</h4>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79989157-8104a380-84ea-11ea-9693-a96b8a6a1d74.png" width="60%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>If you are good at restoring the two characters, try changing the decoder to add images.</h4>
//         </li>
//       </ul>
//       <h1>Image processing</h1>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79990496-16ecfe00-84ec-11ea-914d-8ca655726d0c.png" width="60%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>If you have followed the process so far, the image above will be made. However, because of the background other than the face, it becomes unnatural.</h4>
//         </li>
//         <li>
//           <h4>This is the part that we each need to modify to match the characteristics of the video.</h4>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79149326-f218cc80-7e01-11ea-9f1e-acb05b0926c0.png" width="60%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>I detected the skin color and replaced the background with black. It also went through blending to blur the boundaries of skin color between characters in the synthesis process.</h4>
//         </li>
//         <li>
//           <h4>If this process is complicated and cumbersome, there is another way. When you create a dataset, you crop an image.</h4>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79996600-9a5e1d80-84f3-11ea-855d-c60ba2b2ac0a.png" width="40%" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <h4>You only need to bring in the face by setting the highest and lowest points of the landmark coordinates as shown above. I recommend this method and the implementation is <a href="https://github.com/JunHyeok96/DeepFake/blob/master/make_landmark.py" target="_blank">here</a> . This does not completely bring only facial skin, but most of the time the background is removed.</h4>
//         </li>
//       </ul>
//       <h1>result</h1>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79148003-cbf22d00-7dff-11ea-8bc8-2e641bce2fa3.gif" alt="final3" style="max-width: 100%;"><br>
//         <img src="https://user-images.githubusercontent.com/52908154/79148037-d6acc200-7dff-11ea-9823-1ad8355f166a.gif" alt="final2" style="max-width: 100%;"><br>
//         <img src="https://user-images.githubusercontent.com/52908154/79147964-bda41100-7dff-11ea-991d-86319ddc212b.gif" alt="final" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>Source, Conversion Image, Image Processing Image</li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79192536-da723000-7e63-11ea-8dc2-2ed7eab7bc94.gif" alt="ezgif com-crop" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>Results for the entire image</li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/52908154/79993799-1e160b00-84f0-11ea-84b8-6e7756ed9c4a.gif" alt="ezgif com-resize (7)" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>Actually, I didn't use my face to learn, but it's okay if the landmarks are similar.</li>
//       </ul>
//       <h3>Data Information</h3>
//       <ul>
//         <li>
//           <p>It used the video for about two to three minutes.</p>
//         </li>
//         <li>
//           <p>64 x 64 images were used.</p>
//         </li>
//       </ul>
//       <h1>Quick Start</h1>
//       <ul>
//         <li>dataset path</li>
//       </ul>
//       <pre><code>DeepFake
//         dataset_video
//           src
//             video
//           dst
//             video
//         dataset
//           src
//             img
//             land
//           dst
//             img
//             land

//       </code></pre>
//       <pre><code>$ git clone https://github.com/JunHyeok96/DeepFake.git
//       $ cd DeepFake
//       $ python make_landmark.py
//       And follow the train.ipynb process.
//       Once the learning is complete,
//       $ python make_deepfake_video.py
//       </code></pre>
//       <h5>Image Source</h5>
//       <p><a href="https://medium.com/@jonathan_hui/how-deep-learning-fakes-videos-deepfakes-and-how-to-detect-it-c0b50fbf7cb9" target="_blank">https://medium.com/@jonathan_hui/how-deep-learning-fakes-videos-deepfakes-and-how-to-detect-it-c0b50fbf7cb9</a></p>
//       </div>`,
//     userId: 'test15',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2023-06-09 13:34',
//     likes: 23,
//     views: 41,
//     thumbnail: 'thumbnail15',
//     techIds: [2, 5, 6],
//   },
//   {
//     projectId: 16,
//     projectTitle: '심모(심심한 사람들의 모임) for Android',
//     description: `<div style="font-size:16px;" class="readme-markdown"><h1>심모(심심한 사람들의 모임) for Android</h1><img src="https://user-images.githubusercontent.com/35266591/79560068-d2bfbf00-80e1-11ea-8a00-0c29ab40c20e.png" width="90%"><p>관심사 기반의 번개 모임 서비스 안드로이드 어플리케이션 <a href="https://play.google.com/store/apps/details?id=com.yapp14th.yappapp" target="_blank">[플레이 스토어]</a></p><h2>Screenshots</h2><p><img src="https://user-images.githubusercontent.com/35266591/79560759-25e64180-80e3-11ea-9140-9089aaa1b188.jpg" width="20%"><img src="https://user-images.githubusercontent.com/35266591/79560761-27b00500-80e3-11ea-9447-fab090de3e93.jpg" width="20%"><img src="https://user-images.githubusercontent.com/35266591/79560959-7f4e7080-80e3-11ea-8e54-4d6b807adf13.jpg" width="20%"><img src="https://user-images.githubusercontent.com/35266591/79560787-326a9a00-80e3-11ea-8b22-bc2ac55af73a.jpg" width="20%"><img src="https://user-images.githubusercontent.com/35266591/79560777-2ed71300-80e3-11ea-97c2-4cce2bb916b4.jpg" width="20%"></p><h2>Tech / Framework / Library</h2><ul style="font-size: 16px;margin-left: 20px;"><li>Android with JAVA</li><li>Google Map</li><li>FCM</li><li>Glide</li><li>Retrofit2</li><li>Butterknife</li><li>Album</li><li>CircleImageView</li><li>Toasty</li><li>ChipsLayoutManager</li><li>AndroidViewAnimations</li><li>Loading</li><li>HashTagHelper</li></ul></div>`,
//     userId: 'test16',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-10-16 13:34',
//     likes: 12,
//     views: 51,
//     thumbnail: 'thumbnail16',
//     techIds: [3, 5, 9],
//   },
//   {
//     projectId: 17,
//     projectTitle: '🔎 패션 스캐너 (FASHION SCANNER)',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <div align="center"><br>
//         <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/fs_banner.png" alt="FASHION SCANNER" style="max-width: 100%;"><br>
//         <h1>패션 스캐너 (FASHION SCANNER)</h1><a href="https://blackpink.fashion-scanner.site/" target="_blank"><img src="https://img.shields.io/badge/NGINX-Deactivate-ff7f00?&amp;logo=nginx&amp;logoColor=white" alt="NGINX" style="max-width: 100%;"></a><br>
//       </div><br>
//       <div id="1"></div>
//       <h2>💁 웹 서비스 소개</h2>
//       <p><strong>AI X FASHION X K-POP STAR</strong> 총 3가지 키워드의 집합.<br>패션업계에서 유명한 케이팝 스타를 선정한 뒤 AI 이미지처리 기능을 활용해 <code>'해당인물이 착용한 의류에 관한 정보'</code>와 <code>'비슷한 의류의 판매처'</code>를 찾아주는 서비스.</p>
//       <blockquote>
//         <p>첫 번째 버전은 케이팝 스타 중 가장 패션계에서 영향력이 있다고 평가되는 '블랙핑크'로 선정하였습니다.</p>
//       </blockquote>
//       <details>
//         <summary>타겟층</summary>
//         <div markdown="1">
//           <ul>
//             <li>패션 트렌드에 민감한 20/30 대 여성, 블랙핑크 국내외 팬들.</li>
//           </ul>
//         </div>
//       </details>
//       <details>
//         <summary>문제 정의</summary>
//         <div markdown="1">
//           <ul>
//             <li>케이팝스타가 착용한 패션은 대중으로부터의 워너비 현상을 만들어내는 주요한 요소이나 현재까지 그들과 비슷하게 옷을 입기위해서는 사람이 일일이 검색을 해야한다.</li>
//           </ul>
//         </div>
//       </details>
//       <details>
//         <summary>가설 설정 방법</summary>
//         <div markdown="1">
//           <ul>
//             <li>시대의 패션 아이콘으로 평가되는 '블랙핑크'의 패션을 AI를 활용해 의류 카테고리를 분류하고 비슷한 의류를 추천한다. 더 나아가 판매 링크까지 연결하는 서비스를 제공하여 타겟층이 블랙핑크가 착용한 의류와 비슷한 의류를 구매할 수 있도록 한다. 또한, 워너비 현상을 이용해 본인의 패션 스타일과 일치하는 블랙핑크 멤버를 출력함으로 사이트 이용 흥미도를 높일 수 있다.</li>
//           </ul>
//         </div>
//       </details>
//       <details>
//         <summary>추가 기대 효과</summary>
//         <div markdown="1">
//           <ul>
//             <li>타겟층의 트래픽을 유도해서 광고 수익을 창출할 수 있다. 더 나아가 패션관련 케이팝스타마다 존재하는 웹 서비스로서의 역할을 할 수 있다.</li>
//           </ul>
//         </div>
//       </details><br>
//       <p><a href="https://blackpink.fashion-scanner.site/" target="_blank"><strong>🔗 배포된 웹 서비스로 바로가기 Click !</strong></a> 👈</p>
//       <blockquote>
//         <p>새 창 열기 방법 : CTRL+click (on Windows and Linux) | CMD+click (on MacOS)</p>
//       </blockquote>
//       <blockquote>
//         <p>🚫 서버 비용 유지 문제로 현재는 서비스를 중단한 상태입니다.</p>
//       </blockquote><br>
//       <div id="2"></div>
//       <h2>🛠 기술 스택</h2>
//       <h3><strong>Front-end</strong></h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">HTML5</td>
//             <td style="text-align: center;">CSS3</td>
//             <td style="text-align: center;">JavaScript(ES6)</td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React.js" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://camo.githubusercontent.com/9f29e3d7fc79b01485632a99af0fd6a0f65d921adc720d0d30cdce9475caa9ca/68747470733a2f2f6769746875622e7375726d6f6e2e6d652f696d616765732f636f6d6d6f6e2f7377697065722d6c6f676f2e737667" alt="Swiper" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">React</td>
//             <td style="text-align: center;">Swiper</td>
//           </tr>
//         </tbody></table>
//       <h3><strong>Back-end</strong></h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/django-original.svg" alt="Django" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">Python</td>
//             <td style="text-align: center;">Django</td>
//             <td style="text-align: center;">PostgreSQL</td>
//           </tr>
//         </tbody></table>
//       <h3><strong>AI</strong></h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/pytorch-icon.svg" alt="PyTorch" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">PyTorch</td>
//           </tr>
//         </tbody></table>
//       <h3><strong>DevOps</strong></h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="Docker" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg" alt="NGiNX" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/microsoft_azure-icon.svg" alt="Azure" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">Docker</td>
//             <td style="text-align: center;">NGiNX</td>
//             <td style="text-align: center;">Azure</td>
//           </tr>
//         </tbody></table>
//       <h3><strong>Version Control</strong></h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://profilinator.rishav.dev/skills-assets/gitlab.svg" alt="GitLab" width="50px" height="50px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">Git</td>
//             <td style="text-align: center;">GitLab</td>
//           </tr>
//         </tbody></table>
//       <h3><strong>Data-set</strong></h3>
//       <ul>
//         <li>DeepFashion 데이터</li>
//         <li>아마존(US) 크롤링 데이터</li>
//       </ul><br>
//       <div id="3"></div>
//       <h2>💡 주요 기능</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">기능</th>
//             <th style="text-align: center;">내용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">룩북 페이지 제공</td>
//             <td style="text-align: center;">룩북 페이지를 제공하여 멤버들이 사진에서 입고 있는 옷과<br>유사한 옷들을 제시하고 판매처를 연결</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">멤버 매칭 서비스</td>
//             <td style="text-align: center;">사용자의 스타일링 사진을 업로드 시<br>사용자의 패션과 유사한 패션 스타일을 가진 멤버를 매칭</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">요청 서비스</td>
//             <td style="text-align: center;">사용자가 운영진에게 추가를 원하는 이미지를 요청 보낼 수 있는 수 있는 기능</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">한/영 페이지 제공</td>
//             <td style="text-align: center;">글로벌 사용자 유입을 위해 한영 페이지 모두 구현</td>
//           </tr>
//         </tbody></table>
//       <blockquote>
//         <p>패션 스캐너 웹 서비스는 <strong>반응형 웹</strong>을 구축하여 <strong>모바일 환경에서도 최적의 서비스를 제공</strong>하고 있습니다.</p>
//       </blockquote><br>
//       <div id="4"></div>
//       <h2>📂 프로젝트 구성도</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;"><a href="https://www.figma.com/file/UpQVmuk7wFVKmdUTBRpiTZ/%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC-LookBook?node-id=0%3A1" target="_blank">🔗와이어프레임(Wireframe)</a></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/wireframe.png" alt="Wireframe" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;"><a href="https://github.com/JeongHwan-dev/fashion-scanner/blob/master/documents/fashion-scanner_storyboard.pdf" target="_blank">🔗스토리보드</a></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/storyboard1.png" alt="Storyboard1" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">아키텍처(Architecture)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/architecture.png" alt="Architecture" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">개체-관계 모델(ERD)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/erd.png" alt="ERD" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table><br>
//       <div id="5"></div>
//       <h2>🎥 데모 영상</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">메인 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/main-page.gif" alt="메인 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">룩북 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/lookbook-jisoo-page.gif" alt="룩북 지수 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/lookbook-rose-page.gif" alt="룩북 로제 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">매칭 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/matching-page1.gif" alt="매칭 페이지1" style="max-width: 100%;">
//             </td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/matching-page2.gif" alt="매칭 페이지2" style="max-width: 100%;">
//             </td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/matching-page3.gif" alt="매칭 페이지3" style="max-width: 100%;">
//             </td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/matching-page4.gif" alt="매칭 페이지4" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">요청 서비스</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/request.gif" alt="요청 서비스" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">FAQ 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/faq-page.gif" alt="FAQ 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">조직문화 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/devTeam-page.gif" alt="조직문화 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">404 에러 페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/404-page.gif" alt="404 에러 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">영문 메인 페이지 (영문 전환 기능)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/eng-main-page.gif" alt="영문 메인 페이지" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">메인 페이지(모바일)</th>
//             <th style="text-align: center;">룩북 페이지(모바일)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/mobile-main-page.gif" alt="메인 페이지(모바일)" width="400px" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/mobile-lookbook-page.gif" alt="룩북 페이지(모바일)" width="400px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">매칭 페이지(모바일)</th>
//             <th style="text-align: center;">FAQ 페이지(모바일)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/mobile-matching-page.gif" alt="매칭 페이지(모바일)" width="400px" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/mobile-faq-page.gif" alt="FAQ 페이지(모바일)" width="400px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">조직문화 페이지(모바일)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/mobile-devTeam-page.gif" alt="조직문화 페이지(모바일)" width="400px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table><br>
//       <div id="6"></div>
//       <h2>👪 개발 팀 소개</h2>
//       <table>
//         <tbody>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/Sarah-Cha" target="_blank"><img src="https://avatars.githubusercontent.com/u/83054347?v=4" alt="차시현 프로필" style="max-width: 100%;"></a></td>
//             <td style="text-align: center;"><a href="https://github.com/chanmi1127" target="_blank"><img src="https://avatars.githubusercontent.com/u/47763664?v=4" alt="차시현 프로필" style="max-width: 100%;"></a></td>
//             <td style="text-align: center;"><a href="https://github.com/JeongHwan-dev" target="_blank"><img src="https://avatars.githubusercontent.com/u/68452755?v=4" alt="박정환 프로필" style="max-width: 100%;"></a></td>
//             <td style="text-align: center;"><a href="https://github.com/alveloper" target="_blank"><img src="https://avatars.githubusercontent.com/u/73899253?v=4" alt="김수연 프로필" style="max-width: 100%;"></a></td>
//             <td style="text-align: center;"><a href="https://github.com/bky373" target="_blank"><img src="https://avatars.githubusercontent.com/u/49539592?v=4" alt="이보람 프로필" style="max-width: 100%;"></a></td>
//           </tr>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/Sarah-Cha" target="_blank">차시현<br>(PM &amp; AI)</a></td>
//             <td style="text-align: center;"><a href="https://github.com/chanmi1127" target="_blank">이찬미<br>(AI)</a></td>
//             <td style="text-align: center;"><a href="https://github.com/JeongHwan-dev" target="_blank">박정환<br>(Front-end)</a></td>
//             <td style="text-align: center;"><a href="https://github.com/alveloper" target="_blank">김수연<br>(Front-end)</a></td>
//             <td style="text-align: center;"><a href="https://github.com/bky373" target="_blank">이보람<br>(Back-end)</a></td>
//           </tr>
//         </tbody></table><br>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">이름</th>
//             <th style="text-align: center;">역할</th>
//             <th style="text-align: center;">개발 내용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">차시현</td>
//             <td style="text-align: center;">PM &amp; AI</td>
//             <td style="text-align: center;">프로젝트 문서 작성<br>스토리보드 작성<br>아마존 쇼핑몰 데이터 크롤링<br>딥패션 데이터 활용한 모델 1, 모델 2 개발<br>UX 작성</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">이찬미</td>
//             <td style="text-align: center;">AI</td>
//             <td style="text-align: center;">아마존 쇼핑몰 데이터 크롤링<br>딥패션 데이터 활용한 모델 1, 모델 2 개발</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">박정환</td>
//             <td style="text-align: center;">Front-end</td>
//             <td style="text-align: center;">메인 페이지 개발(+반응형 웹)<br>멤버 매칭 페이지 개발(+반응형 웹)<br>매칭 실패 페이지 개발(+반응형 웹)<br>매칭 결과 페이지 개발(+반응형 웹)<br>조직문화 페이지 개발(+반응형 웹)</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">김수연</td>
//             <td style="text-align: center;">Front-end</td>
//             <td style="text-align: center;">멤버별 룩북 페이지 개발(+반응형 웹)<br>FAQ 페이지 개발(+반응형 웹)<br>로딩 페이지 개발(+반응형 웹)<br>404 페이지 개발(+반응형 웹)<br>한/영 전환 기능 개발</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">이보람</td>
//             <td style="text-align: center;">Back-end</td>
//             <td style="text-align: center;">룩북 API 설계<br>멤버 매칭 API 설계<br>DB 설계<br>웹 서비스 배포</td>
//           </tr>
//         </tbody></table><br>
//       <div id="7"></div>
//       <h2>📅 개발 기간 및 일정</h2>
//       <h3>개발 기간</h3>
//       <p>21.05.11 ~ 21.06.11 (5주)</p>
//       <h3>개발 일정</h3>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">주차</th>
//             <th style="text-align: center;">내용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">1주차</td>
//             <td style="text-align: center;">기획안 확정<br>와이어프레임 및 스토리보드 작성<br>아키텍처 설계<br>인공지능 환경 셋업</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">2주차</td>
//             <td style="text-align: center;">메인 페이지 개발<br>룩북 페이지 개발<br>인공지능 데이터 정제</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">3주차</td>
//             <td style="text-align: center;">메인 페이지 개발<br>룩북 페이지 개발<br>매칭 페이지 개발<br>API 설계</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">4주차</td>
//             <td style="text-align: center;">FAQ 페이지 개발<br>조직 문화 페이지 개발<br>반응형 웹 구현<br>404 페이지 개발<br>API 연결</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">5주차</td>
//             <td style="text-align: center;">반응형 웹 구현<br>한/영 전환 구현<br>웹 서비스 배포</td>
//           </tr>
//         </tbody></table><br>
//       <div id="8"></div>
//       <h2>📊 구글 애널리틱스 통계</h2>
//       <p>구글 애널리틱스를 세팅하고 배포를 진행하여 6월 12일부터 10월 31일까지 약 5달간 서비스를 진행하였습니다.</p>
//       <blockquote>
//         <p>서비스 기간: 2021년 6월 12일 ~ 2021년 10월 31일 (약 5달)</p>
//       </blockquote>
//       <h3>사용자 통계</h3>
//       <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/user_stats.png" alt="사용자 통계" style="max-width: 100%;">
//       <blockquote>
//         <p>하루 이용자 최대치는 47명을 기록하였습니다.</p>
//       </blockquote><br>
//       <h3>국가 통계</h3>
//       <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/country_stats.png" alt="국가별 통계" style="max-width: 100%;">
//       <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/map_stats.png" alt="국가별 통계(세계지도)" style="max-width: 100%;">
//       <blockquote>
//         <p>많은 사용자는 아니지만 미국, 네덜란드, 영국, 인도네시아, 일본, 태국, 독일, 크로아티아, 인도 등에서 '패션 스캐너' 서비스를 이용해주셨습니다.</p>
//       </blockquote><br>
//       <h3>언어 통계</h3>
//       <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/language_stats.png" alt="언어별 통계" style="max-width: 100%;">
//       <blockquote>
//         <p>한국어로 가장 많이 이용되었고 두 번째로는 영어로 가장 많이 이용되었습니다.</p>
//       </blockquote><br>
//       <h3>운영체제 통계</h3>
//       <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/os_stats.png" alt="운영체제 통계" style="max-width: 100%;">
//       <blockquote>
//         <p>이용자의 절반 정도가 윈도우 OS로 이용하셨고 약 20% 정도가 안드로이드, 약 17%가 애플 컴퓨터 OS인 Mac OS, 약 16%가 아이폰의 iOS로 이용해주셨습니다.</p>
//       </blockquote><br>
//       <h3>브라우저 통계</h3>
//       <img src="https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/browser_stats.png" alt="브라우저 통계" style="max-width: 100%;">
//       <blockquote>
//         <p>이용자의 60%가 크롬 브라우저를 통해 이용해주셨고 이외에도 Android Webview, Safari, Edge, Samsung Interne 등으로 다양한 브라우저를 통해 이용해주셨습니다.</p>
//       </blockquote><br>
//       <div id="9"></div>
//       <h2>💻 실행 방법</h2>
//       <h3>client 실행</h3>
//       <ol>
//         <li><strong>원격 저장소 복제</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ git clone https://github.com/JeongHwan-dev/fashion-scanner.git
//       </code></pre>
//       <ol start="2">
//         <li><strong>프로젝트 폴더로 이동 후 client 폴더로 이동</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ cd fashion-scanner
//       $ cd client
//       </code></pre>
//       <ol start="3">
//         <li><strong>필요한 node_modules 설치</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ npm install
//       </code></pre>
//       <ol start="4">
//         <li><strong>리액트 앱 실행</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ npm start
//       </code></pre>
//       </div>`,
//     userId: 'test17',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-01-06 13:34',
//     likes: 15,
//     views: 52,
//     thumbnail: 'thumbnail17',
//     techIds: [1, 7, 8],
//   },
//   {
//     projectId: 18,
//     projectTitle: '[풀스택] 두굿모닝 (Do Good morning)',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <div align="center"><br>
//         <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/dgm_logo.png" height="150px" style="max-width: 100%;">
//         <h1>두굿모닝 (Do Good morning)</h1>
//         <img src="https://img.shields.io/badge/AWS%20-Deactivate-ff7f00?&amp;logo=AWSAmplify&amp;logoColor=white" alt="AWS" style="max-width: 100%;"><br>
//       </div>
//       <div id="1"></div>
//       <h2>🔅 프로젝트 진행 배경</h2>
//       <p>&nbsp;&nbsp;<strong>두굿해커톤</strong>(Do Good Hackathon)에 참여하여 진행한 프로젝트 입니다.</p>
//       <p>&nbsp;&nbsp;두굿해커톤 규칙에 따라 개발은 <code>08.14.(토) 10:00AM ~ 08.15.(일) 11:00AM [25시간]</code> 이라는 단시간 동안 진행한 프로젝트입니다.</p>
//       <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/do-good_logo.png" alt="Do Good Hackathon" width="300px" style="max-width: 100%;">
//       <h3>해커톤 주제</h3>
//       <ul>
//         <li>코로나로 인해 어려움을 겪는 전세계 로컬 비즈니스 지원 서비스</li>
//         <li>가족이나 친구와의 심적 거리를 좁혀주는 새로운 소통/커머스 서비스</li>
//         <li>나와 내 커뮤니티의 몸과 마음을 건강하게 해주는 디지털 웰빙/힐링 서비스</li>
//       </ul>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/gather-town1.png" alt="gather-town1" width="300px" style="max-width: 100%;">
//             </th>
//             <th style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/gather-town2.png" width="350px" style="max-width: 100%;">
//             </th>
//           </tr>
//         </thead></table><br>
//       <p><a href="https://event-us.kr/vqssceuidpw2/event/33708" target="_blank"><strong>🔗 2021 두굿해커톤 공고 바로가기 Click !</strong></a> 👈</p>
//       <blockquote>
//         <p>새 창 열기 방법 : CTRL+click (on Windows and Linux) | CMD+click (on MacOS)</p>
//       </blockquote><br>
//       <div id="2"></div>
//       <h2>💁🏻&zwj;♂ 웹 서비스 소개</h2>
//       <p>&nbsp;&nbsp;<strong>서로의 아침 창밖 풍경을 공유</strong>해 두근거리는 아침 그리고 굿모닝을 실천하게 해주는 두굿모닝 서비스입니다.<br>세계 각국에서 업로드하는 창밖 풍경 사진들을 통해 세계 여행을 즐기실 수 있습니다.</p><br>
//       <div id="3"></div>
//       <h2>🛠 기술 스택</h2>
//       <p><strong>Front-end</strong></p>
//       <ul>
//         <li>
//           <img src="https://img.shields.io/badge/-HTML5-E34F26?&amp;logo=html5&amp;logoColor=white" alt="HTML5" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-CSS3-1572B6?&amp;logo=css3&amp;logoColor=white" alt="CSS3" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?&amp;logo=javascript&amp;logoColor=white" alt="JavaScript" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-React-61DAFB?&amp;logo=react&amp;logoColor=white" alt="React" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-Ant_Design-0170FE?&amp;logo=AntDesign&amp;logoColor=white" alt="Ant Design" style="max-width: 100%;">
//           <img src="https://img.shields.io/badge/-Swiper-6332F6?&amp;logo=Swiper&amp;logoColor=white" alt="Swiper" style="max-width: 100%;">
//         </li>
//       </ul>
//       <p><strong>Back-end</strong></p>
//       <ul>
//         <li>
//           <img src="https://img.shields.io/badge/-Python-3776AB?&amp;logo=python&amp;logoColor=white" alt="Python" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-Flask-333?&amp;logo=flask&amp;logoColor=white" alt="Flask" style="max-width: 100%;">
//         </li>
//         <li>
//           <img src="https://img.shields.io/badge/-MySQL-4479A1?&amp;logo=mysQL&amp;logoColor=white" alt="MySQL" style="max-width: 100%;">
//         </li>
//       </ul>
//       <p><strong>DevOps</strong></p>
//       <ul>
//         <li>
//           <p>
//             <img src="https://img.shields.io/badge/-Git-F05032?&amp;logo=git&amp;logoColor=white" alt="Git" style="max-width: 100%;">
//             <img src="https://img.shields.io/badge/-GitHub-181717?&amp;logo=github&amp;logoColor=white" alt="GitHub" style="max-width: 100%;">
//           </p>
//         </li>
//         <li>
//           <p>
//             <img src="https://img.shields.io/badge/-NGINX-009639?&amp;logo=NGINX&amp;logoColor=white" alt="NGINX" style="max-width: 100%;">
//             <img src="https://img.shields.io/badge/-AWS-FF9900?&amp;logo=AWSAmplify&amp;logoColor=white" alt="AWS" style="max-width: 100%;">
//           </p>
//         </li>
//       </ul><br>
//       <div id="4"></div>
//       <h2>💡 주요 기능</h2>
//       <ul>
//         <li>사진 업로드와 멘션을 통한 아침 창밖 모습과 그날의 기분과 일정 공유</li>
//         <li>세계지도 UI를 통해 실시간 모닝존(AM 06:00 ~ 10:00) 위치를 확인하고 베스트 창문 컷 표기</li>
//         <li>세계 각국에서 올리는 게시물들을 다양한 기준으로 통계하여 랭킹으로 시각화</li>
//       </ul><br>
//       <div id="5"></div>
//       <h2>📂 프로젝트 구성도</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;"><a href="https://www.figma.com/file/jKUOxRV6PgkZcu8Ovkvvqf/DoGoodMorning?node-id=125%3A18" target="_blank">🔗와이어프레임(Wireframe)</a></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/figma.png" alt="Wireframe" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">스토리보드(Storyboard)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/storyboard.png" alt="Storyboard" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">아키텍처(Architecture)(Storyboard)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/architecture.png" alt="Architecture" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <div id="6"></div>
//       <h2>📄 주요 페이지 및 기능 소개</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">메인 페이지 (게시물 섹션)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/main-page-section1.gif" alt="main-page-section1" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">메인 페이지 (세계지도 섹션)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/main-page-section2.gif" alt="main-page-section2" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">메인 페이지 (베스트 게시물 섹션)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/main-page-section3.gif" alt="main-page-section3" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">메인 페이지 (랭킹 섹션)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/main-page-section4.gif" alt="main-page-section4" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">로그인 및 회원가입</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/login-page.gif" alt="login-page" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">게시물 업로드</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/upload-page.gif" alt="upload-page" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">마이페이지</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://github.com/do-good-morning/do-good-morning/raw/master/images/profile-page.gif" alt="profile-page" width="1200px" style="max-width: 100%;">
//             </td>
//           </tr>
//         </tbody></table><br>
//       <div id="7"></div>
//       <h2>👪 개발 팀 소개</h2>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">이름</th>
//             <th style="text-align: center;">역할</th>
//             <th style="text-align: center;">개발 내용</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/ksy9926" target="_blank">김수영</a></td>
//             <td style="text-align: center;">Front-end</td>
//             <td style="text-align: center;">로그인 및 회원가입 기능 개발<br>세계지도 페이지 타임존 기능 개발<br>랭킹 페이지 마크업 및 스타일링 작업<br>AWS VM 배포 및 관리</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/JeongHwan-dev" target="_blank">박정환</a></td>
//             <td style="text-align: center;">Front-end</td>
//             <td style="text-align: center;"><strong>메인 페이지 (게시물 섹션)</strong> 마크업 및 스타일링 작업<br><strong>메인 페이지 (베스트 게시물 섹션)</strong> 마크업 및 스타일링 작업<br><strong>마이페이지</strong> 마크업 및 스타일링 작업<br><strong>로그인 및 회원가입 모달</strong> 마크업 및 스타일링 작업<br><strong>게시물 업로드 모달</strong> 마크업 및 스타일링 작업</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/SonSangjoon" target="_blank">손상준</a></td>
//             <td style="text-align: center;">Front-end</td>
//             <td style="text-align: center;">인포메이션 아키텍쳐 작성<br>메인 페이지 업로드 기능 개발<br>메인 페이지 게시물 기능 개발<br>세계지도 페이지 검색 기능 개발<br>베스트 게시물 기능 개발</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/insun-kang" target="_blank">강인선</a></td>
//             <td style="text-align: center;">Back-end</td>
//             <td style="text-align: center;">서버 아키텍쳐 작성<br>DB설계<br>auth API개발<br>게시물 API개발(이미지, 좋아요 등)<br>리더보드 API개발</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/David-Lee-dev" target="_blank">이주현</a></td>
//             <td style="text-align: center;">Back-end</td>
//             <td style="text-align: center;">-</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">윤은비</td>
//             <td style="text-align: center;">Designer</td>
//             <td style="text-align: center;">UI/UX 설계<br>Figma를 통한 와이어프레임 작성</td>
//           </tr>
//         </tbody></table><br>
//       <p><a href="https://github.com/do-good-morning/do-good-morning/tree/master/team-rules" target="_blank"><strong>🔗 팀 개발 규칙 바로가기 Click !</strong></a> 👈</p>
//       <blockquote>
//         <p>새 창 열기 방법 : CTRL+click (on Windows and Linux) | CMD+click (on MacOS)</p>
//       </blockquote><br>
//       <div id="8"></div>
//       <h2>📅 개발 기간</h2>
//       <p><code>08.14.(토) 10:00 AM ~ 08.15.(일) 11:00 AM (25시간)</code></p><br>
//       <div id="9"></div>
//       <h2>💻 실행 방법</h2>
//       <ol>
//         <li><strong>원격 저장소 복제</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ git clone https://github.com/do-good-morning/do-good-morning.git
//       </code></pre>
//       <ol start="2">
//         <li><strong>프로젝트 폴더로 이동 후 서버 폴더로 이동</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ cd do-good-morning
//       $ cd back
//       </code></pre>
//       <ol start="3">
//         <li><strong>서버 실행</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ export FLASK_APP=back
//       $ export FLASK_ENV=development
//       $ flask run
//       </code></pre>
//       <ol start="4">
//         <li><strong>클라이언트 폴더로 이동</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ cd client
//       </code></pre>
//       <blockquote>
//         <p>새 창 터미널 열기 후</p>
//       </blockquote>
//       <ol start="5">
//         <li><strong>필요한 node_modules 설치</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ npm install
//       </code></pre>
//       <ol start="6">
//         <li><strong>리액트(클라이언트) 앱 실행</strong></li>
//       </ol>
//       <pre><code class="language-bash">$ npm start
//       </code></pre>
//       </div>`,
//     userId: 'test18',
//     projectStatus: 'Ps_pr',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2023-08-13 13:34',
//     likes: 2,
//     views: 74,
//     thumbnail: 'thumbnail18',
//     techIds: [1, 4, 9],
//   },
//   {
//     projectId: 19,
//     projectTitle: '블로그 글을 쉽게 트윗할 수 있는 서비스',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>Hashnode to Twitter</h1>
//       <p>This app allows you to post bite-sized tweets summarizing your <a href="https://hashnode.com" target="_blank">Hashnode</a> blog post.</p>
//       <p><strong><a href="https://hashnode-to-twitter.vercel.app" target="_blank">Live Demo</a></strong></p>
//       <p>To know more about its features and how I built this app on <a href="https://geekysrm.hashnode.dev/introducing-hashnode-to-twitter" target="_blank">my Hashnode blog</a>.</p>
//       <h2>Video Demo</h2>
//       <to be="" added="" real="" soon="">
//         <h2>Screenshots</h2>
//         <h3>Homepage</h3>
//         <img width="1792" alt="home page" src="https://user-images.githubusercontent.com/10224804/131415177-0db9d07a-8c39-4f34-977a-24398f0ca9ca.png" style="max-width: 100%;">
//         <h3>Edit and Preview Tweets screen</h3>
//         <img width="1792" alt="edit-screen" src="https://user-images.githubusercontent.com/10224804/131415148-7f9f3b9b-1536-4c7c-9873-e81df654287d.png" style="max-width: 100%;">
//         <h3>Success Screen</h3>
//         <img width="1792" alt="done-screen" src="https://user-images.githubusercontent.com/10224804/131415132-3bba910f-8451-4782-946f-42d3c7a03b5b.png" style="max-width: 100%;">
//         <h2>How to use</h2>
//         <ol>
//           <li>On the homepage of the app, login into Twitter.</li>
//           <li>Enter the URL of your Hashnode blog post and click on Fetch and Tweet.</li>
//           <li>On the Edit page, customize the tweets to your liking.</li>
//           <li>After editing and being satisfied with the preview, click on Tweet.</li>
//           <li>Your tweets will be tweeted in few seconds and you will be sent to the success screen.</li>
//           <li>On the success/done screen, you can see the posted tweets embedded.</li>
//         </ol>
//         <h2>Tech used</h2>
//         <ul>
//           <li>Next.js</li>
//           <li>Tailwind CSS</li>
//           <li>Auth0</li>
//           <li>Twitter API</li>
//         </ul>
//         <h2>How to run locally</h2>
//         <p><em>Node.JS and npm must be installed. Download and install them from <a href="https://nodejs.org/" target="_blank">here</a>.</em></p>
//         <p>Follow these steps to run this project in your local computer.</p>
//         <pre><code>$ git clone https://github.com/geekysrm/hashnode-to-twitter.git
//       $ cd hashnode-to-twitter
//       $ npm i
//       $ npm run dev
//       </code></pre>
//         <p>Dev server will be running on port 3000.</p>
//         <h2>Contributions</h2>
//         <p>All contributions are welcome. Bugs and feedback can be raised on the Issues tab.</p>
//         <h2>Support</h2>
//         <p>If you like this and want to support my open-source work, please <a href="https://coffee.soumya.dev/" target="_blank">buy me a coffee</a>.</p>
//       </to>
//       </div>`,
//     userId: 'test19',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-09-23 13:34',
//     likes: 5,
//     views: 34,
//     thumbnail: 'thumbnail19',
//     techIds: [5, 6],
//   },
//   {
//     projectId: 20,
//     projectTitle: '[BE] Cherish 당신의 소중한 사람들을 위한 연락관리 서비스',
//     description: `<div style="font-size:16px;"  class="readme-markdown">
//       <img src="https://user-images.githubusercontent.com/42789819/104716209-f1cfa800-576a-11eb-8275-3d2e69cce546.png" style="max-width: 100%;"><br>
//       <h2>
//         <img width="20px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;"> Project
//       </h2>
//       <p><strong>당신의 소중한 사람들을 위한 연락관리 서비스, Cherish</strong></p>
//       <blockquote>
//         <p><strong>SOPT 27th APPJAM</strong><br><strong>프로젝트 기간: 2020.12.26 ~ 2021.01.16</strong><br><strong>추가 개발 및 유지보수 기간: 2021.02.03 ~ 2021.06.20</strong><br><strong>Released : 2021.07.03</strong></p>
//       </blockquote>
//       <p><a href="https://apps.apple.com/us/app/id1557601516" target="_blank"><img width="150px" src="https://user-images.githubusercontent.com/42789819/115149387-d42e1980-a09e-11eb-88e3-94ca9b5b604b.png" style="max-width: 100%;"></a></p><br>
//       <h2>Cherish iOS Developers</h2>
//       <table>
//         <tbody>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/hwangji-dev" target="_blank"><img src="https://user-images.githubusercontent.com/63224278/103209152-b436e680-4945-11eb-91e4-bd8622e442e2.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>hwangji-dev</b></sub></a><br><a href="https://github.com/TeamCherish/Cherish-iOS/commits?author=hwangji-dev" title="Code" target="_blank">📱</a></td>
//             <td style="text-align: center;"><a href="https://github.com/snowedev" target="_blank"><img src="https://user-images.githubusercontent.com/63224278/103280936-ee22ee00-4a14-11eb-9161-aa5249d74f20.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>snowedev</b></sub></a><br><a href="https://github.com/TeamCherish/Cherish-iOS/commits?author=snowedev" title="Code" target="_blank">📱</a></td>
//             <td style="text-align: center;"><a href="https://github.com/seohyun-106" target="_blank"><img src="https://user-images.githubusercontent.com/63224278/103281341-e9ab0500-4a15-11eb-877b-e9c384c7de88.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>seohyun-106</b></sub></a><br><a href="https://github.com/TeamCherish/Cherish-iOS/commits?author=seohyun-106" title="Code" target="_blank">📱</a></td>
//           </tr>
//         </tbody></table><br>
//       <h2>Development Environment and Using Library</h2>
//       <ul>
//         <li>Development Environment</li>
//       </ul>
//       <p>
//         <img src="https://img.shields.io/badge/Swift-5.0-orange.svg" alt="Swift" style="max-width: 100%;">
//         <img src="https://img.shields.io/badge/Platform-iOS-black.svg" alt="iOS" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>
//           <p>Using Library</p>
//           <pre><code class="language-ruby"># Pods for Cherish-iOS
//       pod 'Alamofire','~&gt; 5.4.1'  # 서버 통신
//       pod 'Kingfisher'            # 이미지 캐싱
//       pod 'FSCalendar'            # 캘린더 구현
//       pod 'OverlayContainer'      # BottomSheet 애니메이션
//       pod 'Firebase/Analytics'    # 앱 데이터 분석
//       pod 'Firebase/Messaging'    # 푸시 알림
//       </code></pre>
//         </li>
//       </ul><br>
//       <h2>Coding Convention</h2>
//       <details>
//         <summary>🗂 폴더구조</summary>
//         <div markdown="1">
//           <hr>
//           <pre><code class="language-markdown">🗂 Global
//           - AppModels 🗂
//           - Font 🗂
//           - View 🗂
//           - Extension 🗂
//           - Class 🗂
//           - Gif 🗂

//       🗂 Network
//           - APIModels 🗂
//           - APIServices 🗂

//       🗂 Screens
//           - AddUser 🗂
//               - Cells 🗂
//               - Controller 🗂
//               - Storyboards 🗂
//           - ...

//       🗂 Supports
//           - info.plist
//           - GoogleService-Info.plist
//           - AppDelegate.swift
//           - SceneDelegate.swift
//           - Assets.xcassets
//       </code></pre><br>
//         </div>
//       </details>
//       <details>
//         <summary>🖋 네이밍</summary>
//         <div markdown="1">
//           <hr>
//           <p><strong>Class &amp; Struct</strong></p>
//           <ul>
//             <li>
//               <p>클래스/구조체 이름은 <strong>UpperCamelCase</strong>를 사용합니다.</p>
//             </li>
//             <li>
//               <p>클래스 이름에는 접두사를 붙이지 않습니다.</p>
//               <p><kbd>좋은 예</kbd></p>
//               <pre><code class="language-swift">class CherishTVC: UITableViewCell
//       </code></pre>
//               <p><kbd>나쁜 예</kbd></p>
//               <pre><code class="language-swift">struct cherishCVCInfo { }
//       </code></pre>
//             </li>
//           </ul>
//           <p><strong>함수 &amp; 변수 &amp; 상수</strong></p>
//           <ul>
//             <li>
//               <p>함수와 변수에는 <strong>lowerCamelCase</strong>를 사용합니다.</p>
//             </li>
//             <li>
//               <p>버튼명에는 <strong>Btn 약자</strong>를 사용합니다.</p>
//             </li>
//             <li>
//               <p>모든 IBOutlet에는 해당 클래스명을 뒤에 붙입니다.</p>
//               <ul>
//                 <li>~~ImageView, ~~Label, ~~TextField와 같이 속성값을 붙여줍니다.</li>
//               </ul>
//             </li>
//             <li>
//               <p>테이블 뷰는 <strong>TV</strong>, 컬렉션뷰는 <strong>CV</strong>로 줄여서 네이밍합니다.</p>
//             </li>
//             <li>
//               <p>테이블 뷰 셀은 <strong>TVC</strong>, 컬렉션뷰 셀은 <strong>CVC</strong>로 줄여서 네이밍합니다.</p>
//               <p><kbd>좋은 예</kbd></p>
//               <pre><code class="language-swift">@IBOutlet weak var wateringBtn: UIButton!
//       @IBOutlet weak var cherishMainView: UIView!
//       @IBOutlet weak var cherishTV: UITableView!
//       </code></pre>
//               <p><kbd>나쁜 예</kbd></p>
//               <pre><code class="language-swift">@IBOutlet weak var ScrollView: UIScrollView!
//       @IBOutlet weak var cherishcollectionview: UICollectionView!
//       @IBOutlet weak var tagcollectionview: UICollectionView!
//       @IBOutlet weak var tableview: UITableView!
//       </code></pre>
//             </li>
//           </ul><br>
//         </div>
//       </details>
//       <details>
//         <summary>🏷 주석</summary>
//         <div markdown="1">
//           <hr>
//           <ul>
//             <li><code>// MARK:</code> 를 사용해서 연관된 코드를 구분짓습니다.</li>
//             <li><code>///</code> 를 사용해서 문서화에 사용되는 주석을 남깁니다. (ex. /// 사용자 프로필을 그려주는 뷰)</li>
//           </ul><br>
//         </div>
//       </details>
//       <details>
//         <summary>📎 기타</summary>
//         <div markdown="1">
//           <hr>
//           <ul>
//             <li>viewDidLoad() 내에는 <strong>Function만 위치</strong>시킵니다.</li>
//             <li>중복되는 부분들은 +Extension.swift로 만들어 활용합니다.</li>
//             <li>메인컬러와 같이 자주 쓰이는 컬러들은 Asset에 Color Set을 만들어서 사용합니다.</li>
//             <li>, 뒤에 반드시 띄어쓰기를 합니다.</li>
//             <li>함수끼리 1줄 개행합니다.</li>
//             <li>중괄호는 아래와 같은 형식으로 사용합니다.
//               <pre><code class="language-swift">if (condition){

//         Statements
//         /*
//         ...
//         */

//       }
//       </code></pre>
//             </li>
//           </ul>
//         </div>
//       </details>
//       <p>👉🏻 <a href="https://github.com/TeamCherish/Cherish-iOS/wiki/CodingConvention" target="_blank">Coding Convention 한 눈에 보기</a><br>👉🏻 다음 <a href="https://github.com/StyleShare/swift-style-guide" target="_blank">Style Guide</a>를 참고헀습니다.</p><br>
//       <h2>Commit Messge Rules</h2>
//       <details>
//         <summary>아요체리🍒 들의 Git Commit Message Rules</summary>
//         <div markdown="1">
//           <hr>
//           <blockquote>
//             <p>반영사항을 바로 확인할 수 있도록 작은 기능 하나라도 구현되면 커밋을 권장합니다.<br>커밋할 땐 <strong>iOS 슬랙에 노티</strong>합니다.<br>기능 구현이 완벽하지 않을 땐, 각자 브랜치에 커밋을 해주세요.</p>
//           </blockquote><br>
//           <p><strong>커밋 메시지 명령어 모음</strong></p>
//           <ul>
//             <li>
//               <pre><code>- feat    : 기능 (새로운 기능)
//       - fix     : 버그 (버그 수정)
//       - refactor: 리팩토링
//       - style   : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
//       - docs    : 문서 (문서 추가, 수정, 삭제)
//       - test    : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
//       - chore   : 기타 변경사항 (빌드 스크립트 수정 등)
//       </code></pre><br>
//             </li>
//           </ul>
//           <p><strong>커밋 메세지 형식</strong></p>
//           <ul>
//             <li>
//               <p><code>[커밋메세지] 설명</code> 형식으로 커밋 메시지를 작성합니다.</p>
//             </li>
//             <li>
//               <p>커밋 메시지는 영어 사용을 권장합니다.<br><kbd>좋은 예</kbd></p>
//               <pre><code>[Feat] fetchcontacts!
//       </code></pre>
//               <p><kbd>나쁜 예</kbd></p>
//               <pre><code>연락처 동기화 기능 추가
//       </code></pre>
//             </li>
//           </ul>
//         </div>
//       </details><br>
//       <h2>Github mangement</h2>
//       <details>
//         <summary>아요체리🍒들의 WorkFlow : Gitflow Workflow</summary>
//         <div markdown="1">
//           <hr>
//           <pre><code>- main
//       - dev
//       ─ cherishMainView(각 Local Branch)
//       ─ cherishAddView
//       ─ cherishWateringView
//       </code></pre>
//           <ul>
//             <li>
//               <p>커밋 메세지는 다른 사람들이 봐도 이해할 수 있게 써주세요.</p>
//             </li>
//             <li>
//               <p>풀리퀘스트를 통해 코드 리뷰를 해보아요.</p>
//             </li>
//           </ul><br>
//           <p><strong>각자 자신이 맡은 기능 구현에 성공시! 브랜치 다 쓰고 병합하는 방법</strong></p>
//           <ul>
//             <li>브랜치 만듦</li>
//           </ul>
//           <pre><code class="language-bash">git branch 기능(or 뷰)이름
//       </code></pre>
//           <ul>
//             <li>원격 저장소에 로컬 브랜치 push</li>
//           </ul>
//           <pre><code class="language-bash">git push --set-upstream origin 브랜치이름(뷰이름)
//       </code></pre>
//           <pre><code class="language-bash">git push -u origin 브랜치이름(뷰이름)
//       </code></pre>
//           <ul>
//             <li>브랜치 전환</li>
//           </ul>
//           <pre><code class="language-bash">git checkout 뷰이름
//       </code></pre>
//           <ul>
//             <li>코드 변경 (현재 <strong>뷰이름</strong> 브랜치)</li>
//           </ul>
//           <pre><code class="language-bash">git add .
//       git commit -m "커밋 메세지" origin 뷰이름
//       </code></pre>
//           <ul>
//             <li>푸시 (현재 <strong>뷰이름</strong> 브랜치)</li>
//           </ul>
//           <pre><code class="language-bash">git push origin 뷰이름 브랜치
//       </code></pre>
//           <ul>
//             <li>뷰이름 브랜치에서 할 일 다 했으면 <strong>main</strong> 브랜치로 전환</li>
//           </ul>
//           <pre><code class="language-bash">git checkout main
//       </code></pre>
//           <ul>
//             <li>머지 (현재 <strong>main</strong> 브랜치)</li>
//           </ul>
//           <pre><code class="language-bash">git merge 뷰이름
//       </code></pre>
//           <ul>
//             <li>다 쓴 브랜치 삭제 (local) (현재 <strong>main</strong> 브랜치)</li>
//           </ul>
//           <pre><code class="language-bash">git branch -d 뷰이름
//       </code></pre>
//           <ul>
//             <li>다 쓴 브랜치 삭제 (remote) (현재 <strong>main</strong> 브랜치)</li>
//           </ul>
//           <pre><code class="language-bash">git push origin :뷰이름
//       </code></pre>
//           <ul>
//             <li>main pull (현재 <strong>main</strong> 브랜치)</li>
//           </ul>
//           <pre><code class="language-bash">git pull or git pull origin main
//       </code></pre>
//           <ul>
//             <li>main push (현재 <strong>main</strong> 브랜치)</li>
//           </ul>
//           <pre><code class="language-bash">git push or git push origin main
//       </code></pre>
//         </div>
//       </details><br>
//       <h2>Service workflow</h2>
//       <img width="100%" src="https://user-images.githubusercontent.com/42789819/115150061-bca46000-a0a1-11eb-8354-990412c70381.jpg" style="max-width: 100%;"><br>
//       <h2>Task</h2>
//       <blockquote>
//         <p><a href="https://www.notion.so/iOS-6d2c0ea99df5403eaa7154b42a1cae4c" target="_blank">Cherish iOS 개발 일지📔 및 칸반보드👨&zwj;🏫</a></p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: left;">기능</th>
//             <th style="text-align: center;">개발 여부</th>
//             <th style="text-align: center;">담당자</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: left;">Onboarding</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">이원석</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">SignUp, Find Password</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">이원석</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">Splash &amp; Login</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">황지은</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">Push Alert</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">황지은</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">Main View</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">황지은</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">Add Friend</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">장서현</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">Watering Flow(Contact, Review)</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">이원석</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">Calendar View(Calendar, Review Edit)</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">이원석</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">Plant Detail</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">황지은</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">MyPage(Profile, Search, Add Friend)</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">황지은,장서현</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">ShowMore</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">황지은,이원석</td>
//           </tr>
//           <tr>
//             <td style="text-align: left;">View Connection</td>
//             <td style="text-align: center;">
//               <img width="10px" src="https://user-images.githubusercontent.com/42789819/115147514-42221300-a096-11eb-9526-a68b8094f79c.png" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">황지은</td>
//           </tr>
//         </tbody></table><br>
//       <h2>App Description</h2>
//       <h3><code>Splash-&gt;Onboarding-&gt;로그인</code></h3>
//       <img width="1306" alt="image" src="https://user-images.githubusercontent.com/42789819/115146027-d2108e80-a08f-11eb-9646-a3818cf51cb8.png" style="max-width: 100%;">
//       <ul>
//         <li>스플래쉬, 온보딩이 끝나면 로그인 화면이 나오게 됩니다.</li>
//         <li>Cherish는 소중한 사람의 등록을 위해 "연락처" 권한과 푸쉬알림을 위한 "알림"권한을 요청합니다.</li>
//       </ul><br>
//       <h3><code>회원가입</code></h3>
//       <img width="1106" alt="image" src="https://user-images.githubusercontent.com/42789819/115150093-d9d92e80-a0a1-11eb-8e6f-8e20c5d9bd75.png" style="max-width: 100%;">
//       <ul>
//         <li>일련의 과정을 거쳐 회원가입이 완료됩니다.</li>
//       </ul>
//       <h3><code>비밀번호 찾기</code></h3>
//       <img width="556" alt="image" src="https://user-images.githubusercontent.com/42789819/115150021-8e268500-a0a1-11eb-8bc2-74c47dd7a40c.png" style="max-width: 100%;">
//       <ul>
//         <li>회원가입시 등록했던 휴대폰 번호를 통해 비밀번호를 찾을 수 있습니다.</li>
//       </ul><br>
//       <h3><code>식물 등록(Add Friend)</code></h3>
//       <img width="1137" alt="image" src="https://user-images.githubusercontent.com/42789819/115145759-2581dd00-a08e-11eb-9067-e3847a07cfca.png" style="max-width: 100%;">
//       <ul>
//         <li>
//           <p>사용자는 자신이 연락 관리를 하고싶은 사람을 연락처에서 선택합니다.</p>
//         </li>
//         <li>
//           <p>사용자는 식물 애칭, 생일, 물주기 알람(푸쉬알람) 주기, 물주기 알람(푸쉬알람) 시간을 지정할 수 있습니다.</p>
//           <ul>
//             <li>단, 이름과 전화번호는 수정이 되지 않는 상태로 넘어오게됩니다.</li>
//           </ul>
//         </li>
//         <li>
//           <p>사용자가 지정한 물주기 알람 주기에 따라 그에 맞는 식물이 배정됩니다.</p>
//         </li>
//         <li>
//           <p>식물 종류는 단모환, 민들레, 로즈마리, 스투키, 아메리칸블루 이상 5가지 입니다.</p>
//         </li>
//       </ul><br>
//       <h3><code>메인뷰</code></h3>
//       <img width="556" alt="image" src="https://user-images.githubusercontent.com/42789819/115145682-c623cd00-a08d-11eb-9b94-f1369b7a7c56.png" style="max-width: 100%;">
//       <ul>
//         <li>
//           <p>선택한 식물에 따라 메인 뷰에 변화가 생깁니다.</p>
//           <ul>
//             <li>메인 뷰의 식물들이 등록된 식물로 변화</li>
//             <li>D-DAY 라벨과 식물의 네이밍 변화</li>
//             <li>식물 네이밍 위의 '아직 수명이 탄탄한' 등의 수식어는 랜덤으로 지정</li>
//             <li>좌측에 위치한 해당 식물에 대한 애정도 Bar</li>
//           </ul>
//         </li>
//         <li>
//           <p>Bottom Sheet의 첫 번째 Cell은 사용자가 선택한 Cell로 변경됩니다.</p>
//         </li>
//         <li>
//           <p>Bottom Sheet의 각 Cell들은 물주기가 임박한 순서대로 정렬됩니다.</p>
//         </li>
//       </ul><br>
//       <h3><code>물주기 Flow</code></h3>
//       <img width="1119" alt="image" src="https://user-images.githubusercontent.com/42789819/115145725-f79c9880-a08d-11eb-8d31-ee6ad0f9da13.png" style="max-width: 100%;">
//       <p><strong>메인뷰에 위치한 물주기 버튼을 통해 각 식물에게 물을 줄 수 있습니다</strong></p>
//       <ul>
//         <li>
//           <p>물주기</p>
//           <ul>
//             <li>물주기는 전화, 메시지, 카카오톡의 3가지 수단으로 진행 할 수 있습니다.</li>
//             <li>각 연락수단을 통해 소중한 연락을 한 뒤에는 오늘 한 연락에 대한 리뷰를 작성하는 화면으로 진입합니다.</li>
//           </ul>
//         </li>
//         <li>
//           <p>연락 후기</p>
//           <ul>
//             <li>리뷰의 작성은 사용자의 선택입니다.</li>
//             <li>리뷰에서는 최대 5글자, 최대 3개의 키워드를 등록할 수 있고 100자 제한의 메모를 작성할 수 있습니다.</li>
//             <li>연락, 키워드 작성, 리뷰 작성 여부에 따라 각각 애정도 8%가 상승합니다.</li>
//           </ul>
//         </li>
//         <li>
//           <p>물주기를 성공하면 메인뷰의 식물은 물주기 모션에 진입합니다.</p>
//         </li>
//         <li>
//           <p>미루기는 D-day가 되었을 때 가능하며 한번에 1~7일을 미룰 수 있습니다.</p>
//         </li>
//         <li>
//           <p>물주기를 하지 않거나 미루지 않은 채로 D-day가 지나가면 식물은 시둘게 됩니다.</p>
//           <ul>
//             <li>이때는 미루기를 할 수 없습니다.</li>
//           </ul>
//         </li>
//       </ul><br>
//       <h3><code>식물 상세 뷰</code></h3>
//       <img width="1163" alt="image" src="https://user-images.githubusercontent.com/42789819/115145782-48ac8c80-a08e-11eb-807e-5d42cda959d5.png" style="max-width: 100%;">
//       <ul>
//         <li>
//           <p>메인 뷰에서 식물을 터치하면 식물 상세뷰로 이동합니다.</p>
//         </li>
//         <li>
//           <p>식물 상세 뷰에서는 Circle Status Bar로 식물의 물주기의 임박 정도를 알 수 있습니다.</p>
//         </li>
//         <li>
//           <p>등록한 친구의 연락처상 이름, 사용자가 등록한 친구의 별명, 친구의 생일을 알 수 있습니다.</p>
//         </li>
//         <li>
//           <p>해당 식물에게 물을 준 적이 있고, 후기를 작성한 적이 있다면 식물 상세 뷰 하단에서 후기를 최대 2개까지 모아 볼 수 있습니다(이 때 키워드는 가장 최근 연락 시 작성한 키워드입니다).</p>
//         </li>
//       </ul><br>
//       <h3><code>캘린더 뷰+리뷰 수정</code></h3>
//       <img width="783" alt="Cherish_Calendar" src="https://user-images.githubusercontent.com/42789819/104715101-699cd300-5769-11eb-9140-b9a177fb7cc0.png" style="max-width: 100%;">
//       <p>캘린더 뷰로 올 수 있는 방법은 두가지 입니다.</p>
//       <ol>
//         <li>식물 상세 뷰에서 하단에 위치한 메모 우측의 &gt; 버튼 누르면 캘린더 뷰에서 해당 날짜로 이동하여 메모를 보여줍니다.</li>
//         <li>식물 상세 뷰에서 상단 우측에 위치한 달력 버튼을 클릭하면 캘린더 뷰로 이동합니다.</li>
//       </ol>
//       <p>캘린더 뷰에서는 다음과 같은 것들을 할 수 있습니다.</p>
//       <ul>
//         <li>캘린더는 각 식물마다 배정되어 있으며 지금까지 물 준 날과 앞으로 물 줄 날을 구분하여 보여줍니다.</li>
//         <li>사용자가 해당 식물에게 물 준 날 리뷰까지 작성했다면 캘린더 하단에 그 날 작성한 리뷰가 표시됩니다.</li>
//         <li>이 때, 우측에 위치한 연필 버튼을 통해 해당 날짜의 리뷰를 수정할 수 있습니다.</li>
//       </ul><br>
//       <h3><code>푸쉬 알림</code></h3>
//       <img width="200" alt="image" src="https://user-images.githubusercontent.com/42789819/115145809-71cd1d00-a08e-11eb-8866-3dbf6164fc83.png" style="max-width: 100%;">
//       <p><strong>푸쉬알림은 다음의 두 경우에 보내집니다.</strong></p>
//       <ul>
//         <li>사용자가 등록한 식물의 물주기가 다가왔을 때</li>
//         <li>사용자가 물을 준 뒤 리뷰를 기록하지 않았을 때</li>
//       </ul>
//       <p>푸쉬를 통해 물주기, 리뷰하기로 이동할 수 있습니다.</p><br>
//       <h3><code>마이페이지</code></h3>
//       <img width="100%" alt="image" src="https://user-images.githubusercontent.com/42789819/115145841-a214bb80-a08e-11eb-993e-d4e2095a7d6c.png" style="max-width: 100%;">
//       <ul>
//         <li>
//           <p>마이페이지의 내 식물 탭에서는 지금까지 사용자가 등록한 식물들을 모아 볼 수 있습니다.</p>
//           <ul>
//             <li>지금까지 물 준 횟수, 미룬 횟수, 애정도가 100이 된 식물들이 얼마나 있는지 볼 수 있습니다.</li>
//           </ul>
//         </li>
//         <li>
//           <p>내 식물 탭 우측의 연락처 탭에서는 새로운 소중한 사람을 들록 할 수 있습니다.</p>
//         </li>
//         <li>
//           <p>마이페이지 우측 상단에 있는 돋보기 버튼을 통해 검색이 가능합니다.</p>
//         </li>
//       </ul><br>
//       <h3><code>더보기</code></h3>
//       <img width="660" alt="image" src="https://user-images.githubusercontent.com/42789819/115145873-e3a56680-a08e-11eb-8d06-8576ddaf0792.png" style="max-width: 100%;">
//       <ul>
//         <li>
//           <p>사용자의 닉네임 및 이메일을 변경할 수 있습니다(사용자의 프로필 사진 또한 등록 가능합니다).</p>
//         </li>
//         <li>
//           <p>개인정보처리방침, 서비스이용약관이 쓰여있는 노션 페이지로 이동합니다.</p>
//         </li>
//         <li>
//           <p>1:1 문의 하기를 통해 Cherish에게 문의 메일을 보낼 수 있습니다.</p>
//         </li>
//         <li>
//           <p>물주기 푸쉬 알림을 On, Off할 수 있습니다.</p>
//         </li>
//         <li>
//           <p>로그아웃 및 회원 탈퇴를 할 수 있습니다.</p>
//         </li>
//       </ul><br>
//       <h2>Our Extension</h2>
//       <pre><code class="language-Swift">// 기기별 사이즈를 알기 위한 Extension
//       UIDevice+ScreenSize.swift

//       // 색상을 정의해놓은 Extension
//       UIColor+Additions.swift

//       // Notification을 쓰기 위한 Name Extension
//       NotificationName.swift

//       // 자주 사용하는 Radius와 Shadow 를 함수로 정의해 놓은 Extension
//       UIView+Extension.swift

//       // TextField의 입력 구역을 정의를 위한 Extension
//       UITextField+Extension.swift

//       // 버튼의 자간을 설정하기 위한 Extension
//       UIButton+Extension.swift

//       // ImageView에서 Gif를 불러오기 위한 Extension
//       UIImage+Extension.swift
//       </code></pre><br>
//       </div>`,
//     userId: 'test20',
//     projectStatus: 'Ps_pr',
//     status: 'S_pr',
//     recruitmentCount: 2,
//     generateDate: '2023-03-06 13:34',
//     likes: 34,
//     views: 89,
//     thumbnail: 'thumbnail20',
//     techIds: [3, 4],
//   },
//   {
//     projectId: 21,
//     projectTitle: '👨‍👨‍👧 원라인코스(One-Line Course)',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <p><a href="https://github.com/JuHyun419/one-line-course/actions/workflows/github-action.yml" target="_blank"><img src="https://github.com/JuHyun419/one-line-course/actions/workflows/github-action.yml/badge.svg" alt="GitHub-Action with Java Maven" style="max-width: 100%;"></a></p>
//       <h2>👨&zwj;👨&zwj;👧 원라인코스(One-Line Course)</h2>
//       <ul>
//         <li>본인에게 적합한 개발 관련 온라인 강의를 통합해 검색할 수 있는 개인형 강의 추천 사이트</li>
//       </ul><br>
//       <h2>🤷&zwj;♂️ 사용자</h2>
//       <ul>
//         <li>인프런, 유튜브, 유데미 등의 온라인 강의 플랫폼에서 강의를 검색하고자 하는 유저</li>
//         <li>비슷한 강의들을 검색 &amp; 비교하여 본인에게 적합한 강의를 선택하고자 하는 유저</li>
//       </ul><br>
//       <h2>📆 기간</h2>
//       <ul>
//         <li>2021.04 ~ 2021.05</li>
//       </ul><br>
//       <h2>📗 기술 스택</h2>
//       <ul>
//         <li>Front End - <a href="https://github.com/olcw78" target="_blank"><code>이윤상</code></a>
//           <ul>
//             <li>Typescript, React, SCSS</li>
//           </ul>
//         </li>
//         <li>Back End - <a href="https://github.com/bsy3764" target="_blank"><code>방소연</code></a>, <a href="https://github.com/JuHyun419" target="_blank"><code>이주현</code></a>
//           <ul>
//             <li>Java, Python(크롤링)</li>
//             <li>SpringBoot, Spring Data JPA, MySQL, AWS</li>
//           </ul>
//         </li>
//       </ul><br>
//       <h2>✏ 기획 &amp; 설계</h2>
//       <ul>
//         <li>
//           <p><a href="https://github.com/JuHyun419/one-line-course/projects/1" target="_blank"><code>프로젝트 칸반(Kanban)</code></a></p>
//         </li>
//         <li>
//           <p><a href="https://www.notion.so/16d5feb864d5481285a5ff3c2ae9c2c6" target="_blank"><code>기능 명세서</code></a></p>
//         </li>
//         <li>
//           <p><a href="https://whimsical.com/EJVQx82R8nCTGsRbzWGyH8" target="_blank"><code>UI 페이지 기획</code></a></p>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/50076031/113499953-26c2ee00-9555-11eb-8556-05d918647848.png" alt="image" style="max-width: 100%;">
//       </p>
//       <p><br><br></p>
//       <ul>
//         <li><a href="https://www.notion.so/DB-1f0520006f2a4ca582e0cef0a34623ae" target="_blank"><code>DB 설계</code></a></li>
//       </ul>
//       <img width="520" alt="ERD 다이어그램 최종" src="https://user-images.githubusercontent.com/50076031/116420336-da7b7d00-a878-11eb-9e8d-b3225e363ff1.PNG" style="max-width: 100%;"><br>
//       <ul>
//         <li><a href="https://github.com/JuHyun419/one-line-course/issues/8" target="_blank"><code>DB 스키마</code></a></li>
//       </ul><br>
//       <ul>
//         <li><a href="https://www.notion.so/API-5f3c607a8217420495aa60182f90a2c5" target="_blank"><code>RESTful API 설계</code></a></li>
//       </ul><br>
//       <ul>
//         <li><a href="http://15.165.229.191:8080/swagger-ui.html" target="_blank"><code>Swagger API 문서</code></a></li>
//       </ul><br>
//       <h2>🐱&zwj;💻 백엔드 역할 분담</h2>
//       <ul>
//         <li>주현
//           <ul class="contains-task-list">
//             <li class="task-list-item"><input type="checkbox" disabled="" checked=""> 강의(Lecture)</li>
//             <li class="task-list-item"><input type="checkbox" disabled="" checked=""> 댓글(Comment)</li>
//             <li class="task-list-item"><input type="checkbox" disabled="" checked=""> 인프라</li>
//           </ul>
//         </li>
//         <li>소연
//           <ul class="contains-task-list">
//             <li class="task-list-item"><input type="checkbox" disabled="" checked=""> 북마크(Bookmark)</li>
//             <li class="task-list-item"><input type="checkbox" disabled="" checked=""> 유저(User)</li>
//           </ul>
//         </li>
//       </ul><br>
//       <h2>✨ 프로젝트 실행 방법</h2>
//       <h3>데이터베이스 및 스키마 설정</h3>
//       <ul>
//         <li>먼저 application.properties 파일에 본인의 DB 정보로 수정합니다.
//           <ul>
//             <li>url, username, password 를 설정합니다.</li>
//           </ul>
//         </li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/50076031/123538420-ccaa8100-d76f-11eb-922a-6229c8ed2168.png" alt="image" style="max-width: 100%;">
//       </p><br>
//       <ul>
//         <li>데이터베이스 스키마 설정은 로컬에 직접 설정 및 프로젝트 실행 시 자동으로 설정하는 두 가지 방법이 있습니다. (아래 참고)</li>
//         <li>src/main/resources 경로의 schema.sql 파일에 작성된 스키마를 직접 복사해서 로컬 DB에서 생성합니다.</li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/50076031/115238733-f97f5e00-a158-11eb-9aac-9ebde3bbf699.png" alt="image" style="max-width: 100%;">
//       </p>
//       <ul>
//         <li>application.properties 파일의 schema 주석 부분을 해제한 후 애플리케이션을 실행하면 스키마 설정이 됩니다.</li>
//       </ul>
//       <p>
//         <img src="https://user-images.githubusercontent.com/50076031/115238802-1156e200-a159-11eb-9ef8-c8b57b43240f.png" alt="image" style="max-width: 100%;">
//       </p><br>
//       <h3>프로젝트 실행하기</h3>
//       <pre><code class="language-html">$ git clone https://github.com/JuHyun419/one-line-course.git
//       $ cd one-line-course/back
//       $ chmod +x mvnw
//       $ ./mvnw clean package
//       $ cd target
//       $ java -jar oneline-course-0.0.1-SNAPSHOT.jar
//       </code></pre><br>
//       <h2>🎵 <a href="https://github.com/JuHyun419/one-line-course/wiki/Git-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80-%EA%B7%9C%EC%B9%99" target="_blank">Git 커밋 메시지 규칙</a></h2><br>
//       <h2>💡 Issues</h2>
//       <ul>
//         <li><a href="https://github.com/JuHyun419/one-line-course/issues/38" target="_blank"><code>서로 다른 OS(Mac, Window)에서 함께 Git 작업할 시 발생하는 LF, CRLF 문제</code></a></li>
//         <li><a href="https://github.com/JuHyun419/one-line-course/issues/8" target="_blank"><code>MySQL 😢이모지(utf8mb4) 스키마 설정</code></a></li>
//         <li><a href="https://github.com/JuHyun419/one-line-course/issues/50" target="_blank"><code>Parcel 번들러 에서 ENV 파일 사용</code></a></li>
//         <li><a href="https://github.com/JuHyun419/one-line-course/issues/8" target="_blank"><code>MySQL referencing column and referenced column are incompatible</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/328" target="_blank"><code>MySQL 8.0 대소문자 구분 문제(MySQL 5 버전으로 변경)</code></a></li>
//         <li><a href="https://github.com/JuHyun419/one-line-course/issues/62" target="_blank"><code>Java의 LocalDateTime과 MySQL의 datetime 사이의 시차 문제(9시간)</code></a></li>
//         <li><a href="https://github.com/JuHyun419/one-line-course/issues/89" target="_blank"><code>Google oAuth access_token vs id_token</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/331" target="_blank"><code>도메인 연결 80 -&gt; 8080 포트포워딩 삽질</code></a></li>
//         <li><a href="https://stackoverflow.com/questions/63521181/java-file-outside-of-source-root-intellij/64340331" target="_blank"><code>인텔리제이 Java file outside of source root</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/332" target="_blank"><code>Caused by: java.lang.IllegalArgumentException: invalid target release: 11</code></a></li>
//         <li><a href="https://velog.io/@conatuseus/RequestBody%EC%97%90-%EA%B8%B0%EB%B3%B8-%EC%83%9D%EC%84%B1%EC%9E%90%EB%8A%94-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80" target="_blank"><code>@RequestBody에 왜 기본 생성자는 필요하고, Setter는 필요없을까?</code></a></li>
//         <li><a href="https://github.com/JuHyun419/one-line-course/pull/118" target="_blank"><code>CORS의 default Method로는 GET, POST, HEAD만 allowed 되기 때문에 DELETE 메서드로 요청하면 CORS요청에 의해 막히게 된다</code></a></li>
//       </ul><br>
//       <h2>📝 Posting</h2>
//       <ul>
//         <li><a href="https://zzang9ha.tistory.com/337" target="_blank"><code>Jsoup을 이용한 크롤링(feat. 인프런)</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/325?category=954133" target="_blank"><code>AWS RDS 외부접속</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/329?category=954133" target="_blank"><code>AWS EC2 인스턴스 생성하기</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/331?category=954133" target="_blank"><code>AWS EC2 iptables 서버 포트포워딩(80 -&gt; 8080)</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/338?category=954133" target="_blank"><code>AWS EC2 서버 접속하기</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/339?category=954133" target="_blank"><code>GitHub Action을 통한 Build 자동화(SpringBoot + Maven)</code></a></li>
//         <li><a href="https://zzang9ha.tistory.com/348" target="_blank"><code>Spring Boot Maven profile 운영 &amp; 개발 분리(AWS EC2)</code></a></li>
//       </ul><br>
//       <h2>📜 TODO.</h2>
//       <ul>
//         <li><del>환경 변수(application.properties) 관리(외부 노출 X)</del></li>
//         <li><del>테스트 코드(통합 테스트, 단위 테스트) 추가</del></li>
//         <li><del>예외처리(Exception Handling) - 유저, 댓글, 강의 등등 추가</del></li>
//         <li>HTTP -&gt; HTTPS 적용</li>
//         <li>CI/CD 적용</li>
//       </ul>
//       <p><br><br></p>
//       <h3>🖥 References</h3>
//       <h4>RESTful API</h4>
//       <ul>
//         <li><a href="https://sas-study.tistory.com/265" target="_blank">https://sas-study.tistory.com/265</a></li>
//         <li><a href="https://m.blog.naver.com/genycho/221309436556" target="_blank">https://m.blog.naver.com/genycho/221309436556</a></li>
//       </ul><br>
//       <h4>Git</h4>
//       <ul>
//         <li><a href="https://medium.com/hashbox/git-commit-%EB%A9%94%EC%84%B8%EC%A7%80-%EA%B7%9C%EC%B9%99-conventional-commits-71710f7f53c" target="_blank">https://medium.com/hashbox/git-commit-%EB%A9%94%EC%84%B8%EC%A7%80-%EA%B7%9C%EC%B9%99-conventional-commits-71710f7f53c</a></li>
//         <li><a href="https://meetup.toast.com/posts/106" target="_blank">https://meetup.toast.com/posts/106</a></li>
//         <li><a href="https://javakong.tistory.com/217" target="_blank">https://javakong.tistory.com/217</a></li>
//       </ul><br>
//       <h4>AWS</h4>
//       <ul>
//         <li><a href="https://aws.amazon.com/ko/getting-started/hands-on/create-mysql-db/" target="_blank">https://aws.amazon.com/ko/getting-started/hands-on/create-mysql-db/</a></li>
//         <li><a href="https://leveloper.tistory.com/18" target="_blank">https://leveloper.tistory.com/18</a></li>
//         <li><a href="https://twofootdog.tistory.com/41" target="_blank">https://twofootdog.tistory.com/41</a></li>
//         <li><a href="https://miniminis.github.io/2019/10/13/spring/springboot-deploy/" target="_blank">https://miniminis.github.io/2019/10/13/spring/springboot-deploy/</a></li>
//       </ul>
//       </div>`,
//     userId: 'test21',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 3,
//     generateDate: '2023-01-01 13:34',
//     likes: 7849,
//     views: 63498,
//     thumbnail: 'thumbnail21',
//     techIds: [1, 2, 3, 4, 5],
//   },
//   {
//     projectId: 22,
//     projectTitle: '곽철용 짤 생성기',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>🎴 곽철용 짤 생성기</h1>
//       <p>
//         <img src="https://raw.githubusercontent.com/wormwlrm/kwakcheolyong/master/preview.gif" alt="preview" style="max-width: 100%;">
//       </p>
//       <h2>어이 젊은 친구, 개발자답게 클론해</h2>
//       <pre><code class="language-bash">git clone https://github.com/wormwlrm/kwakcheolyong.git
//       cd kwakcheolyong
//       npm install
//       npm run serve
//       </code></pre>
//       <h2>화란아, 나도 블로그가 있다</h2>
//       <blockquote>
//         <p><a href="https://wormwlrm.github.io/2019/10/13/Kwakcheolyong-Image-Creator-Development-Story.html" target="_blank">이 곳</a>에서 만들어진 스토리를 확인하실 수 있습니다.</p>
//       </blockquote>
//       <hr>
//       <h2>미리보기</h2>
//       <hr>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/1.png" alt="마포대교" style="max-width: 100%;">
//       </p>
//       <p>올 하반기에 갑작스럽게 뜬 재밌는 인터넷 밈(meme)이 하나 있죠. 바로 영화 『타짜』에 나온 악역 캐릭터인 곽철용입니다.</p>
//       <p>지금 와서 말하는 거지만, 저는 사실 곽철용 밈이 처음에는 뭔지 몰랐습니다. 왜냐하면 영화가 개봉한 2006년에는 제가 초등학생이어서 애초에 볼 수가 없었고(…), 유명한 장면만 클립 영상으로 알고 있었거든요. 그래서 대략적인 스토리는 알고 있었는데 사람들이 올리는 곽철용 짤들이 어떤 문맥에서 어떤 의미로 쓰이는지는 사실 잘 몰랐습니다. 그래서 궁금해진 김에 이번 기회에 영화를 대여해서 보았지요. 역시 문맥을 알고 나니까 훨씬 재밌었습니다. 일상 생활에서의 응용력(?)도 좋아서 드립도 착착 감기더군요.</p>
//       <p>그러다가 문득 *곽철용 짤 생성기는 없나?*라는 생각이 들었습니다. <a href="https://rajephon.github.io/gvsc/" target="_blank">개비스콘 짤 생성기</a>도 있는데, 이것도 혹시나 있을까 싶어서 구글링을 해봤는데… 아직 없는 것 같더군요. <em>어, 없으면 이거 내가 한 번 만들어보면 재밌겠는데?</em> 라는 생각이 들었습니다. 마침 지난 주에 개천절이라는 쉬는 날이 있어서 하루동안 해커톤 하는 느낌으로 뚝딱뚝딱 만들어 보았습니다.</p>
//       <p>그래서 이번 포스트에서는 곽철용 짤 생성기를 개발하게 된 스토리에 대해 소개하고자 합니다. 사실 보잘 것 없는 기술로 간단하게 만든 거라 이걸 가지고 포스트를 쓴다는 게 좀 부끄럽기도 합니다. 하지만 사소한 경험이더라도 이 경험을 공유하는 것이 누군가에게는 가치있게 느껴질 수도 있다고 생각하면서 포스트를 써 봅니다. 재미로 봐 주셔도 좋아요.</p>
//       <p>이번 포스트를 통해, <strong>HTML 캔버스를 공부해 보고 싶은 분</strong>이나 <strong>나만의 짤 생성기를 만들어 보고 싶은 분</strong>들에게 도움이 되었으면 좋겠습니다.</p>
//       <h2>묻고 캔버스로 가</h2>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/2.png" alt="마포대교" style="max-width: 100%;"><em>라이브러리로 쉽게 가시겠어요? 아니면 묻고 캔버스로 가시겠어요?</em>
//       </p>
//       <p>일반적으로 짤을 만든다고 하면 보통 이미지에다가 패러디한 자막을 써놓은 게 일반적이죠. 이 기능을 웹에서 구현을 하려면 보통 라이브러리를 쓰거나 캔버스(Canvas)를 이용해 직접 구현하는 두 가지 방법이 있는 것 같습니다.</p>
//       <p>라이브러리 중 대표적인 것은 <a href="https://github.com/tsayen/dom-to-image" target="_blank">dom-to-image</a>가 있습니다. 이 라이브러리는 눈에 보이는 DOM을 그대로 캡쳐하듯이 이미지를 딸 수 있어서 시간이나 생산성 면에서는 훨씬 유용합니다. 하지만 저는 평소에 캔버스에 대해 공부해보고 싶었기 때문에, 일부러 캔버스를 이용해 구현하게 되었습니다.</p>
//       <p>그럼 이 글을 읽고 계시는 여러분들은 혹시 캔버스에 대해서 잘 알고 계신가요? MDN 문서에서는 캔버스를 아래와 같이 설명하고 있습니다.</p>
//       <blockquote>
//         <p>캔버스(Canvas)는 HTML 요소 중 하나로서, 스크립트(보통은 자바스크립트)를 사용하여 그림을 그리는 데에 사용됩니다. 예를 들면, 그래프를 그리거나 사진을 합성하거나, 간단한(혹은 복잡할 수도 있는) 애니메이션을 만드는 데에 사용될 수 있습니다.</p>
//       </blockquote>
//       <p>우리는 이를 응용해서, <code>&lt;canvas&gt;</code>라는 HTML 태그 안에다가 배경으로는 타짜 영화에서 캡쳐한 이미지를 깔고, 그 위에 자막처럼 글자를 넣고 다운로드 할 수 있도록 짤 생성기를 구현할 예정입니다. 자, 그럼 본 게임 들어갑니다.</p>
//       <h2>내가 Vue 생활을 열 일곱에 시작했다</h2>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/12.png" alt="프론트시작한놈" style="max-width: 100%;"><em>그 나이 때 프론트 시작한 놈들이 백 명이다 치면은… 지금 나만큼 사는 놈은 나 혼자 뿐이야.</em>
//       </p>
//       <p>저희가 만들 짤 생성기는 프론트엔드에서만 동작하는 정적(static)인 웹 사이트입니다. 요새 핫한 SPA를 쓰지 않고 HTML, JavaScript로도 충분히 구현이 가능합니다만, 상태 관리를 좀 더 편하게 하기 위해서 저는 <strong>Vue</strong>를 사용했습니다. <a href="https://velog.io/@godori/banner-maker" target="_blank">React를 이용한 짤 생성기</a>도 참고해 보시면 좋을 것 같아요.</p>
//       <p>우선 <code>vue-cli</code>를 이용해 프로젝트를 새로 생성했습니다. vue-cli의 자세한 사용법은 <a href="https://cli.vuejs.org/" target="_blank">이 곳</a>을 참고하세요.</p>
//       <pre><code>vue create kwakcheolyong
//       </code></pre>
//       <p>프로젝트 설정은 취향껏 하시면 되는데, 저 같은 경우는 구버전 브라우저 호환성을 위한 Babel, 효율적인 CSS 작성을 위한 SASS, 그리고 코드 컨벤션을 일관되게 유지하기 위한 Linter(+ airbnb 룰) 정도를 설정해주었습니다.</p>
//       <p>그리고 짤의 배경이 될 사진들을 구해서 <code>/assets</code> 디렉토리 안에 정리해두었습니다. 이 때 이미지의 크기는 모두 동일하게 설정했습니다(<code>1000px * 427px</code>).</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/3.png" alt="이미지" style="max-width: 100%;">
//       </p>
//       <p>그리고 각각의 이미지들과 관련된 정보들을 담은 객체를 배열로 만들고, 프로젝트 안에서 <code>import</code>하여 사용할 수 있도록 별도의 파일(<code>images.js</code>)을 만들었습니다.</p>
//       <pre><code>// images.js
//       import 내밑에서일할생각없냐 from '@/assets/내밑에서일할생각없냐.png';
//       import 늑대새끼가어떻게개밑으로들어갑니까 from '@/assets/늑대새끼가어떻게개밑으로들어갑니까.png';
//       ...

//       export default [
//         {
//           id: 0, // 식별하기 위한 ID값
//           src: 어이젊은친구, // 이미지 소스
//           name: '어이 젊은 친구', // 셀렉트 박스에 표시할 내용
//           original: '어이 젊은 친구, 신사답게 행동해.', // 원본 대사 칸에 표시할 내용
//         },
//         {
//           id: 1,
//           src: 신사답게행동해,
//           name: '신사답게 행동해',
//           original: '어이 젊은 친구, 신사답게 행동해.',
//         },
//         ...
//       ]
//       </code></pre>
//       <p>저희가 만들 어플리케이션의 규모는 그렇게 크지 않아서, 필요한 곳에서 모든 기능들을 <code>App.vue</code>에 작성할 것입니다. 따라서 이 곳에서만 <code>import</code>해서 쓰기만 하면 됩니다.</p>
//       <p>그럼 이제 본격적으로 <code>&lt;canvas&gt;</code> 엘리먼트를 그려보도록 합시다. 우선 vue의 템플릿 코드에다가 아래와 같이 <code>&lt;canvas&gt;</code> 엘리먼트를 초기화시켜줍니다.</p>
//       <pre><code>&lt;canvas id="canvas" ref="canvas" :width="1000" :height="427"&gt;
//       &lt;/canvas&gt;
//       </code></pre>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/4.png" alt="아무것도없어요" style="max-width: 100%;">
//       </p>
//       <p><code>&lt;canvas&gt;</code> 엘리먼트를 작성했다 하더라도 아직 저희가 캔버스에 그림을 그리는 코드를 작성하지 않았기 때문에, 흰 도화지처럼 아무것도 보이지 않는 것이 정상입니다.</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/5.png" alt="짤림" style="max-width: 100%;">
//       </p>
//       <p>여기서 <code>width</code>와 <code>height</code> 값을 미리 설정하는 이유는, 값을 명시적으로 설정하지 않으면 자동으로 값이 채워지는데 이 때문에 이미지 파일이 잘려 나올 수가 있습니다. 물론 CSS를 이용해서도 <code>width</code>와 <code>height</code> 값을 줄 수 있지만, 이 경우는 CSS 값으로 설정한 비율에 따라 왜곡이 될 수도 있으니 초기 캔버스의 비율을 맞추기 위해서는 명시적으로 초기화를 해 주는 것이 좋습니다.</p>
//       <p>또한 캔버스에 그림을 그리기 위해서는 캔버스 DOM에 직접 접근을 해야 하기 때문에, <code>ref</code> 속성을 설정해줍니다.</p>
//       <p>우선은 빈 화면이 허전해 보이니까 캔버스에 이미지를 나타나게 해봅시다. 구현하는 방법은 여러가지가 있겠지만, 저는 아래와 같은 방법을 이용해 구현하였습니다.</p>
//       <pre><code>// App.vue
//       import images from '@/images';

//       export default {
//         data() {
//           return {
//             imageIndex: 0,
//           };
//         },

//         computed: {
//           images() {
//             return images; // 1번
//           },
//         },

//         mounted() { // 2번
//           this.updateCanvas();
//         },

//         methods: {
//           updateCanvas() { // 3번
//             if (!this.$refs.canvas) return;
//             this.updateCanvasImage();
//           },

//           updateCanvasImage() {
//             const { canvas } = this.$refs;
//             const ctx = canvas.getContext('2d'); // 4번
//             const img = new Image(); // 5번
//             img.src = this.images[this.imageIndex].src;
//             img.onload = () =&gt; { // 6번
//               ctx.drawImage(img, 0, 0); // 7번
//             };
//           },
//         },
//       }
//       </code></pre>
//       <ol>
//         <li>우선 이미지 정보가 담긴 배열을 <code>import</code>해서 로컬의 <code>computed</code>로 접근할 수 있게 변수 선언</li>
//         <li>Vue의 라이프사이클 메소드 중, DOM이 생성된 이후에 실행되는 <code>mounted</code> 훅에 캔버스를 업데이트 하는 메소드 <code>updateCanvas()</code>를 실행</li>
//         <li><code>updateCanvas()</code>에서는 <code>ref</code>로 접근할 수 있는 <code>canvas</code>라는 이름의 DOM이 있는지 확인하고, 있다면 이미지를 그리는 메소드 <code>updateCanvasImage()</code>를 실행</li>
//         <li><code>updateCanvasImage()</code>에서는 <code>canvas.getContext('2d')</code> 메소드를 이용해 캔버스에 2D 그림을 그릴 수 있는 컨텍스트(<code>ctx</code>)를 획득</li>
//         <li>그 후 새 이미지를 생성(<code>new Image()</code>)하는데 그 이미지의 <code>src</code> 속성을 <code>imageIndex</code>라는 해당 인덱스의 이미지로 설정</li>
//         <li>이미지를 비동기로 불러오기 때문에, 이미지가 로드 된 이후에 해야하는 작업들은 항상 <code>onload</code>에 콜백 함수로 작성</li>
//         <li>이미지가 로드되면 컨텍스트의 좌상단(<code>0,0</code>) 위치를 기준으로 이미지를 그림</li>
//       </ol>
//       <p>위와 같은 코드를 실행하고 나면, 다음과 같은 결과가 나옵니다.</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/6.png" alt="오우야" style="max-width: 100%;">
//       </p>
//       <p>이미지가 좀 크긴 하지만, 정상적으로 캔버스에 잘 그려지는 모습입니다. 그럼 이제 이미지를 셀렉트 박스를 이용해 동적으로 바꿀 수 있도록 해 볼까요?</p>
//       <pre><code>&lt;select
//         :value="imageIndex"
//         @input="onImageChanged($event.target.value)"
//       &gt;
//         &lt;option v-for="img in images" :value="img.id" :key="img.id"&gt;
//            {{ img.name }}
//         &lt;/option&gt;
//       &lt;/select&gt;
//       export default {
//         methods: {
//           onImageChanged(value) {
//             this.imageIndex = value;
//             this.updateCanvas();
//           },
//         }
//       }
//       </code></pre>
//       <p>셀렉트 박스에서 이미지가 바뀌면 <code>this.imageIndex</code>를 바꾼 후 다시 캔버스를 업데이트 하는 방식입니다. 이를 추가한 결과는 아래와 같습니다.</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/7.gif" alt="이미지변경" style="max-width: 100%;">
//       </p>
//       <h2>텍스트는 무너졌냐 이 새끼야</h2>
//       <p>여태까지는 캔버스에서 이미지를 변경하는 방법에 대해서만 알아보았습니다. 이제 배경은 깔렸으니, 사용자로부터 텍스트를 입력받아서 캔버스 위에 그려봅시다.</p>
//       <p>캔버스 위에 그려질 텍스트를 입력 받는 것도 중요하겠지만, 글꼴이나 폰트 크기, 색상 등 사용자를 위한 추가적인 선택지도 제공할 예정입니다. 따라서 이 값들을 데이터로 저장할 수 있게 미리 선언해줍니다.</p>
//       <pre><code>data() {
//         return {
//           imageIndex: 0,
//           option: {
//             fontFamily: 'Gulim',
//             fontSize: 30,
//             fontColor: '#FFFFFF',
//             fontWeight: 'normal',
//             text: '',
//           },
//         };
//       },
//       </code></pre>
//       <p>그리고 템플릿에 각 옵션들을 자유롭게 선택할 수 있도록 <code>&lt;input&gt;</code>과 <code>&lt;select&gt;</code> 엘리먼트를 배치해줍니다. (<code>&lt;option&gt;</code> 태그는 생략했습니다)</p>
//       <pre><code>&lt;input
//         type="textarea"
//         :value="option.text"
//         @input="onValueChanged('text', $event.target.value)"
//       /&gt;
//       &lt;select
//         :value="option.fontFamily"
//         @input="onValueChanged('fontFamily', $event.target.value)"
//       &gt;
//         &lt;option&gt; ... &lt;/option&gt;
//       &lt;/select&gt;
//       &lt;select
//         :value="option.fontSize"
//         @input="onValueChanged('fontSize', $event.target.value)"
//       &gt;
//         &lt;option&gt; ... &lt;/option&gt;
//       &lt;/select&gt;
//       ...
//       </code></pre>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/7.png" alt="이미지변경" style="max-width: 100%;">
//       </p>
//       <p>좀 못생기긴 했지만(…) 뭐 어때요, 옵션들 선택할 수 있기만 하면 됐죠.</p>
//       <p>여기서 잘 보시면 <code>v-model</code> 대신 <code>@input</code>과 <code>:value</code>를 쓰고 있다는 걸 알 수 있습니다. 그 이유는 <a href="https://kr.vuejs.org/v2/guide/forms.html#%25%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%9A%A9%EB%B2%95" target="_blank">한글의 입력 방식이 IME 방식</a>이기 때문에, 글자가 완성되지 않으면(즉, 현재 글씨가 입력 중이면) <code>v-model</code>로는 타이핑하고 있는 글자를 정확히 입력받을 수 없습니다.</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/2.gif" alt="이미지변경" style="max-width: 100%;"><em><code>@input</code>과 <code>:value</code>를 사용한 경우, 자모음을 입력할 때마다 값이 바뀝니다</em>
//       </p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/3.gif" alt="이미지변경" style="max-width: 100%;"><em><code>v-model</code>을 사용한 경우, 타이핑 중인 글자에서 커서가 벗어나기 전까지는 값이 바뀌지 않습니다</em>
//       </p>
//       <p>아무튼, <code>@input</code> 이벤트가 발생했을 때 <code>this.option</code>의 값을 변경하고, 캔버스를 업데이트하는 메소드를 실행합니다.</p>
//       <pre><code>onValueChanged(key, value) {
//         this.option[key] = value;
//         this.updateCanvas();
//       },
//       </code></pre>
//       <p>그리고 텍스트를 입력하는 메소드를 만들어봅시다.</p>
//       <pre><code>updateCanvasText() {
//         const { canvas } = this.$refs; // 1번
//         const ctx = canvas.getContext('2d');
//         const { text, fontFamily, fontSize, fontColor, fontWeight } = this.option;

//         ctx.textAlign = 'center'; // 2번
//         ctx.textBaseline = 'middle'; // 3번
//         ctx.font = {fontWeight} '$'{fontSize}px '$'{fontFamily}; // 4번

//         const lines = text.split('\n'); // 5번
//         lines.forEach((line, index) =&gt; { // 6번
//           ctx.fillStyle = fontColor; // 7번
//           ctx.fillText( // 8번
//             line,
//             canvas.width / 2,
//             canvas.height - fontSize * (lines.length - index) * 1.5,
//           );
//         });
//       },
//       </code></pre>
//       <ol>
//         <li>이미지를 그릴 때처럼 캔버스 컨텍스트를 얻어오고, 텍스트 옵션들을 <code>this.option</code>에서 받아옵니다.</li>
//         <li><code>ctx.textAlign</code> 옵션으로 텍스트를 가운데 정렬합니다.</li>
//         <li><code>ctx.textBaseline</code> 옵션으로 글자의 기준선을 글자 높이의 중심으로 설정합니다.</li>
//         <li><code>ctx.font</code>로 폰트를 꾸밉니다. CSS의 <code>font</code> 프로퍼티와 동일한 구문으로 설정할 수 있습니다. CSS에서 외부의 웹폰트를 임포트했을 경우 캔버스에서도 사용할 수 있습니다.</li>
//         <li><code>&lt;textarea/&gt;</code>로는 개행문자(<code>\n</code>)도 받을 수 있기 때문에, 여러 줄의 입력도 받을 수 있도록 각 줄을 개행문자로 나눕니다.</li>
//         <li>개행문자로 나눠진 갯수만큼 반복문을 실행합니다.</li>
//         <li><code>ctx.fillStyle</code>로 폰트 색상을 설정합니다.</li>
//         <li><code>ctx.fillText</code>로 글자를 입력합니다. 첫 번째 파라미터는 입력할 텍스트(<code>line</code>)를, 두 번째 파라미터는 x축 위치를, 세 번째 파라미터로는 y축 위치를 지정합니다.</li>
//       </ol>
//       <p>실행 결과는 다음과 같습니다.</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/4.gif" alt="이미지변경" style="max-width: 100%;"><em>고니야! 글씨가 써진다!</em>
//       </p>
//       <p>와! 이제 위의 <code>&lt;textarea&gt;</code>에 입력한 그대로 글씨가 써집니다. 하지만 이대로 끝일까요?</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/9.png" alt="테두리노" style="max-width: 100%;"><em>예의 바른 고니</em>
//       </p>
//       <p>밝은 배경에서는 흰색 글씨가 잘 보이지 않는 문제가 있습니다. 이 때문에 기본적으로 글자에 테두리를 씌울 수 있는 옵션을 제공해서, 글자가 잘 보일 수 있도록 합니다. 아까 있었던 <code>this.option</code>의 프로퍼티에 글자 테두리 색깔을 담당할 <code>textBorder</code>를 추가합시다.</p>
//       <pre><code>lines.forEach((line, index) =&gt; {
//         ctx.lineWidth = 5;
//         ctx.strokeStyle = '$'{textBorder};
//         ctx.strokeText(
//           line,
//           canvas.width / 2,
//           canvas.height - fontSize * (lines.length - index) * 1.5,
//         );

//         ctx.fillStyle = fontColor;
//         ctx.fillText(
//           line,
//           canvas.width / 2,
//           canvas.height - fontSize * (lines.length - index) * 1.5,
//         );
//       });
//       </code></pre>
//       <p><code>ctx.strokeText</code> 메소드를 이용해서 두께 5, 색깔은 <code>textBorder</code>의 테두리를 그리는 코드를 추가했습니다. 그 결과는 아래와 같습니다.</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/10.png" alt="테두리온" style="max-width: 100%;">
//       </p>
//       <h2>고니야, 다운로드 버튼도 하나 찔러 봐라</h2>
//       <p>캔버스를 이미지로 만드는 방법은 아주 쉽습니다. 바로 캔버스에서 기본적으로 지원하는 <code>toDataURL()</code>이라는 메소드를 이용해 BASE64로 인코딩된 이미지 파일을 쉽게 만들 수 있습니다.</p>
//       <pre><code>&lt;button @click="downloadCanvas" id="download"&gt;다운로드&lt;/button&gt;
//       downloadCanvas() {
//         const url = this.$refs.canvas.toDataURL('image/png');
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', {this.images[this.imageIndex].name}.png);
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       },
//       </code></pre>
//       <p>이제 다운로드 기능까지 잘 동작하니, 예쁘게 꾸며주기만 하면 됩니다. 저는 <code>element-ui</code>, 그리고 <code>element-theme-dark</code>를 사용했습니다.</p>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/11.png" alt="이쁘당" style="max-width: 100%;">
//       </p>
//       <p>이렇게 짤 생성기를 완성시켰습니다!</p>
//       <h2>어이 젊은 친구, 신사답게 통계도 붙여보자구</h2>
//       <p>
//         <img src="https://wormwlrm.github.io/img/posts/2019-10-13/13.png" alt="이쁘당" style="max-width: 100%;"><em>10월 3일부터 12일간의 통계를 공개합니다</em>
//       </p>
//       <p>여기에서 끝을 내도 상관 없지만, 부가적인 작업을 해 볼까 합니다. 바로 구글 태그 매니저를 통해, <strong>다운로드 버튼이 몇 번 눌렸는지를 체크</strong>해서 몇 명의 인원이 몇 개의 짤을 만들었는지를 조사해보고자 합니다.</p>
//       <p>위의 통계를 보면 여러가지 의미있는 지표들을 확인할 수 있는데요. 10월 4일, 7일, 14일에 유의미한 상승폭이 있는 것을 확인할 수 있습니다. 저 상승폭이 무엇을 의미하는지 궁금하시다면 별도로 게시한 포스트인 <a href="https://wormwlrm.github.io/2019/10/23/Tracking-button-click-events-by-using-Google-Tag-Manager" target="_blank">특정 버튼의 클릭 이벤트를 통계로 보고 싶어!</a>를 참조해주세요.</p>
//       <h2>마무리</h2>
//       <p>오랜만에 재밌는 프로젝트를 해 본 것 같아서 기분이 좋습니다. 재밌다고 많은 분들이 공감해주셔서 저 역시도 뿌듯한 마음이 듭니다. 그리고 지금보다도 더 많은 사용자가 생겼으면 좋겠다는 소망도 갖고 있습니다.</p>
//       <p>사실 이 프로젝트는 곽철용이라는 인터넷 밈의 인기에 편승(?)한 거라… 뭔가 숟가락만 얹은 느낌도 들어서 괜히 찔리네요. 앞으로는 좀 더 개발자스럽게, 이 프로젝트를 기술적으로 어떻게 더 개선할 수 있을지에 대해서 고민해보아야겠습니다.</p>
//       <p>코드는 <a href="https://github.com/wormwlrm/kwakcheolyong" target="_blank">Github</a>에도 공개되어 있으니, 이 프로젝트가 마음에 드신다면 스타(⭐)를, 개선이 필요한 점이 있다면 풀 리퀘스트를 보내주시면 감사하겠습니다. 덧글도 언제든 환영입니다.</p>
//       </div>`,
//     userId: 'test22',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2022-01-05 13:34',
//     likes: 1012,
//     views: 1238763,
//     thumbnail: 'thumbnail22',
//     techIds: [6, 7, 8, 9],
//   },
//   {
//     projectId: 23,
//     projectTitle: '[FE] 1일 1미션 인증 및 공유 웹 어플리케이션',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>
//         <img src="https://user-images.githubusercontent.com/39932233/80936920-056df500-8e0e-11ea-8a57-2cf418edd852.png" alt="logo 74f7f9d7" style="max-width: 100%;">
//       </h1>
//       <blockquote>
//         <p>1일 1미션 인증 및 공유 웹 어플리케이션</p>
//       </blockquote>
//       <p><a href="https://daily-mission.com" target="_blank">Daily-Mission</a>은 커뮤니티 기반의 미션 공유 플랫폼 입니다.</p>
//       <p>원하는 미션에 참여하여 매일 미션을 완료하고, 참여자들과 완료된 미션을 공유해 볼 수 있습니다.</p>
//       <p>
//         <img src="https://user-images.githubusercontent.com/39932233/80935943-f6854380-8e09-11ea-85b9-b41e78390b92.jpg" alt="mission" style="max-width: 100%;">
//       </p>
//       <h2>주요 기능</h2>
//       <ul>
//         <li>미션생성</li>
//         <li>미션글 업로드</li>
//         <li>미션 별 인증글 확인</li>
//         <li>개인 별 인증글 확인</li>
//         <li>전체 인증글 확인</li>
//         <li>미션 참여자 및 강퇴자 확인</li>
//       </ul>
//       <h2>프로젝트 개요</h2>
//       <p>해당 프로젝트는 React(프론트엔드) + Spring Boot(백엔드) 구조로 이루어져 있습니다.</p>
//       <p>저는 이 중 프론트엔드 개발을 담당하였으며, 이후의 서술은 프론트 개발에 관한 것을 다룹니다.</p>
//       <h2>기술 스택</h2>
//       <ul>
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>React Router v4</li>
//         <li>Redux</li>
//         <li>Redux-thunk</li>
//         <li>Sass</li>
//       </ul>
//       <h2>이외 사용 기술</h2>
//       <ul>
//         <li>Lazy Loading</li>
//         <li>Scroll Paging</li>
//         <li>JWT</li>
//         <li>BEM</li>
//       </ul>
//       <h2>컴포넌트 구조</h2>
//       <blockquote>
//         <p>Presentational and Container Components 디자인 패턴을 사용 하였습니다.</p>
//       </blockquote>
//       <p>
//         <img src="https://user-images.githubusercontent.com/39932233/83713833-28393680-a664-11ea-9dae-a6a5331a2c83.png" alt="Project Structure" style="max-width: 100%;">
//       </p>
//       <h2>LazyLoading &amp; Scroll Paging</h2>
//       <blockquote>
//         <p>프로그레시브 렌더링을 통한 리소스 최적화</p>
//       </blockquote>
//       <p>
//         <img src="https://user-images.githubusercontent.com/39932233/83600296-3aa26a00-a5a9-11ea-973b-a03bd7c9db34.gif" alt="lazy &amp; scroll" style="max-width: 100%;">
//       </p>
//       <p>레이지 로딩을 사용하여 사용자의 화면에 이미지가 감지 되었을 때 로딩이 되도록 구현하였습니다.</p>
//       <p>이와 더불어, 스크롤 페이징을 이용하여 사용자 경험을 극대화하고 모바일에 최적화 된 페이지를 만들었습니다.</p>
//       <pre><code>export function lazyLoad() {
//         const lazyImages = Array.from(document.querySelectorAll('img.lazy'));
//         if ('IntersectionObserver' in window) {
//           const io = new IntersectionObserver((entires, observer) =&gt; {
//             entires.forEach((entry) =&gt; {
//               if (entry.isIntersecting) {
//                 let image = entry.target;
//                 image.src = image.dataset.src;
//                 image.classList.remove('lazy');
//                 io.unobserve(image);
//               }
//             });
//           });

//           lazyImages.forEach((lazyImage) =&gt; {
//             io.observe(lazyImage);
//           });
//         }
//       }

//       </code></pre>
//       <p>레이지 로딩은 IntersectionObserver 객체를 이용하여 image 파일을 observe 하였습니다.</p>
//       <pre><code>export function fetchScroll(func) {
//         if ('IntersectionObserver' in window) {
//           const io = new IntersectionObserver((entires, observer) =&gt; {
//             entires.forEach((entry) =&gt; {
//               if (entry.isIntersecting) {
//                 func();
//               }
//             });
//           });

//           if (document.querySelector('.scroll-detector')) {
//             io.observe(document.querySelector('.scroll-detector'));
//           }
//         }
//       }

//       </code></pre>
//       <p>스크롤 페이징은 IntersectionObserver 객체를 이용하여 화면 하단에 있는 scroll-detector를 observer 하였습니다.</p>
//       <h2>JWT</h2>
//       <blockquote>
//         <p>Oauth 2.0 인증을 위한 JWT</p>
//       </blockquote>
//       <p>Bearer Authentication를 통해 User 인증을 구현하였습니다.</p>
//       <pre><code>  if (localStorage.getItem(ACCESS_TOKEN)) {
//           headers.append(
//             'Authorization',
//             'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
//           );
//         }

//         const defaults = { headers: headers };
//         options = Object.assign({}, defaults, options);
//       </code></pre>
//       <h2>BEM</h2>
//       <blockquote>
//         <p>구조화 된 CSS 설계</p>
//       </blockquote>
//       <p>BEM 방법론을 사용하여 CSS 구조를 설계하였습니다.</p>
//       <p>
//         <img src="https://user-images.githubusercontent.com/39932233/83716004-a8ae6600-a669-11ea-8ce8-bb0816e0f603.png" alt="BEM" style="max-width: 100%;">
//       </p>
//       </div>`,
//     userId: 'test23',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2023-10-06 13:34',
//     likes: 11240,
//     views: 124593,
//     thumbnail: 'thumbnail23',
//     techIds: [2, 4, 7, 9],
//   },
//   {
//     projectId: 24,
//     projectTitle: '미리 맞이하는 당신의 이른 죽음 - Android repository',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>ApophisAndroid : <em>Never-Die-Zombieroid</em> 🌠🧛&zwj;♀️</h1><br>
//       <img src="https://user-images.githubusercontent.com/63586451/104689431-d8683500-5745-11eb-8a57-5532602f7260.jpg" alt="프로필" style="max-width: 100%;">
//       <blockquote>
//         <p>SOPT 27기 17th APP-JAM : Apophis 🌠</p>
//       </blockquote><br>
//       <h3>📌 Part-meeting</h3>
//       <hr>
//       <blockquote>
//         <p>매일 저녁 7시 30분</p>
//       </blockquote>
//       <p><a href="https://www.notion.so/b562e3c34a9e4641b5025506546260a0" target="_blank">https://www.notion.so/b562e3c34a9e4641b5025506546260a0</a></p><br>
//       <h3>🎨 Kanban-board</h3>
//       <hr>
//       <p><a href="https://github.com/Apophis-AppJam/ApophisAndroid/projects/1" target="_blank">https://github.com/Apophis-AppJam/ApophisAndroid/projects/1</a></p><br>
//       <h3>🔧 Tools</h3>
//       <hr>
//       <ul>
//         <li>Android Studio</li>
//         <li>Zeplin</li>
//         <li>Figma</li>
//       </ul><br>
//       <h3>✌ Communication tools</h3>
//       <hr>
//       <ul>
//         <li>Notion</li>
//         <li>Slack</li>
//         <li>Gather</li>
//         <li>Zoom</li>
//       </ul><br>
//       <h3>🧩 Branch naming</h3>
//       <hr>
//       <ul>
//         <li>
//           <p>feature : 기능 개발하는 브랜치</p>
//           <p><strong>feature/[이슈번호] _ [기능] _ [layout/inflate]</strong></p>
//         </li>
//       </ul><br>
//       <h3>💬 Commit message</h3>
//       <hr>
//       <pre><code>ex) [Add] 홈 화면 Layout 작성 완료

//           1. 설명1
//           2. 설명 2
//       </code></pre><br>
//       <p>[Add] 기능추가</p>
//       <p>[Delete] 삭제</p>
//       <p>[Update] 기능수정</p>
//       <p>[Fix] 버그수정</p>
//       <p>[Docs] 문서정리</p>
//       <p>[Chore] 잡일</p><br>
//       <h3>🔗 Dependency</h3>
//       <hr>
//       <pre><code>/* retrofit */
//       implementation 'com.squareup.retrofit2:retrofit:2.7.2'
//       implementation 'com.squareup.retrofit2:converter-gson:2.7.1'
//       implementation 'com.squareup.okhttp3:logging-interceptor:4.2.1'

//       /* gson */
//       implementation 'com.google.code.gson:gson:2.8.6'

//       /* glide */
//       implementation "com.github.bumptech.glide:glide:4.10.0"
//       kapt "com.github.bumptech.glide:compiler:4.10.0"

//       //lottie
//       implementation 'com.airbnb.android:lottie:3.4.0'

//       /* recyclerview */
//       implementation "androidx.recyclerview:recyclerview:1.2.0-alpha02"

//       /* kakao */
//       implementation 'com.kakao.sdk:usermgmt:1.28.0'

//       implementation platform('com.google.firebase:firebase-bom:26.2.0')
//       implementation 'com.google.firebase:firebase-analytics-ktx'
//       implementation 'com.google.firebase:firebase-auth:19.1.0'
//       implementation 'com.google.android.gms:play-services-auth:17.0.0'
//       compileOnly 'com.google.android.wearable:wearable:2.8.1'

//       /* camera */
//       def camerax_version = "1.0.0-beta07"
//       implementation "androidx.camera:camera-camera2:$camerax_version"
//       implementation "androidx.camera:camera-lifecycle:$camerax_version"
//       implementation "androidx.camera:camera-view:1.0.0-alpha14"
//       </code></pre><br>
//       <h3>🧱 Project structure</h3>
//       <hr>
//       <pre><code>🌠apophis_android
//        ┣ 📂data
//        ┃ ┣ 📂entity
//        ┃ ┗ 📂remote
//        ┃    ┣ 📂request
//        ┃    ┗ 📂response
//        ┗ 📂ui
//          ┣ 📂firstDay
//          ┃ ┗ 📂adapter
//          ┣ 📂login
//          ┣ 📂main
//          ┃  ┣ 📂letter
//          ┃ 📂onboarding
//          ┃  ┗ 📂adapter
//          ┣ 📂secondDay
//          ┃ ┣ 📂adapter
//          ┃ ┣ 📂findMe
//          ┃ ┣ 📂time
//          ┃ ┗ 📂value
//          ┣ 📂seventhDay
//          ┃ ┣ 📂adapter
//          ┃ ┗ 📂tarot
//          ┣ 📂sixthDay
//          ┃ ┗ 📂adapter
//          ┗ 📄ChipFactory.kt

//       </code></pre><br>
//       <h3>🔧 Tech Stack</h3>
//       <hr>
//       <ol>
//         <li>카메라 이미지 캡처</li>
//       </ol>
//       <pre><code class="language-kotlin"> imageCapture.takePicture(
//                   ContextCompat.getMainExecutor(this),
//                   object : ImageCapture.OnImageCapturedCallback() {
//                       @SuppressLint("UnsafeExperimentalUsageError")
//                       override fun onCaptureSuccess(imageProxy: ImageProxy) {
//                           imageProxy.image?.let {
//                               val rotationDegrees = imageProxy.imageInfo.rotationDegrees
//                               previewPicture = it.toBitmap(rotationDegrees)

//                               iv_camera_capture.setImageBitmap(previewPicture)
//                               super.onCaptureSuccess(imageProxy)
//                               previewMode()
//                           }
//                       }

//                       override fun onError(exception: ImageCaptureException) {
//                           val msg = "Photo capture failed: '$'{exception.message}"
//                       }
//                   })
//       </code></pre>
//       <p>imageProxy로 받아서 원하는 형태로 변형해서 사용 가능</p><br>
//       <ol start="2">
//         <li>나침반 센서 메소드</li>
//       </ol>
//       <pre><code class="language-kotlin">override fun onSensorChanged(event: SensorEvent) {
//               if (event.sensor === accelerometer) {
//                   lowPass(event.values, lastAccelerometer)
//                   lastAccelerometerSet = true
//               } else if (event.sensor === magnetometer) {
//                   lowPass(event.values, lastMagnetometer)
//                   lastMagnetometerSet = true
//               }

//               if (lastAccelerometerSet &amp;&amp; lastMagnetometerSet) {
//                   val r = FloatArray(9)
//                   if (SensorManager.getRotationMatrix(r, null, lastAccelerometer, lastMagnetometer)) {
//                       val orientation = FloatArray(3)
//                       SensorManager.getOrientation(r, orientation)
//                       val degree = (Math.toDegrees(orientation[0].toDouble()) + 360).toFloat() % 360

//                       var rotateAnimation = RotateAnimation(
//                           currentDegree,
//                           -degree,
//                           Animation.RELATIVE_TO_SELF, 0.5f,
//                           Animation.RELATIVE_TO_SELF, 0.5f)
//                       rotateAnimation.duration = 200
//                       rotateAnimation.fillAfter = true

//                       image.startAnimation(rotateAnimation)
//                       currentDegree = -degree

//                       if (degree &gt; 80 &amp;&amp; degree &lt; 100) {
//                           Timer().schedule(1500) {
//                               runOnUiThread {
//                                   iv_compass_arrow.setImageResource(R.drawable.img_compass_arrow_bold)
//                                   sensorManager.unregisterListener(this@CompassActivity, accelerometer)
//                                   sensorManager.unregisterListener(this@CompassActivity, magnetometer)
//                                   rotateAnimation = RotateAnimation(
//                                       -90.toFloat(), (-90).toFloat(), Animation.RELATIVE_TO_SELF,
//                                       0.5f, Animation.RELATIVE_TO_SELF, 0.5f
//                                   )
//                                   rotateAnimation.duration = 210
//                                   rotateAnimation.fillAfter = true
//                                   currentDegree = -degree
//                                   iv_compass.startAnimation(rotateAnimation)
//                                   Thread.currentThread().interrupt()
//                                   Timer().schedule(1500){
//                                       finish()
//                                   }
//                               }
//                           }
//                       } else {
//                           iv_compass.setImageResource(R.drawable.img_compass)
//                       }
//                   }
//               }
//           }
//       </code></pre>
//       <p>가속도 센서(TYPE_ACCELEROMETER), 자기장 센서(TYPE_ACCELEROMETER)를 활용하여 값을 지속적으로 받아와 방향을 인식하고 센서값이 바뀔 때마다 리스너 오브젝트의 onSensorChanged() 메소드가 호출됨</p><br>
//       <h3>🎉 Core Function</h3>
//       <hr>
//       <ol>
//         <li>일차별 채팅</li>
//       </ol>
//       <p>
//         <img src="https://user-images.githubusercontent.com/63586451/104733166-a4ab0080-5781-11eb-815d-0ab2df1ee146.jpg" width="320" style="max-width: 100%;"> &nbsp;
//         <img src="https://user-images.githubusercontent.com/63586451/104733170-a5dc2d80-5781-11eb-95a9-1b9d60b75f74.jpg" width="320" style="max-width: 100%;">
//       </p><br>
//       <pre><code class="language-kotlin">class SecondDayChatActivity : AppCompatActivity() {
//           private lateinit var chatAdapter: SecondDayChatAdapter
//           private val apophisService = ApophisService
//           private val jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWR4Ijo2LCJpYXQiOjE2MTAxNjM5NjIsImV4cCI6MTYxMDc2ODc2MiwiaXNzIjoiYXBvcGhpcyJ9.gM5avYDIhGybMsXqlvaWwqJCsTfkAjo1lYD2tvxZAdw"
//           private var chatDetailsIdx = 23 // 2일차 시작 인덱스 23
//           override fun onCreate(savedInstanceState: Bundle?) {
//               super.onCreate(savedInstanceState)
//               setContentView(R.layout.activity_second_day_chat)
//               initRcv()
//               getAponymousChatFromServer(jwt, chatDetailsIdx)
//               btn_second_back.setOnClickListener { onBackPressed() }
//               constraintLayout_second.setOnClickListener { hideKeyboard() }
//               et_second_chat_message.addTextChangedListener(object: TextWatcher {
//                   override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
//                   override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
//                       btn_chat_send.setImageResource(R.drawable.btn_send_act)
//                   }
//                   override fun afterTextChanged(s: Editable?) {}
//               })
//               /* chip click listener 재정의 */
//               chatAdapter.setOnItemClickListener(object : SecondDayChatAdapter.OnItemClickListener {
//                   override fun onItemClick(data: String) {
//                       // override fun onItemClick(data: MutableList&lt;String&gt;) {
//                       et_second_chat_message.setText(data)
//                       et_second_chat_message.setTextColor(Color.parseColor("#FFFFFF"))
//                       btn_chat_send.setImageResource(R.drawable.btn_send_act)
//                       /*for (i in dataList.indices) {
//                           et_second_chat_message.setText(dataList[i])
//                           et_second_chat_message.setTextColor(Color.parseColor("#FFFFFF"))
//                           btn_chat_send.setImageResource(R.drawable.btn_send_act)
//                       }*/
//                   }
//               })
//           }
//           private fun initRcv() {
//               chatAdapter = SecondDayChatAdapter(this)
//               rcv_second_chat.adapter = chatAdapter
//           }
//           override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
//               super.onActivityResult(requestCode, resultCode, data)
//               if (requestCode == SecondDayChatAdapter.TIMER_ACTIVITY_REQUEST_CODE) {
//                   if (resultCode == Activity.RESULT_OK) {
//                       val text = data?.getStringExtra("text")
//                       et_second_chat_message.setText(text)
//                   }
//               }
//           }
//           private fun getAponymousChatFromServer(jwt: String, chatDetailsIdx: Int) {
//               apophisService.getInstance()
//                   .requestAponymousChat(
//                       jwt = jwt,
//                       chatDetailsIdx = chatDetailsIdx
//                   ).enqueue(object : Callback&lt;BaseResponse&lt;AponymousChatResponse&gt;&gt; {
//                       override fun onFailure(
//                           call: Call&lt;BaseResponse&lt;AponymousChatResponse&gt;&gt;,
//                           t: Throwable
//                       ) { //통신 실패
//                           Log.d("fail", t.message)
//                       }
//                       override fun onResponse(
//                           call: Call&lt;BaseResponse&lt;AponymousChatResponse&gt;&gt;,
//                           response: Response&lt;BaseResponse&lt;AponymousChatResponse&gt;&gt;
//                       ) {
//                           //통신 성공
//                           if (response.isSuccessful) {
//                               if (response.body()!!.success) {
//                                   var tag: Int
//                                   for (i in response.body()!!.data.chat.indices) {
//                                       tag = 0
//                                       val nextAction = response.body()!!.data.chat[i].nextAction
//                                       if (nextAction == "채팅 이미지") {
//                                           tag = 1
//                                       } else if (nextAction == "백그라운드 이미지 - 눈길 뷰"){
//                                           snowBackground()
//                                       } else if(nextAction == "음성송출1"){
//                                           tag = 2
//                                       }
//                                       val aponymousChatData = OurUserChat(mutableListOf(response.body()!!.data.chat[i].text), tag)
//                                       chatAdapter.addChat(aponymousChatData)
//                                   }
//                                   val replyType = response.body()!!.data.postInfo.replyType
//                                   tag = if (replyType == "단일 보기 선택" || replyType == "다중 보기 선택" || replyType == "카테고리 선택") { //chip_choice
//                                       4
//                                   } else if (replyType == "단답형 텍스트 입력") { //short answer
//                                       5
//                                   } else if (replyType == "기능 액션 버튼 - 시간대 설정") { //timer
//                                       6
//                                   } else if (replyType == "기능 액션 버튼 - 두개의 나 ") { //find_me
//                                       7
//                                   } else if (replyType == "기능 액션 버튼 - 가치 선택") { //value
//                                       8
//                                   } else if(replyType == "장문형 텍스트 입력") { // long answer
//                                       9
//                                   } else if (replyType == "일차 종료 (reply 없음)") { //end
//                                       10
//                                   } else {
//                                       3 //chat_user
//                                   }
//                                   when (tag) {
//                                       0, 1, 3, 4 -&gt; {
//                                           getChoiceChatFromServer(jwt, chatDetailsIdx, tag)
//                                           btn_chat_send.setOnClickListener {
//                                               chatAdapter.removeChat()
//                                               val userChoice = et_second_chat_message.text.toString()
//                                               val chat = OurUserChat(mutableListOf(userChoice), 3)
//                                               chatAdapter.addChat(chat)
//                                               et_second_chat_message.setText("")
//                                               postReplyOneToServer(jwt, chatDetailsIdx, 1, userChoice)
//                                           }
//                                       }
//                                       5 -&gt; { //short answer
//                                           getChoiceChatFromServer(jwt, chatDetailsIdx, tag)
//                                           btn_chat_send.setOnClickListener(null)
//                                           chatAdapter.setCallbackListener(object : SecondDayChatAdapter.CallbackListener{
//                                               override fun callBack(inputTextList: MutableList&lt;String&gt;) {
//                                                   postReplyFourToServer(jwt, chatDetailsIdx, 4, inputTextList)
//                                               }
//                                           })
//                                       }
//                                       9 -&gt; { //long answer
//                                           btn_chat_send.setOnClickListener {
//                                               val userChoice = et_second_chat_message.text.toString()
//                                               val chat = OurUserChat(mutableListOf(userChoice), 3)
//                                               chatAdapter.addChat(chat)
//                                               et_second_chat_message.setText("")
//                                               postReplyOneToServer(jwt, chatDetailsIdx, 1, userChoice)
//                                           }
//                                       }
//                                       10 -&gt; {
//                                           val user = ""
//                                           val chat = OurUserChat(mutableListOf(user), 10)
//                                           chatAdapter.addChat(chat)
//                                           btn_chat_send.setOnClickListener(null)
//                                       }
//                                       else -&gt; {
//                                           getChoiceChatFromServer(jwt, chatDetailsIdx, tag)
//                                           btn_chat_send.setOnClickListener {
//                                               chatAdapter.removeChat()
//                                               val userChoice = et_second_chat_message.text.toString()
//                                               val chat = OurUserChat(mutableListOf(userChoice), 3)
//                                               chatAdapter.addChat(chat)
//                                               et_second_chat_message.setText("")
//                                               postReplyOneToServer(jwt, chatDetailsIdx, 1, userChoice)
//                                           }
//                                       }
//                                   }
//                               }
//                           }
//                       }
//                   })
//           }
//           private fun getChoiceChatFromServer(jwt: String, chatDetailsIdx: Int, tag: Int) {
//               apophisService.getInstance()
//                   .requestChoiceChat(
//                       jwt = jwt,
//                       chatDetailsIdx = chatDetailsIdx
//                   ).enqueue(object : Callback&lt;BaseResponse&lt;ChoiceChatResponse&gt;&gt; {
//                       override fun onFailure(
//                           call: Call&lt;BaseResponse&lt;ChoiceChatResponse&gt;&gt;,
//                           t: Throwable
//                       ) { //통신 실패
//                           Log.d("fail", t.message)
//                       }
//                       override fun onResponse(
//                           call: Call&lt;BaseResponse&lt;ChoiceChatResponse&gt;&gt;,
//                           response: Response&lt;BaseResponse&lt;ChoiceChatResponse&gt;&gt;
//                       ) {
//                           //통신 성공
//                           if (response.isSuccessful) {
//                               if (response.body()!!.success) {
//                                   val replyNum = response.body()!!.data.replyNum
//                                   val list = mutableListOf&lt;String&gt;()
//                                   for (i in response.body()!!.data.choiceWords.indices) {
//                                       list.add(response.body()!!.data.choiceWords[i].choiceWords)
//                                   }
//                                   val choiceChatData = OurUserChat(list, tag)
//                                   chatAdapter.addChat(choiceChatData)
//                               }
//                           }
//                       }
//                   })
//           }
//           private fun postReplyOneToServer(jwt: String, chatDetailsIdx: Int, replyNum: Int, replyString: String) {
//               apophisService.getInstance()
//                   .requestOneReply(
//                       jwt = jwt,
//                       chatDetailsIdx = chatDetailsIdx,
//                       replyNum = replyNum,
//                       body = ReplyOneRequest(replyString)
//                   ).enqueue(object : Callback&lt;BaseResponse&lt;Unit&gt;&gt; {
//                       override fun onFailure(
//                           call: Call&lt;BaseResponse&lt;Unit&gt;&gt;,
//                           t: Throwable
//                       ) { //통신 실패
//                           Log.d("fail", t.message)
//                       }
//                       override fun onResponse(
//                           call: Call&lt;BaseResponse&lt;Unit&gt;&gt;,
//                           response: Response&lt;BaseResponse&lt;Unit&gt;&gt;
//                       ) {
//                           if (response.isSuccessful) {
//                               if (response.body()!!.success) {
//                                   if (chatDetailsIdx &lt; 41) {
//                                       getAponymousChatFromServer(jwt, chatDetailsIdx + 1)
//                                       btn_chat_send.setImageResource(R.drawable.btn_send_unact)
//                                   }
//                               }
//                           }
//                       }
//                   })
//           }
//           private fun postReplyFourToServer(jwt: String, chatDetailsIdx: Int, replyNum: Int, reply: MutableList&lt;String&gt;) {
//               apophisService.getInstance()
//                   .requestFourReply(
//                       jwt = jwt,
//                       chatDetailsIdx = chatDetailsIdx,
//                       replyNum = replyNum,
//                       body = ReplyFourRequest(reply[0], reply[1], reply[2], reply[3])
//                   ) .enqueue(object : Callback&lt;BaseResponse&lt;Unit&gt;&gt; {
//                       override fun onFailure(
//                           call: Call&lt;BaseResponse&lt;Unit&gt;&gt;,
//                           t: Throwable
//                       ) { //통신 실패
//                           Log.d("fail", t.message)
//                       }
//                       override fun onResponse(
//                           call: Call&lt;BaseResponse&lt;Unit&gt;&gt;,
//                           response: Response&lt;BaseResponse&lt;Unit&gt;&gt;
//                       ) {
//                           if (response.isSuccessful) {
//                               if (response.body()!!.success) {
//                                   if (chatDetailsIdx &lt; 41) {
//                                       getAponymousChatFromServer(jwt, chatDetailsIdx + 1)
//                                       btn_chat_send.setImageResource(R.drawable.btn_send_unact)
//                                   }
//                               }
//                           }
//                       }
//                   })
//           }
//           private fun hideKeyboard() {
//               val imm = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
//               imm.hideSoftInputFromWindow(et_second_chat_message.windowToken, 0)
//           }
//           private fun snowBackground() {
//               rcv_second_chat.setBackgroundResource(R.color.transparency00FF)
//               cl_second_chat_bottom.setBackgroundResource(R.color.transparency00FF)
//               cl_second_chat_header.setBackgroundResource(R.color.transparency00FF)
//               constraintLayout_second.setBackgroundResource(R.drawable.bg_snowroadxx)
//               Handler().postDelayed({
//                   rcv_second_chat.setBackgroundResource(R.color.black262627)
//                   cl_second_chat_bottom.setBackgroundResource(R.color.black2C2C2D)
//                   cl_second_chat_header.setBackgroundResource(R.color.black2C2C2D)
//                   constraintLayout_second.setBackgroundResource(R.color.black262627)
//               }, 40000)
//           }
//       }
//       </code></pre>
//       <pre><code class="language-kotlin">class SecondDayChatAdapter(private val context: Context): RecyclerView.Adapter&lt;RecyclerView.ViewHolder&gt;() {
//           private val userChatList: MutableList&lt;OurUserChat&gt; = mutableListOf()
//           override fun getItemViewType(position: Int): Int {
//               return when (userChatList[position].tag) {
//                   0 -&gt; R.layout.item_chat_aponymous
//                   1 -&gt; R.layout.item_chat_aponymous_image
//                   2 -&gt; R.layout.item_aponymous_sound
//                   3, 9 -&gt; R.layout.item_chat_user //9 장문형
//                   4 -&gt; R.layout.item_chip_choice
//                   5 -&gt; R.layout.item_chat_short_answer
//                   6 -&gt; R.layout.item_chat_time
//                   7 -&gt; R.layout.item_chat_find_me
//                   10 -&gt; R.layout.item_chat_ending
//                   else -&gt; R.layout.item_chat_value
//               }
//           }
//           override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
//               val layoutInflater = LayoutInflater.from(parent.context)
//               return when (viewType) {
//                   R.layout.item_chat_aponymous -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chat_aponymous, parent, false)
//                       AponymousViewHolder(view)
//                   }
//                   R.layout.item_chat_aponymous_image -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chat_aponymous_image, parent, false)
//                       AponymousImageViewHolder(view)
//                   }
//                   R.layout.item_aponymous_sound -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_aponymous_sound, parent, false)
//                       AponymousSoundViewHolder(view)
//                   }
//                   R.layout.item_chat_user -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chat_user, parent, false)
//                       UserViewHolder(view)
//                   }
//                   R.layout.item_chip_choice -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chip_choice, parent, false)
//                       ChoiceChatViewHolder(view, layoutInflater)
//                   }
//                   R.layout.item_chat_short_answer -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chat_short_answer, parent, false)
//                       UserShortAnswerViewHolder(view, callbackListener)
//                   }
//                   R.layout.item_chat_time -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chat_time, parent, false)
//                       TimerActionViewHolder(view)
//                   }
//                   R.layout.item_chat_find_me -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chat_find_me, parent, false)
//                       FindMeActionViewHolder(view)
//                   }
//                   R.layout.item_chat_value -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chat_value, parent, false)
//                       ValueActionViewHolder(view)
//                   }
//                   R.layout.item_chat_ending -&gt; {
//                       val view = layoutInflater.inflate(R.layout.item_chat_ending, parent, false)
//                       EndingViewHolder(view)
//                   }
//                   else -&gt;
//                       throw IllegalArgumentException("ViewType [$viewType] is unexpected")
//               }
//           }
//           override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
//               if (holder is AponymousViewHolder) {
//                   holder.bind(userChatList[position].content)
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is AponymousImageViewHolder) {
//                   holder.bind(userChatList[position].content)
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is AponymousSoundViewHolder) {
//                   holder.bind(userChatList[position].content)
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is UserViewHolder) {
//                   holder.bind(userChatList[position].content)
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is ChoiceChatViewHolder) {
//                   holder.bind(userChatList[position].content)
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is UserShortAnswerViewHolder) {
//                   holder.bind(callbackListener)
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is TimerActionViewHolder) {
//                   holder.bind()
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is FindMeActionViewHolder) {
//                   holder.bind()
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is ValueActionViewHolder) {
//                   holder.bind()
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//               if (holder is EndingViewHolder) {
//                   holder.bind()
//                   holder.itemView.animation = AnimationUtils.loadAnimation(context, R.anim.translate_up)
//               }
//           }
//           inner class AponymousViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//               private val content = itemView.findViewById&lt;TextView&gt;(R.id.tv_aponymous_chat)
//               fun bind(text: MutableList&lt;String&gt;) {
//                   text.forEach {
//                       content.text = it
//                   }
//               }
//           }
//           inner class AponymousImageViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//               private val image = itemView.findViewById&lt;ImageView&gt;(R.id.img_chat_aponymous)
//               fun bind(imageUrl: MutableList&lt;String&gt;) {
//                   imageUrl.forEach {
//                       Glide.with(itemView).load(it).into(image)
//                   }
//                   image.background = context.getDrawable(R.drawable.round_rectangle_black_23dp)
//                   image.clipToOutline = true
//               }
//           }
//           inner class AponymousSoundViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//               fun bind(text: MutableList&lt;String&gt;) {
//               }
//           }
//           inner class UserViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//               private val content = itemView.findViewById&lt;TextView&gt;(R.id.tv_user_chat)
//               fun bind(chatDataList: MutableList&lt;String&gt;) {
//                   chatDataList.forEach {
//                       content.text = it
//                   }
//               }
//           }
//           inner class ChoiceChatViewHolder(itemView: View, inflater: LayoutInflater) : RecyclerView.ViewHolder(itemView) {
//               private var chipGroup: ChipGroup = itemView.findViewById(R.id.chipgroup_choice)
//               private val chipTextList: MutableList&lt;String&gt; = mutableListOf()
//               private val inflater: LayoutInflater = inflater
//               fun bind(chipItem: MutableList&lt;String&gt;) {
//                   chipGroup.removeAllViews()
//                   chipTextList.clear()
//                   chipItem.forEach {
//                       val chip = ChipFactory.newInstance(inflater)
//                       chip.text = it
//                       chip.isClickable = true
//                       chipGroup.addView(chip)
//                       chipTextList.add(it)
//                       chip.setOnClickListener {
//                           itemClickListener.onItemClick(chip.text.toString())
//                           // itemClickListener.onItemClick(chipTextList)
//                       }
//                   }
//               }
//           }
//           inner class UserShortAnswerViewHolder(itemView: View, callbackListener: CallbackListener) : RecyclerView.ViewHolder(itemView) {
//               private var num1: TextView = itemView.findViewById(R.id.tv_user_input_1)
//               private var num2: TextView = itemView.findViewById(R.id.tv_user_input_2)
//               private var num3: TextView = itemView.findViewById(R.id.tv_user_input_3)
//               private var input: TextView = itemView.findViewById(R.id.tv_user_input)
//               private var input1: TextView = itemView.findViewById(R.id.et_user_input_1)
//               private var input2: TextView = itemView.findViewById(R.id.et_user_input_2)
//               private var input3: TextView = itemView.findViewById(R.id.et_user_input_3)
//               private var btnComplete: TextView = itemView.findViewById(R.id.btn_user_input_complete)
//               private val inputTextList: MutableList&lt;String&gt; = mutableListOf()
//               fun bind(callbackListener: CallbackListener) {
//                   input1.addTextChangedListener(object: TextWatcher {
//                       override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
//                       override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
//                           num1.setTextColor(Color.parseColor("#AB70F5"))
//                       }
//                       override fun afterTextChanged(s: Editable?) {}
//                   })
//                   input2.addTextChangedListener(object: TextWatcher {
//                       override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
//                       override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
//                           num2.setTextColor(Color.parseColor("#AB70F5"))
//                       }
//                       override fun afterTextChanged(s: Editable?) {}
//                   })
//                   input3.addTextChangedListener(object: TextWatcher {
//                       override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
//                       override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
//                           num3.setTextColor(Color.parseColor("#AB70F5"))
//                       }
//                       override fun afterTextChanged(s: Editable?) {}
//                   })
//                   btnComplete.setOnClickListener {
//                       removeChat()
//                       inputTextList.add(input.text.toString())
//                       inputTextList.add("첫 번째는 " + input1.text.toString())
//                       inputTextList.add("두 번째는 " + input2.text.toString())
//                       inputTextList.add("세 번째는 " + input3.text.toString())
//                       for (i in inputTextList.indices) {
//                           val chatRight = OurUserChat(mutableListOf(inputTextList[i]), 3)
//                           addChat(chatRight)
//                       }
//                       callbackListener.callBack(inputTextList)
//                   }
//               }
//           }
//           inner class TimerActionViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//               private val btnAction = itemView.findViewById&lt;ImageView&gt;(R.id.btn_timer)
//               fun bind() {
//                   btnAction.setOnClickListener {
//                       val intent = Intent(context, SecondDayTimepickerActivity::class.java)
//                       (context as Activity).startActivityForResult(intent, TIMER_ACTIVITY_REQUEST_CODE
//                       )
//                   }
//               }
//           }
//           inner class FindMeActionViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//               private val btnAction = itemView.findViewById&lt;ImageView&gt;(R.id.btn_find_me)
//               fun bind() {
//                   btnAction.setOnClickListener {
//                       itemClickListener.onItemClick("이런 모습들이 있는 것 같아.")
//                       val intent = Intent(context, SecondDayFindLightMeActivity::class.java)
//                       context.startActivity(intent)
//                   }
//               }
//           }
//           inner class ValueActionViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//               private val btnAction = itemView.findViewById&lt;ImageView&gt;(R.id.btn_value)
//               fun bind() {
//                   btnAction.setOnClickListener {
//                       itemClickListener.onItemClick("했어.")
//                       val intent = Intent(context, SecondDayValueActivity::class.java)
//                       context.startActivity(intent)
//                   }
//               }
//           }
//           inner class EndingViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//               private val btnAction = itemView.findViewById&lt;View&gt;(R.id.btn_ending_okay)
//               fun bind() {
//                   btnAction.setOnClickListener {
//                       val intent = Intent(context, SecondDayChatEndingActivity::class.java)
//                       context.startActivity(intent)
//                   }
//               }
//           }
//           override fun getItemCount(): Int {
//               return userChatList.size
//           }
//           fun addChat(userChatItem: OurUserChat) {
//               userChatList.add(userChatItem)
//               notifyItemInserted(userChatList.size)
//           }
//           fun removeChat() {
//               userChatList.removeAt(userChatList.size-1)
//               notifyItemRemoved(userChatList.size)
//           }
//           /* chip click listener */
//           interface OnItemClickListener {
//               fun onItemClick(data: String)
//               // fun onItemClick(dataList: MutableList&lt;String&gt;)
//           }
//           private lateinit var itemClickListener: OnItemClickListener
//           fun setOnItemClickListener(listener: OnItemClickListener) {
//               this.itemClickListener = listener
//           }
//           /* callback listener */
//           interface CallbackListener {
//               fun callBack(inputTextList: MutableList&lt;String&gt;)
//           }
//           private lateinit var callbackListener: CallbackListener
//           fun setCallbackListener(callbackListener: CallbackListener) {
//               this.callbackListener = callbackListener
//           }
//           companion object {
//               const val TIMER_ACTIVITY_REQUEST_CODE = 26
//               // 26 = 2일차 viewType 6
//               const val FIND_ME_ACTIVITY_REQUEST_CODE = 27
//               const val VALUE_ACTIVITY_REQUEST_CODE = 28
//           }
//       }
//       </code></pre><br>
//       <p>drawble : 앱의 핵심 기능인 채팅 구현 로직 상 버튼 활성화, 비활성화 기준이 뷰타입마다 달라지는 관계로 개별 drawable을 사용했습니다.</p><br>
//       <h3>🎵 Android developer &amp; roles</h3>
//       <hr>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;">👩 <a href="https://github.com/kimdahyee" target="_blank">김다혜</a></th>
//             <th style="text-align: center;">👨 <a href="https://github.com/wogus0333" target="_blank">한재현</a></th>
//             <th style="text-align: center;">👩 <a href="https://github.com/CHOSUNGRIM" target="_blank">조성림</a></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">
//               <img src="https://user-images.githubusercontent.com/63586451/104689277-98a14d80-5745-11eb-9f92-77bb4dc2a470.jpg" alt="프로필" width="300px" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">
//               <img src="https://user-images.githubusercontent.com/63586451/104689261-90e1a900-5745-11eb-8bce-b32a6b463cd6.jpg" alt="프로필" width="300px" style="max-width: 100%;">
//             </td>
//             <td style="text-align: center;">
//               <img src="https://user-images.githubusercontent.com/63586451/104689254-8f17e580-5745-11eb-93d1-654435cd19a2.jpg" alt="프로필" width="300px" style="max-width: 100%;">
//             </td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">스플래쉬<br>음악 재생<br>메인<br>편지 받기/쓰기</td>
//             <td style="text-align: center;">온보딩</td>
//             <td style="text-align: center;">아포피스 뷰<br>타이머<br>음성 송출</td>
//           </tr>
//           <tr>
//             <td style="text-align: center;">채팅 전체 로직 구현<br>채팅 엔딩 뷰<br>2일차 - 채팅 구현<br>2일차 - 시간 설정<br>2일차 - Find me</td>
//             <td style="text-align: center;">1일차 - 채팅 구현<br>1일차 - 나침반<br>1일차 - 카메라 촬영<br>1일차 / 2일차 - 백그라운드 이미지 전환</td>
//             <td style="text-align: center;">2일차 - 가치관<br>7일차 - 채팅 구현<br>7일차 - 유서 쓰기</td>
//           </tr>
//         </tbody></table><br>
//       </div>`,
//     userId: 'test1',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2022-11-09 13:34',
//     likes: 105,
//     views: 18798,
//     thumbnail: 'thumbnail24',
//     techIds: [2, 4, 6, 8, 9],
//   },
//   {
//     projectId: 25,
//     projectTitle: '✨ 운동 포스터 제작 및 공유 Bodymood ✨- Flutter repository',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>Bodymood</h1>
//       <p>디프만 10기 5조, 바디무드 프로젝트</p>
//       <ul>
//         <li>애플 앱스토어: <a href="https://apps.apple.com/kr/app/bodymood/id1588818384" target="_blank">https://apps.apple.com/kr/app/bodymood/id1588818384</a></li>
//         <li>구글 플레이스토어: <a href="https://play.google.com/store/apps/details?id=com.depromeet.bodymood" target="_blank">https://play.google.com/store/apps/details?id=com.depromeet.bodymood</a></li>
//       </ul>
//       <h1>이미지 에셋 관리</h1>
//       <h2>Pre-requisite</h2>
//       <p><code>spider</code> 패키지를 통해 이미지 에셋을 관리한다.</p>
//       <pre><code class="language-bash">$&gt; pub global activate spider
//       # or
//       $&gt; flutter pub global activate spide
//       </code></pre>
//       <h2>이미지 설정</h2>
//       <p>
//         <code>pubspec.yaml</code> 과 <code>spider.yaml</code> 에 원하는 에셋 경로 설정 후,
//         <code>spider build</code> 를 통해 에셋 코드를 생성 후 사용. 자세한 내용은
//         <a href="https://pub.dev/packages/spider" target="_blank">spider 설명</a> 참조
//       </p>
//       <p>
//         꾸준히 이미지 추가를 원하는 경우 <code>spider build --watch</code> 를 통해
//         자동 빌드 가능
//       </p>
//       <h1>사용한 특수 목적 패키지</h1>
//       <p>기본적으로 널리 사용되는 패키지들에 대한 설명은 제외함</p>
//       <ul>
//         <li><code>freezed</code>: enum과 const 를 대신해서 사용</li>
//         <li><code>riverpod</code>, <code>flutter_riverpod</code>: 상태관리 및 상태 전달을 위해 사용</li>
//       </ul>
//       <h2>카메라/파일 관련 고려중인 packages</h2>
//       <ul>
//         <li>cameraawesome: 다양한 기능이 추가된 카메라</li>
//         <li>image_downloader: 이미지 다운로드를 쉽게 함</li>
//         <li>photo_manager: 이미지 파일의 path 만 가져옴. gui 는 자유롭게 구현</li>
//         <li>flutter_better_camera: 다양한 기능이 추가된 카메라</li>
//       </ul>
//       <h1>시범 아키텍처</h1>
//       <p>
//         Uber의 <code>Ribs</code> 아키텍쳐와 유사하게,
//         <code>state</code>에 반응하는 <code>Interactor</code>, <code>state</code>를 전달하고 관리하는 <code>riverpod</code>,
//         순수히 UI를 담당하는 <code>gui/widget</code>,
//         네비게이션만 담당하는 특수 목적 Interactor인 <code>RouteInteractor</code> 를 분리하여
//         사용하려 함.
//       </p>
//       <p>
//         아직 <code>Interactor</code>가 정확하게 적용되지 않은 부분들이 있고,
//         새로운 클래스를 만들어서 사용하는 것이 아니기 때문에, 코드나 폴더 구조가
//         지저분함. 추후 리팩터링을 거쳐서 수정해야 함.
//       </p>
//       <h2>향후 아키텍쳐</h2>
//       <p>
//         완전 역할 분리형 아키텍쳐의 사용이 제대로 정립된 후,
//         프레임워크 형태로 편히 구현하고 사용할 수 있도록 패키지로 변경.
//         위젯이나 다른 파트의 의존성 관리를 위한 개별 컴포넌트도 구현 예정.
//       </p>
//       <h2>WISeR</h2>
//       <p><code>Widget</code>, <code>Interactor</code>, <code>State</code>, <code>Entity</code>, <code>Router</code> 아키텍쳐</p>
//       </div>`,
//     userId: 'test25',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2021-03-01 13:34',
//     likes: 1056,
//     views: 125643,
//     thumbnail: 'thumbnail25',
//     techIds: [1, 5, 6],
//   },
//   {
//     projectId: 26,
//     projectTitle: '📚[풀스택]책무리 프로젝트 (Chakmuri Project)',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1 align="center">📚 책무리 프로젝트 (Chakmuri Project)</h1>
//       <h3 align="center">책으로 하나되어 모이다. "책무리"</h3>
//       <p>
//         <img src="https://user-images.githubusercontent.com/71365547/131267031-58c7fe10-5a43-4ed1-905c-73f728a77da3.png" alt="image" style="max-width: 100%;"><br>
//       </p>
//       <h2 id="table-of-contents">🔖 목차</h2>
//       <details open="">
//         <summary>목차</summary>
//         <ol>
//           <li><a href="#description" target="_blank">➤ 웹서비스 설명</a></li>
//           <li><a href="#site" target="_blank">➤ 사이트</a></li>
//           <li><a href="#design" target="_blank">➤ 기획 &amp; 설계</a></li>
//           <li><a href="#period" target="_blank">➤ 개발 기간</a></li>
//           <li><a href="#skills" target="_blank">➤ 기술 스택</a></li>
//           <li><a href="#fe-be-role" target="_blank">➤ FE &amp; BE 역할 분담</a></li>
//           <li><a href="#release-note" target="_blank">➤ 릴리즈 노트</a></li>
//         </ol>
//       </details><br>
//       <h2 id="description">👩&zwj;🏫 웹서비스 설명</h2>
//       <p><strong>책무리</strong>는 다양한 주제의 독서모임에 참여하고, 내가 필요한 독서모임을 만들어 사람들을 모집할 수 있는 맞춤형 독서모임 플랫폼입니다. 책무리는 독서모임을 만들고 독서모임에 참여할 사람들을 모집하고 싶은 사용자와, 어떤 독서모임들이 있는지 검색하고 독서모임에 참여하고자 하는 사용자, 이 두 역할의 사용자들을 대상으로 합니다.</p><br>
//       <blockquote>
//         <h3>독서모임 운영자</h3>
//         <p><strong>독서모임을 만들고 독서모임에 참여할 사람들을 모집하고 싶은 사용자</strong>의 경우, 독서모임을 등록하거나 수정, 삭제, 참여자 관리를 할 수 있습니다.</p>
//       </blockquote><br>
//       <ul>
//         <li><strong>독서모임 등록</strong>
//           <ul>
//             <li>이름, 한 줄 소개, 참여 인원, 진행 기간, 선정도서, 위치 등의 정보를 작성해 등록할 수 있습니다.</li>
//             <li>한 사람 당 하나의 독서모임만 등록할 수 있습니다.</li>
//           </ul>
//         </li>
//         <li><strong>독서모임 수정, 삭제</strong>
//           <ul>
//             <li>마이페이지 &gt; 운영중인 독서모임에서 독서모임의 정보를 수정, 삭제할 수 있습니다.</li>
//           </ul>
//         </li>
//         <li><strong>참여자 관리</strong>
//           <ul>
//             <li>참여 신청이 오면 승인 대기자 목록에 참여 신청자가 추가되며, 운영자에게 참여 신청이 있다는 메일이 발송됩니다. 만약 승인 전에 참여 신청자가 참여 신청 취소를 한다면, 승인 대기자 목록에서 삭제되어 표시되지 않습니다.</li>
//             <li>승인 대기자, 참여자 목록에는 참여신청자의 이메일이 표시됩니다. 이 연락처를 사용해 참여신청자와 연락 후 승인, 거절 여부를 결정합니다.</li>
//             <li>승인 -&gt; 참여자 목록에 추가되며, 참여 신청자에게 승인 메일이 발송됩니다.</li>
//             <li>거절 -&gt; 승인 대기자 목록에서 삭제되며, 참여 신청자에게 거절 메일이 발송됩니다.</li>
//             <li>독서모임 참여자를 내보내고 싶을 때에는 참여자 목록에서 '내보내기'버튼을 클릭해 참여자 목록에서 삭제할 수 있습니다.</li>
//             <li>내보내기 -&gt; 참여자 목록에서 삭제되며, 참여자에게 내보내기 되었다는 메일이 발송됩니다.</li>
//           </ul>
//         </li>
//       </ul><br>
//       <blockquote>
//         <h3>독서모임 참여자</h3>
//         <p><strong>어떤 독서모임들이 있는지 검색하고 독서모임에 참여하고자 하는 사용자</strong>의 경우, 모집중 여부와 태그, 검색어 키워드로 독서모임을 조회할 수 있고, 최신순, 좋아요 순으로 정렬해 조회할 수도 있습니다. 이렇게 조건에 맞게 검색된 독서모임들의 상세 정보를 탐색한 뒤 참여하고자 하는 독서모임이 있으면 참여 신청을 할 수 있습니다.</p>
//       </blockquote><br>
//       <ul>
//         <li><strong>독서모임 검색</strong>
//           <ul>
//             <li>모집중 체크박스 : 체크 시 모집중인 독서모임만 페이지에 표시됩니다.</li>
//             <li>태그(소수정예, 온라인, 오프라인, 온/오프라인, 수도권, 지방, 친목, 독서 외 활동) : 선택 시 해당 태그를 포함하고 있는 독서모임이 표시(or조건 -&gt; 선택한 태그들 중 하나라도 포함한다면 조회됩니다.)</li>
//             <li>검색어 키워드 : 검색어 키워드를 입력하고 검색 버튼을 누르면, 독서모임 이름으로 독서모임을 조회할 수 있습니다.</li>
//             <li>정렬 : 최신순, 좋아요 순으로 정렬할 수 있으며, 최신순은 최근에 등록된 독서모임 순, 좋아요 순은 좋아요 개수가 많은 순으로 정렬됩니다.</li>
//             <li>독서모임 진행 기간의 최종 날짜가 지나면 독서모임 모집은 '마감' 상태가 되며, 독서모임 목록 조회 시 '마감' 라벨이 표시됩니다.</li>
//           </ul>
//         </li>
//         <li><strong>좋아요</strong>
//           <ul>
//             <li>하트 버튼을 눌러 마음에 들거나 관심 있는 독서모임에 '좋아요'를 표시할 수 있습니다.</li>
//             <li>좋아요를 누르면 마이페이지 &gt; 좋아요한 독서모임 목록에 추가됩니다.</li>
//           </ul>
//         </li>
//         <li><strong>독서모임 상세조회</strong>
//           <ul>
//             <li>독서모임 운영자가 독서모임 등록시 입력한 상세 정보들이 표시됩니다.
//               <ul>
//                 <li>이름, 한 줄 소개, 참여 인원, 진행기간, 태그, 선정도서(도서명, 작가명, 출판사, 출판연도, 도서 선정 이유 및 소개글), 상세설명, 위치</li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li><strong>댓글</strong>
//           <ul>
//             <li>독서모임의 상세 페이지에 댓글을 남길 수 있습니다.</li>
//             <li>마이페이지 &gt; 내 댓글에서 내가 쓴 댓글 목록을 조회할 수 있고, 댓글 항목의 본문 보기 버튼을 통해 해당 댓글을 남긴 독서모임의 상세페이지로 이동할 수 있습니다.</li>
//           </ul>
//         </li>
//         <li><strong>참여 신청/취소</strong>
//           <ul>
//             <li>독서모임 상세페이지에서 참여 신청 버튼을 눌러 독서모임 참여를 신청할 수 있고, 마이페이지의 참여신청한 독서모임 목록에 추가됩니다.</li>
//             <li>참여 신청을 하면 독서모임 운영자의 운영중인 독서모임 &gt; 승인 대기자 탭에 추가됩니다.</li>
//             <li>독서모임 상세페이지에서 참여 취소 버튼을 누르면 바로 참여 취소가 가능합니다.</li>
//           </ul>
//         </li>
//       </ul><br>
//       <p>책무리는 이렇게 독서모임 운영자와 독서모임 참여자, 두 가지 역할로서 이용이 가능합니다. 꼭 한 가지 역할만 해야하는 것은 아닙니다. 사용자는 모두 독서모임의 운영자가 되거나, 참여자가 될 수도 있습니다. '책'이라는 하나의 공통 분모를 가지고, 다양한 사람들과 무리지어 모여 모임을 구성하는 &lt;<a href="http://chakmuri.club/" target="_blank">책무리</a>&gt;에서 지금, 모여보세요!</p><br>
//       <h2 id="site">💻 사이트</h2>
//       <ul>
//         <li>실서버 링크 : <a href="http://chakmuri.club/" target="_blank">http://chakmuri.club/</a></li>
//       </ul><br>
//       <h2 id="design">👩&zwj;💻 기획 &amp; 설계</h2>
//       <ul>
//         <li><a href="https://cobalt-scallion-3d2.notion.site/70949e72bf674a6e857ed795a456ca56" target="_blank">📄 기능 설명서</a></li>
//         <li><a href="https://cobalt-scallion-3d2.notion.site/9835c787ad6240c3963783552331b547" target="_blank">⚙ 기능 명세서</a></li>
//         <li><a href="https://www.erdcloud.com/d/A3SxWkvRZhPxj5kdg" target="_blank">☁ DB ERDCloud</a></li>
//         <li><a href="https://cobalt-scallion-3d2.notion.site/DB-0919e254a9844a0c840cdf1e86fba73d" target="_blank">📒 DB 명세서</a></li>
//         <li><a href="https://cobalt-scallion-3d2.notion.site/API-be617ab2fde340b6a79e11b68e6731a9" target="_blank">⌨ API 명세서</a></li>
//         <li><a href="https://cobalt-scallion-3d2.notion.site/API-50532f780bb64cba87723d0c9118eb08" target="_blank">💾 API 문서</a></li>
//         <li><a href="https://cobalt-scallion-3d2.notion.site/bf21e9b6316f4099b03ff9aa151ffe47" target="_blank">🖥 페이지 기획서</a></li>
//       </ul><br>
//       <h2 id="period">🗓 개발 기간</h2>
//       <ul>
//         <li>ver 1. (2021/07/27 ~ 2021/08/31)</li>
//         <li>ver 2. (2021/09/01 ~ 2021/09/14)</li>
//       </ul><br>
//       <h2 id="skills">🗃 기술 스택</h2>
//       <h3>FE</h3>
//       <ul>
//         <li>Javascript</li>
//         <li>React</li>
//         <li>styled-components</li>
//         <li>ant-design</li>
//       </ul>
//       <h3>BE</h3>
//       <ul>
//         <li>Java -version 11</li>
//         <li>SpringBoot</li>
//         <li>Spring Data JPA</li>
//         <li>Gradle</li>
//         <li>MySQL</li>
//         <li>AWS - EC2, RDS, S3, Route53</li>
//         <li>Google SMTP</li>
//       </ul><br>
//       <h2 id="fe-be-role">👨&zwj;💻 FE &amp; BE 역할 분담</h2>
//       <p><a href="https://github.com/chakmuri/chakmuri/projects" target="_blank">프로젝트 칸반보드✨</a></p>
//       <h3>FE</h3>
//       <ul>
//         <li><a href="https://github.com/Sol-Ahn" target="_blank"><code>Sol-Ahn</code></a></li>
//       </ul>
//       <h3>BE</h3>
//       <ul>
//         <li><a href="https://github.com/sharpie1330" target="_blank"><code>Sharpie</code></a></li>
//         <li><a href="https://github.com/JunHo-YH" target="_blank"><code>JunHo KANG</code></a></li>
//       </ul><br>
//       <h2 id="release-note">📜 릴리즈 노트</h2>
//       <h5>ver 1. (2021/07/27 ~ 2021/08/31)</h5>
//       <ul>
//         <li>독서모임 등록, 수정, 삭제</li>
//         <li>독서모임 검색, 조회, 정렬</li>
//         <li>좋아요 등록, 삭제</li>
//         <li>댓글 등록, 수정, 삭제, 관리</li>
//       </ul>
//       <h5>ver 2. (2021/09/01 ~ 2021/09/14)</h5>
//       <ul>
//         <li>
//           <p>독서모임 참여신청, 취소</p>
//         </li>
//         <li>
//           <p>참여 신청 승인, 거절, 내보내기</p>
//         </li>
//       </ul>
//       <h5>ver 2.0.1 (2021/09/16)</h5>
//       <ul>
//         <li>코드 포맷팅, 미디어 쿼리 수정, 푸터가 하단에 고정되지 않는 문제 수정, 입력하지 않은 도서정보 렌더링 수정</li>
//       </ul><br>
//       </div>`,
//     userId: 'test26',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2022-03-18 13:34',
//     likes: 103,
//     views: 1243,
//     thumbnail: 'thumbnail26',
//     techIds: [1, 2, 3, 4, 5, 6, 7],
//   },
//   {
//     projectId: 27,
//     projectTitle: '[FE] 😊 주접 생성기',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h2>주접떠는 사이트</h2>
//       <p><a href="https://github.com/jong-hui/JuJeob/blob/master/CONTRIBUTING.md" target="_blank">여러분의 주접도 추가해주세요!</a></p>
//       <h3>감사합니다!</h3>
//       <p>
//         <img src="https://user-images.githubusercontent.com/42797995/120887513-4c8c7200-c62e-11eb-8d8e-da9602a17bc6.png" alt="analytics" style="max-width: 100%;">
//       </p>
//       <p>2021년 상반기에 무려 5만 분께서 주접을 떨어주셨습니다. 과분한 관심 감사합니다!</p>
//       <p><a href="https://jong-hui.github.io/devlog/review/2020/11/10/%EC%A3%BC%EC%A0%91%EC%83%9D%EC%84%B1%EA%B8%B0-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%9C%EB%B0%9C%ED%9B%84%EA%B8%B0/" target="_blank">https://jong-hui.github.io/devlog/review/2020/11/10/주접생성기-사이트-개발후기/</a></p>
//       <ul>
//         <li>aws
//           <ul>
//             <li>s3</li>
//             <li>cloudfront</li>
//           </ul>
//         </li>
//         <li>nextJS</li>
//         <li>typescript</li>
//         <li>styled-components</li>
//         <li>mobx</li>
//       </ul>
//       <p><a href="https://ju-jeob.com" target="_blank">https://ju-jeob.com</a></p>
//       <p>
//         <img src="https://user-images.githubusercontent.com/42797995/98429243-db60fc80-20e8-11eb-9d8f-1094b63362ac.gif" alt="gif" style="max-width: 100%;">
//       </p>
//       </div>`,
//     userId: 'test26',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2022-07-21 13:34',
//     likes: 924,
//     views: 12123,
//     thumbnail: 'thumbnail27',
//     techIds: [3, 4, 9],
//   },
//   {
//     projectId: 28,
//     projectTitle: '[풀스택] 💉우리들의 백신 접종 후기 공유 플랫폼_CVI',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <img src="https://user-images.githubusercontent.com/53412998/135798025-1158fe48-0841-4545-a28f-8015468c3328.png" width="100%" style="max-width: 100%;">
//       <h1>프로젝트 소개</h1><br>
//       <p align="center"><a target="_blank" href="https://www.youtube.com/watch?v=W1LziOGs_6g"><img src="https://user-images.githubusercontent.com/53412998/137051501-805cd497-b7d7-421e-b6ac-4f03549e0d93.png" width="50%" height="50%" style="max-width: 100%;"></a></p>
//       <p align="center"><a target="_blank" href="https://www.youtube.com/watch?v=W1LziOGs_6g">(클릭하면 영상을 실행할 수 있습니다)</a></p><a target="_blank" href="https://www.youtube.com/watch?v=W1LziOGs_6g"></a>
//       <p></p><br>
//       <p>코로나19 백신 접종 후기를 남기다! 우리는 <a href="https://vaccine-review.com" target="_blank"><code>Team CVI</code></a> 입니다.</p>
//       <ul>
//         <li><a href="https://vaccine-review.com" target="_blank"><code>CVI</code></a> 는 코로나19 백신 정보를 제공해줘요.</li>
//         <li><a href="https://vaccine-review.com" target="_blank"><code>CVI</code></a> 에서는 백신 후기를 남길 수 있어요.</li>
//         <li>부작용이 걱정되신다구요? <a href="https://vaccine-review.com" target="_blank"><code>다른 사람들의 후기를 보러 가볼까요? :)</code></a></li>
//       </ul>
//       <p>서비스 URL: <a href="https://vaccine-review.com" target="_blank">https://vaccine-review.com</a></p><br>
//       <h1>서비스 기능</h1>
//       <h2>간단 요약</h2>
//       <p>
//         <img src="https://user-images.githubusercontent.com/53412998/135582980-53157888-c54d-4313-bff5-e06ccd01274f.gif" alt="간단 요약" style="max-width: 100%;">
//       </p>
//       <details>
//         <summary>소셜 로그인</summary>
//         <img src="https://user-images.githubusercontent.com/53412998/135583011-4fd322c9-623a-4329-ae95-7ec4fa23fe37.gif" style="max-width: 100%;">
//       </details>
//       <details>
//         <summary>글 작성</summary>
//         <img src="https://user-images.githubusercontent.com/53412998/135581550-d38306bc-7ff3-4771-85e1-23cb20c79550.gif" style="max-width: 100%;">
//       </details>
//       <details>
//         <summary>좋아요 누르기, 댓글 작성</summary>
//         <img src="https://user-images.githubusercontent.com/53412998/135583033-adf9ee08-0846-4b0e-bf21-c3d22b0615b7.gif" style="max-width: 100%;">
//       </details>
//       <details>
//         <summary>게시글 필터링, 정렬</summary>
//         <img src="https://user-images.githubusercontent.com/53412998/135583001-e819f4d0-9c35-4f37-a53e-1996522450d4.gif" style="max-width: 100%;">
//       </details>
//       <details>
//         <summary>마이페이지</summary>
//         <img src="https://user-images.githubusercontent.com/53412998/135583010-b5a8757d-2eb5-4a19-b6e2-c0b507a69e13.gif" style="max-width: 100%;">
//       </details>
//       <details>
//         <summary>접종 현황 통계</summary>
//         <img src="https://user-images.githubusercontent.com/53412998/135583019-990a80aa-e9e3-4046-85e4-ea930fc1febb.gif" style="max-width: 100%;">
//       </details><br>
//       <h1>우리팀의 강점</h1>
//       <p><a href="https://www.notion.so/da2fc7e8d99f4f4484bad58ed2e1b233" target="_blank">애자일하게 서비스를 개발했어요.</a></p>
//       <p><a href="https://www.notion.so/ccf25ce39e2d42389c43ccf9b768b53b" target="_blank">우리만의 팀 문화를 만들었어요.</a></p><br>
//       <h1>기술 스택</h1>
//       <img width="100%" src="https://user-images.githubusercontent.com/40762111/135794163-9c4978df-7ac3-4a17-a97e-8dd3afe64533.png" style="max-width: 100%;"><br>
//       <h1>서비스아키텍처</h1>
//       <h2>사용자 요청 시나리오 (요청부터 응답까지)</h2>
//       <p>
//         <img src="https://user-images.githubusercontent.com/43339385/135794655-511b9a4b-ce99-41ca-a003-d549b1e3f20a.png" alt="FE+BE" style="max-width: 100%;">
//       </p>
//       <h2>프로트엔드 아키텍쳐</h2>
//       <p>
//         <img src="https://user-images.githubusercontent.com/43339385/135794087-571dea0c-c90f-42c3-b8cf-b08130ea0d39.png" alt="FE_CI:CD" style="max-width: 100%;">
//       </p>
//       <h2>백엔드 인프라 아키텍처</h2>
//       <p>
//         <img src="https://user-images.githubusercontent.com/48986787/135793839-08fc58d6-c381-4af3-be58-16342d8ff5bb.png" alt="image" style="max-width: 100%;">
//       </p>
//       <h2>백엔드 CI / CD</h2>
//       <p>
//         <img src="https://user-images.githubusercontent.com/48986787/135793875-193bc33a-31fd-414a-ac1c-4591e44086cf.png" alt="image" style="max-width: 100%;">
//       </p><br>
//       <h1>팀원 소개</h1>
//       <table>
//         <tbody>
//           <tr>
//             <td colspan="2" style="text-align: center;"><strong>Front-end</strong></td>
//             <td colspan="4" style="text-align: center;"><strong>Back-end</strong></td>
//           </tr>
//           <tr>
//             <td style="text-align: center;"><a href="https://github.com/HyuuunjuKim" target="_blank"><img src="https://user-images.githubusercontent.com/67272922/135793917-03a2d388-eab0-4b5d-87cf-c4066a441c1d.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>엘라(김현주)</b></sub></a><br></td>
//             <td style="text-align: center;"><a href="https://github.com/jum0" target="_blank"><img src="https://user-images.githubusercontent.com/67272922/135793929-2f635802-8cc6-4645-937f-d59c8dc85356.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>주모(한준모)</b></sub></a><br></td>
//             <td style="text-align: center;"><a href="https://github.com/livenow14" target="_blank"><img src="https://user-images.githubusercontent.com/67272922/135793762-8104fdda-d777-4f3a-b514-14b60d5dd6be.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>검프(김태정)</b></sub></a><br></td>
//             <td style="text-align: center;"><a href="https://github.com/younghoonkwon" target="_blank"><img src="https://user-images.githubusercontent.com/67272922/135793840-d9e4f3d7-d68e-46ef-b54c-374fe46fb85d.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>라이언(권영훈)</b></sub></a><br></td>
//             <td style="text-align: center;"><a href="https://github.com/thisisyoungbin" target="_blank"><img src="https://user-images.githubusercontent.com/67272922/135793855-a428ba5f-83e4-459b-9ebf-e20da7f8b98b.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>욘(김영빈)</b></sub></a><br></td>
//             <td style="text-align: center;"><a href="https://github.com/taehee-kim-dev" target="_blank"><img src="https://user-images.githubusercontent.com/67272922/135793886-e137d43e-00ad-4d4d-af28-a45abe99f4ee.png" width="100px;" alt="" style="max-width: 100%;"><br><sub><b>인비(김태희)</b></sub></a><br></td>
//           </tr>
//           <tr>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/issues?q=assignee%3AHyuuunjuKim" title="Code" target="_blank">issues</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/issues?q=assignee%3Ajum0" title="Code" target="_blank">issues</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/issues?q=assignee%3Alivenow14" title="Code" target="_blank">issues</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/issues?q=assignee%3Ayounghoonkwon" title="Code" target="_blank">issues</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/issues?q=assignee%3Athisisyoungbin" title="Code" target="_blank">issues</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/issues?q=assignee%3Ataehee-kim-dev" title="Code" target="_blank">issues</a></td>
//           </tr>
//           <tr>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/commits?author=HyuuunjuKim" title="Code" target="_blank">commits</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/commits?author=jum0" title="Code" target="_blank">commits</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/commits?author=livenow14" title="Code" target="_blank">commits</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/commits?author=younghoonkwon" title="Code" target="_blank">commits</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/commits?author=thisisyoungbin" title="Code" target="_blank">commits</a></td>
//             <td rowspan="1" style="text-align: center;"><a href="https://github.com/woowacourse-teams/2021-cvi/commits?author=taehee-kim-dev" title="Code" target="_blank">commits</a></td>
//           </tr>
//         </tbody></table>
//       </div>`,
//     userId: 'test1',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 2,
//     generateDate: '2022-05-09 13:34',
//     likes: 1024,
//     views: 10092,
//     thumbnail: 'thumbnail28',
//     techIds: [2, 3, 4, 5, 8, 9],
//   },
//   {
//     projectId: 29,
//     projectTitle: '🌻Sunflower-farmer 블록체인 기반 해바라기 게임',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>Sunflower Farmer</h1>
//       <p>A blockchain based game where players can play to earn Sunflower Farmer Tokens.</p>
//       <p>You can play the game here: <a href="https://www.sunflower-farmers.com/" target="_blank">https://www.sunflower-farmers.com/</a></p>
//       <h1>How does it work?</h1>
//       <p>For more details, please see the guide - <a href="https://docs.sunflower-farmers.com/" target="_blank">https://docs.sunflower-farmers.com/</a></p>
//       <h1>Code Structure</h1>
//       <p>Smart Contracts can be found in <code>src/contracts</code>.</p>
//       <p>Decentralized App (Dapp) can be found in <code>src/dapp</code>.</p>
//       <h1>How to run?</h1>
//       <p>The dapp is currently pointed at the production blockchain. You can switch to Polygon testnet and it should pick up the chainID automatically.</p>
//       <p>
//         <code>yarn</code>
//         <code>yarn start</code>
//       </p>
//       <img width="527" alt="Screen Shot 2021-08-25 at 11 52 24 am" src="https://user-images.githubusercontent.com/11745561/130713259-f87fd1b4-a6f1-4b25-b8b9-4eff6beee9e9.png" style="max-width: 100%;">
//       <h1>Licensing</h1>
//       <p>All code is under MIT licensing. We encourage people to improve the Sunflower Metaverse.</p>
//       <p>Please check with the individual designers that you have permissions before using any of the in-game assets sprites. Doing so without permissions is illegal.</p>
//       <p>We are open source and bootstrapped with zero funds. Hence we have used a base asset pack - <a href="https://danieldiggle.itch.io/sunnyside" target="_blank">https://danieldiggle.itch.io/sunnyside</a></p>
//       <p>You can find the designer and his amazing work here - <a href="https://twitter.com/DanielDiggle" target="_blank">https://twitter.com/DanielDiggle</a></p>
//       </div>`,
//     userId: 'test1',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 3,
//     generateDate: '2022-08-16 13:34',
//     likes: 9238,
//     views: 22123,
//     thumbnail: 'thumbnail29',
//     techIds: [2, 5, 7, 8],
//   },
//   {
//     projectId: 30,
//     projectTitle: '혼술 패키지 프로젝트',
//     description: `<div style="font-size:16px;" class="readme-markdown">
//       <h1>🚀spacebar_web</h1>
//       <h1><strong>일상으로부터의 한 칸, 당신의 한잔을 위한 혼술 패키지 및 홈페이지</strong></h1>
//       <blockquote>
//         <p>코로나 시대 홈코노미 아이템 제작과 상품 소개 웹페이지 제작</p>
//         <p>2020년 가톨릭대학교 온라인 해커톤 장려상(3등)</p>
//         <p>2020.07.20~2020.07.31</p>
//       </blockquote><br>
//       <p>
//         <img src="https://user-images.githubusercontent.com/55903679/147661848-c7f0dd4e-22ce-449a-a355-a968afbf8956.png" alt="1" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://user-images.githubusercontent.com/55903679/147661923-df893098-269d-493c-a7c1-bedc31cddd99.png" alt="2" style="max-width: 100%;">
//       </p><br>
//       <h2>👀Process</h2>
//       <p>
//         <img src="https://user-images.githubusercontent.com/55903679/147662143-0a18c91b-3b4b-4802-aa28-864b0affd3ed.png" alt="3" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://user-images.githubusercontent.com/55903679/147662376-38dc4535-3d53-4c9c-8a4a-20db15bfd194.png" alt="image" style="max-width: 100%;">
//       </p>
//       <p>
//         <img src="https://user-images.githubusercontent.com/55903679/147662731-aeb3f280-18f9-4a23-a553-1e89257cf3e7.png" alt="3" style="max-width: 100%;">
//         <img src="https://user-images.githubusercontent.com/55903679/147662742-98d1a3bc-9dd7-4d0d-9054-c3dcfb331ba3.png" alt="4" style="max-width: 100%;">
//       </p><br>
//       <h2>🤹&zwj;♀️Role</h2>
//       <p>수정</p>
//       <pre><code>- 자동&nbsp;음료&nbsp;디스펜서&nbsp;설계,&nbsp;제작&nbsp;및&nbsp;아두이노 코딩
//       - 웹&nbsp;페이지&nbsp;내&nbsp;제품&nbsp;설명,&nbsp;제작&nbsp;과정&nbsp;부분&nbsp;개발
//       - 웹 페이지 내 상단 메뉴바 개발
//       - 웹 애니메이션 개발
//       </code></pre>
//       <p>승훈</p>
//       <pre><code>- 자동 음료 디스펜서와 관련 부품 설계
//       - 자동 음료 디스펜서 3D 모델링
//       - 아두이노 코딩 및 조립 보조
//       - 웹 페이지 내 top button 개발
//       </code></pre>
//       <p>주영</p>
//       <pre><code>- 웹 페이지 내 프로젝트 스토리, 사업 배경 부분 개발
//       - 웹 애니메이션 개발
//       - 컵 리드 아두이노 코딩 및 제작
//       </code></pre>
//       <p>서현</p>
//       <pre><code>- 브랜드 슬로건, 스토리 기획
//       - 비주얼 아이덴티티 작업
//         - 브랜드 네이밍, 로고디자인, 웹사이트 메인, 제품 상세페이지 디자인
//       </code></pre><br>
//       <h2>🔧TOOLS</h2>
//       <ul>
//         <li>Sublime Text</li>
//         <li>Arduino</li>
//         <li>AutoDesk TinkerCad</li>
//         <li>AutoDesk Fusion 360</li>
//       </ul><br>
//       <h2>✨Core Implementation Code</h2>
//       <blockquote>
//         <p>In Spacebar</p>
//       </blockquote>
//       <h4>1. toggle button 클릭 시 top으로 이동, 스크롤 시 메뉴 디자인 변경</h4>
//       <p><strong>🍯solution</strong></p>
//       <pre><code class="language-kotlin">//On Scroll Functionality
//         $(window).scroll(() =&gt; {
//           var windowTop = $(window).scrollTop();
//           windowTop &gt; 100
//             ? $("nav").addClass("navShadow")
//             : $("nav").removeClass("navShadow");
//           windowTop &gt; 100 ? $("ul").css("top", "100px") : $("ul").css("top", "160px");
//         });

//         //Click Logo To Scroll To Top
//         $("#logo").on("click", () =&gt; {
//           $("html,body").animate(
//             {
//               scrollTop: 0
//             },
//             400
//           );
//         });

//         //Smooth Scrolling Using Navigation Menu
//         $('a[href*="#"]').on("click", function (e) {
//           $("html,body").animate(
//             {
//               scrollTop: $($(this).attr("href")).offset().top - 70
//             },
//             500
//           );
//           e.preventDefault();
//         });

//         //Toggle Menu
//         $("#menu-toggle").on("click", () =&gt; {
//           $("#menu-toggle").toggleClass("closeMenu");
//           $("ul").toggleClass("showMenu");

//           $("li").on("click", () =&gt; {
//             $("ul").removeClass("showMenu");
//             $("#menu-toggle").removeClass("closeMenu");
//           });
//         });
//       });
//       </code></pre>
//       <h2>👊C2H6O</h2>
//       <blockquote>
//         <p>💻 SpaceBar's Developer &amp; Designer</p>
//       </blockquote>
//       <table>
//         <thead>
//           <tr>
//             <th style="text-align: center;"><strong>🙋 <a href="https://github.com/doodung" target="_blank">이수정</a></strong></th>
//             <th style="text-align: center;"><strong>🙋&zwj; <a href="https://github.com/OhSeungHoony" target="_blank">오승훈</a></strong></th>
//             <th style="text-align: center;"><strong>🙋&zwj; <a href="https://github.com/JooYoungEom" target="_blank">엄주영</a></strong></th>
//             <th style="text-align: center;">🙋조서현</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="text-align: center;">Lead Developer</td>
//             <td style="text-align: center;">Developer</td>
//             <td style="text-align: center;">Developer</td>
//             <td style="text-align: center;">PM, Designer</td>
//           </tr>
//         </tbody></table>
//       </div>`,
//     userId: 'test3',
//     projectStatus: 'Ps_co',
//     status: 'S_co',
//     recruitmentCount: 3,
//     generateDate: '2021-10-06 13:34',
//     likes: 10933,
//     views: 857784,
//     thumbnail: 'thumbnail30',
//     techIds: [1, 5, 6, 7],
//   },
// ]

const groups=[
["font","폰트·아이콘","A. 폰트·아이콘 찾기","디자인에 필요한 폰트와 아이콘 자료",[["눈누","https://noonnu.cc"],["Google Fonts","https://fonts.google.com"],["Font Awesome","https://fontawesome.com"],["파비콘","https://favicon.io"]]],
["color","컬러","B. 컬러 찾기","컬러 조합과 그라디언트 참고",[["Color Hunt","https://colorhunt.co"],["Adobe Color","https://color.adobe.com"],["Gradient Hunt","https://gradienthunt.com"],["CSS Gradient","https://cssgradient.io"]]],
["image","이미지·영상","C. 이미지·영상 찾기","무료 이미지와 영상 소스",[["Pixabay","https://pixabay.com"],["Pexels","https://pexels.com"],["Unsplash","https://unsplash.com"],["Freepik","https://freepik.com"]]],
["web","디자인 웹툴","D. 디자인 웹툴","웹에서 바로 사용하는 디자인 도구",[["미리캔버스","https://www.miricanvas.com"],["Canva","https://www.canva.com"],["Figma","https://www.figma.com"]]],
["ref","레퍼런스","E. 레퍼런스 찾기","디자인 사례와 아이디어 탐색",[["Pinterest","https://pinterest.com"],["Behance","https://behance.net"],["노트폴리오","https://notefolio.net"],["라우드소싱","https://loud.kr"]]],
["ai","생성형 AI","F. 생성형 AI","텍스트·이미지·음악 생성 도구",[["ChatGPT","https://chatgpt.com"],["Gemini","https://gemini.google.com"],["Recraft – 이미지 생성 AI","https://recraft.ai"],["Suno – 음악 생성 AI","https://suno.com"]]],
["code","코딩","G. 코딩 공부","웹 개발 학습과 참고 자료",[["W3Schools","https://w3schools.com"],["엔트리","https://playentry.org"],["CDN 목록","https://cdnjs.com"]]],
["cert","자격증","H. 자격증 필기 공부","디자인·콘텐츠 관련 자격증 학습",[["웹디자인개발기능사","https://q-net.or.kr"],["컴퓨터그래픽스운용기능사","https://q-net.or.kr"],["멀티미디어콘텐츠제작전문가","https://q-net.or.kr"]]]
];
tabs.innerHTML=groups.map(g=>`<a href="#${g[0]}">${g[1]}</a>`).join('');
resourceList.innerHTML=groups.map(g=>`<section class="resource-card" id="${g[0]}"><div class="resource-title"><span>◉</span><div><h2>${g[2]}</h2><p>${g[3]}</p></div></div><div class="links">${g[4].map(x=>`<a href="${x[1]}" target="_blank">${x[0]} <span>↗</span></a>`).join('')}</div></section>`).join('')+`<section class="request"><div><b>원하는 자료를 찾지 못했나요?</b><p>추가했으면 하는 사이트가 있다면 오픈카톡으로 알려주세요.</p></div><a class="btn ghost" href="https://open.kakao.com" target="_blank">자료 추천하기</a></section>`;
const show=p=>{homePage.hidden=p!=='home';resourcesPage.hidden=p!=='resources';scrollTo(0,0);document.querySelector('.mobile-nav').classList.remove('show')};
document.querySelectorAll('[data-page]').forEach(el=>el.onclick=()=>show(el.dataset.page));
document.querySelectorAll('[data-scroll]').forEach(el=>el.onclick=()=>{show('home');setTimeout(()=>document.getElementById(el.dataset.scroll).scrollIntoView(),0)});
document.querySelector('.hamb').onclick=e=>{const menu=document.querySelector('.mobile-nav');const opened=menu.classList.toggle('show');e.currentTarget.textContent=opened?'✕':'☰';e.currentTarget.setAttribute('aria-expanded',String(opened));};
const fix=document.createElement('link');fix.rel='stylesheet';fix.href='override.css';document.head.appendChild(fix);

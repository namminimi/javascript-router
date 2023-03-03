import App from "./src/app.js"
//초기html문서를 완전히 불러오고 분석했을때 발생
//html문서가 다 준비되면 실행해!!!!
window.addEventListener("DOMContentLoaded",()=>{ 
    new App({target: document.querySelector("#app")})
})
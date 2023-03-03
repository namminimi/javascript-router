import Router from "./router.js";
import { navigate } from "./utils/navigate.js";


export default function App({target}){
    this.$container = target;
    const init = () => {
        document.querySelector(".navbar").addEventListener("click", (e)=>{
            //이벤트제거
            e.preventDefault();
            const targetUrl = e.target.href.replace("http://127.0.0.1:5500","")
            console.log(targetUrl)
            navigate(targetUrl)
        })
        new Router(this.$container)
    }
    init();
}
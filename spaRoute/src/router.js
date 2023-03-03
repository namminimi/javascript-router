import { routes } from "./contants/routerInfo.js";

export default function Router($container){
    this.$container = $container;
    //routes 배열을 돌며 path속성이 location.pathname과 일치하는 객체를 리턴
    const findRoute = () => {
        //{path: /^\/$/, element: () => console.log('메인페이지')},
        const matchRoute = routes.find(route => route.path.test(location.pathname))
        const TargetPage = matchRoute.element
        new TargetPage(this.$container)
    }
    const init = () => {
        window.addEventListener('historyChange', (e)=>{
            const {to} = e.detail;
            history.pushState(null, "", to)
            findRoute()
        })
        window.addEventListener("popstate", ()=>{
            findRoute() //얘가없으면 뒤로가기 눌렀을때 현재화면안됨
        })
    }
    init()
    findRoute()
}
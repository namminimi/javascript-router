//정규표현식
// const re = /표현식작성/
// const re2 = new RegExp(표현식작성)
// path: /
// ^ -->문자의 시작 $ ----> 문자의 끝 ^/$
// /shop

import Main from "../pages/Main.js";
import Post from "../pages/Post.js";
import Shop from "../pages/Shop.js";

// /^\/post\/[\w]+$/  ---> /post//dd   /post/d
export const routes = [
    {path: /^\/$/, element: Main},
    {path: /^\/post\/[\w]+$/, element: Post},
    {path: /^\/shop$/, element: Shop},
]
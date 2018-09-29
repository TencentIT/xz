import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import NewsContainer from "./components/news/NewsContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import ShopContainer from "./components/tabbar/ShopContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import NewsDetailContainer from "./components/news/NewsDetailComponent.vue"
import GoodList from "./components/goods/GoodList.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/home"},//  重定向到 /home 
    {path:'/home',component:HomeContainer},
    {path:"/home/newslist",component:NewsContainer},
    {path:"/member",component:MemberContainer},
    {path:"/shop",component:ShopContainer},
    {path:"/search",component:SearchContainer},
    {path:"/newsDetail/:id",component:NewsDetailContainer},
    {path:"/goodslist",component:GoodList}
  ]
  ,
  linkActiveClass:"mui-active"    //覆盖默认的路由高亮类
})

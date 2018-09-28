import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import NewsContainer from "./components/news/NewsContainer.vue"
import MemberContainer from "./components/VIP/MemberContainer.vue"
import ShopContainer from "./components/shopCar/ShopContainer.vue"
import SearchContainer from "./components/search/SearchContainer.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/home"},//  重定向到 /home 
    {path:'/home',component:HomeContainer},
    {path:"/home/newslist",component:NewsContainer},
    {path:"/home/member",component:MemberContainer},
    {path:"/home/shopCar",component:ShopContainer},
    {path:"/home/search",component:SearchContainer}
  ]
})

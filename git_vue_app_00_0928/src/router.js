import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import NewsContainer from "./components/news/NewsContainer.vue"
import VipContainer from "./components/VIP/VipContainer.vue"
import shopCar from "./components/shopCar/shopCar.vue"
import search from "./components/search/search.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/home"},//  重定向到 /home 
    {path:'/home',component:HomeContainer},
    {path:"/home/newslist",component:NewsContainer},
    // {path:"/home/vip",component:VipContainer},
    // {path:"/home/shopCar",component:shopCar},
    // {path:"/home/search",component:search}
  ]
})

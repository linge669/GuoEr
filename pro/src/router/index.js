import Vue from 'vue'
import Router from 'vue-router'
import Register from "../views/register.vue"
import Main from "../views/main.vue"
import Home from "../views/home.vue"
import Chujie from "../views/chujie.vue"
import Chujiedetail from "../views/chujiedetail.vue"
import Mine from "../views/mine.vue"
import More from "../views/more.vue"
import Info from "../views/info.vue"
import Newuser from "../views/newuser.vue"
import Baozhang from "../views/baozhang.vue"
import Kuaixun from "../views/kuaixun.vue"
import Touming from "../views/touming.vue"
import Gs from "../views/gs.vue"
import Gl from "../views/gl.vue"
import Zz from "../views/zz.vue"
import Yw from "../views/yw.vue"
import Gg from "../views/gg.vue"
import Dt from "../views/dt.vue"
import Bd from "../views/bd.vue"
import Ggdetail from "../views/ggdetail.vue"
import Dtdetail from "../views/dtdetail.vue"
import Bddetail from "../views/bddetail.vue"
import Sp from "../views/showpro.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    {
    	path:"/ggdetail",
    	component:Ggdetail
    },
    {
    	path:"/showpro",
    	component:Sp
    },
    {
    	path:"/dtdetail",
    	component:Dtdetail
    },
    {
    	path:"/chujiedetail",
    	component:Chujiedetail
    },
    {
    	path:"/bddetail",
    	component:Bddetail
    },
    {
    	path:"/register",
    	component:Register
    },
    {
		    	path:"/info",
		    	component:Info,
		    	redirect:'/gs',
		    	children:[
		    		{
				    	path:"/gs",
				    	component:Gs
						},
		    		{
				    	path:"/gl",
				    	component:Gl
						},
						{
				    	path:"/zz",
				    	component:Zz
						},
						{
				    	path:"/yw",
				    	component:Yw
						}
		    	]
		},
		{
		    	path:"/newuser",
		    	component:Newuser
		},
		{
		    	path:"/Baozhang",
		    	component:Baozhang
		},
		{
		    	path:"/kuaixun",
		    	component:Kuaixun,
		    	redirect:'/gg',
		    	children:[
		    		{
		    			path:'/gg',
		    			component:Gg
    				},
    				{
		    			path:'/dt',
		    			component:Dt
    				},
    				{
		    			path:'/bd',
		    			component:Bd
    				},
		    	]
		 },
		 {
		    	path:"/touming",
		    	component:Touming
		 },
    {
    	path:"/main",
    	redirect:'/home',
    	component:Main,
    	children:[
    		{
    			path:'/home',
    			component:Home
    		},
    		{
    			path:'/chujie',
    			component:Chujie
    		},
    		{
    			path:'/mine',
    			component:Mine
    		},
    		{
    			path:'/more',
    			component:More
    		}
    	]
    }
  ]
})

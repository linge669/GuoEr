import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
var store=new Vuex.Store({
	
	state:{
		name:""
	},
	mutations:{
		
		user(a,b){
			a.name=b;
		}
	}
	})
export default store;

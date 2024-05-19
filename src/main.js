import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import ElementUI from 'element-ui';
// import {
//   Row,
//   Button,
//   Container,
//   Aside,
//   Header,
//   RadioGroup,
//   RadioButton,
//   Submenu,
//   MenuItem,
//   Menu,
//   MenuItemGroup,
//   Main,
// } from "element-ui";
import router from "@/router";
import store from "./store";
import './api/mock';
import utils from '@/utils/instruction'
import Cookie from 'js-cookie';
/*
*这是全局引入方法
* 不建议使用，打包后的文件体积过大
 */




Vue.config.productionTip = false;
// 这是按需引入
// Vue.use(Row);
// Vue.use(Button);
// Vue.use(Container);
// Vue.use(Aside);
// Vue.use(Header);
// Vue.use(RadioGroup);
// Vue.use(RadioButton);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(Menu);
// Vue.use(MenuItemGroup);
// Vue.use(Main);
Vue.use(ElementUI);
Vue.use(utils);
// 添加全局前置导航守卫

router.beforeEach((to, from, next) => {
  console.log(to,'看看这个字段是啥')
  if(to.matched.length === 0){
    from.name ? next({
      name: from.name
    }) : next('/errorinfo');
  }
  const token = Cookie.get('token');
  if(!token && to.path !== '/login'){
    next({path:'/login'});
  } else if (token && to.path === '/login') {
    next({path:'/home'});
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu',router)
  }
}).$mount('#app')

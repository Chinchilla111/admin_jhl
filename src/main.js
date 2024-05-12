import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import {
  Row,
  Button,
  Container,
  Aside,
  Header,
  RadioGroup,
  RadioButton,
  Submenu,
  MenuItem,
  Menu,
  MenuItemGroup,
  Main
} from "element-ui";
import router from "@/router";
/*
*这是全局引入方法
* 不建议使用，打包后的文件体积过大
 */
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);


Vue.config.productionTip = false;
// 这是按需引入
Vue.use(Row);
Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Menu);
Vue.use(MenuItemGroup);
Vue.use(Main);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

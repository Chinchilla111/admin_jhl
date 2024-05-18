import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import User from '../views/user.vue';
import Main from '../views/main.vue';
import Order from '../views/order.vue';
// import Login from '../views/userPages/login.vue';
Vue.use(VueRouter);

//1，创建路由组件
//2，将路由与组件进行映射
//3，创建router实例

const routes = [
    // {
    //     path: '/login',
    //     component: Login,
    // },
    //主路由
    {
        path: '/',
        component: Main,
        redirect:'/home',
        children:[
            {path: 'home', name:'home', component: Home},
            {path: 'user', name:'user', component: User},
            {path: 'order', name:'order', component: Order},
        ]
    },

]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router;


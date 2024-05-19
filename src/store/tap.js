import Cookies from "js-cookie";
import Login from "@/views/userPages/login.vue";
import router from "@/router";
export default {
    state:{
        isCollapse:false,//用于控制菜单的折叠收起
        tabsList:[
            {
                id:'1234567890',
                path:'/',
                name:'home',
                label:'首页',
                icon:'el-icon-s-custom',
                url:'home/home',
              },
        ],//面包屑数据
        menu:[],
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse;
        },
        //更新面包屑数据
        selectMenu(state,val){
            //判断添加的数据是否为首页
            if(val.id !== '1234567890'){
               const index = state.tabsList.findIndex(item => item.id === val.id);
                // 如果不存在
               if(index === -1){
                    state.tabsList.push(val);
               }
            }
        },
        // 删除指定的tag数据
        closeTag(state,val){
            const index = state.tabsList.findIndex(item => item.id === val.id);
            state.tabsList.splice(index, 1);
        },
        steMenu(state,val){
            state.menu = val;
            Cookies.set('menu',JSON.stringify(state.menu));
        },
        addMenu(state,router){
            if(Cookies.get('menu')){
                const menu = JSON.parse(Cookies.get('menu'));
                state.menu = menu;
                const menuArray = [];
                menu.forEach(item => {
                    if(item.children){
                        item.children = item.children.map(item => {
                            item.component = () => import(`../views/${item.url}`);
                            return item;
                        })
                        menuArray.push(...item.children);
                    }else {
                        item.component = () => import(`../views/${item.url}`);
                        menuArray.push(item)
                    }
                })
                console.log(menuArray,'打印看看这个值');
                menuArray.forEach(item => {
                    router.addRoute('Main',item)
                })
            }else{
                return false;
            }
        }
    }
}
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
        }
    }
}
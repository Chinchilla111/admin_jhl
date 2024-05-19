<template>
    <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b":default-active="defaultActiveCode" class="el-menu-vertical-demo" :collapse="isCollapse" @select="handleSelect">
      <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
      <div v-for="item in menuData" :key="item.id">
        <el-menu-item :index="item.id" v-if="!item.children">
          <i :class="item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu :index="item.id" v-else>
          <template slot="title">
            <i :class="item.icon"></i>
            <span v-show="!isCollapse">{{item.label}}</span>
          </template>
          <div v-for="item1 in item.children" :key="item1.id">
            <el-menu-item :index="item1.id" v-if="!item1.children">{{ item1.label }}</el-menu-item>
            <el-submenu :index="item1.id" v-else>
              <template slot="title">{{item1.label}}</template>
              <el-menu-item v-for="item2 in item1.children" :key="item2.id" :index="item2.id">{{item2.label}}</el-menu-item>
            </el-submenu>
          </div>
        </el-submenu>
      </div>
    </el-menu>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      defaultActiveCode:'1234567890',
      // menuData:[
      //   {
      //     id:'1234567890',
      //     path:'/',
      //     name:'home',
      //     label:'首页',
      //     icon:'el-icon-s-custom',
      //     url:'home/home',
      //   },
      //   {
      //     id:'2234567890',
      //     path:'/user',
      //     name:'user',
      //     label:'我的',
      //     icon:'el-icon-menu',
      //     url:'lalalal1/lalalal1',
      //     children:[
      //       {
      //         id:'1234567890001',
      //         path:'/user',
      //         name:'user',
      //         label:'用户管理',
      //         icon:'el-icon-menu',
      //         url:'dadada/dadada',
      //         // children:[
      //         //   {
      //         //     id:'1234567890001001',
      //         //     path:'/hahahah',
      //         //     name:'hahahah',
      //         //     label:'商品管理',
      //         //     icon:'el-icon-menu',
      //         //     url:'hahahah/hahahah',
      //         //   }
      //         // ]
      //       }
      //     ]
      //   },
      //   {
      //     id:'3234567890',
      //     path:'/order',
      //     name:'order',
      //     label:'商品',
      //     icon:'el-icon-s-custom',
      //     url:'order/order',
      //   },
      // ],
      pageRouter:{},
    };
  },
  computed:{
    //没有子组件的
    noChildren(){
      return this.menuData.filter(item => !item.children);
    },
    // 有子组件的
    hasChildren(){
      return this.menuData.filter(item => item.children);
    },
    isCollapse(){
      // console.log(,'看看这个值');
      return this.$store.state.tap.isCollapse;
    },
    menuData(){
        return JSON.parse(Cookies.get('menu')) || this.$store.state.tap.menu;

    }
  },
  methods: {
    handleSelect(e){
      this.pageRouter = {};
      this.dataTree(this.menuData,e);
      if(this.$route.path === this.pageRouter.path && this.$route.path !== '/' && this.$route.path !== '/home' ){
        this.$message.error('当前页面已是你您点击的页面请互重复点击！');
      }else if((this.$route.path === '/' || this.$route.path === '/home') && (this.pageRouter.path === '/' || this.pageRouter.path === '/home')){
        this.$message.error('当前页面已是你您点击的页面请互重复点击！');
      }else{
        this.$router.push(this.pageRouter.path);
        this.$store.commit('selectMenu',this.pageRouter)
      }
        
    },
    dataTree(arr,key){
      arr.forEach(item => {
        if(item.id == key){
          this.pageRouter = item;
        }else if(item.children){
          this.dataTree(item.children,key);
        }
      });
    }
   }
}
</script>

<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  max-height: 100vh;
}
.el-menu{
  border: none;
  h3{
    color: #fff;
    text-align: center;
    line-height: 48px;
    white-space:nowrap;
    overflow:hidden;
  }
}
</style>
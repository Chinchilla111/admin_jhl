<template>
    <el-menu background-color="#409EFF" text-color="#000" active-text-color="#fff" :default-active="defaultActiveCode" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <div v-for="item in menuData" :key="item.id">
        <el-menu-item :index="item.id" v-if="!item.children">
          <i :class="item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu :index="item.id" v-else>
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.label}}</span>
          </template>
          <div v-for="item1 in item.children" :key="item1.id">
            <el-menu-item :index="item1.id" v-if="!item1.children">选项1</el-menu-item>
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
export default {
  data() {
    return {
      defaultActiveCode:'1234567890001001',
      isCollapse: false,
      menuData:[
        {
          id:'1234567890',
          path:'/',
          name:'home',
          label:'首页',
          icon:'el-icon-s-custom',
          url:'home/home',
          children:[
            {
              id:'1234567890001',
              path:'/dadada',
              name:'dadad',
              label:'商品管理',
              icon:'el-icon-menu',
              url:'dadada/dadada',
              children:[
                {
                  id:'1234567890001001',
                  path:'/hahahah',
                  name:'hahahah',
                  label:'商品管理',
                  icon:'el-icon-menu',
                  url:'hahahah/hahahah',
                }
              ]
            }
          ]
        },
        {
          id:'2234567890',
          path:'/lalalal1',
          name:'lalalal1',
          label:'lalalal1',
          icon:'el-icon-menu',
          url:'lalalal1/lalalal1',
        }
      ]
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
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
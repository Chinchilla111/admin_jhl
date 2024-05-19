<template>
    <div class="loginClass">
      <div class="loginForm">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <h3 class="login_title" >系统登录</h3>
          <el-form-item label="用户名称" prop="userName">
            <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password">
            <el-input show-password v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label-width="152px">
            <el-button type="primary" @click="submitLogin">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script>
  import Mock from "mockjs";
  import Cookie from 'js-cookie';
  export default {
    data(){
      return {
        ruleForm:{
          userName:'',
          password:'',
        },
        rules:{
          userName:[
            { required: true, message: '请输入用户名称', trigger: 'blur' },
          ],
          password:[
            { required: true, message: '请输入用户密码', trigger: 'blur' },
          ]
        },
        menuData:[
          {
            id:'1234567890',
            path:'/home',
            name:'home',
            label:'首页',
            icon:'el-icon-s-custom',
            url:'home.vue',
          },
          {
            id:'2234567890',
            path:'/user',
            name:'user',
            label:'我的',
            icon:'el-icon-menu',
            // url:'user.vue',
            children:[
              {
                id:'1234567890001',
                path:'/user',
                name:'user',
                label:'用户管理',
                icon:'el-icon-menu',
                url:'user.vue',
                // children:[
                //   {
                //     id:'1234567890001001',
                //     path:'/hahahah',
                //     name:'hahahah',
                //     label:'商品管理',
                //     icon:'el-icon-menu',
                //     url:'hahahah/hahahah',
                //   }
                // ]
              }
            ]
          },
          // {
          //   id:'3234567890',
          //   path:'/order',
          //   name:'order',
          //   label:'商品',
          //   icon:'el-icon-s-custom',
          //   url:'order.vue',
          // },
        ],
      }
    },
    methods:{
      submitLogin(){
        this.$refs.ruleForm.validate((valid) => {
          if(valid){
            const token = Mock.Random.guid();
            Cookie.set("token",token);
            this.$store.commit('steMenu',this.menuData);
            this.$store.commit('addMenu',this.$router);
            this.$router.push('/home');
          }
        })
      }
    }
  }
  </script>
<style lang="less" scoped>
.loginClass{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm{
    width: 400px;
    border-radius: 15px;
    padding: 20px 20px 0 0;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .login_title{
        text-align: center;
      margin-bottom: 40px;
      color: #505458;
    }
  }
}
</style>
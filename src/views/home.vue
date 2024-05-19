<template>
  <div>
    我是首页
    <el-button @click="dadadad">111111</el-button>
  </div>
</template>

<script>
import { getData } from '@/api/index'
export default {
  data(){
    return {

    }
  },
  mounted(){
    getData().then((res) => {
      
     
      if(res.code === '0000'){
        console.log(res.data,'-=-=-=-=');
      }
    })
  },
  methods:{
    dadadad(){
      this.$store.commit('addMenu',this.$route);
    }
  }
}
</script>
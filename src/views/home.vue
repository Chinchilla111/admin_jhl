<template>
  <div>
    我是首页
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

  }
}
</script>
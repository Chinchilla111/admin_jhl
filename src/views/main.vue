<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <CommonTag/>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import CommonAside  from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTag from "@/components/CommonTag.vue";
export default {
  data(){
    return {

    }
  },
  components:{
    CommonAside,
    CommonHeader,
    CommonTag
  },
  methods:{

  }
}
</script>
<style lang="less" scope>
.el-container{
  height: 100vh;
}
.el-aside{
  height: 100vh;
  background-color: #545c64;
}
.el-header{
  padding:0;
}
</style>
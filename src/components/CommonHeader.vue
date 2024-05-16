<template>
    <div class="header-container">
        <div class="l-cobtent">
            <el-button icon="el-icon-menu" size="mini" @click="headerMenu"></el-button>
            <span class="text">首页</span>
        </div>
        <div class="r-cobtent">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/WechatIMG272.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>切换账号</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed:{},
  methods: {
    headerMenu(){
        this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="less" scope>
.header-container{
    height: 60px;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .text{
        color: #fff;
        margin-left: 10px;
        font-size: 14px;

    }
    .r-cobtent{
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>
<template>
    <div class="header-container">
        <div class="l-cobtent">
            <el-button icon="el-icon-menu" size="mini" @click="headerMenu"></el-button>
            <el-breadcrumb separator="/">
              <!-- :to="{ path: item.path }" -->
              <el-breadcrumb-item v-for="item in tags" :key="item.id" replace>{{ item.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-cobtent">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/WechatIMG272.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="personalCenter">个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="switchAccount">切换账号</el-dropdown-item>
                    <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState({
      tags: state => state.tap.tabsList
    })
  },
  mounted(){
    console.log(this.tags , 'tagstagstags');
  },
  methods: {
    headerMenu(){
        this.$store.commit('collapseMenu')
    },
    // 个人中心按钮点击进入个人中心
    personalCenter(){
        console.log('个人中心');
    },
    //切换账号点击进入切换账号页面
    switchAccount(){
        console.log('切换账号');
    },
    logOut(){
        this.$confirm('此操作将退出当前系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            localStorage.clear();
            sessionStorage.clear();
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
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
    .l-cobtent{
      display: flex;
      align-items: center;
      .el-breadcrumb{
        margin-left: 20px;
      }
    }
    .r-cobtent{
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}

.el-breadcrumb__item{
  .el-breadcrumb__inner{
    font-weight: normal;
    &.is-link{
      color: #666 ;
    }
  }
  &:last-child{
    .el-breadcrumb__inner{
      color: #fff !important;
    }
  }
}
</style>
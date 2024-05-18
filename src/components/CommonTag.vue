<template>
  <div class="tabs">
    <el-tag v-for="(tag,index) in tags" :key="tag.id" :closable="tag.id !== '1234567890'" :effect="$route.path === tag.path ? 'dark' : 'plain'" size="small" @click="changeMenu(tag)" @close="closeMenu(tag,index)">
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
  name:'CommonTag',
  data(){
    return {}
  },
  computed:{
    ...mapState({
      tags: state => state.tap.tabsList
    })
  },
  mounted(){},
  methods:{
    ...mapMutations(['closeTag']),
    changeMenu(item){
      this.$router.push(item.path);
    },
    closeMenu(item,index){
      this.closeTag(item);
      const length = this.tags.length;
      // 删除之后的跳转逻辑
      if(item.path !== this.$route.path){
        return false;
      }
      // 表示删除的是最后一项
      if(index === length){
        // this.$router.go(-1);
        this.$router.back();
        // this.$router.push('back');
        // this.$router.push({
        //   path:this.tags[index - 1].path
        // })
      }else{
        this.$router.push({
          path:this.tags[index].path
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tabs{
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
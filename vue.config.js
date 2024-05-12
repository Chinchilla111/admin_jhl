const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭严格代码格式，不按规定书写会报错项目启动不起来
})

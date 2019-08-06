<template>
  <div class="app-container" style="height: 800px">
<!--    test1-->
<!--    <el-button @click="testRoutePush">111</el-button>-->

<!--    <iframe class="iframe"-->
<!--            :src="src"></iframe>-->


  </div>
</template>

<script>
  export default {
    name: 'index',
    computed: {
      src() {
        return 'http://192.168.1.64:8080/editor?modelId=677791'
      }
    },
    methods: {
      testRoutePush() {
        //this.$router.push('test2')
        //window.location.href = 'www.baidu.com'
        //let actUrl = `${window.location.origin}/act/modeler.html?modelId=`
        //alert(actUrl)
        //window.open('http://www.baidu.com')
        //window.open('http://192.168.1.64:8080/editor?modelId=677791')

      }

    }
  }
</script>

<style scoped>
  .iframe {
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    box-sizing: border-box;
  }

</style>

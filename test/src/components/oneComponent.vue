<template>
  <div class="child">
    我是a 组件
    <button @click="go">a组件跳转</button>
  </div>
</template>

<script>
  export default {
    name: 'child',
    data () {
      return {
        text:[{a:2},{a:3}]
      }
      
    },
    created(){
      console.log(this.$route)
       console.log(this.$router)
    },
    methods:{
        go () {
       
         this.$router.push('sub')
        }
      }
  }
</script>

<style scoped>

</style>

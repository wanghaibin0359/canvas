<template>
  <div class="hello">
      我是sub组件
    <button @click='go'>返回</button>
   
  </div>
</template>

<script>
  let a= ''
export default {
  name: '',
  data () {
    return {
      msg: ' ',
      form:''
    }
  },
  beforeRouteEnter(to,from,next){
      console.log(this)
      console.log(to)
      console.log(from)
      a = from.path;
      next()
  },
  methods:{
   go(){
       console.log(a)
       this.$router.push({path: a,query:{b:"aaaa"}})
   }
  },
  
}
</script>

<style scoped>

</style>

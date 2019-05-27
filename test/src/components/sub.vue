<template>
  <div class="hello">
      我是sub组件
    <button @click='go'>返回</button>
  </div>
</template>

<script>
  let a= ''
export default {
  props:['data'],
  name: '',
  data () {
    return {
      msg: ' ',
      form:''
    }
  },
  watch:{
    data:{
      handler(val){

      },
      deep:true
    }
    // data (val,old){
    //     cosnole.log(val)
    // },
    // 'data.sk'(val){
    //   console.log(val)
    // }

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
      
       this.$router.push({path: a,query:{b:"aaaa"}})
   }
  },
  
}
</script>

<style scoped>

</style>

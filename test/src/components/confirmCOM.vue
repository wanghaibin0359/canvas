<template>
  <div v-if="$messageConfirm.message">
      <h1>{{$messageConfirm.message}}</h1>
      <button @click="confirm">确定</button>
       <button @click="cancel">取消</button>
  </div>
</template>

<script>
export default {
    computed:{
     
    },
 methods:{
     confirm () {

     },
     cancel (){

     }
 }
}
</script>

<style>

</style>

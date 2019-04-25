<template>
  <div class="child">
    <ul ref='drag' class='drag'>
      <li>我是第一条</li>
      <li>我是第二条</li>
      <li>我是第3条</li>
      <li>我是第4条</li>
    </ul>
  </div>
</template>

<script>
 


  export default {
    name: 'child',
    data () {
      return {
        drag:'',
        text:[{a:2},{a:3}]
      }
      
    },
    created(){
     
    },
    mounted(){
    // this.drag = new drag(this.$refs.drag)
    console.log( $(this.$refs.drag)) 
    this.$nextTick(()=>{
      $(()=>{
        $('.drag>li').Tdrag({
            scope:"",
            pos:true,
            animation_options:{//运动时的参数
                duration:'100',//每次运动的时间
                easing:"linear"//移动时的特效，ease-out、ease-in、linear
            },
          dragChange:true
        });
        
      })
    })
      // this.drag.init()
     },
    methods:{
        go () {
       
         this.$router.push('sub')
        }
      }
  }
</script>

<style scoped>
  ul,li{
    list-style: none;

  }
  li{
    width:200px;
    height: 40px;
    background: pink;
    color:white;
    line-height: 40px;
    margin-top:15px;
    cursor: pointer;
  }
</style>

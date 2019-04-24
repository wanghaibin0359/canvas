<template>
  <div class="child">
    <ul ref='drop'>
      <li>我是第一条</li>
      <li>我是第二条</li>
      <li>我是第3条</li>
      <li>我是第4条</li>
    </ul>
  </div>
</template>

<script>
  function drop(ele){
    this.ele = ele;
    this.children = ele.children;
    this.targetEle=null;
    this.x = '',
    this.y = '',
    this.cwidth = '',
    this.cheight = '',
    this.cloneEle=''
    this.preIndex=''
    
  }
  drop.prototype={
    init () {
      console.log(this.ele)
      this.ele.addEventListener('mousedown',this.onMosedown.bind(this))
      document.addEventListener('mousemove',this.onMosemove.bind(this))
       this.ele.addEventListener('mouseup',this.onMoseUp.bind(this))
    },
    destory(){

    },
    onMosedown (e) {
      console.log('down')
      console.log(e)
      let target = e.target;
      this.cloneEle = target.cloneNode(true) ;
       document.body.appendChild(this.cloneEle)
      //找到鼠标坐标x,y,当前元素宽和高
       this.cloneEle.style.backgroundColor='green'
      this.cloneEle.style.position='fixed';
       this.cwidth=e.offsetX, this.cheight=e.offsetY;
      let screenX =e.pageX,screenY =e.pageY;
      this.x = screenX- this.cwidth
      this.y = screenY- this.cheight
      console.log(  this.x, this.y)
      this.cloneEle.style.left=this.x+"px"
      this.cloneEle.style.top=this.y+"px"
        this.cloneEle.style.margin=0+"px"
    },
    onMosemove(e){
      console.log(e)
      if( !this.cloneEle){return}
     
      this.x = e.x- this.cwidth;
      this.y = e.y-this.cheight;
      this.cloneEle.style.left=this.x+"px"
      this.cloneEle.style.top=this.y+"px"
    },
    onMoseUp(e){
      console.log('up')
      console.log(e)
      
      this.cloneEle = null
    },
    
  }



  export default {
    name: 'child',
    data () {
      return {
        drop:'',
        text:[{a:2},{a:3}]
      }
      
    },
    created(){
      console.log(this.$route)
       console.log(this.$router)
    },
    mounted(){
      this.drop = new drop(this.$refs.drop)
      this.drop.init()
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

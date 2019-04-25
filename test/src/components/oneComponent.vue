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
  function drag(ele){
    this.ele = ele;
    this.children = ele.children;
    this.targetEle=null;
    this.x = '',
    this.y = '',
    this.cwidth = '',
    this.cheight = '',
    this.cloneEle=''
    this.preIndex=''
    this.targetEle=''
    this.bindmousedown = this.onMosedown.bind(this)
    this.bindmousemove = this.onMosemove.bind(this)
    this.bindmouseup = this.onMoseUp.bind(this)
    this.bindmouseover = this.targetElemousemove.bind(this)
  }
  drag.prototype={
    init () {
      this.ele.addEventListener('mousedown',this.bindmousedown)
    
     
      this.ele.addEventListener('mouseup',this.bindmouseup)
    },
    destory(){

    },
    onMosedown (e) {
      let target = e.target;
     if(! Array.from(this.children).some(ele=>{
        return ele==target
        
      })){
        return
      }
      this.cloneEle = target.cloneNode(true) ;
       this.ele.appendChild(this.cloneEle)
      //找到鼠标坐标x,y,当前元素宽和高
       this.cloneEle.style.backgroundColor='green'
      this.cloneEle.style.position='absolute';
      this.cloneEle.style.opacity='0.6'
       this.cwidth=e.offsetX, this.cheight=e.offsetY;
      let screenX =e.pageX,screenY =e.pageY;
      this.x = screenX- this.cwidth
      this.y = screenY- this.cheight
      this.cloneEle.style.left=this.x+"px"
      this.cloneEle.style.top=this.y+"px"
      this.cloneEle.style.margin=0+"px"
      this.cloneEle.style.pointerEvent='none'
      document.addEventListener('mousemove',this.bindmousemove)
      // this.ele.addEventListener('mousemove',this.bindmouseover)
       $(this.ele).on('mousemove','li',this.bindmouseover)
    },
    onMosemove(e){
      if( !this.cloneEle){return}
      this.x = e.x- this.cwidth;
      this.y = e.y-this.cheight;
     let targetEle = GetDomByPosition(this.x,this.y)
    
      this.cloneEle.style.left=this.x+"px"
      this.cloneEle.style.top=this.y+"px"
    },
    onMoseUp(e){
       if( !this.cloneEle){return}
      console.log('up')
      
       document.removeEventListener('mousemove',this.bindmousemove)
       this.ele.removeChild(this.cloneEle)
       console.log(this.cloneEle)
      this.cloneEle = null
    },
    targetElemousemove(e){
       if( !this.cloneEle){return}
      console.log(e)
       console.log(e.target)
    }
    
  }
function GetDomByPosition(x,y) {
    var sx =document.documentElement.scrollLeft;
    var sy =document.documentElement.scrollTop;
    var  dom =  document.elementFromPoint(x-sx, y-sy) ;

    if (dom == null) {
        return null;
    }

    var $dom =$(dom);
    var DomName = $dom[0].tagName.toLowerCase();

    if (DomName == 'html' || DomName == 'body') {
        return null;
    }

    while (DomName == 'iframe' || DomName == 'frame')
    {

        var FLeft = Math.ceil($dom.offset().left);
        var FTop  = Math.ceil($dom.offset().top);
        x = x - FLeft;
        y = y - FTop;
        // alert ('坐标:'+ x+'*'+y );
        var $dom=$($dom[0].contentWindow.document.elementFromPoint(x, y));

        if ($dom[0]== null) {
            return null;
        }

        DomName = $dom[0].tagName.toLowerCase();

        if (DomName == 'html' || DomName == 'body') {
            return null;
        }

    }

    return $dom;

}


  export default {
    name: 'child',
    data () {
      return {
        drag:'',
        text:[{a:2},{a:3}]
      }
      
    },
    created(){
      console.log(this.$route)
       console.log(this.$router)
    },
    mounted(){
    // this.drag = new drag(this.$refs.drag)
    console.log( $(this.$refs.drag)) 
    this.$nextTick(()=>{
      $(()=>{
        $('.drag').Tdrag();
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

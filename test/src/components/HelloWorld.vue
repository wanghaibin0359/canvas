<template>
  <div class="hello">
      
   <div style="display:none;">
     <img ref="img" src="./1.jpg" alt="" width="500" height="500">
   </div>
    <button @click="start">开始</button><button style="margin-left:20px;" @click="stop">停止</button><br>
     <canvas ref='cv' width='500' height="500"></canvas>
  </div>
</template>

<script>
  import Child from './oneComponent';
  import pixels from './js/pixelate';
    import imgPixels from './js/imgPixelate';
    import animate, {start,stop} from './js/animation'
export default {
  name: 'HelloWorld',
  components:{
    Child
  },
  data () {
    return {
      cv:"",
      context:"",
      msg: '确定提交吗？ '
    }
  },
  mounted (){ 

  this.cv = this.$refs.cv;
  this.context = this.cv.getContext("2d");
  let cx = this.context;

//像素化
  //pixels(cx,this.cv);



this.$refs.img.onload=()=>{
 // cx.drawImage(this.$refs.img,0,0,272,277,0,0,300,300)
  //  imgPixels(this.$refs.img,cx,this.cv)
  // cx.drawImage(this.$refs.img,0,0,this.cv.width,this.cv.height);
  }


//动画
animate(cx,this.cv,10)




  // for(let i =0; i<pixels.length;i++){
  //   pixels[i*4] =Math.floor(Math.random()*255) ;
  //    pixels[i*4+1] =Math.floor(Math.random()*255) ;
  //     pixels[i*4+2] =Math.floor(Math.random()*255) ;
  //      pixels[i*4+3] =200 ;
  // }

  // cx.putImageData(imgDate,0,0)




  
  // window.onclick=(e)=>{
  //   console.log(e)
  //   let cavsOffsetT = this.cv.offsetTop,  cavsOffsetL = this.cv.offsetLeft;
  //   let cavsX = Math.floor(e.pageX-cavsOffsetL), cavsY = Math.floor(e.pageY-cavsOffsetT)

  //   let imageDate = cx.getImageData(cavsX,cavsY,1,1).data;
  //   let Color=`rgba(${imageDate[0]},${imageDate[1]},${imageDate[2]},${imageDate[3]})`
  //   console.log(Color)
  //     document.body.style.backgroundColor=Color;
   
  // }


  },
  methods:{
    stop (){
stop()
    },
    start (){
start()
    },
    active () {
      this.$router.push('sub')
    },
    transform (){
      let ct = this.context;
      let skewX = Math.sin(10/180*Math.PI),//30度
       skewY = -Math.sin(10/180*Math.PI)
      ct.transform(1,skewY,skewX,1,300,150)
     ct.fillStyle="red"
      ct.drawImage(this.$refs.img,0,0)
    } 
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

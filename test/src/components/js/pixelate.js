export default function pixelate(cx,ct){

    let imgDate = cx.createImageData(200,200)
    let pixels = imgDate.data;
  
  //设定
    var numTitleRowsX=10,numTitleRowsY= 10;
    
    //每一块的宽高
    var titleWidth = imgDate.width/numTitleRowsX, titleHeight = imgDate.height/numTitleRowsY;
  
  //遍历每个块的色素
    for(var r=0;r<numTitleRowsY;r++){
        for(var c=0;c<numTitleRowsX;c++){
            var red,green,blue;
            red = Math.floor(Math.random()*255)
            green = Math.floor(Math.random()*255)
            blue = Math.floor(Math.random()*255)
         
         //每块的位置
          for(var tr=0;tr<titleHeight;tr++){
            for(var tc=0;tc<titleWidth;tc++){
                var trueX = (c*titleWidth)+tc;
                var trueY = (r*titleHeight)+tr;
            //转换成数组索引
          var index = (trueY*titleWidth*numTitleRowsX*4)+(trueX*4)
          let average = (red+green+blue)/3
            pixels[index]=average
            pixels[index+1]=average
            pixels[index+2]=average
            pixels[index+3]=100
            
            }
          }
  
  
  
      }
    }
    cx.putImageData(imgDate,0,0)
}
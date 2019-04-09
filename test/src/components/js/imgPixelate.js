export default function ImgPixelate(img,cx,ct){
    cx.drawImage(img,0,0,272,277,300,300,300,300)
    let imgData = cx.getImageData(300,300,300,300)
    
    let pixes = imgData.data;
    let numberRows = 30,numberCols=30;
    let titleWidth = imgData.width/numberRows,titleHeight = imgData.height/numberCols
    cx.clearRect(300,300,imgData.width,imgData.height)

    for(var r = 0;r<numberRows;r++){
        for(var c = 0;c<numberCols;c++){
            
            //获取源图片块中间的像素
            var centerX= Math.floor(titleWidth/2+(c*titleWidth))
            var centerY= Math.floor(titleHeight/2+(r*titleHeight))
            var R,G,B,A;
            let titlePixeCenter = (centerY*(imgData.width*4))+(centerX*4)
            R = pixes[titlePixeCenter],G = pixes[titlePixeCenter+1],B = pixes[titlePixeCenter+2];A=[titlePixeCenter+3];


            //设置style
            
            // for(var titleY=0;titleY<titleWidth; titleY++){
            //     for(var titleX=0;titleX<titleHeight; titleX++){
            //        var currrentX,currentY;
            //        //块*位置+当前所在块的位置
            //        currentX= titleX+c*titleWidth
            //        currentY= titleY+c*titleHeight
            //        var setPixeIndex = (currentY*(imgData.width*4))+((currrentX+c*titleWidth)*4)
            //        pixes[setPixeIndex] = R
            //        pixes[setPixeIndex+1] = G
            //        pixes[setPixeIndex+2] = B
            //        pixes[setPixeIndex+3] = A
            //     }
            // }

            //
             cx.fillStyle = `rgba(${R},${G},${B},${A})`
            // cx.fillRect(centerX-(titleWidth/2)+300, centerY-(titleHeight/2)+300,titleWidth,titleHeight)



            //
            cx.beginPath()
            cx.arc(centerX-(titleWidth/2)+300,centerY-(titleHeight/2)+300,titleWidth/2,0,Math.PI*2,false)
            cx.closePath()
            cx.fill()
        }
        
    }

  

}

var content,canvas; 

//控制开关
var buttonAnimat = false;

var animatArr = []

//球体
function ball (x,y,width,height,vx,vy,ax,ay){
    this.x= x;
    this.y = y;
    this.width=width;
    this.height = height
    this.radius = Math.random()*30+5;
    this.angle=360;
   this.vx = vx
   this.vy = vy
   this.ax = ax
   this.ay = ay
    this.color = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}



export function start(){
    buttonAnimat = true;
    animationg()
}

export function stop(){
    buttonAnimat = false;
}





function animationg(){
   
    content.clearRect(0,0,canvas.width,canvas.height);

    for(var k = 0 ;k<animatArr.length;k++){
        var ball = animatArr[k]
        // var x = ball.x+(ball.radius*Math.cos(ball.angle/180*Math.PI));
        // var y = ball.y+(ball.radius*Math.sin(ball.angle/180*Math.PI));  
        ball.x+=ball.vx
        ball.y+=ball.vy

        
        // if(Math.abs(ball.vx)<=10){
        //     ball.vx+= ball.ax
            
        // }
        // if(Math.abs(ball.vy)<=10){
        //     ball.vy+= ball.ay
        // }


        if(ball.x-ball.radius<0){
            ball.x=ball.radius
            ball.vx*=-1
            ball.ax*=-1
        }else if(ball.x+ball.radius>canvas.width){
            ball.x=canvas.width-ball.radius
            ball.vx*=-1
            ball.ax*=-1
        }
      


        if(ball.y-ball.radius<0){
            ball.y=ball.radius
            ball.vy*=-1
            ball.ay*=-1
        }else if(ball.y+ball.radius>canvas.height){
            ball.y=canvas.height-ball.radius
            ball.vy*=-1
            ball.ay*=-1
        }

        // //摩擦力
        // if(Math.abs( ball.vy)>0.1){
        //     ball.vy *= 0.9
        // }else{
        //     ball.vy=0;
        // }
        // if(Math.abs( ball.vx)>0.1){
        //     ball.vx *= 0.9
        // }else{
        //     ball.vx=0;
        // }
       
        //碰撞检测
        for(var j =k+1;j<animatArr.length;j++){
            var ballB = animatArr[j]
            var dx =ballB.x-ball.x
            var dy = ballB.y-ball.y
            var distance = Math.sqrt((dx*dx)+(dy*dy));

            //判断 两个球之间的距离是否重叠
            if(distance<ball.radius+ballB.radius){
                var angle = Math.atan2(dy,dx)
                var sine = Math.sin(angle)
                var cosine = Math.cos(angle)

                var x = 0,y=0;

                var xB = dx*cosine + dy*sine;
                var yB = dy*cosine - dx*sine;
                
                var vX = ball.vx*cosine + ball.vy*sine;
                var vY = ball.vy*cosine - ball.vx*sine;

                var vXb = ballB.vx*cosine + ballB.vy*sine;
                var vYb= ballB.vy*cosine - ballB.vx*sine;
                
                vX*=-1;
                vXb*=-1;
                    
                // vY*=-1;
                // vYb*=-1;
                 xB = x+(ball.radius+ballB.radius)
                // yB = y+(ball.radius+ballB.radius)


                ball.x = ball.x //+ (x*cosine - y*sine)
                ball.y = ball.y //+ (y*cosine + x*sine)

                ballB.x = ballB.x+ (xB*cosine - yB*sine)
                ballB.y = ballB.y+ (yB*cosine + xB*sine)


                ball.vx = vX*cosine - vY*sine;
                ball.vy = vY*cosine + vX*sine;

                ballB.vx = vXb*cosine - vYb*sine;
                ballB.vy = vYb*cosine + vXb*sine;

            }
        }
       




        content.fillStyle = ball.color;
        content.beginPath()  
        content.arc( ball.x, ball.y,ball.radius,0,2*Math.PI,false)
        content.closePath()
        content.fill()
      // content.fillRect(x,y,ball.width,ball.height)
    }




    if(buttonAnimat){
        setTimeout(animationg,30)
    }

   
}

export default function animate(cx,ct,array){
  
    content=cx;canvas=ct
    for(var k = 0; k<array;k++){
        var x,y,width,height;
        x = Math.random()*700+100
        y = Math.random()*700+100
        height = width = Math.random()*30+30
        var vx = Math.random()*4-2,
        vy = Math.random()*4-2,
        ax = Math.random()*0.2,
        ay = Math.random()*0.2;

        animatArr.push(new ball(x,y,width,height,vx,vy,ax,ay))
    }

    animationg()
}
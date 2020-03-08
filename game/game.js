var basket=$("#basket"),
container=$(".container"),
dropper=$(".droppper"),
ball1=$("#ball1")
ball2=$("#ball2")
ball3=$("#ball3")
ball4=$("#ball4")
ball5=$("#ball5")
ball6=$("#ball6")
scores=$("#scores")
lifes=$("#life")
floor=$("#floor"),
basket_height=basket.height(),
container_height=container.height(),
ball_height=dropper.height(),
ball_intial_position=parseInt(dropper.css('top')),
score = 0,
life = 100,
speed = 1,
max_speed = 5,
count=25,
score_updated=false,
the_game=0,
stops = 0,
ball_current_position = 0,
ball_top = 0,
basket_top = container_height - basket_height,
lifes.text(life);
//collision detection function
function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}
$(document).on('mousemove',function(e){
    basket.css('left',(e.pageX)-45);
});
function ball_down(ball)
{
   
   if (score==count && speed<max_speed ){
    speed=speed+0.5;
    count+=25
   }
    
    ball_top=parseInt(ball.css('top'))+speed;
    ball.css('top',ball_top);
}

function getRndInteger() {
  return Math.floor(Math.random() * (7 - 1)) + 1;
}
$(function(){
    game=function(){
        //ball1
        if(collision(ball1,floor)){
            ball1.css('top',0)
            life-=1
            lifes.text(life)
        }
         if (collision(basket,ball1)){
            ball1.css('top',0)
            score+=1
            scores.text(score)
        }
        ball_down(ball1);
        //ball5
        if(collision(ball5,floor)){
            ball5.css('top',0)
            life-=1
            lifes.text(life)
        }
         if (collision(basket,ball5)){
            ball5.css('top',0)
            score+=1
            scores.text(score)
        }
        ball_down(ball5);
        //ball4
        if(collision(ball4,floor)){
            ball4.css('top',0)
            life-=1
            lifes.text(life)
        }
         if (collision(basket,ball4)){
            ball4.css('top',0)
            score+=1
            scores.text(score)
        }
        ball_down(ball4);
        //ball6
        if(collision(ball6,floor)){
            ball6.css('top',0)
            life-=1
            lifes.text(life)
        }
         if (collision(basket,ball6)){
            ball6.css('top',0)
            score+=1
            scores.text(score)
        }
        ball_down(ball6);
        //ball3
        if(collision(ball3,floor)){
            ball3.css('top',0)
            life-=1
            lifes.text(life)
        }
         if (collision(basket,ball3)){
            ball3.css('top',0)
            score+=1
            scores.text(score)
        }
        ball_down(ball3);
        //ball2
        if(collision(ball2,floor)){
            ball2.css('top',0)
            life-=1
            lifes.text(life)
        }
         if (collision(basket,ball2)){
            ball2.css('top',0)
            score+=1
            scores.text(score)
        }
        ball_down(ball2);
        stops=requestAnimationFrame(game)
        if (life==0){
       cancelAnimationFrame(stops)
       alert("Game Over Your score is "+score+" click 'ok' to restart")
       location.reload();
        }
    }
    stops=requestAnimationFrame(game)
});

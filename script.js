function makeBubble(){
    var clutter=" ";
for(var i=1;i<=180;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#panel-bottom").innerHTML=clutter;
}
var timer=60;
var score=0;
var hitrn=0;
    document.querySelector("#panel-bottom").addEventListener("click",function(dets){
        var clickednum=Number(dets.target.textContent);
        if(hitrn==clickednum)
        {
            increseScore();
            getNewHit();
            makeBubble();
        }
        
    })
function timerint(){
    var z=setInterval(function(){
        if(timer>0)
        {   timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else
            {   
                clearInterval(z);
                document.querySelector("#panel-bottom").innerHTML=`<h1>Game Over !!!</h1>`;
            }
    },1000)
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}
function increseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
makeBubble();
timerint();
getNewHit();

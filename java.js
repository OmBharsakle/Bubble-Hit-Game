
function makeball(){
    var ball ="";

    for(var i=1; i<=250; i++){
        var rn = Math.floor(Math.random()*10)
        ball += `<div class="ball">${rn}</div>`;
    }
    
    document.querySelector(".main_ball").innerHTML = ball;

}

var timer = 60;
function runtimer(){
    var timeri = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else
        {
            clearInterval(timeri);
            document.querySelector("#contener").innerHTML = "Game Over";
        }
        
    },1000);
    
}
var see = 0;
function getnewhit(){
   see = Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent = see;
}

var marks = 0;
function mark(){
    marks += 10;
    document.querySelector("#mark").textContent = marks;
}

document.querySelector("#contener")
.addEventListener("click",function(dets)
{
    
   var number = Number(dets.target.textContent);
   if(number === see)
   {
     mark();
     makeball();
     getnewhit();
   }
   else
   {
    marks -= 5;
    document.querySelector("#mark").textContent = marks;
   }
})

function hue(){
        
    var hue = document.querySelector("#hue").value;
    var box = document.querySelector("*");
	box.style.filter = "hue-rotate("+hue+"deg)";
}




makeball();
getnewhit();
runtimer();


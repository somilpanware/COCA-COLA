

// var a = document.querySelector(".home-photo");

// window.addEventListener("scroll", function (det) {
//    var b = a.getBoundingClientRect();
//    var c = Math.abs(b.y / 100) + 0.69;
//    var d = Number(c);
//    a.style.scale = d;
//    console.log(d);
//    if (d >= 22.8) {

//       a.style.opacity =0;
//       window.style.overflow="hidden";
//     }

//    else {
//       a.style.opacity = 1;

//    }


//    console.log(d)
//    //console.log(Math.trunc(Math.abs(b.y)));

// });
function time() {
   var a = 0
   setInterval(() => {
      a = a + Math.floor(Math.random() * 15);
      if (a < 100) {
         document.querySelector(".loader h1").innerHTML = a + "%"
      }
      else {
         a = 100;
         document.querySelector(".loader h1").innerHTML = a + "%"
      }
   }, 150)

}

var br1=document.querySelector("#no1");
var brand1=document.querySelector(".new-box1")
var brand2=document.querySelector(".new-box2")
var brand3=document.querySelector(".new-box3")
var brand4=document.querySelector(".new-box4")
var brand5=document.querySelector(".new-box5")
var brand6=document.querySelector(".new-box6")

br1.addEventListener("mouseover",function () {
   br1.style.transition="all .3s";
   br2.style.transition="all .3s";
   br2.style.filter="blur(5px)";
   
   br3.style.transition="all .3s";
   br3.style.filter="blur(5px)";
   
   br4.style.transition="all .3s";
   br5.style.transition="all .3s";
   br6.style.transition="all .3s";
   br4.style.filter="blur(5px)";
   br5.style.filter="blur(5px)";
   br6.style.filter="blur(5px)";

   brand1.style.transition="all 1s";
   brand1.style.marginLeft="320px";
   brand1.style.opacity=1;
   
   
   
   br1.style.scale="1.1";
   
})
br1.addEventListener("mouseout",function () {
   br2.style.filter="blur(0px)";
   br3.style.filter="blur(0px)";
   br4.style.filter="blur(0px)";
   br5.style.filter="blur(0px)";
   br6.style.filter="blur(0px)";
   br1.style.transition="all .3s"
   brand1.style.marginLeft="840px";
   brand1.style.transition="all 1s";
   
   brand1.style.opacity=0;
   
   br1.style.scale="1";
})


var br2=document.querySelector("#no2 ");
br2.addEventListener("mouseover",function () {
   brand2.style.transition="all 1s";
   brand2.style.opacity=1;
   brand2.style.marginTop="270px";
   
   
   
   
   
   
   br2.style.transition="all .3s"
   br2.style.scale="1.1";
   br1.style.filter="blur(5px)";
   br3.style.filter="blur(5px)";
   br4.style.filter="blur(5px)";
   br5.style.filter="blur(5px)";
   br6.style.filter="blur(5px)";

   
})
br2.addEventListener("mouseout",function () {
   brand2.style.opacity=0;
   brand2.style.marginTop="840px";
  
   br2.style.transition="all .3s"
   br2.style.scale="1";
   br1.style.filter="blur(0px)";
   br3.style.filter="blur(0px)";
   br4.style.filter="blur(0px)";
   br5.style.filter="blur(0px)";
   br6.style.filter="blur(0px)";

})



var br3=document.querySelector("#no3");
br3.addEventListener("mouseover",function () {
   br3.style.transition="all .3s"
   br3.style.scale="1.1";
   brand3.style.transition="all 1s";
   brand3.style.opacity=1;
   brand3.style.marginLeft="-80px";
   
   br1.style.filter="blur(5px)";
   br2.style.filter="blur(5px)";
   br4.style.filter="blur(5px)";
   br5.style.filter="blur(5px)";
   br6.style.filter="blur(5px)";
   
})
br3.addEventListener("mouseout",function () {
   br3.style.transition="all .3s"
   br3.style.scale="1";
   
   brand3.style.marginLeft="-820px";
   brand3.style.opacity=0;


   
   br1.style.filter="blur(0px)";
   br2.style.filter="blur(0px)";
   br4.style.filter="blur(0px)";
   br5.style.filter="blur(0px)";
   br6.style.filter="blur(0px)";
})




var br4=document.querySelector("#no4");
br4.addEventListener("mouseover",function () {
   br4.style.transition="all .3s"
   br4.style.scale="1.1";

   br2.style.transition="all .3s";
   br2.style.filter="blur(5px)";
   
   br3.style.transition="all .3s";
   br3.style.filter="blur(5px)";
   
   br4.style.transition="all .3s";
   br5.style.transition="all .3s";
   br6.style.transition="all .3s";
   br1.style.filter="blur(5px)";
   br5.style.filter="blur(5px)";
   br6.style.filter="blur(5px)";
   
   brand4.style.transition="all 1s";
   brand4.style.marginLeft="320px";
   brand4.style.opacity=1;

})
br4.addEventListener("mouseout",function () {
   br4.style.transition="all .3s"
   br4.style.scale="1";

   br1.style.filter="blur(0px)";
   br5.style.filter="blur(0px)";
   br6.style.filter="blur(0px)";
   br2.style.filter="blur(0px)";
   br3.style.filter="blur(0px)";
   brand4.style.marginLeft="1090px";
   brand4.style.transition="all 1s";
})



var br5=document.querySelector("#no5");
br5.addEventListener("mouseover",function () {
   br5.style.transition="all .3s"
   br5.style.scale="1.1";

   br1.style.filter="blur(5px)";
   br2.style.filter="blur(5px)";
   br3.style.filter="blur(5px)";
   br4.style.filter="blur(5px)";
   br6.style.filter="blur(5px)";

   brand5.style.transition="all 1s";
   brand5.style.opacity=1;
   brand5.style.marginTop="-110px";

})
br5.addEventListener("mouseout",function () {
   br5.style.transition="all .3s"
   br5.style.scale="1";
  


   
   br1.style.filter="blur(0px)";
   br2.style.filter="blur(0px)";
   br3.style.filter="blur(0px)";
   br4.style.filter="blur(0px)";
   br6.style.filter="blur(0px)";

   brand5.style.opacity=0;
   brand5.style.marginTop="-910px";
  
})
var br6=document.querySelector("#no6");
br6.addEventListener("mouseover",function () {
   br6.style.transition="all .3s"
   br6.style.scale="1.1";



   br1.style.filter="blur(5px)";
   br2.style.filter="blur(5px)";
   br3.style.filter="blur(5px)";
   br4.style.filter="blur(5px)";
   br5.style.filter="blur(5px)";

   brand6.style.transition="all 1s";
   brand6.style.opacity=1;
   brand6.style.marginLeft="-80px";
})
br6.addEventListener("mouseout",function () {
   br6.style.transition="all .3s"
   br6.style.scale="1";

   br1.style.filter="blur(0px)";
   br2.style.filter="blur(0px)";
   br3.style.filter="blur(0px)";
   br4.style.filter="blur(0px)";
   br5.style.filter="blur(0px)";
   
   brand6.style.marginLeft="-820px";
   brand6.style.opacity=0;
   


})



var tl = gsap.timeline()
tl.from(".logo", {
   y: -100,
   duration: 2,
   delay: 2,
   stagger: .4,
   opacity: 0,

})
tl.from(".links", {
   x: 500,
   duration: 1,
   delay: .5,
   opacity: 0,
})
tl.from(".home-photo>img", {


   delay: .2,
   scale: 1.1,
   duration: .5,
   opacity: 0,
  
})
//   scrollTrigger:{
//     trigger:".home-photo>img",
//     scroller:"body",

//     scrub:2,
//    pin:true,


tl.from(".line>p", {
   delay: .01,
   opacity: 0,
})
tl.to(".line>p", {
   opacity:1,
   delay: .1,
   scale: 5,

})
tl.to(".new-box1>img,.new-box2>img,.new-box3>img,.new-box4>img,.new-box5>img,.new-box6>img",{
   y:-15,
   duration:.8,
  
   yoyo:true,
   repeat:-1,

})
// tl.to(".new-box2>img",{
//    y:-10,
//    duration:1,
  
//    yoyo:true,
//    repeat:-1,

// })
window.onbeforeunload = function () {
   window.scrollTo(0, 0);
 }
var second=document.querySelector(".second-photo")
var p=document.querySelector(".second-photo>p")
second.addEventListener("mouseover",function(){
   for(var i=0;i<10;i++){
      var count=Number(i/10);
      p.style.opacity=count;
      p.style.transition="all 1.5s";
      
   }
})
second.addEventListener("mouseout",function(){
   p.style.opacity=0;
   
})

var items=document.querySelector(".drop-box")
var menu=document.querySelector(".menu");

var body=document.querySelector(".main")

menu.addEventListener("click",function () {
   gsap.to(".drop-box",{
      x:-10,
      duration:.5,
      opacity:1,
      

   })
   
   menu.style.opacity=0;
   items.style.opacity=1;
  
  
   
   items.style.display="block";
   
   
   
})
body.addEventListener("click",function () {

   items.style.opacity=0;
   items.style.display="none";

   menu.style.opacity=1;
})








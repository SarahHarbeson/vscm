import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


 function logoAnimation(){
   var tl = gsap.timeline();
   tl.from("#headerText p", {duration:0.55, y:"-=35", alpha: 0, stagger: {each: 0.04, from: "left"}, ease: "elastic.out(0.9)"}, 1)
   //.from("#box", {duration: 1, x:-100}, 0.1)
   return tl; 
 }




function quote(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#quote", 
scrub: true, 
//markers: true,  
start: "top 70%", 
end: "+=450",
pin: "rectangle"}})

  // tl.from("#rectangle", {duration: 4, x: 1400})
  tl.from("#theQuote, #quote1, #quote2", {duration: 3, x: 960})
  .from("#designs", {duration: 15, x: -500, y: -500, ease: "elastic.out(0.3)"})

  return tl; 

}

function gallery(){
  var tl = gsap.timeline({scrollTrigger:{trigger:"#grid", 
  scrub: true,
  //markers: true, 
  end:"bottom 75%",
  start:"top 50%"
  }})

   tl.from("gallery", {duration: 0.5, alpha: 0})
   .from("#img1",{duration:1, clipPath:"inset(100% 0% 0% 0% )"}, 1)
   .from("#img4",{duration:1, clipPath:"inset(0% 100% 0% 0% )"}, 1.3)
   .from("#img2",{duration:1, clipPath:"inset(0% 0% 100% 0% )"}, 1.6)
   .from("#img5",{duration:1, clipPath:"inset(0% 0% 0% 100% )"}, 1.6)
   .from("#img3",{duration:1, clipPath:"inset(0% 0% 100% 0% )"}, 1.7)
   .from("#img6",{duration:1, clipPath:"inset(0% 100% 0% 0% )"}, 1.7)

  // .from("#gallery button",{duration:0.5, clipPath:"inset(0% 0% 100% 0% )"})


  return tl;
}


function galleryShapes(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#galleryshapes", 
scrub: true,
//markers: true,  
//start: "t 10%", 
end: "+=450"
}})

   tl.from("#galleryshapes", {duration: 4, x:500, y: 500, alpha: 0})


  return tl; 

}


function calloutAnimation(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#callout", 
scrub: true, 
//markers: true,  
//start: "top 10%", 
end: "+=350"
}})

   tl.from("#callout", {duration: 4, x:-1000})


  return tl; 

}


 var mainTl = gsap.timeline();

mainTl.add(logoAnimation())
.add(quote())
.add(gallery())
.add(galleryShapes())
.add(calloutAnimation());




const showAnim = gsap.from("#header", { 
  yPercent: -100,
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});
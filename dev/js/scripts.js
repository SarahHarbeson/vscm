import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



// function headerAnimation(){
//   var tl = gsap.timeline();
//   tl.from("#links", {duration: 2, x:-100})
//   return tl; 
// }

function quote(){
  var tl = gsap.timeline({scrollTrigger:{trigger: "#quote", 
scrub: true, 
markers: true,  
start: "top 70%", 
end: "+=450",
pin: "rectangle"}})

  // tl.from("#rectangle", {duration: 4, x: 1400})
  tl.from("#theQuote, #quote1, #quote2", {duration: 3, x: 960})
  .from("#designs", {duration: 4, x: -500, y: -500})

  return tl; 

}

function gallery(){
  var tl = gsap.timeline({scrollTrigger:{trigger:"#grid", 
  scrub: true,
  //markers: true, 
  end:"bottom 75%",
  start:"top 50%"
  }})

   tl.from("gallery", {duration: 0, alpha: 0})
   .from("#img1",{duration:0.5, clipPath:"inset(100% 0% 0% 0% )"})
   .from("#img4",{duration:1, clipPath:"inset(0% 100% 0% 0% )"})
   .from("#img2",{duration:0.5, clipPath:"inset(0% 0% 100% 0% )"})
   //.from("#img2",{duration:0.5, clipPath:"inset(0% 0% 100% 0% )"})

  // .from("#gallery button",{duration:0.5, clipPath:"inset(0% 0% 100% 0% )"})


  return tl;
}


 var mainTl = gsap.timeline();

mainTl.add(quote())
.add(gallery());




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
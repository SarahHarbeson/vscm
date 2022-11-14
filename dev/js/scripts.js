import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function headerAnimation(){
  var tl = gsap.timeline();
  tl.from("#links", {duration: 2, x:-100})
  return tl; 
}


 var mainTl = gsap.timeline();
mainTl.add(headerAnimation()); 
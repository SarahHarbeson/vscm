import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




function gallery(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#gallery", 
     scrub: true,
     markers: true
    //  end:"bottom center",
    //  start:"center 50%"
    }})

    tl.from(".img1",{duration:0.5, clipPath:"inset(100% 0% 0% 0% )"})
  //  .from("#gallery2",{duration:0.5, clipPath:"inset(100% 0% 0% 0% )"})
 //   .from("#gallery3",{duration:0.5, clipPath:"inset(100% 0% 0% 0% )"})

  


    return tl;
}

var mainTl = gsap.timeline();
mainTl.add(gallery()); 
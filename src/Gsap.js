import { useEffect, useRef } from "react";
import { gsap } from "gsap/all";

export default function Gsap() {
  
  const textRef = useRef();
  const textRefTime = useRef();

  useEffect(() => {
    gsap.from(textRef.current, { y:500, opacity:0, duration:3 , rotation:360});
    gsap.from(textRefTime.current, { y:500, opacity:0, duration: 3,rotation:360  });
  });

  return (
     
      <div className="home">
      
       
        <div className="location"> 
          
         <p ref={textRef} className="home-text"> {new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }
          </p> 
         
          </div> 
          <div className="location">
          <p  ref={textRefTime} className="home-text">{new Date().toLocaleTimeString("en-us")}</p>
       
          </div>
  
      </div>
  
  );
}

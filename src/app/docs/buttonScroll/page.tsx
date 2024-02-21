'use client'

import { useEffect, useState } from "react";

export default function ButtonScroll (){

const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <div className={`fixed bottom-0 right-5 mb-8 ${isVisible ? 'block' : 'hidden'}`}>
            <a href="#getAllProducts">
            <svg width={50} height={50} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="up-square" className="icon glyph" fill="#34d399"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20,2H4A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM16.62,14.78A1,1,0,0,1,16,15a1,1,0,0,1-.78-.38L12,10.6l-3.22,4a1,1,0,1,1-1.56-1.24l4-5a1,1,0,0,1,1.56,0l4,5A1,1,0,0,1,16.62,14.78Z" className="fill:#231f20"></path></g></svg>
            </a>
        </div>
    )
}
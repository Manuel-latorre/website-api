'use client'

import Lottie from "lottie-react"
import introanimation from './intro1.json'


export default function AnimationIntro(){

    
    return(
       
        <Lottie id="lottie" animationData={introanimation} loop={true} style={{width:350, height:350, margin:'auto'}} />

    )
}


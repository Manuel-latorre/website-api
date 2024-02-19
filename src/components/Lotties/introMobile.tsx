'use client'

import Lottie from "lottie-react"
import introanimation from './introanimation1.json'

export default function MobileIntro(){
    return(
        <Lottie id="lottie" animationData={introanimation} loop={true} style={{width:250, height:250, margin:'auto'}} />
    )
}


'use client'

import Lottie from "lottie-react"
import introanimation from './introanimation1.json'

export default function AnimationIntro(){
    return(
        <Lottie animationData={introanimation} loop={true} style={{width:400, height:400}}/>
    )
}
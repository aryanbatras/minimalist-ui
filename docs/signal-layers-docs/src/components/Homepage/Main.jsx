import { gsap } from "gsap";
import { Hero } from "./Hero";
import {Footer} from "./Footer";
import { Navbar } from "./Navbar";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagnifyingCursor } from "../MagnifyingCursor";;
gsap.registerPlugin(ScrollTrigger);
export function Main(){
    return(
        <>
            {/* <MagnifyingCursor/> */}
            <Navbar/>
            <Hero/>
            <Section1 />
            <Section2 />
            <Section3 />
            {/* <Section4 /> */}
            <Section5 />
            <Section6 />
            <Footer />   
        </>
    )
}
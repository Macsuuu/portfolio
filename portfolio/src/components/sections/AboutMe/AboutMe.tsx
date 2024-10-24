import {motion, useMotionValue, useTransform} from "framer-motion";
import "./AboutMe.css";
import {useEffect, useRef, useState} from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {

    const [currentTab, setCurrentTab] = useState(0);

    const handleClick = (tab: number) => {
        setCurrentTab(tab);
    }

    const header = useRef<HTMLDivElement>({} as HTMLDivElement);

    const headerWidth = useRef(0);


    useEffect(()=>{
        headerWidth.current = header.current.offsetWidth;
    }, [header]);

    const [hasRun, setHasRun] = useState(false);

    useEffect(() => {
        setHasRun(true);
    }, []);

    useEffect(() => {
        if(hasRun){
            gsap.fromTo('.tabs',
                {x: -3000},
                {
                    scrollTrigger:{
                        trigger: '.aboutme',
                        start: 'top top',
                        end: 'center',
                        pin: true,
                        scrub: true,
                        pinnedContainer: '.aboutme',
                    },
                    x: 0
                }
            );
        }
    }, [hasRun]);

    return (
        <div className="body aboutme">

            <div className="tabs">
                <div className="tabsHeader" ref={header}>


                    {
                        headerWidth && (
                            <motion.div className="tabIndicator"
                                        layout
                                        initial={{
                                            left: 0
                                        }}
                                        animate={{
                                            left: (headerWidth.current / 2) * currentTab,
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.5,
                                        }}
                            >

                            </motion.div>
                        )
                    }


                    <motion.div className={"tabLabel"}
                                onClick={() => {
                                    handleClick(0)
                                }}
                                style={{
                                    color: currentTab == 0 ? "white" : "#1c1c1c"
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.3,
                                }}

                    >
                        Doświadczenie zawodowe
                    </motion.div>
                    <motion.div className={"tabLabel"}
                                onClick={() => {
                                    handleClick(1)}}
                                style={{
                                    color: currentTab == 1 ? "white" : "#1c1c1c"
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.3,
                                }}
                    >
                        Wykształcenie
                    </motion.div>
                </div>

                <div className="tabsContainer">

                    <div className="tab experience">

                    </div>

                    <div className="tab education">

                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutMe;
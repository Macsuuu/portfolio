import {animate, easeInOut, motion, useMotionValue, useTransform} from "framer-motion";
import {useState} from "react";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const BigButton = () => {

    const variants = {
        hovered: {
            backgroundColor: "#050b1c"
        },
        noHovered: {
            backgroundColor: "#2E5CD1"
        }
    }

    const x = useMotionValue(0);

    const background = useTransform(
        x,
        [0,100],
        ["#2E5CD1","#11275e" ]
    )

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        if(hover)return;
        setHover(true);
        animate(x, 100, {duration: 0.3});
    }

    const handleMouseExit = () => {
        if(!hover)return;
        setHover(false);
        animate(x, 0, {duration: 0.3, ease: easeInOut});
    }

    const handleClick = () => {
        const tabsElement = document.querySelector('.tabs');

        if (tabsElement) {
            // Obliczamy pozycję końca animacji
            const endPosition = tabsElement.getBoundingClientRect().top + window.scrollY + tabsElement.scrollHeight;

            // Używamy GSAP do przewinięcia
            gsap.to(window, {
                scrollTo: {
                    y: endPosition,
                    autoKill: false, // Umożliwia kontynuowanie przewijania, nawet gdy użytkownik przewija ręcznie
                },
                duration: 1,
            });
        }
    }

    return (
        <motion.div className="buttonContainer"
             onMouseEnter={handleMouseEnter}
             onMouseOut={handleMouseExit}
                    style={{background}}
                    onClick={handleClick}
        >
            Poznajmy się
        </motion.div>
    )

}

export default BigButton;
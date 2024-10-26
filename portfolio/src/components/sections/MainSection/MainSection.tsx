
import './MainSection.css';
import BigButton from "./BigButton";
import IconLink from "./IconLink";
import { motion } from 'framer-motion';
import Photo from "./Photo";

const MainSection = ()=>{

    return (
        <div className="body main">

            <div className="flexContainer">

                <motion.div className="container"
                            initial={{x: -1000}}
                            animate={{x: 0}}
                            transition={{
                                type:"tween",
                                duration: 2,
                            }}

                >
                    <h1>Witaj</h1>
                    <h2>Mam na imię Maciej, mam 20 lat i jestem Fronend Developerem.</h2>
                    <p>
                        Programowaniem zajmuję się od 16 roku życia. Zaczynałem od tworzenia prostych gier komputerowych, aktualnie projektuje oraz wytwarzam interfejsy użytkownika.
                        Od dwóch lat zawodowo pracuję jako programista. Prosto i schludnie... tak wyglądają moje projekty.
                    </p>
                </motion.div>

                <motion.div className="container"
                            initial={{x: 1000}}
                            animate={{x: 0}}
                            transition={{
                                type:"tween",
                                duration: 2,
                            }}
                >

                    <Photo/>

                    <BigButton />

                    <div className="icons">
                        <IconLink url={"https://github.com/Macsuuu"} iconName={"bxl-github"} />
                        <IconLink url={"https://www.linkedin.com/in/maciej-bedyk-9505682b5/"} iconName={"bxl-linkedin"} />
                        <IconLink url={"https://www.instagram.com/macsu12/"} iconName={"bxl-instagram"} />
                    </div>

                    <div className="footer">
                        <a href="mailto:maciej@bedyk.pl">Napisz do mnie: maciej@bedyk.pl</a>
                    </div>

                </motion.div>

            </div>

        </div>
    )

}

export default MainSection;
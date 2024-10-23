
import './MainSection.css';
import BigButton from "./BigButton";
import IconLink from "./IconLink";
import { motion } from 'framer-motion';

const MainSection = ()=>{

    return (
        <div className="body">

            <div className="flexContainer">

                <motion.div className="container"
                            initial={{x: -1500}}
                            animate={{x: 0}}
                            transition={{
                                type:"tween",
                                duration: 2,
                            }}

                >
                    <h1>Witaj</h1>
                    <h2>Mam na imię Maciej, mam 20 lat i jestem Fronend Developerem.</h2>
                    <p>
                        Programowaniem zajmuję się od 16 roku życia. Zaczynałem od tworzenia prostych gier koputerowych, aktualnie projektuje i pisze interfesy użytkownika.
                        Od dwóch lat zawodowo pracuję jako programista. Prosto i schludnie... tak wyglądają moje projekty.
                    </p>
                </motion.div>

                <motion.div className="container"
                            initial={{x: 1500}}
                            animate={{x: 0}}
                            transition={{
                                type:"tween",
                                duration: 2,
                            }}
                >

                    <BigButton />

                    <div className="icons">
                        <IconLink url={"test"} iconName={"bxl-github"} />
                        <IconLink url={"test"} iconName={"bxl-linkedin"} />
                        <IconLink url={"test"} iconName={"bxl-instagram"} />
                    </div>

                </motion.div>

            </div>

        </div>
    )

}

export default MainSection;
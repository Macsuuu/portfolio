import ExperienceTile from "./ExperienceTile";

const Experience = () => {

    return (
        <div>
            <ExperienceTile title={"Sąd Apelacyjny w Warszawie"}
                            description={"Test opis"}
                            from={new Date("10.07.2023")}
                            to={new Date()}
                            position={"Programista"}
            />

            <ExperienceTile title={"Sąd Rejonowy dla m.St. Warszawy"}
                            description={"Test opis"}
                            from={new Date("02.11.2022")}
                            to={new Date("01.04.2023")}
                            position={"Programista"}
            />
        </div>
    )

}

export default Experience;
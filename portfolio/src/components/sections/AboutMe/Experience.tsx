import React from "react";
import ExpTile from "./ExpTile";

const Experience = () => {

    return (
        <div>
            <ExpTile title={"Sąd Apelacyjny w Warszawie"}
                            description={"Jestem odpowiedzialny za kompleksowy rozwój aplikacji webowych, obejmujący zarówno frontend, jak i backend. Samodzielnie realizuję pełen cykl wytwarzania oprogramowania – od analizy wymagań, przez projektowanie, implementację, po wdrożenie i utrzymanie systemów. Główne zadania obejmują:"}
                            from={new Date("2023-07-10")}
                            to={new Date()}
                            position={"Programista"}
                            points={[
                                "Tworzenie intuicyjnych i responsywnych interfejsów użytkownika, dbając o najwyższą jakość UX/UI",
                                "Prace backendowe, w tym tworzenie API, zarządzanie bazami danych oraz optymalizacja procesów serwerowych",
                                "Wdrażanie i zarządzanie środowiskami produkcyjnymi oraz ich regularna aktualizacja i monitoring",
                                "Doradztwo w zakresie optymalizacji procesów oraz wdrażanie usprawnień przy użyciu dedykowanych aplikacji",
                            ]}
            />

            <ExpTile title={"Sąd Rejonowy dla m.St. Warszawy"}
                            description={"Byłem odpowiedzialny za kompleksowy rozwój aplikacji webowych, obejmujący zarówno frontend, jak i backend. Samodzielnie realizowałem pełen cykl wytwarzania oprogramowania – od analizy wymagań, przez projektowanie, implementację, po wdrożenie i utrzymanie systemów. Główne zadania obejmowały:"}
                            from={new Date("2022-11-2")}
                            to={new Date("2023-04-01")}
                            position={"Programista"}
                            points={[
                                "Tworzenie intuicyjnych i responsywnych interfejsów użytkownika, dbając o najwyższą jakość UX/UI",
                                "Prace backendowe, w tym tworzenie API, zarządzanie bazami danych oraz optymalizacja procesów serwerowych",
                                "Wdrażanie i zarządzanie środowiskami produkcyjnymi oraz ich regularna aktualizacja i monitoring",
                                "Doradztwo w zakresie optymalizacji procesów oraz wdrażanie usprawnień przy użyciu dedykowanych aplikacji",
                            ]}
            />
        </div>
    )

}

export default Experience;
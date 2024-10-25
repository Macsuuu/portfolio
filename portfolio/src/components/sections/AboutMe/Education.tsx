import ExperienceTile from "./ExperienceTile";

const Education = () => {

    return (
        <div>
            <ExperienceTile title={"Polsko-Japońska Akademia Technik Komputerowyh"}
                            description={"Studia na kierunku Zarządzanie Informacją pozwolą mi zdobyć kompleksową wiedzę z zakresu analizy, przetwarzania oraz optymalizacji przepływu informacji w środowisku cyfrowym. Program studiów obejmuje zarówno aspekty techniczne, jak i zarządcze, co pozwoli mi rozwinąć umiejętności w zakresie:"}
                            from={new Date("2023-10-01")}
                            to={new Date()}
                            position={"Wydział zarządzania informacją, zaoczne studia inżynierskie"}
                            points={[
                                "Zarządzania bazami danych, w tym ich projektowania i optymalizacji w kontekście wydajności i bezpieczeństwa",
                                "Analizy i wizualizacji danych w celu wspierania podejmowania decyzji biznesowych",
                                "Zarządzania procesami informacyjnymi oraz wdrażania nowoczesnych narzędzi do przetwarzania i analizy danych",
                                "Projektowania systemów informacyjnych wspierających zarządzanie informacją i komunikację w organizacjach",
                                "Pracy z narzędziami analitycznymi i systemami ERP, umożliwiających sprawne zarządzanie danymi operacyjnymi i strategicznymi"
                            ]}
            />

            <ExperienceTile title={"Zespół Szkół Łączności w Warszawie"}
                            description={"W czasie nauki w Technikum Informatycznym zdobyłem solidne podstawy teoretyczne i praktyczne z zakresu informatyki, w szczególności w obszarze programowania, administracji sieciami oraz zarządzania sprzętem komputerowym. Do kluczowych umiejętności wyniesionych z tego okresu należą:"}
                            from={new Date("2019-09-01")}
                            to={new Date("2023-04-28")}
                            position={"Technik Informatyk"}
                            points={[
                                "Programowanie aplikacji w językach takich jak Java, C++ i podstawy programowania webowego (HTML, CSS, JavaScript)",
                                "Tworzenie i zarządzanie lokalnymi sieciami komputerowymi, konfiguracja urządzeń sieciowych oraz dbanie o ich bezpieczeństwo",
                                "Administracja systemami operacyjnymi, w tym konfiguracja systemów Windows oraz Linux",
                                "Diagnozowanie oraz rozwiązywanie problemów sprzętowych i programowych",
                                "Praktyczna znajomość podstaw zarządzania bazami danych i zasad ich projektowania"
                            ]}
            />

        </div>
    )

}

export default Education;
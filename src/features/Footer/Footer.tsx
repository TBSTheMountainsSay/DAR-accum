import styles from "./Footer.module.scss"
import logo from "src/assets/images/logo.png";
import CustomTitle from "../../components/CustomTitle/CustomTitle.tsx";

const Footer = () => {

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
        } catch (err) {
            console.error("Ошибка копирования:", err)
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.leftBar}>
                    <CustomTitle text={"Наши партнёры:"} type={"title"}/>
                    <div className={styles.partnersWrapper}>
                        <CustomTitle text={"• Сеть магазинов Лемана Про"} type={"text"}/>
                        <CustomTitle text={"• Группа компаний РОСТ"} type={"text"}/>
                        <CustomTitle text={"• Сеть магазинов Добрострой"} type={"text"}/>
                        <CustomTitle text={"• АО птицефабрика Краснодонская"} type={"text"}/>
                        <CustomTitle text={"• Волгоградский керамический завод"} type={"text"}/>
                        <CustomTitle text={"• ООО Арбитр"} type={"text"}/>
                        <CustomTitle text={"• ООО Агрофарт"} type={"text"}/>
                        <CustomTitle text={"• ООО Агросинтез"} type={"text"}/>
                        <CustomTitle text={"• ООО Агрофреш"} type={"text"}/>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <CustomTitle text={"Наши контакты:"} type={"title"}/>
                    <CustomTitle text={"И.П. Домрачева Диана Сергеевна"} type={"text"}/>
                    <CustomTitle text={"Город-Герой Волгоград: 8 (982) 884-51-21"} type={"text"} onClick={() => handleCopy("8 (982) 884-51-21")}/>
                    <CustomTitle text={"Город-Герой Новороссийск: 8 (912) 012-72-90"} type={"text"} onClick={() => handleCopy("8 (912) 012-72-90")}/>
                    <CustomTitle text={"DAR_ServisAKB@mail.ru"} type={"text"} onClick={() => handleCopy("DAR_ServisAKB@mail.ru")}/>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.logoWrapper}>
                    <img src={logo as string} alt={"Logo"} className={styles.image}/>
                    <CustomTitle text={"С уважением к Вам и Вашему делу!"} type={"text"}/>
                </div>
                <CustomTitle text={"© 2024-2025 ИП Домрачева Д.С. | Компания «ДАР»"} type={"text"}/>
            </div>
        </div>
    );
};

export default Footer;
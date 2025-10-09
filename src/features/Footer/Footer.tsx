import styles from "./Footer.module.scss"
import logo from "../../assets/images/logo.png";
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
                <div className={styles.logoWrapper}>
                    <img src={logo as string} alt={"Logo"} className={styles.image}/>
                    <CustomTitle text={"С уважением к Вам и Вашему делу!"} type={"title"}/>
                </div>
                <div className={styles.contacts}>
                    <CustomTitle text={"И.П. Домрачева Диана Сергеевна"} type={"text"}/>
                    <CustomTitle text={"Город-Герой Волгоград: 8 (982) 884-51-21"} type={"text"} onClick={() => handleCopy("8 (982) 884-51-21")}/>
                    <CustomTitle text={"Город-Герой Новороссийск: 8 (912) 012-72-90"} type={"text"} onClick={() => handleCopy("8 (912) 012-72-90")}/>
                    <CustomTitle text={"DAR_ServisAKB@mail.ru"} type={"text"} onClick={() => handleCopy("DAR_ServisAKB@mail.ru")}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
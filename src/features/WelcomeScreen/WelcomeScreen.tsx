import styles from "./WelcomeScreen.module.scss"
import logo from "../../assets/images/logo.png"
import CustomTitle from "../../components/CustomTitle/CustomTitle.tsx";

const WelcomeScreen = () => {

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
        } catch (err) {
            console.error("Ошибка копирования:", err)
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <CustomTitle text={"Волгоград: 8 (982) 884-51-21"} type={"text"} onClick={() => handleCopy("8 (982) 884-51-21")}/>
                <CustomTitle text={"Новороссийск: 8 (912) 012-72-90"} type={"text"} onClick={() => handleCopy("8 (912) 012-72-90")}/>
                <CustomTitle text={"DAR_ServisAKB@mail.ru"} type={"text"} onClick={() => handleCopy("DAR_ServisAKB@mail.ru")}/>
            </div>
            <div className={styles.content}>
                <img src={logo as string} alt={"Logo"} className={styles.image}/>
                <div className={styles.mainTitleWrapper}>
                    <div>
                        ДОМ
                    </div>
                    <div>
                        АККУМУЛЯТОРНЫХ
                    </div>
                    <div>
                        РЕГЕНЕРАЦИЙ
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
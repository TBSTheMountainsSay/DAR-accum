import styles from "./WelcomeScreen.module.scss"
import logo from "../../assets/images/logo.png"

const WelcomeScreen = () => {
    return (
        <div className={styles.wrapper}>
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
    );
};

export default WelcomeScreen;
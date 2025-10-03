import styles from "./WelcomeScreen.module.scss"

const WelcomeScreen = () => {
    return (
        <div className={styles.wrapper}>
            <img src={'src/assets/png/logo.png'} alt={"Logo"} className={styles.image}/>
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
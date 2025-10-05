import styles from "./ExampleOfProblems.module.scss"
import CustomTitle from "../../components/CustomTitle/CustomTitle.tsx";
import InfoBrick from "../../components/InfoBrick/InfoBrick.tsx";

const ExampleOfProblems = () => {
    return (
        <div className={styles.wrapper}>
            <CustomTitle text={"ОСНОВНЫЕ ПРОБЛЕМЫ ЛЮБЫХ АККУМУЛЯТОРНЫХ БАТАРЕЙ"} type={"title"}/>
            <CustomTitle text={"Потеря ёмкости и сокращение срока службы из‑за химических реакций и деградации элементов — главные вызовы для аккумуляторных батарей."} type={"text"}/>
            <div className={styles.bricksWrapper}>
                <CustomTitle text={"Типичные проблемы аккумуляторов:"} type={"text"}/>
                <div className={styles.bricks}>
                    <InfoBrick iconName={"service"}>
                        Окисление контактной группы, короба АКБ — в результате взаимодействия с агрессивной средой и отсутствием качественного технического обслуживания
                    </InfoBrick>
                    <InfoBrick iconName={"screw"}>
                        Прослабленные болтовые соединения — в результате постоянных вибраций при эксплуатации складского оборудования и отсутствия качественного технического обслуживания
                    </InfoBrick>
                    <InfoBrick iconName={"lowBattery"}>
                        Низкий уровень электролита — в следствии отсутствия контроля
                    </InfoBrick>
                    <InfoBrick iconName={'batteryAlert'}>
                        - Недозаряд АКБ — результат неправильного технического обслуживания. <br />
                        - Глубокий разряд АКБ — в результате неправильной эксплуатации
                    </InfoBrick>
                </div>
            </div>
        </div>
    );
};

export default ExampleOfProblems;
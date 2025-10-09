import styles from "./Consequences.module.scss"
import CustomTitle from "../../components/CustomTitle/CustomTitle.tsx";
import InfoBrick from "../../components/InfoBrick/InfoBrick.tsx";

const Consequences = () => {
    return (
        <div className={styles.wrapper}>
            <CustomTitle text={"ПОСЛЕДСТВИЯ ОТСУТСТВИЯ ТЕХНИЧЕСКОГО ОБСЛУЖИВАНИЯ"} type={"title"}/>
            <div className={styles.bricksWrapper}>
                <div className={styles.bricks}>
                    <InfoBrick iconName={"service"} title={'Окись и аккумулятор'}>
                        Многие даже не подозревают, что окись в любом ее проявлении хуже проводит электроток к активному веществу пластин, повышает внутреннее сопротивление и уменьшает стойкость аккумулятора к высоким токам разряда‑заряда, в результате Вы получаете недозаряд АКБ и ускоренные темпы роста кристаллов сульфата на рабочей поверхности пластин.
                    </InfoBrick>
                    <InfoBrick iconName={"screw"} title={'Очистка элементов аккумулятора'}>
                        Качественная очистка каждого элемента аккумулятора является одной из важнейших процедур в нашей работе.
                    </InfoBrick>
                </div>
            </div>
        </div>
    );
};

export default Consequences;
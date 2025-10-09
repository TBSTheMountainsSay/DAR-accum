import styles from "./BeforeAfter.module.scss"
import CustomTitle from "../../components/CustomTitle/CustomTitle.tsx";
import ReactCompareImage from "react-compare-image";
import beforeImg from "../../assets/images/before.jpg"
import afterImg from "../../assets/images/after.jpg"
import beforeImg2 from "../../assets/images/before2.jpg"
import afterImg2 from "../../assets/images/after2.jpg"
import InfoBrick from "../../components/InfoBrick/InfoBrick.tsx";
import clsx from "clsx";

const BeforeAfter = () => {
    return (
        <div className={styles.wrapper}>
            <CustomTitle text={"ПРИМЕРЫ ВОССТАНОВЛЕНИЯ АКБ"} type={'title'}/>
            <div className={styles.compareImgWrapper}>
                <div className={styles.compareImg}>
                    <ReactCompareImage
                        leftImage={beforeImg as string}
                        rightImage={afterImg as string}
                        sliderLineWidth={3}
                    />
                </div>
                <div className={styles.infoBlocks}>
                    <InfoBrick iconName={"restore"} title={'Исправлен дефект корпуса'}>
                        Была устранена утечка электролита, очищена и восстановлена внутренняя поверхность корпуса.
                        Повреждённые участки защитного слоя обработаны и покрыты новым антикоррозийным покрытием, что
                        полностью восстановило защиту от воздействия электролита.
                    </InfoBrick>
                    <InfoBrick iconName={"electricFork"} title={'Восстановлена электрическая цепь'}>
                        Были восстановлены элементы цепи и нормализовано напряжение.Проведена замена поврежденных
                        компонентов аккумуляторной батареи и проверка стабильности работы методом диагностирования
                        мирового стандарта С5.Электрическая цепь полностью восстановлена и функционирует в допустимом
                        диапазоне напряжений.
                    </InfoBrick>
                </div>
            </div>
            <div className={clsx(styles.compareImgWrapper, styles.revert)}>
                <div className={styles.infoBlocks}>
                    <InfoBrick iconName={"service"} title={'Устранена окись элементов АКБ'}>
                        Удалена окись и восстановлена проводимость тока. Снижено внутреннее сопротивление. Повышена
                        эффективность заряд-разрядных циклов. Ёмоксть аккумулятора была восстановлена с 2% до 60%.
                    </InfoBrick>
                    <InfoBrick iconName={"brush"} title={'Очистка элементов аккумулятора'}>
                        Проведена глубокая очистка всех элементов.
                        Удалены следы загрязнений и коррозии.
                        Обеспечена надёжная работа аккумулятора на длительный срок.
                    </InfoBrick>
                </div>
                <div className={styles.compareImg}>
                    <ReactCompareImage
                        leftImage={beforeImg2 as string}
                        rightImage={afterImg2 as string}
                        sliderLineWidth={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default BeforeAfter;
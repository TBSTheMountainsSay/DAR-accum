import styles from "./Conclusion.module.scss"
import CustomTitle from "../../components/CustomTitle/CustomTitle.tsx";

const Conclusion = () => {
    return (
        <div className={styles.wrapper}>
            <CustomTitle text={"ОТ ПРОБЛЕМЫ К РЕШЕНИЮ"} type={"title"}/>
            <CustomTitle
                text={"Если вы заметили у своего аккумулятора следующие признаки:"}
                type={"text"}
            />
            <div className={styles.list}>
                <h3 className={styles.listItem}>– Быстрое повышение напряжения при заряде</h3>
                <h3 className={styles.listItem}>– Плотность электролита почти не меняется</h3>
                <h3 className={styles.listItem}>– Быстрый нагрев аккумулятора</h3>
                <h3 className={styles.listItem}>– Обильное газовыделение</h3>
                <h3 className={styles.listItem}>– Потеря ёмкости и разрушение пластин</h3>
                <h3 className={styles.listItem}>– Шлам, вызывающий короткое замыкание</h3>
            </div>

            <div className={styles.conclusion}>
                <CustomTitle
                    text={"Все эти признаки говорят о необходимости срочного обслуживания. Чем раньше вы обратитесь — тем выше шанс полностью восстановить аккумулятор."}
                    type={"text"}
                />
                <CustomTitle
                    text={"Мы выполняем глубокое восстановление АКБ с применением специализированного оборудования. На аккумулятор подаётся серия импульсов, вызывающих резонанс в кристаллической решётке сульфата. В результате высокочастотного воздействия разрушаются кристаллы сульфата, мешающие нормальной работе АКБ."}
                    type={"text"}
                />
                <CustomTitle
                    text={"Эта технология позволяет вернуть к жизни даже списанные аккумуляторы и продлить срок их службы. Мы используем проверенные методы и современное оборудование, чтобы ваши АКБ снова работали как новые."}
                    type={"text"}
                />
            </div>
        </div>
    );
};

export default Conclusion;
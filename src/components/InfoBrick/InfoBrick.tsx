import styles from "./InfoBrick.module.scss"
import SvgSelector from "../../assets/SvgSelector.tsx";
import clsx from "clsx";

interface InfoBrickProps {
    children: React.ReactNode
    title?: string | null
    iconName?: string
}

const InfoBrick = ({children, title = null, iconName}: InfoBrickProps) => {
    return (
        <div className={clsx(styles.wrapper, {[styles.wrapperWithTitle]: !!title})}>
            <div className={styles.wrapperHeader}>
                {iconName && (
                    <div className={styles.iconWrapper}>
                        <SvgSelector className={styles.icon} id={iconName as any || 'placeholder'}/>
                    </div>
                )}
                {title && (
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                )}
            </div>
            <h1 className={styles.text}>
                {children}
            </h1>
        </div>
    )
}

export default InfoBrick;
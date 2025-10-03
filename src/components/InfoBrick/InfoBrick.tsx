import styles from "./InfoBrick.module.scss"
import SvgSelector from "../../assets/SvgSelector.tsx";
import React from "react";

interface InfoBrickProps {
    children: React.ReactNode
    iconName?: string
}

const InfoBrick = ({ children, iconName }: InfoBrickProps) => {
    return (
        <div className={styles.wrapper}>
            {iconName && (
                <h2 className={styles.iconWrapper}>
                    <SvgSelector className={styles.icon} id={iconName || 'placeholder'} />
                </h2>
            )}
            <h1 className={styles.title}>
                {children}
            </h1>
        </div>
    )
}

export default InfoBrick;
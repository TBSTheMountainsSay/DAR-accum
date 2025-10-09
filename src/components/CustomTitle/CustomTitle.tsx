import styles from "./CustomTitle.module.scss"
import clsx from "clsx";
import React from "react";

interface CustomTitleProps {
    text: string;
    type: "title" | "text";
    onClick?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
}

const CustomTitle = ({ text, type, onClick }: CustomTitleProps) => {
    const clickable = Boolean(onClick)

    const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
        if (onClick) onClick(event)
    }

    if (type === "title") {
        return (
            <h1
                className={clsx(styles.title, { [styles.pointer]: clickable })}
                onClick={handleClick}
            >
                {text}
            </h1>
        );
    }

    return (
        <h2
            className={clsx(styles.text, { [styles.pointer]: clickable })}
            onClick={handleClick}
        >
            {text}
        </h2>
    );
};

export default CustomTitle;
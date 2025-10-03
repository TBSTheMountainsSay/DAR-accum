import styles from "./CustomTitle.module.scss"

interface ExampleProps {
    text: string
    type: 'title' | 'text'
}

const CustomTitle = ({
                         text, type
                     }: ExampleProps) => {
    return (
        <>
            {type === 'title' &&
                <h1 className={styles.title}>
                    {text}
                </h1>
            }
            {type === 'text' &&
                <h2 className={styles.text}>
                    {text}
                </h2>
            }
        </>
    )
}

export default CustomTitle;
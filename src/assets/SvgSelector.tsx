import React, { CSSProperties } from 'react'

const svgCreator = (className?: string, style?: CSSProperties) => ({
    placeholder: (
        <svg className={className} style={style} viewBox="0 0 14 14">
            <path
                d="M12.25 1.75V12.25H1.75V1.75H12.25ZM12.25 0.25H1.75C0.925 0.25 0.25 0.925 0.25 1.75V12.25C0.25 13.075 0.925 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V1.75C13.75 0.925 13.075 0.25 12.25 0.25ZM8.605 6.895L6.355 9.7975L4.75 7.855L2.5 10.75H11.5L8.605 6.895Z"
                fill="#FDFDFD"
            />
        </svg>
    ),
    lowBattery: (
        <svg className={className} style={style} viewBox="0 0 24 24">
            <path
                d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v14h6z"></path>
        </svg>
    ),
    batteryAlert: (
        <svg className={className} style={style} viewBox="0 0 24 24">
            <path
                d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4M13 18h-2v-2h2zm0-4h-2V9h2z"></path>
        </svg>
    ),
    screw: (
        <svg className={className} style={style} viewBox="0 0 24 24">
            <path
                d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41"></path>
            <path
                d="m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15z"></path>
        </svg>
    ),
    service: (
        <svg className={className} style={style} viewBox="0 0 24 24">
            <path
                d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5m3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z"></path>
        </svg>
    )
})

export type IconId = keyof ReturnType<typeof svgCreator>

export interface SvgSelectorProps {
    id: IconId
    className?: string
    style?: CSSProperties
}

const SvgSelector: React.FC<SvgSelectorProps> = ({id, className, style}) => {
    const svgMap = svgCreator(className, style)

    if (!(id in svgMap)) {
        console.warn(`Svg with id "${id}" doesn't exist`)
        return svgMap.placeholder
    }

    return svgMap[id]
}

export default SvgSelector

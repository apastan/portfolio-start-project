import React from 'react';
import iconSprite from "../../assets/images/icons-sprite.svg";


export type IconPropsType = {
    iconId: string
    width: string;
    height: string;
    viewBox: string;
    fill?: string;
}

export function Icon(props: IconPropsType) {

    const {iconId, width, height, viewBox, fill} = props;

    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill || "#666"} aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${iconId}`}/>
        </svg>
    );
}
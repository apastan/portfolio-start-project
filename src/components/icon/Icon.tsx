import React from 'react';
import iconSprite from "../../assets/images/icons-sprite.svg";


type IconPropsType = {
    iconId: string
    width: string;
    height: string;
    viewBox: string;
}

export function Icon(props: IconPropsType) {

    const {iconId, width, height, viewBox} = props;

    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${iconId}`}/>
        </svg>
    );
}
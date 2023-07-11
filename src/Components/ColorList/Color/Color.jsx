import { useEffect, useRef } from "react";
import s from './Color.module.scss';
import cn from "classnames";

const Color = ({ color, check }) => {
    const colorRef = useRef(null);
    useEffect(() => {
        colorRef.current.style.setProperty('--data-color', color);
    }, color)


    return (
        <li ref={colorRef} className={cn(s.color, check ? s.colotCheck : '')} style={{ '--data-color': color }} >
        </li>
    )
}

export default Color;
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";
import {Button} from "@material-ui/core";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    error?: string
    onClick: () => void

}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        error, className, onClick, color,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = error ? "secondary" : 'primary';//,

    return (
        <Button variant="contained" color={finalClassName} onClick={onClick} style={{margin: "10px 0px"}}
            //  {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >PUSH </Button>
    );
}

export default SuperButton;

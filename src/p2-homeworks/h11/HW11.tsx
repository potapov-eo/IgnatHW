import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {themeType} from "../h12/bll/themeReducer";
import s from "../h12/HW12.module.css";

function HW11() {
    const [value1, setValue1] = useState(50);

    const [value2, setValue2] = useState(60);
    const theme = useSelector<AppStoreType, themeType>(state => state.theme.themes)
    const onChangeRange = (val: number) => setValue1(val)
    const onChangeDoubleRange = ([val1, val2]: Array<number>) => {
        setValue1(val1)
        setValue2(val2)
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
            homeworks 11
            </span>
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <div><SuperRange
                    onChangeRange={onChangeRange}
                    value1={value1}
                    // сделать так чтоб value1 изменялось
                /></div>
            </div>

            <div>
                <span> </span>
                <span>{value1}</span>
                <div><SuperDoubleRange
                    value1={value1}
                    value2={value2}


                    onChangeRange={onChangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                /></div>
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;

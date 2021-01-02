import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC, themeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, themeType>(state => state.theme.themes)
    const onChangeOption = (theme: themeType) => {
        dispatch(changeThemeAC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks
            </span>
            <SuperRadio
                options={themes}
                onChangeOption={onChangeOption}
                value={theme}
            />
            <hr/>
        </div>
    );
}

export default HW12;

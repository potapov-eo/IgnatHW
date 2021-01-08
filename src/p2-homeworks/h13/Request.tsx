import React, {ChangeEvent, useCallback} from "react";

import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {setSuccessAC, setSuccessTC} from "./auth-reducer";
import Preloader from "../h10/bll/preloader";

function Request() {
    const success = useSelector<AppStoreType, boolean>(state => state.auth.success)
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const error = useSelector<AppStoreType, string>(state => state.auth.error)
    const dispatch = useDispatch()

    const onChangeCheckedCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSuccessAC(e.currentTarget.checked))
          },[])
    const onClickHandler = () => {
        dispatch(setSuccessTC(success))
    }
    return (
        <div>

            {loading
                ? (
                    <Preloader/>
                ) : (<div>
                    <SuperCheckbox checked={success} onChange={onChangeCheckedCallback}> </SuperCheckbox>
                    <SuperButton
                        onClick={onClickHandler}
                        name={"push"}
                        size={"medium"} />
                </div>)
            }
            {error&&<div>
            {error}
            </div>}


        </div>
    );
}

export default Request;
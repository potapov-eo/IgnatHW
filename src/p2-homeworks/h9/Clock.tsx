import React, {useEffect, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
const style= {
    backgroundColor: "#1affb2",
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    border:"2px solid black"
}

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const get2digitString = (num: number) => num < 10 ? "0" + num : num
    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = get2digitString(date?.getHours()) + ":"
        + get2digitString(date?.getMinutes()) + ":"
        + get2digitString(date?.getSeconds()); // fix with date
    const stringDate = date?.toDateString(); // fix with date

   // при выходе из компоненты зачищаем setInterval
    useEffect(() => {
            return stop()
        }
        , [])

    return (
        <div>
            <div style={{  backgroundColor: "#1affb2", width: "200px",  marginLeft: "auto", marginRight: "auto",fontWeight: "bold", border:"2px solid black"}}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                TIME: {stringTime}
            </div>

            {show && (
                <div>
                    DATE: {stringDate}
                </div>
            )}
            <SuperButton
                onClick={start}
                name={"start"}    />
            <SuperButton
                onClick={stop}
                name={"stop"}    />
            {/*<button onClick={start}>start</button>
            <button onClick={stop}>stop</button>*/}

        </div>
    );
}

export default Clock;

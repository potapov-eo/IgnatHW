import React, {useState} from "react";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const get2digitString = (num:number) => num < 10 ? "0" + num : num
    const stop = () => {
        clearInterval(timerId,)
    }
    const start = () => {
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

  /*  const stringTime = "Time"; // fix with date
    const stringDate = "Date"; // fix with date
*/
    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                TIME: {get2digitString(date?.getHours()) + ":"
            + get2digitString(date?.getMinutes()) + ":"
            + get2digitString(date?.getSeconds())}
            </div>

            {show && (
                <div>
                    DATE: {date?.toDateString()}
                </div>
            )}

            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>

        </div>
    );
}

export default Clock;

import React from "react";
import s from'./Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: PropsType) {

    return (
        <div className={s.message}>
            <div className={s.avatarArea} >
                <img className={s.avatar} src={props.avatar}/>
            </div>
            <div className={s.containerMessage}>
                <div className={s.name}> {props.name}</div>
                <div className={s.messages}> {props.message}</div>
                <div className={s.time}>   {props.time}</div>
            </div>

        </div>

    )
    ;
}


export default Message;

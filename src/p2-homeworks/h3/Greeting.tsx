import React, {useState, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    // need to fix with (?:)

    const onPressHandler = ((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
    })
    const classNameError = () => (error !== "") ? s.inputClassError : s.inputClass
    return (
        <div className={s.inputArea}>
            <div> Return name:</div>
            <input value={name} onChange={setNameCallback}
                   onKeyPress={onPressHandler}
                   className={classNameError()}/>
            <button onClick={addUser}>add
            </button>

            {error !== "" && <div className={s.error}>{error}</div>}
            <div> Number of Users = {totalUsers}</div>
        </div>

    );
}

export default Greeting;

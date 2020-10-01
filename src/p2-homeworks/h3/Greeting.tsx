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

    /*const inputClassName=()=>name.length > 0 ? inputClass2 : inputClass*/
    const onPressHandler = ((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
    })
    /*    debugger*//*console.log({errorClass})*/
    return (
        <div className={s.inputArea}>
            <div> Return name:</div>
            <input value={name} onChange={setNameCallback}
                   onKeyPress={onPressHandler}
                   className={(error !== "") ? s.inputClassError : s.inputClass}/>


            <button onClick={() => {
                addUser()
            }}>add
            </button>

            {error !== "" && <div className={s.error}>{error}</div>}
            <div> Number of Users = {totalUsers}</div>
        </div>

    );
}

export default Greeting;

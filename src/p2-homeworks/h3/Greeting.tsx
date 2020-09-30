import React, {useState} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    addUser: ()=>void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error; // need to fix with (?:)
    const inputClass2 = s.someClass;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={name.length>0? inputClass2 : inputClass   }/>
            <button onClick={()=>{addUser()} } >add</button>
            <span>{error}</span>
            <span>   Number of Users = {totalUsers}</span>
        </div>
    );
}

export default Greeting;

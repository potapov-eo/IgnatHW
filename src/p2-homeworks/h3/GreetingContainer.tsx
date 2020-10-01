import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<any>("")
    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };


    const addUser = () => {
        if (name.length > 1) {
            addUserCallback(name)
            alert(`Hello ${name} !`); // need to fix
            setName("")
            setError("")
        } else {
            setError("the name cannot be shorter than two letters, please enter the correct name")
        }
    };

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}


        />
    );
}

export default GreetingContainer;

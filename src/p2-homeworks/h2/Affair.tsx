import React from "react";
import {AffairType} from './HW2';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
/*import any = jasmine.any;*/

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (x:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = props.deleteAffairCallback;// need to fix

    return (
        <div style={{  backgroundColor: "#1affb2", width: "500px",  marginLeft: "auto", marginRight: "auto",fontWeight: "bold", border:"1px solid black"}}>
            {props.affair._id} {props.affair.name} {props.affair.priority}


            <SuperButton
                size={"small"}
                onClick={() => deleteCallback(props.affair._id)}
                name={"X"}    />

           {/* <button onClick={() => {
                deleteCallback(props.affair._id)
            }}>X
            </button>*/}
        </div>
    );
}

export default Affair;

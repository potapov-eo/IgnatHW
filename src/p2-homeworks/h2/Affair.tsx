import React from "react";
import {AffairType} from './HW2';
/*import any = jasmine.any;*/

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (any) // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = props.deleteAffairCallback;// need to fix

    return (
        <div>
            {props.affair._id} {props.affair.name} {props.affair.priority}

            <button onClick={() => {
                deleteCallback(props.affair._id)
            }}>X
            </button>
        </div>
    );
}

export default Affair;

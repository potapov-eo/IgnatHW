import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import Select from '@material-ui/core/Select';
import {NativeSelect} from "@material-ui/core";


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: any[]
    onChangeOption: (option: any) => void
    value:any
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions=options.map(i=><option key={i}>{i}</option>) // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value)// onChange, onChangeOption
          }


    return (
        // @ts-ignore
        <NativeSelect  native value={value} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </NativeSelect>
    );
}

export default SuperSelect;

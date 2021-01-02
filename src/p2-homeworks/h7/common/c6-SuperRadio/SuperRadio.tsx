import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import {withStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import Radio, {RadioProps} from '@material-ui/core/Radio';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    value?: any
}
const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChangeOption&&onChangeOption(e.currentTarget.name)// onChange, onChangeOption

    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + "-" + i}>
            <Radio
                checked={value === o}
                onChange={onChangeCallback}
                value={o}
                name={o}
                color='primary'
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;

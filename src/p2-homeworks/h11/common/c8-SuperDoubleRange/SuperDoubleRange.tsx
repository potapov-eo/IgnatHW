import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: "auto"
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value1?: number[]
    startValue1: number
    startValue2: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        startValue1, startValue2,
        onChangeRange, value1,
        // min, max, step, disable, ...

        ...restProps
    }
) => {

    // сделать самому, можно подключать библиотеки


    const [value, setValue] = React.useState<number[]>([startValue1, startValue2]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        onChangeRange && onChangeRange(newValue as number[])
    };

    const classes = useStyles();
    return (

            <div className={classes.root}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            </div>

    );
}

export default SuperDoubleRange;

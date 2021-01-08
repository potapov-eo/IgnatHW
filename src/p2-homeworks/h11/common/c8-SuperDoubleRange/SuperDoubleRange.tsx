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
    value1: number
    value2: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChangeRange, value1,value2,
        // min, max, step, disable, ...

        ...restProps
    }
) => {

    // сделать самому, можно подключать библиотеки


    /*const [value, setValue] = React.useState<number[]>([startValue1, startValue2]);*/


    const handleChange = (event: any, newValue: number | number[]) => {
       /* setValue(newValue as number[]);*/
        onChangeRange && onChangeRange(newValue as number[])
    };

    const classes = useStyles();
    return (

            <div className={classes.root}>
                <Slider
                    value={[value1,value2]}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            </div>

    );
}

export default SuperDoubleRange;

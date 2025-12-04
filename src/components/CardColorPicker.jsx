import * as React from 'react';
import { amber, pink, purple } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

function CardColorPicker({radioColor,setRadioColor}){

    const handleChange = (event) => {
        setRadioColor(event.target.value);
    };

    const controlProps = (item) => ({
        checked: radioColor === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });


    return(
        <div>
        <Radio
            {...controlProps('amber')}
            sx={{
            '& .MuiSvgIcon-root': {
            fontSize: 28,
            fontWeight : "bolder",
            },
            color: amber[100],
            '&.Mui-checked': {
                color: amber[100],
            },
            }}
        />
        <Radio
            {...controlProps('darkBlue')}
            sx={{
            '& .MuiSvgIcon-root': {
            fontSize: 28,
            fontWeight : "bolder",
            },
            color: '#1c1b5dff',
            '&.Mui-checked': {
                color: "#1c1b5dff",
            },
            }}
        />
        <Radio
            {...controlProps('aqua')}
            sx={{
            '& .MuiSvgIcon-root': {
            fontSize: 28,
            fontWeight : "bolder",
            },
            color: '#5cebdfff',
            '&.Mui-checked': {
                color: "#5cebdfff",
            },
            }}
        />
        <Radio
            {...controlProps('purple')}
            sx={{
            '& .MuiSvgIcon-root': {
            fontSize: 28,
            fontWeight : "bolder",
            },
            color: purple[800],
            '&.Mui-checked': {
                color: purple[600],
            },
            }}
        />
        <Radio
            defaultChecked
            {...controlProps('pink')}
            sx={{
            '& .MuiSvgIcon-root': {
            fontSize: 28,
            fontWeight : "bolder",
            },
            color: pink[800],
            '&.Mui-checked': {
                color: pink[600],
            },
            }}
        />
        </div>
    )
}
export default CardColorPicker;
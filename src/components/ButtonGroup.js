import React from 'react';
import {
    StyledButtonGroup,
    StyledButton,
    StyledDiv,
} from './ButtonGroup.styles';
import { Add, Remove } from '@mui/icons-material';
import { useTimeData } from '../state';

export const ButtonGroup = ({ id, length }) => {
    const { time, setTime } = useTimeData();
    return (
        <StyledButtonGroup
            variant="contained"
            disabled={time.running === false ? false : true}
        >
            <StyledButton
                id={`${id}-decrement`}
                onClick={() => setTime({ type: 'DECREMENT', payload: id })}
            >
                <Remove />
            </StyledButton>
            <StyledDiv id={`${id}-length`}>{length}</StyledDiv>
            <StyledButton
                id={`${id}-increment`}
                onClick={() => setTime({ type: 'INCREMENT', payload: id })}
            >
                <Add />
            </StyledButton>
        </StyledButtonGroup>
    );
};

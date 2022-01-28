import React from 'react';
import { Background, StyledDiv } from './Display.styles';
import { useTimeData } from '../state';

const convertToTime = (sec) => {
    let minutes = Math.floor(sec / 60);
    let seconds = sec - minutes * 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
};

export const Display = () => {
    let { time } = useTimeData();
    return (
        <Background>
            <StyledDiv id="timer-label">{time.timer}</StyledDiv>
            <StyledDiv id="time-left">
                {time.sessionLeft === -1
                    ? convertToTime(time.breakLeft)
                    : convertToTime(time.sessionLeft)}
            </StyledDiv>
        </Background>
    );
};

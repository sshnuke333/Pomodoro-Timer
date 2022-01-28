import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { ButtonGroup } from './components/ButtonGroup';
import { Title } from './App.styles';
import { Display } from './components/Display';
import { useTimeData } from './state';

export default function App() {
    const { time, setTime } = useTimeData();

    useEffect(() => {
        if (time.running === true) {
            let timerInterval = setInterval(
                () => setTime({ type: 'START_TIMER' }),
                1000
            );
            return () => clearInterval(timerInterval);
        }
    }, [time.running]);

    useEffect(() => {
        const audio = document.getElementById('beep');
        setTime({ type: 'MOUNT_AUDIO', payload: audio });
    }, [time.audio]);
    return (
        <>
            <Grid
                container
                spacing={0.5}
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <Title id="break-label">Break Length</Title>
                    <ButtonGroup id="break" length={time.break} />
                </Grid>
                <Grid item xs={6}>
                    <Title id="session-label">Session Length</Title>
                    <ButtonGroup id="session" length={time.session} />
                </Grid>
                <Grid item xs={6}>
                    <Title id="timer-label">{time.timer}</Title>
                    <Display />
                </Grid>
            </Grid>
            <button
                id="start_stop"
                onClick={() => setTime({ type: 'TOGGLE_PLAY' })}
            >
                PLAY/PAUSE
            </button>
            <button id="reset" onClick={() => setTime({ type: 'RESET' })}>
                reset
            </button>
            <audio
                id="beep"
                preload="auto"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                style={{ display: 'hidden' }}
            ></audio>
        </>
    );
}

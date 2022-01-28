import React, { useEffect } from 'react';
import { useTimeData } from '../state';
import { ControlButton, Play, Pause, Reset } from './controls.styles';

export const Controls = () => {
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
        <div id="controls" style={{ justifySelf: 'center' }}>
            <ControlButton
                id="start_stop"
                onClick={() => setTime({ type: 'TOGGLE_PLAY' })}
            >
                <Play disabled={time.running} />
                <Pause disabled={!time.running} />
            </ControlButton>
            <ControlButton
                id="reset"
                onClick={() => setTime({ type: 'RESET' })}
            >
                <Reset />
            </ControlButton>
            <audio
                id="beep"
                preload="auto"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                style={{ display: 'hidden' }}
            ></audio>
        </div>
    );
};

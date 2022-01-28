import React, { useReducer, createContext, useContext } from 'react';

const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    TOGGLE_PLAY: 'TOGGLE_PLAY',
    RESET: 'RESET',
    START_TIMER: 'START_TIMER',
    MOUNT_AUDIO: 'MOUNT_AUDIO',
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.INCREMENT:
            if (payload === 'break')
                return {
                    ...state,
                    break: state.break != 60 ? state.break + 1 : 60,
                };
            if (payload === 'session')
                return {
                    ...state,
                    session: state.session != 60 ? state.session + 1 : 60,
                    sessionLeft:
                        state.session != 60 ? state.sessionLeft + 60 : 3600,
                };
            break;

        case ACTIONS.DECREMENT:
            if (payload === 'break')
                return {
                    ...state,
                    break: state.break != 1 ? state.break - 1 : 1,
                };
            if (payload === 'session')
                return {
                    ...state,
                    session: state.session != 1 ? state.session - 1 : 1,
                    sessionLeft:
                        state.session != 1 ? state.sessionLeft - 60 : 60,
                };
            break;

        case ACTIONS.TOGGLE_PLAY:
            return {
                ...state,
                breakLeft: state.break * 60,
                running: !state.running,
            };
            break;

        case ACTIONS.START_TIMER:
            if (state.sessionLeft === -1 && state.breakLeft != 0) {
                return {
                    ...state,
                    breakLeft: state.breakLeft - 1,
                };
            }
            if (state.breakLeft === 0) {
                return {
                    ...state,
                    sessionLeft: state.session * 60,
                    breakLeft: state.break * 60,
                    timer: 'session',
                    running: true,
                };
            }
            if (state.audio != '' && state.sessionLeft === 1) {
                state.audio.play();
            }
            return {
                ...state,
                sessionLeft: state.sessionLeft - 1,
                timer: state.sessionLeft - 1 === 0 ? 'break' : state.timer,
            };
            break;

        case ACTIONS.RESET:
            if (state.audio != '') {
                state.audio.pause();
                state.audio.currentTime = 0;
            }
            return { ...initialTime, audio: state.audio };
            break;

        case ACTIONS.MOUNT_AUDIO:
            return { ...state, audio: payload };
            break;
    }
};

const InputContext = createContext();

const initialTime = {
    session: 25,
    break: 5,
    sessionLeft: 1500,
    breakLeft: 300,
    timer: 'session',
    running: false,
    audio: '',
};

export const TimeProvider = ({ children }) => {
    const [time, setTime] = useReducer(reducer, initialTime);

    return (
        <InputContext.Provider value={{ time, setTime }}>
            {children}
        </InputContext.Provider>
    );
};

export const useTimeData = () => useContext(InputContext);

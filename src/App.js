import React from 'react';
import { useTimeData } from './state';
import { Cards, Title, Label } from './App.styles';
import { ButtonGroup } from './components/ButtonGroup';
import { Display } from './components/Display';
import { Controls } from './components/controls';

export default function App() {
    const { time } = useTimeData();

    return (
        <>
            <Cards>
                <Label>
                    <Title id="break-label">Break Length</Title>
                    <ButtonGroup id="break" length={time.break} />
                </Label>
                <Label>
                    <Title id="session-label">Session Length</Title>
                    <ButtonGroup id="session" length={time.session} />
                </Label>
            </Cards>
            <Display />
            <Controls />
        </>
    );
}

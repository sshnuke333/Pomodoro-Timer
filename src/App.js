import React from 'react';

export default function App() {
    let time = new Date('December 25, 1995 00:25:00');
    return (
        <>
            <div id="break-label">Break Length</div>;
            <button id="break-decrement"></button>
            <button id="break-increment"></button>
            <div id="session-label">Session Length</div>
            <button id="session-decrement"></button>
            <button id="session-increment"></button>
            <div id="break-length">5</div>
            <div id="session-length">25</div>
            <div id="session-label">Session Length</div>
            <div id="timer-label">Session</div>
            <time id="time-left" dateTime="00:25:00">
                {time.getMinutes()}:{time.getSeconds()}
            </time>
            <button id="start_stop"></button>
            <button id="reset"></button>
        </>
    );
}

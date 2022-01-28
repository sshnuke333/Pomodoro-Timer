import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './index.styles';
import { TimeProvider } from './state';
import App from './App';

render(
    <TimeProvider>
        <GlobalStyle />
        <App />
    </TimeProvider>,
    document.getElementById('root')
);

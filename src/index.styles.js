import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    background-color: #272829;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#root {
    width: 25rem;
    display: grid;
    grid-template-rows: 1fr 20rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}
`;

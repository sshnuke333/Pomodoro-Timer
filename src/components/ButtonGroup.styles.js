import { ButtonGroup, Button } from '@mui/material';
import styled from 'styled-components';

export const StyledButtonGroup = styled(ButtonGroup)`
    width: 10rem;
`;
export const StyledButton = styled(Button)`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 10%;
    background-color: coral;
    &:hover {
        background-color: #f8afa6;
    }
`;
export const StyledDiv = styled.div`
    width: 3rem;
    text-align: center;
    font-size: 2rem;
    background-color: #fadcd9;
    padding-top: 0.5rem;
`;

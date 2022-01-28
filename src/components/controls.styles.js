import {
    PlayCircleFilled,
    PauseCircleFilled,
    ChangeCircle,
} from '@mui/icons-material';
import styled from 'styled-components';

const dimensions = `width: 3.5rem;
height: 3.5rem;`;

export const ControlButton = styled.button`
    background: transparent;
    border: none;
`;

export const Play = styled(PlayCircleFilled)`
    display: ${(props) => (props.disabled === false ? 'inline-block' : 'none')};
    ${dimensions}
`;
export const Pause = styled(PauseCircleFilled)`
    display: ${(props) => (props.disabled === false ? 'inline-block' : 'none')};
    ${dimensions}
`;
export const Reset = styled(ChangeCircle)`
    ${dimensions}
`;

import styled from 'styled-components';

export const Title = styled.div`
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.25rem;
    color: coral;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 576px) {
        flex-direction: row;
    }
`;
export const Label = styled.div`
    text-align: center;
`;

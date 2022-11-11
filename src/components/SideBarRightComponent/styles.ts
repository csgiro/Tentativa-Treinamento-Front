import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: none;
    align-items: center;
    padding: 16px;
    gap: 8px;

    @media only screen and (min-width: 1580px) {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 16px;
        gap: 8px;
    }
`;

export const Text = styled.span`
    @media only screen and (min-width: 1580px) {
        font-size: 24px;
        flex-wrap: wrap;
        font-weight: bold;
        font-family: Fredoka;
    }
`;

export const IconeImg = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 120px;
`;

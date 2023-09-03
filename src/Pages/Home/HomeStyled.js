// StyledComponents.js

import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${props => props.background ? "#292A2D" : "#FFF"};
`;

export const Header = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 25px;
`;

export const ButtonContainer = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;    
    
    padding-inline: 25px;

    display: flex;
    align-items: center;

    gap: 15px;

    border-radius: 15px;

    background-color: #F1F1F1;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
`;

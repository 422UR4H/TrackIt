import React from 'react';
import styled from 'styled-components';

export default function Button({ text }) {
    return (
        <StyledButton>
            {text}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    background-color: #52B6FF;
    color: white;
    font-size: 21px;
    line-height: 26px;
    text-align: center;

    width: 303px;
    height: 45px;

    border: none;
    border-radius: 4.64px;
`;
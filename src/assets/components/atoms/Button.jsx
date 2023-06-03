import React from 'react';
import styled from 'styled-components';
import loading from '../../images/load.png';

export default function Button({ text, disabled }) {
    return (
        <StyledButton disabled={disabled}>
            {disabled ? <img src={loading} alt="..." /> : text}
        </StyledButton>
    );
}

Button.defaultProps = {
    disabled: false
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
    border-radius: 5px;

    &:disabled {
        opacity: 0.7;
        padding-top: 15px;
    }
`;
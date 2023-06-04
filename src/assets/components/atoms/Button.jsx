import styled from 'styled-components';
import load from '../../images/load.png';

export default function Button({ text, disabled, onClick }) {
    return (
        <StyledButton disabled={disabled} onClick={onClick}>
            {disabled ? <img src={load} alt="..." /> : text}
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
    }
`;
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function Button({ text, disabled, onClick, dataTest }) {
    return (
        <StyledButton disabled={disabled} onClick={onClick} data-test={dataTest}>
            {disabled ?
                <ThreeDots
                    height="50px"
                    width="50px"
                    color="white"
                    ariaLabel="three-dots-loading"
                    visible={true}
                /> : text}
        </StyledButton>
    );
}

Button.defaultProps = {
    disabled: false
};

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
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.7;
    }
`;
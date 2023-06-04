import styled from 'styled-components';
import checkImg from '../../images/check.svg';

export default function Check({ isChecked, setChecked }) {
    return (
        <StyledCheck isChecked={isChecked}>
            <button onClick={setChecked}>
                <img src={checkImg} alt={isChecked ? 'concluído' : 'não concluído'} />
            </button>
        </StyledCheck>
    );
}

const StyledCheck = styled.div`
    background-color: ${({ isChecked }) => isChecked ? '#8FC549' : '#EBEBEB'};
    height: 69px;
    width: 69px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        background-color: inherit;
        border: none;
    }
`;
import Check from '../atoms/Check';
import styled from 'styled-components';


export default function HabitHistoryContainer({ habit }) {
    const { name, done } = habit;

    return (
        <StyledHabisTodayContainer>
            <h3>{name}</h3>
            <Check isChecked={done} />
        </StyledHabisTodayContainer>
    );
}


const StyledHabisTodayContainer = styled.div`
    background-color: white;
    min-height: 69px;
    width: 340px;
    padding-left: 15px;
    padding-right: 13px;
    margin-bottom: 10px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: #666666;
        font-size: 20px;
        line-height: 25px;
    }

    div {
        width: 50px;
        height: 50px;
    }
`;
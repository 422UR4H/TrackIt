import { useContext } from 'react';
import { PercentContext } from '../../../scripts/PercentContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

export default function TodayButton() {
    const percent = useContext(PercentContext);

    return (
        <StyledTodayButton>
            <div>
                <CircularProgressbar
                    value={percent}
                    text={'Hoje'}
                    strokeWidth={10}
                    styles={buildStyles({
                        textSize: '22px',
                        textColor: 'white',
                        pathColor: 'white',
                        trailColor: '#52B6FF'
                    })}
                />
            </div>
        </StyledTodayButton>
    );
}

const StyledTodayButton = styled.div`
    background-color: #52B6FF;
    width: 91px;
    height: 91px;
    border-radius: 50%;

    position: absolute;
    bottom: 10px;
    left: calc(50% - 45px);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }

    div {
        background-color: inherit;
        border-radius: inherit;
        width: 79px;
    }
`;
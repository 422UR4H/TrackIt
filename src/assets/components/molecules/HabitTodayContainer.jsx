import axios from 'axios';
import Check from '../atoms/Check';
import styled from 'styled-components';
import URL from '../../../scripts/constants';
import { useContext } from 'react';
import { TokenContext } from '../../../scripts/TokenContext';
import { useState } from 'react';


export default function HabitTodayContainer({ habit, loadHabits }) {
    const { id, name, done, currentSequence, highestSequence } = habit;
    const token = useContext(TokenContext);

    function setChecked() {
        const check = done ? 'uncheck' : 'check';

        axios
            .post(URL.HABITS + `/${id}/${check}`, {}, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(({ data }) => {
                loadHabits();
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <StyledHabisTodayContainer data-test="today-habit-container">
            <div>
                <h3 data-test="today-habit-name">{name}</h3>
                <p data-test="today-habit-sequence">
                    Sequência atual: <span className={done ? 'green' : 'gray'}>
                        {currentSequence} {currentSequence > 1 ? 'dias' : 'dia'}
                    </span>
                </p>
                <p data-test="today-habit-record">Seu recorde: <span className={
                    (highestSequence === currentSequence && highestSequence > 0) ?
                        'green' :
                        'gray'
                }>{highestSequence} {highestSequence > 1 ? 'dias' : 'dia'}
                </span></p>
            </div>
            <Check isChecked={done} setChecked={setChecked} />
        </StyledHabisTodayContainer>
    );
}


const StyledHabisTodayContainer = styled.div`
    background-color: white;
    height: 94px;
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
        margin-bottom: 7px;
    }

    p {
        color: #666666;
        font-size: 13px;
        line-height: 16px;
    }

    .green {
        color: #8FC549;
    }

    .gray {
        color: #666666;
    }
`;
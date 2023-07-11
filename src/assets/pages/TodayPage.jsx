import { useState, useContext, useEffect } from 'react';
import { TokenContext } from '../contexts/TokenContext';
import { useNavigate } from 'react-router-dom';
import reFormatedWeekday from '../../scripts/reFormatedWeekday';
import HabitTodayContainer from '../components/molecules/HabitTodayContainer';
import styled from 'styled-components';
import axios from 'axios';
import URL from '../../scripts/constants';


export default function TodayPage({ setPercent }) {
    const navigate = useNavigate();
    const token = useContext(TokenContext);
    const [habits, setHabits] = useState([]);

    function percentConcluded() {
        let habitsConcluded = 0;

        habits.forEach((habit) => {
            if (habit.done) {
                habitsConcluded++;
            }
        });
        const percent = habitsConcluded * 100 / habits.length;
        setPercent(percent);
        return percent.toFixed(0);
    }

    function loadHabits() {
        axios
            .get(URL.HABITS_TODAY, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(({ data }) => {
                setHabits(data);
            })
            .catch((error) => {
                console.log(error);
                if (localStorage.getItem("user") !== null) {
                    navigate("/");
                }
            });
    }

    useEffect(loadHabits, []);

    return (
        <StyledTodayPage>
            <div className="top">
                <h1 data-test="today">{reFormatedWeekday()}</h1>

                {habits.find((habit) => habit.done) === undefined ?
                    <h2 data-test="today-counter">
                        Nenhum hábito concluído ainda
                    </h2> :
                    <h4 data-test="today-counter">
                        {percentConcluded()}% dos hábitos concluídos
                    </h4>
                }
            </div>

            {habits.map((habit) => (
                <HabitTodayContainer
                    key={habit.id}
                    habit={habit}
                    loadHabits={loadHabits}
                />
            ))}
        </StyledTodayPage>
    );
}


const StyledTodayPage = styled.div`
    background-color: #F2F2F2;
    margin-top: 70px;
    padding-inline: 17px;
    min-height: 100%;
    margin-bottom: 110px;

    display: flex;
    align-items: center;
    flex-direction: column;

    .top {
        width: 340px;
        padding-block: 28px;
    }

    h1 {
        color: #126BA5;
        font-size: 23px;
        line-height: 29px;
    }

    h2 {
        color: #BABABA;
        font-size: 18px;
        line-height: 22px;
    }

    h4 {
        color: #8FC549;
        font-size: 18px;
        line-height: 22px;
    }
`;
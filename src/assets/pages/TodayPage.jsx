import { useState, useContext, useEffect } from 'react';
import { TokenContext } from '../../scripts/TokenContext';
import HabitTodayContainer from '../components/molecules/HabitTodayContainer';
import styled from 'styled-components';
import axios from 'axios';
import URL from '../../scripts/constants';
import dayjs from 'dayjs';


export default function TodayPage({ setPercent }) {
    const token = useContext(TokenContext);
    const [habits, setHabits] = useState([]);
    let weekday = dayjs().locale('pt-br').format('dddd');

    function percentConcluded() {
        let habitsConcluded = 0;

        habits.forEach((habit) => {
            console.log(habit.done);
            if (habit.done) {
                habitsConcluded++;
            }
        })
        const percent = habitsConcluded * 100 / habits.length;
        setPercent(percent);
        return percent.toFixed(0);
    }

    function reFormatedWeekday() {
        switch (weekday) {
            case 'Sunday':
                weekday = 'Domingo';
                break;
            case 'Monday':
                weekday = 'Segunda';
                break;
            case 'Tuesday':
                weekday = 'Terça';
                break;
            case 'Wednesday':
                weekday = 'Quarta';
                break;
            case 'Thursday':
                weekday = 'Quinta';
                break;
            case 'Friday':
                weekday = 'Sexta';
                break;
            case 'Saturday':
                weekday = 'Sábado';
                break;
        }
        weekday += ", " + dayjs().format('DD/MM');

        return weekday;
    }

    function loadHabits() {
        axios
            .get(URL.HABITS_TODAY, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(({ data }) => {
                console.log(data);
                setHabits(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(loadHabits, []);

    return (
        <StyledTodayPage>
            <div className="top">
                <h1>{reFormatedWeekday()}</h1>

                {habits.find((habit) => habit.done) === undefined ?
                    <h2>Nenhum hábito concluído ainda</h2> :
                    <h4>{percentConcluded()}% dos hábitos concluídos</h4>
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
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

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
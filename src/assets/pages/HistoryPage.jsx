import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../scripts/TokenContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import dayjs from 'dayjs';
import URL from '../../scripts/constants';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import HabitHistoryContainer from '../components/molecules/HabitHistoryContainer';


export default function HistoryPage() {
    const token = useContext(TokenContext);
    const navigate = useNavigate();
    const [dates, setDates] = useState(new Date());
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        axios
            .get(URL.HABITS_HISTORY, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(({ data }) => {
                setDates(data);
            })
            .catch((error) => {
                console.error(error);
                if (localStorage.getItem("user") !== null) {
                    navigate("/");
                } else {
                    alert("Não foi possível renderizar o calendário no momento.");
                }
            });
    }, []);

    function customDayFormatting(locale, date) {
        try {
            const day = dates.find((d) => d.day === dayjs(date).format('DD/MM/YYYY'));

            if (day.day === dayjs().format('DD/MM/YYYY')) {
                return (
                    <div className="day">
                        {dayjs(date).format('DD')}
                    </div>
                );
            }
            if (day !== undefined) {
                if (day.habits.find((h) => !h.done) === undefined) {
                    return (
                        <div className="green day">
                            {dayjs(date).format('DD')}
                        </div>
                    );
                } else {
                    return (
                        <div className="red day">
                            {dayjs(date).format('DD')}
                        </div>
                    );
                }
            }
        } catch (error) { }

        return (
            <div className="day">
                {dayjs(date).format('DD')}
            </div>
        );
    }

    function showHabitsDay(value, event) {
        const firstClassName = event.target.classList[0];
        if (firstClassName === "red" || firstClassName === "green") {
            const day = dates.find((d) => d.day === dayjs(value).format('DD/MM/YYYY'));
            setHabits(day.habits);
        } else {
            setHabits([]);
        }
    }

    return (
        <StyledHistoryPage>
            <div className="top">
                <h1>Histórico</h1>
                <Calendar data-test="calendar"
                    calendarType='US'
                    formatDay={customDayFormatting}
                    onClickDay={showHabitsDay}
                />
            </div>

            {habits.length > 0 && habits.map((habit) => (
                <HabitHistoryContainer key={habit.id} habit={habit} />
            ))}
        </StyledHistoryPage>
    );
}


const StyledHistoryPage = styled.div`
    background-color: #F2F2F2;
    margin-top: 70px;
    padding-inline: 17px;
    min-height: 100%;
    margin-bottom: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        padding-block: 28px;

        &>div {
            width: 340px;
            border: none;
            border-radius: 10px;
        }
    }

    h1 {
        color: #126BA5;
        font-size: 23px;
        line-height: 29px;
        margin-bottom: 17px;
    }

    .day {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .green {
        background-color: #8CC654;
    }

    .red {
        background-color: #EA5766;
        border-radius: 50%;
    }
`;
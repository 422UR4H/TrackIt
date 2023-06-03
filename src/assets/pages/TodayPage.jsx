import React, { useContext, useEffect } from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import styled from 'styled-components';
import HabitTodayContainer from '../components/molecules/HabitTodayContainer';
import URL from '../../scripts/constants';
import { TokenContext } from '../../scripts/TokenContext';
import axios from 'axios';


export default function TodayPage() {
    const token = useContext(TokenContext);
    let habits = [];

    useEffect(() => {
        axios
            .get(URL.HABITS_TODAY, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(({ data }) => {
                console.log(data);
                habits = data;
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <StyledTodayPage>
            <Header />
            <div className="top">
                <h1>Segunda, 17/05</h1>
                {habits.lengh === 0 && <h2>Nenhum hábito concluído ainda</h2>}
            </div>
            <HabitTodayContainer />
            <HabitTodayContainer />
            <HabitTodayContainer />
            <Footer />
        </StyledTodayPage>
    );
}


const StyledTodayPage = styled.div`
    background-color: #F2F2F2;
    margin-top: 70px;
    padding-inline: 17px;
    height: 100vh;

    .top {
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
`;
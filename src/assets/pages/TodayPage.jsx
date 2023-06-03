import React from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import styled from 'styled-components';
import HabitTodayContainer from '../components/molecules/HabitTodayContainer';


export default function TodayPage() {
    return (
        <StyledTodayPage>
            <Header />
            <div className="top">
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
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
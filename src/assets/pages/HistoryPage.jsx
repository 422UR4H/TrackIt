import React from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import styled from 'styled-components';

export default function HistoryPage() {
    return (
        <StyledHistoryPage>
            <Header />
            <div className="top">
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </div>

            <Footer />
        </StyledHistoryPage>
    );
}


const StyledHistoryPage = styled.div`
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
        margin-bottom: 17px;
    }

    h2 {
        color: #666666;
        font-size: 18px;
        line-height: 22px;
    }
`;
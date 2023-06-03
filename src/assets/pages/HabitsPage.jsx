import React from 'react';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';
import styled from 'styled-components';
import HabitCreateContainer from '../components/molecules/HabitCreateContainer';
import Footer from '../components/organisms/Footer';

export default function HabitsPage() {
  return (
    <StyledHabitsPage>
      <Header />
      <div className="top">
        Meus Hábitos
        <Button text="+" />
      </div>
      <HabitCreateContainer />
      <p>Você não tem nenhum hábito cadastrado ainda.
        Adicione um hábito para começar a trackear!</p>
      <Footer />
    </StyledHabitsPage>
  );
}

const StyledHabitsPage = styled.div`
  background-color: #F2F2F2;
  color: #126BA5;
  font-size: 23px;
  line-height: 29px;
  margin-top: 70px;
  padding-inline: 18px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  button {
    height: 35px;
    padding-top: 0;
  }

  .top {
    width: 340px;
    padding-top: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 27px;
      width: 40px;
    }
  }

  p {
    width: 340px;
    color: #666666;
    font-size: 18px;
    line-height: 22px;
    margin-top: 28px;
  }
`;
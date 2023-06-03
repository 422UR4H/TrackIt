import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../scripts/TokenContext';
import HabitCreateContainer from '../components/molecules/HabitCreateContainer';
import Button from '../components/atoms/Button';
import styled from 'styled-components';
import axios from 'axios';
import URL from '../../scripts/constants';

export default function HabitsPage() {
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  let habits = [];
  const token = useContext(TokenContext);

  useEffect(() => {
    axios
      .get(URL.HABITS, {
        headers: { "Authorization": `Bearer ${token}` }
      })
      .then(({ data }) => {
        console.log(data);
        habits = data;
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    <StyledHabitsPage>
      <div className="top">
        Meus Hábitos
        <Button text="+" onClick={() => setIsAddingHabit(true)} />
      </div>
      {isAddingHabit && <HabitCreateContainer setIsAddingHabit={setIsAddingHabit} />}
      <p>Você não tem nenhum hábito cadastrado ainda.
        Adicione um hábito para começar a trackear!</p>
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
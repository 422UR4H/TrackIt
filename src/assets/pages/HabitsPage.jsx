import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../scripts/TokenContext';
import HabitCreateContainer from '../components/molecules/HabitCreateContainer';
import Button from '../components/atoms/Button';
import styled from 'styled-components';
import axios from 'axios';
import URL from '../../scripts/constants';
import HabitContainer from '../components/molecules/HabitContainer';

export default function HabitsPage() {
  const token = useContext(TokenContext);
  const [habits, setHabits] = useState([]);
  const [isAddingHabit, setIsAddingHabit] = useState(false);

  function loadHabits() {
    axios
      .get(URL.HABITS, {
        headers: { "Authorization": `Bearer ${token}` }
      })
      .then(({ data }) => {
        // console.log(data);
        setHabits(data);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  useEffect(loadHabits, []);

  return (
    <StyledHabitsPage habitsEmpty={habits.length === 0}>
      <div className="top">
        Meus Hábitos
        <Button text="+" onClick={() => setIsAddingHabit(true)} />
      </div>
      {isAddingHabit &&
        <HabitCreateContainer
          setIsAddingHabit={setIsAddingHabit}
          loadHabits={loadHabits}
        />
      }
      {habits.length === 0 ?
        <p>
          Você não tem nenhum hábito cadastrado ainda.
          Adicione um hábito para começar a trackear!
        </p> :
        habits.map((habit) => (
          <HabitContainer key={habit.id} name={habit.name} days={habit.days} />
        ))
      }
    </StyledHabitsPage>
  );
}

const StyledHabitsPage = styled.div`
  background-color: #F2F2F2;
  color: #126BA5;
  font-size: 23px;
  line-height: 29px;

  height: 100vh;
  margin-top: 70px;
  padding-inline: 18px;
  margin-bottom: 110px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  button {
    height: 35px;
    padding-top: 0;
    /* margin-bottom: ${({ habitsEmpty }) => habitsEmpty ? '20px' : '0px'}; */
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

  div:nth-child(1) {
    margin-bottom: 20px;
  }
`;
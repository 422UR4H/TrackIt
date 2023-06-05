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
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [habits, setHabits] = useState([]);
  const [name, setName] = useState('');
  const [checkboxes, setCheckboxes] = useState([
    { id: 'dom', label: 'D', isChecked: false },
    { id: 'seg', label: 'S', isChecked: false },
    { id: 'ter', label: 'T', isChecked: false },
    { id: 'qua', label: 'Q', isChecked: false },
    { id: 'qui', label: 'Q', isChecked: false },
    { id: 'sex', label: 'S', isChecked: false },
    { id: 'sab', label: 'S', isChecked: false }
  ]);


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
        <Button
          text="+"
          onClick={() => setIsAddingHabit(true)}
          dataTest="habit-create-btn"
        />
      </div>
      {isAddingHabit &&
        <HabitCreateContainer
          setIsAddingHabit={setIsAddingHabit}
          loadHabits={loadHabits}
          name={name}
          setName={setName}
          checkboxes={checkboxes}
          setCheckboxes={setCheckboxes}
        />
      }
      {habits.length === 0 ?
        <p>
          Você não tem nenhum hábito cadastrado ainda.
          Adicione um hábito para começar a trackear!
        </p> :
        habits.map((habit) => (
          <HabitContainer key={habit.id}
            id={habit.id}
            name={habit.name}
            days={habit.days}
            loadHabits={loadHabits}
          />
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

  min-height: 100vh;
  margin-top: 70px;
  padding-inline: 18px;
  margin-bottom: 110px;

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

  div:nth-child(1) {
    margin-bottom: 20px;
  }
`;
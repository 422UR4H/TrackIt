import styled from 'styled-components';
import ContainerCheckBoxes from '../atoms/ContainerCheckBoxes';

export default function HabitContainer({ checkboxes, setCheckboxes, name, days }) {
    function deleteHabit(id) {
      axios // pesquisar como usar delete com axios
        .delete(URL.HABITS + `/${id}`, {
          headers: { "Authorization": `Bearer ${token}` }
        })
        .then((message) => {
          console.log(message);
        })
        .catch((error) => {
          console.error(error);
        })
    }
  
    return (
        <StyledHabitContainer>
            <h1>{name}</h1>
            <ContainerCheckBoxes
                checkboxes={checkboxes}
                setCheckboxes={setCheckboxes}
            />
        </StyledHabitContainer>
    );
}

const StyledHabitContainer = styled.div`
    background-color: white;
    width: 340px;
    min-height: 91px;
`;
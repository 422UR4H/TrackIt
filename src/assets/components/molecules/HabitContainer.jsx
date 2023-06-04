import styled from 'styled-components';
import ContainerCheckBoxes from '../atoms/ContainerCheckBoxes';
import { useEffect, useState } from 'react';

export default function HabitContainer({ name, days }) {
    const [checkboxes, setCheckboxes] = useState([
      { id: 'dom', label: 'D', isChecked: false },
      { id: 'seg', label: 'S', isChecked: false },
      { id: 'ter', label: 'T', isChecked: false },
      { id: 'qua', label: 'Q', isChecked: false },
      { id: 'qui', label: 'Q', isChecked: false },
      { id: 'sex', label: 'S', isChecked: false },
      { id: 'sab', label: 'S', isChecked: false }
    ]);

    useEffect(() => {
        const updateCheckboxes = [ ...checkboxes ];
        days.forEach((d) => updateCheckboxes[d].isChecked = true);
        setCheckboxes(updateCheckboxes);
    }, []);

    // function deleteHabit(id) {
    //   axios // pesquisar como usar delete com axios
    //     .delete(URL.HABITS + `/${id}`, {
    //       headers: { "Authorization": `Bearer ${token}` }
    //     })
    //     .then((message) => {
    //       console.log(message);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     })
    // }
  
    return (
        <StyledHabitContainer>
            <h1>{name}</h1>
            <ContainerCheckBoxes
                checkboxes={checkboxes}
                setCheckboxes={setCheckboxes}
                disabled={true}
            />
        </StyledHabitContainer>
    );
}

const StyledHabitContainer = styled.div`
    background-color: white;
    width: 340px;
    min-height: 91px;
    padding-left: 15px;
    padding-top: 13px;
    margin-bottom: 10px;
    border-radius: 5px;

    h1 {
        color: #666666;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 8px;
    }
`;
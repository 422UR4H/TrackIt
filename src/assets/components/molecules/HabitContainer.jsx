import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import dump from '../../images/dump.svg';
import ContainerCheckBoxes from '../atoms/ContainerCheckBoxes';
import axios from 'axios';
import { TokenContext } from '../../../scripts/TokenContext';
import URL from '../../../scripts/constants';

export default function HabitContainer({ id, name, days, loadHabits }) {
    const token = useContext(TokenContext);
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
        const updateCheckboxes = [...checkboxes];
        days.forEach((d) => updateCheckboxes[d].isChecked = true);
        setCheckboxes(updateCheckboxes);
    }, []);

    function deleteHabit(id) {
        if (!confirm("Apagar hábito?")) {
            return;
        }

        axios // pesquisar como usar delete com axios
            .delete(URL.HABITS + `/${id}`, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then((message) => {
                loadHabits();
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <StyledHabitContainer data-test="habit-container">
            <h1 data-test="habit-name">{name}</h1>
            <button onClick={() => deleteHabit(id)} data-test="habit-delete-btn">
                <img src={dump} alt="" />
            </button>
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

    position: relative;

    h1 {
        color: #666666;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 8px;
    }

    button {
        background-color: inherit;
        width: 13px;
        height: 15px;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: 10px;
        top: 11px;
        z-index: 2;
    }
`;
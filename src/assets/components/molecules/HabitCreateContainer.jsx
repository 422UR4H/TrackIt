import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import StyledForm from '../atoms/Form';
import Button from '../atoms/Button';
import axios from 'axios';
import URL from '../../../scripts/constants';
import { TokenContext } from '../../../scripts/TokenContext';
import ContainerCheckBoxes from '../atoms/ContainerCheckBoxes';


export default function HabitCreateContainer({ setIsAddingHabit }) {
    const token = useContext(TokenContext);
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

    function saveHabitCreated(e) {
        e.preventDefault();

        const days = [];
        checkboxes.forEach((checkbox, i) => { checkbox.isChecked && days.push(i) });

        axios
            .post(URL.HABITS, {
                name,
                days
            }, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(({ data }) => alert("Habito salvo" + data))
            .catch((error) => alert(error));

        setIsAddingHabit(false);
    }

    return (
        <StyledHabit onSubmit={saveHabitCreated}>
            <StyledForm>
                <input type="text"
                    placeholder="nome do hábito"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    required
                />

                <ContainerCheckBoxes
                    checkboxes={checkboxes}
                    setCheckboxes={setCheckboxes}
                />

                <div className="container-buttons">
                    <button className="cancel" type="button" onClick={() => {
                        setIsAddingHabit(false);
                    }}>Cancelar</button>
                    <Button type="submit" text="Salvar" />
                </div>
            </StyledForm>
        </StyledHabit>
    );
}


const StyledHabit = styled.div`
    background-color: white;
    width: 340px;
    height: 180px;
    margin-top: 20px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    form {
        .cancel {
            background-color: inherit;
            color: #52B6FF;
            border: none;
            margin-right: 15px;
        }

        button {
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            width: 84px;
        }

        .container-buttons {
            margin-top: 30px;
            padding-left: 120px;
        }
    }
`;
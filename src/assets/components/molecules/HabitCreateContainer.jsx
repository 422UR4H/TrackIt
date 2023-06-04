import { useContext, useState } from 'react';
import { TokenContext } from '../../../scripts/TokenContext';
import ContainerCheckBoxes from '../atoms/ContainerCheckBoxes';
import Button from '../atoms/Button';
import Form from '../atoms/Form';
import styled from 'styled-components';
import axios from 'axios';
import URL from '../../../scripts/constants';


export default function HabitCreateContainer({ setIsAddingHabit, loadHabits }) {
    const token = useContext(TokenContext);
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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

        setIsLoading(true);
        const days = [];
        checkboxes.forEach((checkbox, i) => { checkbox.isChecked && days.push(i) });
        axios
            .post(URL.HABITS, {
                name,
                days
            }, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(({ data }) => {
                setIsLoading(false);

                // clean fields
                setName('');
                setCheckboxes(checkboxes.map((checkbox) => (
                    { ...checkbox, isChecked: false }
                )));

                setIsAddingHabit(false);
                loadHabits();
            })
            .catch((error) => {
                setIsLoading(false);
                alert(error);
            });
    }

    return (
        <StyledHabit>
            <Form onSubmit={saveHabitCreated}>
                <input type="text"
                    placeholder="nome do hábito"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    required
                    disabled={isLoading}
                />

                <ContainerCheckBoxes
                    checkboxes={checkboxes}
                    setCheckboxes={setCheckboxes}
                    disabled={isLoading}
                />

                <div className="container-buttons">
                    <button className="cancel"
                        type="button"
                        disabled={isLoading}
                        onClick={() => { setIsAddingHabit(false) }}
                    >
                        Cancelar
                    </button>
                    <Button type="submit" text="Salvar" disabled={isLoading} />
                </div>
            </Form>
        </StyledHabit>
    );
}


const StyledHabit = styled.div`
    background-color: white;
    width: 340px;
    min-height: 182px;
    margin-bottom: 10px;
    padding-block: 10px;
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
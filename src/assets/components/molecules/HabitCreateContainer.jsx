import { useContext, useState } from 'react';
import { TokenContext } from '../../../scripts/TokenContext';
import ContainerCheckBoxes from '../atoms/ContainerCheckBoxes';
import Button from '../atoms/Button';
import Form from '../atoms/Form';
import styled from 'styled-components';
import axios from 'axios';
import URL from '../../../scripts/constants';


export default function HabitCreateContainer(props) {
    const {
        setIsAddingHabit,
        loadHabits,
        name, setName,
        checkboxes, setCheckboxes
    } = props;

    const token = useContext(TokenContext);
    const [isLoading, setIsLoading] = useState(false);


    function saveHabitCreated(e) {
        e.preventDefault();

        if (name === "") {
            alert("Insira um nome válido para o hábito");
            return;
        }

        setIsLoading(true);
        const days = [];
        checkboxes.forEach((checkbox, i) => {
            if (checkbox.isChecked) {
                days.push(i);
            }
        });

        axios
            .post(URL.HABITS, {
                name,
                days
            }, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(() => {
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
        <StyledHabit data-test="habit-create-container">
            <Form onSubmit={saveHabitCreated}>
                <input type="text"
                    placeholder="nome do hábito"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    // required
                    disabled={isLoading}
                    data-test="habit-name-input"
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
                        onClick={() => setIsAddingHabit(false)}
                        data-test="habit-create-cancel-btn"
                    >
                        Cancelar
                    </button>
                    <Button type="submit"
                        text="Salvar"
                        disabled={isLoading}
                        dataTest="habit-create-save-btn"
                    />
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
        .container-buttons {
            height: 35px;
            margin-top: 30px;
            padding-left: 120px;
            position: relative;

            .cancel {
                background-color: inherit;
                color: #52B6FF;
                border: none;
                padding-top: 0;

                position: absolute;
                right: 100px;

                &:disabled {
                    padding-top: 0;
                }
            }
    
            button {
                font-size: 16px;
                line-height: 20px;
                text-align: center;
                width: 84px;

                position: absolute;
                right: 0;

                &:disabled {
                    padding-top: 20px;
                }
            }
        }
    }
`;
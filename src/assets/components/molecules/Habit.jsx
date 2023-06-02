import React from 'react';
import styled from 'styled-components';
import StyledForm from '../atoms/StyledForm';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

export default function Habit() {
    return (
        <StyledHabit>
            <StyledForm>
                <input type="text" placeholder="nome do hábito" />

                <div className="container-checkboxes">
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark">D</span>
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark">S</span>
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark">T</span>
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark">Q</span>
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark">Q</span>
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark">S</span>
                    </label>
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark">S</span>
                    </label>
                </div>

                <div className="container-buttons">
                    <button className="cancel" type="button">Cancelar</button>
                    <Button type="sumbit" text="Salvar" />
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
        .container-checkboxes {
            margin-top: 4px;
            font-size: 20px;
            display: flex;
            justify-content: flex-start;
            
            .container {
                width: 30px;
                height: 30px;
                margin-right: 4px;
                border-radius: 5px;

                display: block;
                position: relative;
            }

            .checkmark {
                color: #DBDBDB;
                text-align: center;

                width: inherit;
                height: inherit;
                border: 1px solid #DBDBDB;
                border-radius: inherit;

                position: absolute;
                top: 0px;
                left: 0px;
                z-index: 1;
            }

            input {
                width: 0px;
                height: 0px;
                opacity: 0;
            }

            .container input:checked ~ .checkmark {
                background-color: #DBDBDB;
                color: white;
            }
        }

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
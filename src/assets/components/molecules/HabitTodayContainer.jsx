import React from 'react';
import Check from '../atoms/Check';
import styled from 'styled-components';

export default function HabitTodayContainer() {
    return (
        <StyledHabisTodayContainer>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>5 dias</span></p>
            </div>
            <Check isChecked={false} />
        </StyledHabisTodayContainer>
    );
}


const StyledHabisTodayContainer = styled.div`
    background-color: white;
    height: 94px;
    width: 340px;
    padding-left: 15px;
    padding-right: 13px;
    margin-bottom: 10px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: #666666;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 7px;
    }

    p {
        color: #666666;
        font-size: 13px;
        line-height: 16px;
    }
`;
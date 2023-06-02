import React from 'react';
import styled from 'styled-components';

export default function TodayButton() {
    return (
        <StyledTodayButton>Hoje</StyledTodayButton>
    );
}

const StyledTodayButton = styled.div`
    background-color: #52B6FF;
    color: white;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    vertical-align: middle;
    line-height: 90px;

    width: 91px;
    height: 91px;
    border-radius: 50%;

    position: absolute;
    bottom: 10px;
    left: calc(50% - 45px);
`;
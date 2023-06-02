import React from 'react';
import styled from 'styled-components';
import trackit from '../../images/trackit.png';
import userIcon from '../../images/user-icon.png';

export default function Header() {
    return (
        <StyledHeader>
            <img src={trackit} alt="TrackIt" />
            <img src={userIcon} alt="User Icon" />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: #126BA5;
    width: 100%;
    height: 70px;
    padding-inline: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    left: 0;
    top: 0;

    /* img:nth-child(1) {
        height: auto;
        width: auto; */
        /* height: 49px;
    } */

    /* img:nth-child(2) {
        height: 51px;
    } */
`;
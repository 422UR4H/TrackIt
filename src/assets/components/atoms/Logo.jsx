import React from 'react';
import logo from '../../images/logo.png';
import styled from 'styled-components';

export default function Logo() {
    return (
        <StyledLogo>
            <img src={logo} alt="Logo TrackIt" />
        </StyledLogo>
    );
}

const StyledLogo = styled.div`
    width: 180px;
`;
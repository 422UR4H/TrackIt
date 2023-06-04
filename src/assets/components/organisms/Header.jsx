import { useContext } from 'react';
import { TokenContext } from '../../../scripts/TokenContext';
import styled from 'styled-components';
import logoMini from '../../images/logo-mini.svg';

export default function Header({ icon }) {
    const token = useContext(TokenContext);

    return (
        <StyledHeader>
            <img src={logoMini} alt="TrackIt" />
            <img className="user-icon" src={token !== "" && icon} alt="User Icon" />
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
    z-index: 3;

    .user-icon {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;
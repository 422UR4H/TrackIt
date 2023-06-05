import styled from 'styled-components';
import TodayButton from '../molecules/TodayButton';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <StyledFooter data-test="menu">
            <Link to="/habitos" data-test="habit-link">Hábitos</Link>

            <div className="center" data-test="today-link" onClick={() => {
                navigate("/hoje")
            }}>
                <TodayButton />
            </div>

            <Link to="/historico" data-test="history-link">Histórico</Link>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
    background-color: white;
    width: 100%;
    height: 70px;

    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;

    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    a {
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        text-decoration: none;
    }

    .center {
        width: 100%;
        height: 100%;
        position: relative;
    }
`;
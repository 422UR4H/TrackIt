import React from 'react';
import Logo from '../components/atoms/Logo';
import StyledForm from '../components/atoms/StyledForm';
import StyledTemplate from '../components/styles/StyledTemplate';
import Button from '../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  function handleEntrar() {
    const navigate = useNavigate();

    navigate("/habitos");
  }

  return (
    <StyledTemplate>
      <Logo />
      <StyledForm>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />

        <Button text="Entrar" onClick={handleEntrar} />
      </StyledForm>
      <Link to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </StyledTemplate>
  );
}
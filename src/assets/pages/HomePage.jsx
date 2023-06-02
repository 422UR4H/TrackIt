import React from 'react';
import Logo from '../components/atoms/Logo';
import StyledForm from '../components/atoms/StyledForm';
import StyledTemplate from '../components/styles/StyledTemplate';
import Button from '../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    navigate("/habitos");
  }

  return (
    <StyledTemplate onSubmit={login}>
      <Logo />
      <StyledForm>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />

        <Button type="submit" text="Entrar" />
      </StyledForm>
      <Link to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </StyledTemplate>
  );
}
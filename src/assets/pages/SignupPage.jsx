import React from 'react';
import StyledTemplate from '../components/styles/StyledTemplate';
import Logo from '../components/atoms/Logo';
import StyledForm from '../components/atoms/StyledForm';
import Button from '../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();

  function signup(e) {
    e.preventDefault();

    navigate("/");
  }
  return (
    <StyledTemplate>
      <Logo />
      <StyledForm onSubmit={signup}>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="foto" />

        <Button type="submit" text="Cadastrar" />
      </StyledForm>
      <Link to="/">
        Já tem uma conta? Faça login!
      </Link>
    </StyledTemplate>
  );
}

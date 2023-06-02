import React from 'react';
import StyledTemplate from '../components/styles/StyledTemplate';
import Logo from '../components/atoms/Logo';
import StyledForm from '../components/atoms/StyledForm';
import Button from '../components/atoms/Button';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  return (
    <StyledTemplate>
      <Logo />
      <StyledForm>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="foto" />

        <Button text="Cadastrar" />
      </StyledForm>
      <Link to="/">
        Já tem uma conta? Faça login!
      </Link>
    </StyledTemplate>
  );
}

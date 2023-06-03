import React, { useState } from 'react';
import StyledTemplate from '../components/styles/StyledTemplate';
import Logo from '../components/atoms/Logo';
import StyledForm from '../components/atoms/StyledForm';
import Button from '../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../scripts/constants';

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');


  function signup(e) {
    e.preventDefault();

    axios
      .post(URL.SIGNUP, {
        email,
        name,
        image,
        password
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <StyledTemplate>
      <Logo />
      <StyledForm onSubmit={signup}>

        <input type="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <input type="password"
          placeholder="senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <input type="text"
          placeholder="nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <input type="url"
          placeholder="foto"
          value={image}
          onChange={({ target }) => setImage(target.value)}
        />

        <Button type="submit" text="Cadastrar" />

      </StyledForm>
      <Link to="/">
        Já tem uma conta? Faça login!
      </Link>
    </StyledTemplate>
  );
}

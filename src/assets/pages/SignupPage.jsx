import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StyledTemplate from '../components/styles/StyledTemplate';
import Form from '../components/atoms/Form';
import Button from '../components/atoms/Button';
import Logo from '../components/atoms/Logo';
import axios from 'axios';
import URL from '../../scripts/constants';
import styled from 'styled-components';


export default function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');


  function signup(e) {
    e.preventDefault();

    setIsLoading(true);

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
        // if (isLoading) {
        setIsLoading(false);
        // }
      });
  }

  return (
    <StyledTemplate>
      <Logo />
      <Form onSubmit={signup}>

        <input type="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          disabled={isLoading}
          required
        />
        <input type="password"
          placeholder="senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          disabled={isLoading}
          required
        />
        <input type="text"
          placeholder="nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
          disabled={isLoading}
          required
        />
        <input type="url"
          placeholder="foto"
          value={image}
          onChange={({ target }) => setImage(target.value)}
          disabled={isLoading}
          required
        />

        <Button type="submit" text="Cadastrar" disabled={isLoading} />

      </Form>
      <Link to="/">
        Já tem uma conta? Faça login!
      </Link>
    </StyledTemplate>
  );
}
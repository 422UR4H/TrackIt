import { useState } from 'react';
import Logo from '../components/atoms/Logo';
import StyledForm from '../components/atoms/StyledForm';
import StyledTemplate from '../components/styles/StyledTemplate';
import Button from '../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../scripts/constants';

export default function HomePage({ setToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function login(e) {
    e.preventDefault();

    axios
      .post(URL.LOGIN, {
        email,
        password
      })
      .then((response) => {
        setToken(response.data.token);
        navigate("/habitos");
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <StyledTemplate onSubmit={login}>
      <Logo />
      
      <StyledForm>
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
        <Button type="submit" text="Entrar" />
      </StyledForm>
      
      <Link to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </StyledTemplate>
  );
}
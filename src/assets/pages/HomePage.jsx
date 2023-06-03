import { useState } from 'react';
import Logo from '../components/atoms/Logo';
import Form from '../components/atoms/Form';
import StyledTemplate from '../components/styles/StyledTemplate';
import Button from '../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../scripts/constants';

export default function HomePage({ setToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  function login(e) {
    e.preventDefault();

    setIsLoading(true);

    axios
      .post(URL.LOGIN, {
        email,
        password
      })
      .then((response) => {
        setToken(response.data.token);
        navigate("/hoje");
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      })
  }

  return (
    <StyledTemplate onSubmit={login}>
      <Logo />

      <Form>
        <input type="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
          disabled={isLoading}
        />
        <input type="password"
          placeholder="senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
          disabled={isLoading}
        />
        <Button type="submit" text="Entrar" disabled={isLoading} />
      </Form>

      <Link to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </StyledTemplate>
  );
}
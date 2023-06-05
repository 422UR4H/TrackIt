import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StyledTemplate from '../components/styles/StyledTemplate';
import Button from '../components/atoms/Button';
import Logo from '../components/atoms/Logo';
import Form from '../components/atoms/Form';
import axios from 'axios';
import URL from '../../scripts/constants';


export default function HomePage({ setToken, setIcon }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  function handleLogin(data) {
    setToken(data.token);
    setIcon(data.image);
    navigate("/hoje");

    // PERSISTENCE
    localStorage.setItem("user", JSON.stringify(data));
  }

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user !== null) {
      try {
        const { email, password } = JSON.parse(user);

        axios
          .post(URL.LOGIN, {
            email,
            password
          })
          .then(({ data }) => {
            handleLogin(data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
        console.log(user);
      }
    }
  }, []);

  function login(e) {
    e.preventDefault();

    setIsLoading(true);

    axios
      .post(URL.LOGIN, {
        email,
        password
      })
      .then(({ data }) => {
        handleLogin(data);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
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
          data-test="email-input"
        />
        <input type="password"
          placeholder="senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
          disabled={isLoading}
          data-test="password-input"
        />
        <Button type="submit"
          text="Entrar"
          disabled={isLoading}
          dataTest="login-btn"
        />
      </Form>

      <Link to="/cadastro" data-test="signup-link">
        Não tem uma conta? Cadastre-se!
      </Link>
    </StyledTemplate>
  );
}
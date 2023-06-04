import styled from 'styled-components';

const StyledTemplate = styled.div`
  background-color: white;
  height: 100vh;
  padding-top: 68px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &>img {
    margin-bottom: 30px;
  }

  button {
    margin-bottom: 25px;
  }

  a {
    color: #52B6FF;
    font-size: 14px;
  }
`;

export default StyledTemplate;
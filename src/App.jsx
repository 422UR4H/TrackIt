import { useState } from 'react';
import { BrouserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrouserRouter>
      <NavContainer>

      </NavContainer>

      <Routes>

      </Routes>
    </BrouserRouter>
  )
}

export default App;

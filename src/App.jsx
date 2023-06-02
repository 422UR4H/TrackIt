import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import SignupPage from './assets/pages/SignupPage';
import HabitsPage from './assets/pages/HabitsPage';


function App() {
  return (
    <BrowserRouter>
      {/* <NavContainer>

      </NavContainer> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignupPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

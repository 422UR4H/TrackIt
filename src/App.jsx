import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import SignupPage from './assets/pages/SignupPage';
import HabitsPage from './assets/pages/HabitsPage';
import TodayPage from './assets/pages/TodayPage';
import HistoryPage from './assets/pages/HistoryPage';
import { TokenContext } from './scripts/TokenContext';


function App() {
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <TokenContext.Provider value={token}>
        {/* <NavContainer>

      </NavContainer> */}

        <Routes>
          <Route path="/" element={<HomePage setToken={setToken} />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;

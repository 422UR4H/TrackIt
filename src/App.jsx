import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TokenContext } from './scripts/TokenContext';
import { PercentContext } from './scripts/PercentContext';
import HomePage from './assets/pages/HomePage';
import SignupPage from './assets/pages/SignupPage';
import HabitsPage from './assets/pages/HabitsPage';
import TodayPage from './assets/pages/TodayPage';
import HistoryPage from './assets/pages/HistoryPage';
import Header from './assets/components/organisms/Header';
import Footer from './assets/components/organisms/Footer';


function App() {
  const [icon, setIcon] = useState('');
  const [token, setToken] = useState('');
  const [percent, setPercent] = useState(0);

  return (
    <BrowserRouter>
      <TokenContext.Provider value={token}>
        <PercentContext.Provider value={percent}>

          {token !== '' && <Header icon={icon} />}

          <Routes>
            <Route path="/" element={
              <HomePage setToken={setToken} setIcon={setIcon} />
            } />
            <Route path="/cadastro" element={<SignupPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage setPercent={setPercent} />} />
            <Route path="/historico" element={<HistoryPage />} />
          </Routes>

          {token !== '' && <Footer />}

        </PercentContext.Provider>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
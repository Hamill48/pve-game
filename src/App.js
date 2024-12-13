import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/userContext';

import Menu from './routes/menu/menu.route';
import Host from './routes/host/host.route';
import Dashboard from './routes/dashboard/dashboard.route';
import CharacterRoute from './routes/character/character.route';
import MonstersRoute from './routes/monsters/monsters.route';
import FightRoute from './routes/fight/fight.route';
import Help from './routes/help/help.route';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Ellenőrizzük, hogy van-e felhasználó a localStorage-ban
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);  // Ha van, beállítjuk, hogy be van jelentkezve
    }
  }, []);

  return (
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={isLoggedIn ? <Navigate to="/dashboard" /> : <Menu />} />
            <Route path='host' element={<Host />} />
            <Route path='dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
            <Route path='character' element={<CharacterRoute />}/>
            <Route path='monsters' element={<MonstersRoute />}/>
            <Route path='fight' element={<FightRoute />}/>
            <Route path='help' element={<Help />}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>

  );
}

export default App;

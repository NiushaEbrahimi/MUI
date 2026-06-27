import './App.css'
import { useEffect, useState, useContext } from 'react';
import Header from "./components/Header"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import EachCart from "./components/EachCart"
import LikedCards from "./components/LikedCard"
import {MOCK_API} from './hooks/useCards';
import CardProvider from "./context/Provider"
import { ContextCards } from './context/Provider';
import About from "./components/About";
import LikedProvider from './context/LikedProvider';

// TODO: make the form prettier
// TODO: dark mode
function AppContent({ darkTheme, setDarkTheme }) {
  const {cards,_} = useContext(ContextCards);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark-mode", darkTheme);
    body.classList.toggle("light-mode", !darkTheme);
  }, [darkTheme]);

  return (
    <BrowserRouter>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        {cards.map((card) => (
          <Route key={card.id} path={`cards/${card.id}`} element={<EachCart card={card} />} />
        ))}
        <Route path='/liked' element={<LikedCards cards={cards}/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <LikedProvider>
      <CardProvider themeMode={darkTheme ? 'dark' : 'light'}>
        <AppContent darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </CardProvider>
    </LikedProvider>
  );
}

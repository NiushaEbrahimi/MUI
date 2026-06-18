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

// TODO: make the form prettier
// TODO: dark mode
function AppContent() {
  const cards = useContext(ContextCards); // ✅ now inside the provider
  const [darkTheme, setDarkTheme] = useState(false);
  const [likedCards, setLikedCards] = useState({});

  useEffect(() => {
    document.querySelector("body").classList.toggle("dark-mode", darkTheme);
  }, [darkTheme]);

  return (
    <BrowserRouter>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes>
        <Route path="/" element={<Home likedCards={likedCards} setLikedCards={setLikedCards} />} />
        {cards.map((card) => (
          <Route key={card.id} path={`cards/${card.id}`} element={<EachCart card={card} />} />
        ))}
        <Route path='/liked' element={<LikedCards cards={cards} likedCards={likedCards} setLikedCards={setLikedCards} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <CardProvider>
      <AppContent />
    </CardProvider>
  );
}
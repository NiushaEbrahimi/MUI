import { createContext, useState } from "react";

const LikedContext = createContext(null);

export default function LikedProvider({ children }) {
  const [likedCards, setLikedCards] = useState({});

  const toggle = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <LikedContext.Provider
      value={{
        likedCards,
        toggle,
      }}
    >
      {children}
    </LikedContext.Provider>
  );
}

export { LikedContext };
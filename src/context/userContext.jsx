import { createContext, useContext, useState, useEffect } from "react";

// Context létrehozása
const UserContext = createContext();

// Provider komponens
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch egyszer a localStorage-ból
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUserData(storedUser);
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook a context használatához
export const useUser = () => useContext(UserContext);

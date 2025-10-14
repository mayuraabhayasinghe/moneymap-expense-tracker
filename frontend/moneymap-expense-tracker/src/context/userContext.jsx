import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Function to update user data
  const updateUser = (userData) => {
    setUser(userData);
  };

  //Function to clear user data(on logout)
  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ updateUser, clearUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

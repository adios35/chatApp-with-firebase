import React, { useContext, createContext, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../app/firebase/firebase";
import { useNavigate } from "react-router-dom";
interface props {
  children: ReactNode;
}
export const UserAuthContext = createContext({} as props);
export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = React.useState<any>(null);
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current);
    });
    return () => unsub();
  }, []);

  return (
    <UserAuthContext.Provider value={user}>{children}</UserAuthContext.Provider>
  );
};

export const Protected = ({ children }) => {
  const navigate = useNavigate();
  const usertAuth = useContext(UserAuthContext);
  if (!usertAuth) {
    return navigate("/login")!;
  }
};

// import React, { useState, useEffect, createContext, useContext } from "react";

// interface IContextProps {
//   value: string;
//   setValue: (value: string) => void;
// }

// const MyContext = createContext<IContextProps>({
//   value: "",
//   setValue: () => {}
// });

// const MyContextProvider: React.FC = ({ children }) => {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     // Perform any necessary side effects here
//   }, [value]);

//   return (
//     <MyContext.Provider value={{ value, setValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

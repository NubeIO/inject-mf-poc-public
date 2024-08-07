// UserContext.tsx

import React, { ReactNode, useContext, useEffect, useState } from "react";

import { defineRulesFor } from "./config";
import { users } from "./utils";

type Props = {
  children: ReactNode;
};

interface AppContext {
  state: { user: string };
  updateUser: (a: string) => void;
}

const UserContext = React.createContext<AppContext | undefined>(undefined);

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<string>("basicUser");

  useEffect(() => {
    defineRulesFor(users[user]);
    console.log("User changed", users[user]);
  }, [user]);

  const updateUser = (a: string) => {
    setUser(a);
  };

  return (
    <UserContext.Provider value={{ state: { user }, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): AppContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };

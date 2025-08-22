/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';

const SessionContext = createContext(null);

export const useSession = () => useContext(SessionContext);
export default useSession;

export const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <SessionContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      { children }
    </SessionContext.Provider>;
}

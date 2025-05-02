import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, fetchUserApi } from '../api/account';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const data = await fetchUserApi();
      setUser(data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const loginContext = async (email, password) => {
    await login(email, password);
    await fetchUser();
  };

  const logoutContext = async () => {
    await logout();
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login: loginContext, logout: logoutContext, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

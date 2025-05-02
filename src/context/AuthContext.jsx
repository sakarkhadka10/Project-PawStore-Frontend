import { createContext, useState, useEffect, useContext } from 'react';
import { login, register, logout, getUserProfile } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
    setLoading(false);
  }, []);

  const loginUser = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await login(email, password);
      setUser(userData);
      setLoading(false);
      return userData;
    } catch (err) {
      setError(err.toString());
      setLoading(false);
      throw err;
    }
  };

  const registerUser = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await register(name, email, password);
      setUser(userData);
      setLoading(false);
      return userData;
    } catch (err) {
      setError(err.toString());
      setLoading(false);
      throw err;
    }
  };

  const logoutUser = () => {
    logout();
    setUser(null);
  };

  const refreshUserProfile = async () => {
    if (!user) return;
    
    try {
      const userData = await getUserProfile();
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('userInfo', JSON.stringify(updatedUser));
    } catch (err) {
      console.error('Failed to refresh user profile:', err);
    }
  };

  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
    login: loginUser,
    register: registerUser,
    logout: logoutUser,
    refreshUserProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

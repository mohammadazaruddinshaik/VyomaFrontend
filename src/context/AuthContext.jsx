import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('vyoma_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('vyoma_user');
  };

  const signup = (userData) => {
    const newUser = {
      ...userData,
      isNewUser: true,
      signupDate: new Date().toISOString()
    };
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('vyoma_user', JSON.stringify(newUser));
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

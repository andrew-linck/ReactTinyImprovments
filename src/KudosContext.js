import React from 'react';

const ResultContext = React.createContext({
  isAuthenticated: false
})

export const Provider = ResultContext.Provider;
export const Consumer = ResultContext.Consumer;
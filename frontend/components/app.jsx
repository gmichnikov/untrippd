import React from 'react';
import HeaderContainer from './header_container'

const App = ({ children }) => {
  return (
    <div className="app">
      <HeaderContainer />
      {children}
    </div>
  );
};

export default App;

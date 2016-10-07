import React from 'react';
import HeaderContainer from './header_container';

const App = ({ children }) => {
  return (
    <div className="app">
      <HeaderContainer />
      <div className="main-below-header">{children}</div>
    </div>
  );
};

export default App;

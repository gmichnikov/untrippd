import React from 'react';
import HeaderContainer from './header_container'

const App = ({ children }) => {
  return (
    <div className="app">
      <HeaderContainer />
      <h1>Untrippd!</h1>
      {children}
    </div>
  );
};

export default App;

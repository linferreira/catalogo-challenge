import React from 'react';
import AppRouter from './routes/routes';
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
}

export default App;

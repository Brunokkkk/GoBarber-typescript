import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';

import GlobalProvider from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalProvider>
      <Routes />
    </GlobalProvider>

    <GlobalStyle />
  </BrowserRouter>
);
export default App;

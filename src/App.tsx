import React from 'react';

import GlobalStyle from './styles/global';
import SingIn from './pages/SignIn';
// import SingUp from './pages/SignUp';

import GlobalProvider from './hooks';

const App: React.FC = () => (
  <>
    <GlobalProvider>
      <SingIn />
    </GlobalProvider>

    <GlobalStyle />
  </>
);
export default App;

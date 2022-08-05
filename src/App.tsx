import React from 'react';
import { Reset } from 'styled-reset';

import GlobalStyle from './component/GlobalStyle';
import Header from "./component/header/Header";

function App() {
  return (
      <React.Fragment>
          <Reset />
          <GlobalStyle />
      </React.Fragment>
  );
}

export default App;

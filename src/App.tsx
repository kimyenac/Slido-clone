import React from 'react';
import { Reset } from 'styled-reset';

import GlobalStyle from './component/GlobalStyle';
import PageLayout from './component/PageLayout';

function App() {
    return (
        <React.Fragment>
            <Reset />
            <GlobalStyle />
            <PageLayout />
        </React.Fragment>
    );
}

export default App;

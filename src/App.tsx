import React from 'react';
import { Reset } from 'styled-reset';

import GlobalStyle from './component/GlobalStyle';
import PageLayout from './component/PageLayout';
import ManagerBanner from "./component/ManagerBanner";

function App() {
    return (
        <React.Fragment>
            <Reset />
            <GlobalStyle />
            <PageLayout />
            <ManagerBanner />
        </React.Fragment>
    );
}

export default App;

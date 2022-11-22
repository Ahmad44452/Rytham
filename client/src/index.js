import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';
import GlobalStyles from './styled-components/GlobalStyles.styled';
import Theme from './styled-components/Theme';
import { Provider } from 'react-redux';

import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <>
          <GlobalStyles />
          <AppRoutes />
        </>
      </Theme>
    </Provider>
  </React.StrictMode>
);
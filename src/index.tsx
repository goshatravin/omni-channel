import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './theme/globalStyles';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ThemProvider from './context/Themecontext'

ReactDOM.render(
  <React.StrictMode>
  <ThemProvider>
  <App />

  </ThemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

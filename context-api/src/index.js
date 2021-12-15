import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProviderWrapper } from './context/theme.context'
import { AuthProviderWrapper } from './context/auth.context';


ReactDOM.render(
  <Router>
    <AuthProviderWrapper>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </AuthProviderWrapper>
  </Router>,
  document.getElementById('root')
)

reportWebVitals()
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

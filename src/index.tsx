import React from 'react';
import ReactDOM from 'react-dom';
import AllRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './context/ContextApp';

ReactDOM.render(
  <ContextProvider>
    <AllRoutes />
  </ContextProvider>
  ,
  document.getElementById('root')
);
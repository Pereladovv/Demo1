import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Fio from './Fio';
import Volume from './Volume';

ReactDOM.render(
  <React.StrictMode>
    <Volume/>
    <App/>
    <Fio/>

  </React.StrictMode>,
  document.getElementById('root')
);



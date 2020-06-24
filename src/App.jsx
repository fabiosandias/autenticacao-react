import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Login from './components/login/Login';

export default () => {
  return (
    <React.Fragment>
        <div className="app">
            <Login />
        </div>
    </React.Fragment>
  );
}


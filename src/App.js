import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes'
import { Header } from './Components/Header';

import './App.css';
import 'materialize-css';

function App() {


  const routes = useRoutes(true);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          {routes}
        </div>
      </Router>

    </div>
  );
}

export default App;

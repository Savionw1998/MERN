import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import Hello from './components/Hello'
import Hello2 from './components/Hello2'
import Four from './components/Four'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
        <Router>
        <Home path="/home" />
        <Hello path="/hello" />
        <Four path="/:id" />
        <Hello2 path="/:text/:textColor/:bgColor"/>
        </Router>

    </div>
  );
}

export default App;

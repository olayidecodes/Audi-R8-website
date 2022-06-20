import React from 'react';
import './App.css';

import Banner from './container/Banner/Banner'
import Performance from './container/Performance/Performance';
import Techspecs from './container/Techspecs/Techspecs';


function App() {
  return (
    <div className="App">
      <Banner />
      <Performance />
      <Techspecs />
    </div>
  );
}

export default App;

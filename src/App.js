import React from 'react';
import './App.css';

import Banner from './container/Banner/Banner'
import CarStats from './container/CarStats/CarStats';
import Gallery from './container/Gallery/Gallery';
import Performance from './container/Performance/Performance';
import Techspecs from './container/Techspecs/Techspecs';


function App() {
  return (
    <div className="App">
      <Banner />
      <Performance />
      <Techspecs />
      <Gallery />
      <CarStats />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import DynamicHeightGrid from './components/DynamicHeightGrid';

const initialLayout = [{"w":3,"h":10,"x":0,"y":20,"i":"a","moved":false,"static":false},{"w":12,"h":15,"x":0,"y":0,"i":"b","moved":false,"static":false},{"w":12,"h":10,"x":0,"y":65,"i":"c","moved":false,"static":false},{"w":3,"h":35,"x":9,"y":20,"i":"d","moved":false,"static":false},{"w":6,"h":45,"x":3,"y":20,"i":"e","moved":false,"static":false}];

function App() {
  const [layout, setLayout] = useState(initialLayout);
  var test = new DynamicHeightGrid()
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <DynamicHeightGrid layout={layout} setLayout={setLayout}></DynamicHeightGrid>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Hello from './Hello';
import Greeting from './Greeting';
import Counter from './Counter';
function App() {

  var name : string = "Rahma"
  var age : number = 5 

  return (
<div>
  <Hello name ={name} age={age}/>
  <Greeting name={name}/>
  <Counter/>
</div>
  );
}

export default App;

import React from 'react'
import './App.css';
import StateClass from '../components/StateClass'
import StateFunction from '../components/StateFunction'
import DialogTest from '../pages/dialog-test'
function App() {
  return (
    <div className="App">
      <StateClass />
      <StateFunction />
      <DialogTest />
    </div>
  );
}

export default App;

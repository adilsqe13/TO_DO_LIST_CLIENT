import React from 'react';
import './App.css';
import DataForm from './components/DataForm';
import Alert from './components/dynamic/Alert';


function App() {
  
  return (
    <>
      <Alert />
      <div className="container">
        <div className="row">
          <h1 className='heading fs-1'>To Do List App</h1>
        </div>
        <DataForm /> 
      </div>
    </>

  )
}

export default App;

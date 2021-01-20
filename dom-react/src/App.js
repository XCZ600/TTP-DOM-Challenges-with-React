import './App.css';
import React from 'react';
import Table from './components/Table';

export default function App() {
  return (
    <div className="App">
      {/* makes page keep reloading: */}
      {/* <meta http-equiv="refresh" content="10"></meta> */}

      <h2>Grid Modify with React</h2>
      <Table />
    </div>
  )
}
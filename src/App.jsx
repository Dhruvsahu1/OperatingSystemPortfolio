import { useState } from 'react'
import './assets/app.scss'
import Doc from './components/Doc';
import Nav from './components/Nav';
import MacWindow from './windows/MacWindow';

function App() {
  return (
    <main>
      <Nav/>
      <MacWindow>
        <h1>Hello we are here</h1>
      </MacWindow>
      <Doc/>
    </main>
  );
  
}

export default App

import { useState } from 'react'
import './assets/app.scss'
import Doc from './components/Doc';
import Nav from './components/Nav';
import Github from './windows/Github';

function App() {
  return (
    <main>
      <Nav/>
      <Github/>
      <Doc/>
    </main>
  );
  
}

export default App

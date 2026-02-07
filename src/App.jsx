import { useState } from 'react'
import './app.scss'
import Doc from './components/Doc';
import Nav from './components/Nav';
import Github from './windows/Github';
import Note from './windows/Note';
import Resume from './windows/Resume';
import Spotify from './windows/Spotify';

function App() {
  return (
    <main>
      <Nav/>
      <Github/>
      <Note/>
      <Resume/>
      <Doc/>
      <Spotify/>

    </main>
  )
}

export default App

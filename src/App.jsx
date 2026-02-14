import { useState } from 'react'
import './app.scss'
import Doc from './components/Doc';
import Nav from './components/Nav';
import Github from './windows/Github';
import Note from './windows/Note';
import Resume from './windows/Resume';
import Spotify from './windows/Spotify';
import CLI from './windows/CLI';

function App() {
  return (
    <main>
      <Nav/>
      <Github/>
      <Note/>
      <Resume/>
      <Doc/>
      <Spotify/>
      <CLI/>

    </main>
  )
}

export default App

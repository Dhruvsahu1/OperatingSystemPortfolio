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
     const[windowState,setWindowState] = useState({
      github:false,
      note:false,
      resume:false,
      doc:false,
      spotify:false,
      cli:false
     })

  return (
    <main>
      <Nav/>
      <Doc windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && <Github windowNName="github" windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.note && <Note  windowNName="note" windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.resume && <Resume windowNName="resume" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.spotify && <Spotify windowNName="spotify" windowState={windowState} setWindowState={setWindowState}/>}
      {windowState.cli && <CLI  windowNName="cli" windowState={windowState} setWindowState={setWindowState}/>}

    </main>
  )
}

export default App

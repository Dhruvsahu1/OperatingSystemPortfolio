import React from 'react'
import githubData from"../assets/github.json"
import MacWindow from './MacWindow';
import "./github.scss"

const GitCard = ({data = {id:1,image:"",title:"",description:"",tags:[],repolink:"",demolink:""}})=>{
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
           {data.tags.map(tag=><p className='tag'>{tag}</p>)} 
        </div>
        <div className="urls">
            <a href={data.repolink}>Repository </a>
            {data.demolink &&<a href={data.demolink}>Demo</a>}
        </div>
    </div>
}
const Github = ({windowNName,windowState,setWindowState}) => {
  return (
    <div>
      <MacWindow windowNName={windowNName} windowState={windowState} setWindowState={setWindowState}>
        <div className="cards">
          {githubData.map(project=>{
            return <GitCard data={project}/>
          })}
        </div>
      </MacWindow>
    </div>
  )
}

export default Github

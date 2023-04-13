import React from 'react';
import ReactDOM from 'react-dom';

import { FaStopwatch } from 'react-icons/fa';
import resume_photo from './images/sinancan.jpg';

const appStyles = {
  'font-family':'Roboto'
}

const joinedDivStyles = {
  'margin-top':'50px'
}

const photoStyles = {
  'width':'200px',
  'border-radius':'100px',
  'margin-bottom':'20px'
}

const skillStyles = {
  'width':'75px',
  'height':'40px',
  'background-color':'blue',
  'color':'white',
  'margin-right':'20px',
  'border-radius':'50px',
  'text-align':'center',
  'display':'inline-block',
  'line-height': '30px',
  'padding':0

}

const skills = ['.NET','C#','Python','SQL','Django','React','SSMS','Postgres','Docker','Git','Html','CSS']

const joinedDate = 'Jun 18, 2022'

const skillsList = skills.map((skills) => <li style={skillStyles}>{skills}</li>)


const main = (
  <main className='main-wrapper'>
    <div>
      <img style={photoStyles} src={resume_photo} alt ='Sinancan' />
      <h3>SİNANCAN SEVİNÇ</h3>
      <p>Software Engineer, Turkey</p>
    </div>

    <div>
      <h1>SKILLS</h1>
      <ul>
        {skillsList}
      </ul>
    </div>

    <div style={joinedDivStyles}>
      <FaStopwatch/> Joined on {joinedDate}
    </div>
  </main>
)


const footer = (
  <footer className='footer-wrapper'>

  </footer>
)




const app = (
  <div style={appStyles} className='app'>
    {main}
  </div>
)



const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)
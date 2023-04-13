import React from 'react'
import ReactDOM from 'react-dom'
import frontend_image from "./images/frontend_technologies.png"

const centerText = {
  textAlign:'center',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
const formInput = {
  display:'flex',
  'flex-direction':'row',
  'justify-content':'space-between',
  'align-items':'center',
  'margin-bottom':'10px'

}

const buttonStyles = {
  'background-color':'red',
  'margin-top':'25px',
  'border-radius':'10px',
  'width':'200px',
  'color':'white'
}

const mainStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
  textAlign:'center',
  'border-radius':'20px 20px'
}

const copyRight ='CopyRight ' + new Date().getFullYear()

const header_Frontend = (
  <div>
    <img src={frontend_image} alt='FrontEnd Images'/>
  </div>
)




const main = (
  <main className='main-wrapper'>
    <div style={mainStyles}>
      <h2 style={centerText}>SUBSCRIBE</h2>
      <p>Sign up with your email address to receive news and updates</p>
      <div style={formInput}>
        <input type='text' placeholder='First name'></input>
        <input type='text' placeholder='Last name'></input>
        <input type='text' placeholder='Email'></input>

      </div>

      <div>
        <button style={buttonStyles}>Subsribe</button>
      </div>
      
    
    
    </div>

  </main>
)

const footer = (
  <footer>
    <div className='footer-wrapper' style={centerText}>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const app = (
  <div className='app'>
    {header_Frontend}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)
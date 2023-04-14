import React from 'react';
import ReactDOM from 'react-dom';

const welcome = 'Welcome to 30 Days of React Course'
const author = {
  firstName:"Sinancan",
  lastName:"Sevinç"
}
const date = 'Mar 24, 1999'

const copyRight = '2023'


const Header = () => (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>My name is {author.firstName} {author.lastName}</h2>
        <small>{date}</small>
      </div>
    </header>
)

const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

const App = () => (
  <div className='app'>
    <Header/>
    <Footer/>
  </div>
)


const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<Header />, rootElement)



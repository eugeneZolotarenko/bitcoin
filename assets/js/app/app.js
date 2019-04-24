import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Results from './Results'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      location: 'home'
    }
    this.routingSystem = this.routingSystem.bind(this)
  }
  routingSystem(){
    switch(this.state.location) {
      case 'home':
        return <Home />
        break;
      case 'results':
        return <Results />
        break;
      default:
        return  <Home /> 
    }
  }

  render () {
    return (<div className='home'>
     <div className="wrapper wrapper-header">
       <header className="container container-header">
         <div className="logo">
           Crypto Profits
         </div>
         <nav className="menu">
           <a href="#">Register</a>
         </nav>
       </header>
       {/* <Home /> */}
       {/* <Results /> */}
       {this.routingSystem()}
     </div>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)

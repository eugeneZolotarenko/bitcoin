import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Results from './Results'
import moment from 'moment'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      location: 'home',
      date: moment()
    }
    this.routingSystem = this.routingSystem.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }
  routingSystem(){
    switch(this.state.location) {
      case 'home':
        return <Home handleDateChange = {this.handleDateChange} globalState={this.state} />
      case 'results':
        return <Results />
      default:
        return  <Home handleDateChange = {this.handleDateChange} globalState={this.state} /> 
    }
  }

  handleDateChange(date) {
    this.setState({
      date: date
    }, () => console.log(this.state.date));
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
       {this.routingSystem()}
     </div>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)

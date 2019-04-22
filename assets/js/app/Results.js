import React, { Component} from 'react'
// import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<section className='results'>
     <div className="wrapper">
       <div className="container results-container">
          <div className="ads"></div>
          <h3>Your $1200 dollar investment is now</h3>
          <h1>$7300</h1>
          <h4>You made 400% profit</h4>
          <a href="#">Create account to keep track of all your records</a>
          <div className="ads"></div>
       </div>
     </div>
    </section>)
  }
}


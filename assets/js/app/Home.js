import React, { Component} from 'react'
import DatePicker from "react-datepicker"


export default class Home extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (<section className='home'>
     <div className="wrapper">
       <div className="container main-container">
         <img src="/img/logo.png" />

         <form className="main-form">
           <h2>Enter Transaction</h2>
           <label>Crypto Amount</label>
           <input type="text" name="amount" />

           <label>Date</label>
           {/* <input type="text" name="date" /> */}
           <DatePicker
              selected={this.props.globalState.date}
              onChange={this.props.handleDateChange}
            />

           <button className="check-btn" type="submit">Check Profits</button>
         </form>
         
       </div>
     </div>
    </section>)
  }
}


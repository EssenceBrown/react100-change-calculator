import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
   amountDue: '',
   amountReceived: '',
   change: '',
   twenties: '',
   tens: '',
   fives: '',
   ones: '',
   quarters: '',
   dimes: '',
   nickels: '',
   pennies: '',
};

this.handleReceived = this.handleReceived.bind(this);
this.handleDue = this.handleDue.bind(this);
this.handleClick = this.handleClick.bind(this);

  }

  handleDue(e) {
    console.log(e.target.value)
    this.setState({ amountDue: e.target.value });
  }

  handleReceived(e) {
    console.log(e.target.value)
    this.setState({  amountReceived: e.target.value });
  }
  

  handleClick(){
    const amountDue =this.state.amountDue;
    const  amountReceived = this.state.amountReceived;
    console.log(amountDue,amountReceived)
    let change = amountReceived - amountDue;
    let dollars = Math.floor(change);
    let cents = (change - dollars) * 100;

    let twenties = Math.floor(dollars / 20)
    dollars = dollars % 20;

    let tens = Math.floor(dollars /10)
    dollars = dollars % 10;

    let fives = Math.floor(dollars / 5)
    dollars = dollars % 5;

    let ones = Math.floor(dollars / 1)
    dollars = dollars % 1;

    let quarters = Math.floor(cents / 25)
    cents = cents % 25;

    let dimes  = Math.floor(cents / 10)
    cents = cents % 10;

    let nickels = Math.floor(cents / 5)
    cents = cents % 5;

    let pennies = Math.floor(cents / 1)
    cents = cents % 1
 

this.setState({
  twenties: twenties,
  tens: tens,
  fives: fives,
  ones: ones,
  quarters: quarters,
  dimes: dimes,
  nickels: nickels,
  pennies: pennies,
  change:`The total change due is $${(change).toFixed(2)}`
})
  }

  render() {
    return (
      <div className='container'>
        <h1>Change calculator</h1>
        <hr />
        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel panel-heading panel-title'>Enter Information</div>
              <div className='panel-body'>
                <strong>How much is due?</strong>
                <br />
                <input
                  type='number'
                  name='amountDue'
                  placeholder='amountDue'
                  onChange={this.handleDue}
                  value={this.state.amountDue} />
              </div>
              <div className='panel-body'>
                <strong>How much was received?</strong>
                <br />
                <input
                  type='number'
                  name='amountReceived'
                  placeholder="amountReceived"
                  onChange={this.handleReceived}
                  value={this.state.amountReceived} />
              </div>
              <div className='panel panel-default'>
                <div className='panel panel-footer'>
                  <button type='button'
                    className='btn btn-primary'
                    onClick={this.handleClick}>Calculate</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-12'>
            <div className='panel panel-default'>
              <div className='alert'>
              <div className='alert alert-success'>{this.state.change}</div>
                <div className=' well container change-column'>
                  <div className='row'>
                    <p className=' col-sm-3'>Twenties <br /><span className= 'change'>{this.state.twenties}</span></p>
                    <p className=' col-sm-3'> Tens  <br /><span className= 'change'>{this.state.tens}</span></p>
                    <p className=' col-sm-3'> Fives  <br /><span className= 'change'>{this.state.fives}</span></p>
                    <p className=' col-sm-3'> Ones  <br /><span className= 'change'>{this.state.ones}</span></p>
                  </div>
                  <div className='row bottom'>
                    <p className=' col-sm-3'> Quarters  <br /><span className= 'change'>{this.state.quarters}</span></p>
                    <p className= 'col-sm-3'> Dimes  <br /><span className= 'change'>{this.state.dimes}</span></p>
                    <p className= 'col-sm-3'> Nickels  <br /><span className= 'change'>{this.state.nickels}</span></p>
                    <p className=' col-sm-3'> Pennies  <br /><span className= 'change'>{this.state.pennies}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

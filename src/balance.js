import React, { Component } from 'react';
import moneyMover from './MoneyMoverInstance';
import web3 from './web3';

class Balance extends Component {
  state = {
    balance: 0
  };

  async componentDidMount() {
    const balanceWei = await web3.eth.getBalance(moneyMover.options.address);
    const balance = web3.utils.fromWei(balanceWei, 'ether');
    this.setState({ balance });
  }

  render() {
    return (
      <h5 style={{ paddingTop: 20 }}>
        {' '}
        Balance is {this.state.balance} ether{' '}
      </h5>
    );
  }
}

export default Balance;

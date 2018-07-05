import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
import moneyMover from './MoneyMoverInstance';
import web3 from './web3';

class WithdrawForm extends Component {
  state = {
    loading: false,
    errorMessage: ''
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await moneyMover.methods.withdrawMoney().send({
        from: accounts[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Form
        style={{ paddingTop: 10 }}
        onSubmit={this.onSubmit}
        error={!!this.state.errorMessage}
      >
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Withdraw balance!
        </Button>
      </Form>
    );
  }
}

export default WithdrawForm;

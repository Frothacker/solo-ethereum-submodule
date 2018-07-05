import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import moneyMover from './MoneyMoverInstance';
import web3 from './web3';

class ContributeForm extends Component {
  state = {
    value: '',
    loading: false,
    errorMessage: ''
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await moneyMover.methods.giveMoney().send({
        value: web3.utils.toWei(this.state.value, 'ether'),
        from: accounts[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            label="Ether"
            labelPosition="right"
            value={this.state.value}
            onChange={event => {
              this.setState({ value: event.target.value });
            }}
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;

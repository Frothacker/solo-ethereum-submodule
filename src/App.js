import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Give from './giveMoney';
import Withdraw from './withdrawMoney';
import Balance from './balance';
import End from './ending';

class App extends Component {
  render() {
    return (
      <Container style={{ paddingTop: 10 }}>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
        />
        <h3> Money Mover </h3>
        <Give />
        <Balance />
        <Withdraw />
        <End />
      </Container>
    );
  }
}

export default App;

import {createContainer} from 'marty';
import React from 'react';
import isoMarty from './isoflux';

import EchoStore from './EchoStore';

class EchoComponent extends React.Component {
  render() {
    return (
      <div>{this.props.echo}</div>
    );
  }
}

export default createContainer(EchoComponent, {
  listenTo: EchoStore.name,
  fetch: {
    echo() {
      return EchoStore.getEcho(this.props.value);
    }
  }
});

import {Store, handles} from 'marty';

import EchoActionCreators from './EchoActionCreators';
import EchoConstants from './EchoConstants';
import isoMarty from './isoflux';

@isoMarty.register
export default class EchoStore extends Store {
  getEcho(value) {
    return this.fetch(
      value,
      () => this.state[value],
      () => EchoActionCreators.getEcho(value)
    );
  }

  @handles(EchoConstants.RECEIVE_ECHO)
  receiveEcho(value, echo) {
    this.state[value] = echo;
    this.hasChanged();

    // Just to demonstrate that this store is not a singleton.
    console.log('state keys', Object.keys(this.state));
  }
}

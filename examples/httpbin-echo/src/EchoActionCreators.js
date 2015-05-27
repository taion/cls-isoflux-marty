import {ActionCreators} from 'marty';

import EchoApi from './EchoApi';
import EchoConstants from './EchoConstants';
import isoMarty from './isoflux';

@isoMarty.register
export default class EchoActionCreators extends ActionCreators {
  getEcho(value) {
    return EchoApi.getEcho(value).then(echo => {
      this.dispatch(EchoConstants.RECEIVE_ECHO, value, echo);
    });
  }
}

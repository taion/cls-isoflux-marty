import {HttpStateSource, hooks} from 'marty';

import isoMarty from './isoflux';

@isoMarty.register
export default class EchoApi extends HttpStateSource {
  getEcho(value) {
    return this
      .get(`http://httpbin.org/get?value=${value}`)
      .then(response => response.text());
  }
}

// This will be the default in marty@0.10.0.
HttpStateSource.removeHook(hooks.parseJSON);

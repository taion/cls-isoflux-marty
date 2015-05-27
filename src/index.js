import Isoflux from 'cls-isoflux';
import {Application} from 'marty';
import Override from 'override-decorator';

export default class IsoMarty extends Isoflux {
  _registrations = [];

  app = this.createProxy(Application);

  @Override
  createApp() {
    const marty = new Application();
    this._registerObjects(marty);

    return marty;
  }

  _registerObjects(marty) {
    this._registrations.forEach(Class => marty.register(Class.name, Class));
  }

  register(Class) {
    this._registrations.push(Class);
    return this.createProxy(Class);
  }

  @Override
  _getProxiedObject(Class) {
    const marty = this.getApp();

    if (Class === Application) {
      return marty;
    } else {
      return marty[Class.name];
    }
  }
}

import Alt from 'alt';
import Isoflux from 'cls-isoflux';
import Override from 'override-decorator';

const ACTIONS = 'actions';
const STORE = 'store';

export default class IsoAlt extends Isoflux {
  _allActions = [];
  _allStores = [];

  @Override
  createApp() {
    const alt = new Alt();
    this._registerObjects(alt);

    return alt;
  }

  _registerObjects(alt) {
    this._allActions.forEach(Actions => alt.addActions(Actions.name, Actions));
    this._allStores.forEach(Store => alt.addStore(Store.name, Store));
  }

  actions(Actions) {
    this._allActions.push(Actions);
    return this.createProxy(Actions, {type: ACTIONS});
  }

  store(Store) {
    this._allStores.push(Store);
    return this.createProxy(Store, {type: STORE});
  }

  @Override
  _getProxiedObject(Class, {type}) {
    const alt = this.getApp();

    if (type === ACTIONS) {
      return alt.getActions(Class.name);
    } else if (type === STORE) {
      return alt.getStore(Class.name);
    }
  }
}

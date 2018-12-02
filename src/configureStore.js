/**
 * Created with wangyonghua.
 * Date: 2018-11-25
 * Time: 10:23
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './components/reducers';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():f=>f;

const createrStoreWithApplyMiddleware = compose(applyMiddleware(thunk), reduxDevtools)(createStore);

export default function configureStore(initialState) {
  const store = createrStoreWithApplyMiddleware(reducer, initialState);

  return store;
}

import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';

const middlewares = [logger]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(reducers, {}, composedEnhancers);

export * as action from './action';

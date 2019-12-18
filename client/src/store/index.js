import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import startHere from './startHere/reducer';

const rootReducer = combineReducers({startHere});

const middleware = [reduxThunk, logger];
const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, composeWithDevTools(enhancers));

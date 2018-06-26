import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer.js';

const rootReducer = combineReducers({
    events: eventsReducer
});

export default rootReducer;
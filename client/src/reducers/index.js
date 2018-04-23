import {combineReducers} from 'redux';
import website from './website';

const rootReducer = combineReducers({website: website});

export default rootReducer;

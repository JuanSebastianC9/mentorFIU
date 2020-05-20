import { combineReducers } from 'redux';
import authentication from './authentication';
import registration from './registration';

const allReducers = combineReducers({
    authentication,
    registration
});

export default allReducers;
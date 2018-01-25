import { Action, Reducer } from 'redux';
import AppState from './AppState';

const initialState: AppState = {

};

const reducer: Reducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
    return state;
};

export default reducer;

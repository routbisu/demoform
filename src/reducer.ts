import { Action, Reducer } from 'redux';
import AppState from './AppState';

const initialState: AppState = {

};

export const rootReducer: Reducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
    return state;
};
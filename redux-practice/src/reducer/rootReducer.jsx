import { CounterReducer } from './Counter'
import {  combineReducers } from 'redux'

export const rootReducer = combineReducers({
    Counter : CounterReducer
})
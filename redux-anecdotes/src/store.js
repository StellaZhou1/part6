import { createStore,combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    notification: notificationReducer,
    anecdotes: anecdoteReducer
})
const store = createStore(reducer,composeWithDevTools())  
export default store
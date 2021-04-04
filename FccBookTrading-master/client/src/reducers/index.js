import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import bookReducer from './bookReducer'
import userReducer from './userReducer'
import sentTradeReducer from './sentTradeReducer'
import receivedTradeReducer from './receivedTradeReducer'
export default combineReducers({
  auth:authReducer,
  book:bookReducer,
  user:userReducer,
  form:formReducer,
  sentTrade:sentTradeReducer,
  receivedTrade:receivedTradeReducer
})
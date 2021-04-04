import axios from 'axios'
import { FETCH_USER, SAVE_USER, ADD_BOOK, FETCH_BOOKS,
   FETCH_MY_BOOKS, USER_PROFILE, FETCH_BOOK, DELETE_BOOK,
    TRADE_REQUEST,FETCH_RECEIVED_TRADE,FETCH_SENT_TRADE,TRADE_CHOICE }
    
    from './types'

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}
export const userProfile = (id) => async (dispatch) => {
  const res = await axios.get('/api/profile/' + id)
  dispatch({ type: USER_PROFILE, payload: res.data })
}
export const saveUser = (id, values) => async (dispatch) => {
  const res = await axios.post('/api/profile/' + id, values)
  dispatch({ type: SAVE_USER, payload: res.data })
}
export const addBook = (id, values) => async (dispatch) => {
  const res = await axios.post('/api/books/add/' + id, values)
  dispatch({ type: ADD_BOOK, payload: res.data })
}
export const fetchBooks = () => async (dispatch) => {
  const res = await axios.get('/api/books/')
  dispatch({ type: FETCH_BOOKS, payload: res.data })
}
export const fetchMyBooks = () => async (dispatch) => {
  const res = await axios.get('/api/mybooks/')
  dispatch({ type: FETCH_MY_BOOKS, payload: res.data })
}
export const fetchBook = (id) => async (dispatch) => {
  const res = await axios.get('/api/book/' + id)
  dispatch({ type: FETCH_BOOK, payload: res.data })
}
export const deleteBook = (id) => async (dispatch) => {
  const res = await axios.delete('/api/book/' + id)
  dispatch({ type: DELETE_BOOK, payload: res.data })
}

export const sendTradeRequest = (values) => async (dispatch) => {
  const res = await axios.post('/api/tradeRequest/',values)
  dispatch({ type: TRADE_REQUEST, payload: res.data })
}
export const fetchReceivedTrade = () => async (dispatch) => {
  const res = await axios.get('/api/trade/received/')
  dispatch({ type: FETCH_RECEIVED_TRADE, payload: res.data })
}
export const fetchSentTrade = () => async (dispatch) => {
  const res = await axios.get('/api/trade/sent/')
  dispatch({ type: FETCH_SENT_TRADE, payload: res.data })
}
export const tradeChoice = (id,values) => async (dispatch) => {
  const res = await axios.post('/api/tradeResponse/' + id, values)
  dispatch({ type: TRADE_CHOICE, payload: res.data })
}

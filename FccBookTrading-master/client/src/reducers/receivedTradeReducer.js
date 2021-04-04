import { FETCH_RECEIVED_TRADE} from '../actions/types'
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_RECEIVED_TRADE:
      return action.payload || false 
    default:
      return state
  }
}
import { SHOW_ADVERTISEMENTS } from '../actions/getAdvertisements'

const initialState = {
  payload:{}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_ADVERTISEMENTS:
      return{
        ...state,
        payload: action.payload
      }
  default:
    return state
  }
}

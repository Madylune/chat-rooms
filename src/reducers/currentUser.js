import { UPDATE_CURRENT_USER } from '../actions/currentUser'

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        ...payload.user
      }
    default:
      return state
  }
}

export default reducer
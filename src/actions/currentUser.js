export const UPDATE_CURRENT_USER = 'update.current.user'
export const updateCurrentUser = user => ({
  type: UPDATE_CURRENT_USER,
  payload: { user }
})

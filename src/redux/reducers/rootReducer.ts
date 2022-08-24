import { combineReducers } from 'redux'

import uiSlice from '@redux/slices/uiSlice'

const rootReducer = combineReducers({
  ui: uiSlice
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>

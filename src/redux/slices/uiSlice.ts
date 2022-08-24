// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export const fetchData = createAsyncThunk(
//   'state/fetchState',
//   async (_, { dispatch }) => {
//     // dispatch(setLoading(true))

//     // dispatch(setLoading(false))
//   }
// )

type StateTypes = {
  updateData: boolean
}

// state
const initialState: StateTypes = {
  updateData: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setUpdateData: (state: any, action: PayloadAction<boolean>) => {
      state.updateData = action.payload
    }
  }
})

export const { setUpdateData } = uiSlice.actions

export default uiSlice.reducer

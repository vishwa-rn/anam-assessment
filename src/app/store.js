import { configureStore,createSlice } from '@reduxjs/toolkit';
import userDetail from '../features/userDetailSlice';

const reducerSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
     someAction: function() {

     }
  }
})

const store = configureStore({
  reducer: {
    someReducer: reducerSlice.reducer,
    app: userDetail,
  }
})

export default store;
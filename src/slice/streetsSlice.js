import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { streetsAPI } from "../api/streetsAPI";

export const fetchStreets = createAsyncThunk('streets/fetchStreets', async() => streetsAPI.get())

export const streetsSlice = createSlice({
  name: 'streets',
  initialState: {
    value: [],
    status: 'idle',
    error: null,
    selectedStreet: { }
  },
  reducers: {
    selectStreet: (state, action)=> {
      state.selectedStreet = action.payload;

    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStreets.pending, (state,action) => {
        state.status = 'loading';
      })
      .addCase(fetchStreets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchStreets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export const { addStreets, selectStreet } = streetsSlice.actions;
export default streetsSlice.reducer;
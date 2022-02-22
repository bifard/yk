import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { flatsAPI } from "../api/flatsAPI";
export const fetchFlats = createAsyncThunk('flats/fetchFlats', async(idBuilding) => flatsAPI.get(idBuilding));

export const flatsSlice = createSlice({
  name: 'flats',
  initialState: {
    value : [],
    status: 'idle',
    error: null,
    selectedFlat : { }
  },
  reducers: {
    addFlats: (state, action) => {
      state.value = action.payload;
    },
    selectFlat: (state, action) => {
      state.selectedFlat = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFlats.pending, (state,action)=> {
        state.status = 'loading';
      })
      .addCase(fetchFlats.fulfilled, (state,action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchFlats.rejected, (state,action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export const { addFlats, selectFlat } = flatsSlice.actions;
export default flatsSlice.reducer;
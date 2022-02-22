import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { buildingsAPI } from "../api/buildingsAPI";

export const fetchBuildings = createAsyncThunk('buildings/fetchBuildings', async(id)=> buildingsAPI.get(id))

export const buildingsSlice = createSlice({
  name: 'buildings',
  initialState: {
    value: [],
    status: 'idle',
    error: null,
    selectedBuilding: { }
  },
  reducers: {
    selectBuilding: (state, action)=> {
      state.selectedBuilding = action.payload;
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchBuildings.pending, (state,action)=> {
        state.status = 'loading';
      })
      .addCase(fetchBuildings.fulfilled, (state,action)=> {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchBuildings.rejected, (state,action)=> {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export const { addBuildings, selectBuilding } = buildingsSlice.actions;
export default buildingsSlice.reducer;
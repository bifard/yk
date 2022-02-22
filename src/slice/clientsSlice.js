import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientsAPI } from "../api/clientsAPI";
export const fetchClients = createAsyncThunk('fetch/fetchClients', async(idAddres)=> {
  const response = await clientsAPI.getAll(idAddres);
  if(response.status === 200) return response.json();
});

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    value: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addClients: (state, action)=> {
      state.value = action.payload;
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchClients.pending, (state,action) => {
        state.status = 'loading'
      })
      .addCase(fetchClients.fulfilled, (state,action) => {
        state.status = 'succeeded';
        if(action.payload){
          state.value = action.payload;
        }else{
          state.value = [];
        };
      })
      .addCase(fetchClients.rejected, (state,action) => {
        state.status = 'failed';
        state.error = action;
      })
  }
})

export const { addClients } = clientsSlice.actions;
export default clientsSlice.reducer;
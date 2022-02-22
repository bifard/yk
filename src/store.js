import { configureStore } from '@reduxjs/toolkit';
import streetsReducer from './slice/streetsSlice';
import buildingsReducer from './slice/builingsSlice';
import flatsReducer from './slice/flatsSlice';
import clientsReducer from './slice/clientsSlice';


export default configureStore({
  reducer: {
    streets: streetsReducer,
    buildings: buildingsReducer,
    flats: flatsReducer,
    clients: clientsReducer,
  },
})
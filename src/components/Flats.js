import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFlats, selectFlat } from '../slice/flatsSlice';

//components
import { List } from './List';

export const Flats = () => {
  const dispatch = useDispatch();

  //buildings
  const { selectedBuilding } = useSelector( state => state.buildings );
  //flats
  const flats = useSelector( state => state.flats.value );
  //get flats for id buildings
  useEffect(()=>{
    if (selectedBuilding.id) dispatch(fetchFlats(selectedBuilding.id))
  },[selectedBuilding, dispatch]);
  return (
    <>
      {flats && <List list={flats} setID = {selectFlat} placeholder={'кв/офис'} width={75}/>}
    </>
  );
}
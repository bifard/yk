import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuildings, selectBuilding } from '../slice/builingsSlice';

//components
import { List } from './List';

export const Buildings = () => {
  const dispatch = useDispatch();

  //streets
  const { selectedStreet } = useSelector( state => state.streets );

  //buildings
  const buildings = useSelector( state => state.buildings.value );
  
  //get buildings for id  street
  useEffect(()=>{
    if (selectedStreet.id) dispatch(fetchBuildings(selectedStreet.id))  
  },[selectedStreet.id, dispatch]);

  return (
    <>
      {buildings && <List list={buildings} setID = {selectBuilding} placeholder={'Дом'} width={75}/>}
    </>
  );
}
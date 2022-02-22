import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStreets, selectStreet } from '../slice/streetsSlice';

//component
import { List } from './List';


export const Streets = () => {
  //redux-toolkit
  const dispatch = useDispatch();

  //streets
  const streets = useSelector( state => state.streets.value );
  const streetsStatus = useSelector(state => state.streets.status);

  // get streets
  useEffect(()=>{
    if(streetsStatus === 'idle') dispatch(fetchStreets());
  },[streetsStatus, dispatch]);


  return (
    <>
      {streets && <List list={streets} setID = {selectStreet} placeholder={'Улица'} width={200}/>}
    </>
  );
}
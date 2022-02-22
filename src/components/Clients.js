import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {fetchClients} from '../slice/clientsSlice';

//components
import { Adress } from "./Adress";
import { CardClient } from './CardClient';
import { AddClient } from "./AddClient";
import Layout, { Content } from "antd/lib/layout/layout";

export const Clients = () => {
  //redux-toolkit
  const dispatch = useDispatch();

  const [adress, setAdress] = useState ({
    street: 'street',
    building: 'building',
    flat: 'flat'
  })

  //streets
  const { selectedStreet } = useSelector( state => state.streets );

  //buildings
  const { selectedBuilding } = useSelector( state => state.buildings );

  //flats
  const { selectedFlat } = useSelector( state => state.flats );

  //clients
  const clients = useSelector( state => state.clients.value );
  const clientsStatus = useSelector( state => state.clients.status );

  //get all clients for addresID
  useEffect(()=>{
    if (selectedFlat.id) dispatch(fetchClients(selectedFlat.id));
    setAdress({
      street : selectedStreet.name,
      building : selectedBuilding.name,
      flat : selectedFlat.name
    })
    return 
  },[selectedFlat, dispatch])

  return (
    <>
      <Layout style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Adress street = {adress.street} building = {adress.building} flat = {adress.flat}/>
        <AddClient/>
      </Layout>
      <Layout style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
      { 
        (clientsStatus === 'succeeded' && 
        clients.length > 0 && 
        clients.map((client)=> <CardClient key={client.id} client={client}/>)) || 
        (clientsStatus === 'succeeded' &&
        clients.length === 0 && 
        <p>Клиентов нет</p>)
      }
      </Layout>
    </>
  );
}
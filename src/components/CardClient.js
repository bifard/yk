import { Button, Card } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientsAPI } from '../api/clientsAPI';
import { fetchClients } from '../slice/clientsSlice';
import { ChangeClient } from './ChangeClient';

export const CardClient = ({client}) => {
  const dispatch = useDispatch();
  const selectedFlat = useSelector(state => state.flats.selectedFlat.id);
  const [isFetch, setIsFetch] = useState(false);

  const {name, phone, email} = client;

  useEffect(()=>{
    return ()=> {
      document.removeEventListener('onclick', deletClient);
    }
  })
  useEffect(()=>{
    return ()=> {
      document.removeEventListener('onclick', deletClient);
    }
  },[])
  useEffect(()=>{
    return ()=> {
      document.removeEventListener('onclick', deletClient);
    }
  },[name, phone, email])
  
  const deletClient = async() => {
    setIsFetch(true);
    try {
      const response = await clientsAPI.delete(client.bindId);
      if(response.status === 200) dispatch(fetchClients(selectedFlat));
    } catch (error) {
      alert(error.message)
    }
    setIsFetch(false);
  }
  return(
    <Card title={name} style={{ width: 300, margin: 20 }}>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <ChangeClient name = {name}  phone = {phone} email = {email}/>
      <Button loading={isFetch} onClick={deletClient}>
        Отвязать
      </Button>
    </Card>
  )
}
import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { clientsAPI } from '../api/clientsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../slice/clientsSlice';

export const FormClient = ({setVisible, initialValues = {}}) => {
  const dispatch = useDispatch();
  const [isFetch, setIsFetch] = useState(false);
  const [err, setErr] = useState('');
  const [form] = Form.useForm()
  //Adress
  const adress = useSelector(state => state.flats.selectedFlat.id);


  const onFinish = async(values) => {
    setIsFetch(true)

    if(!initialValues.id){
      try {
        const responseAddClient = await (await clientsAPI.add(values)).json();
        const responseBindClient = await clientsAPI.bind(adress,responseAddClient.id);
        if(responseBindClient.status === 200) setVisible(false);
        dispatch(fetchClients(adress));
        form.resetFields();
      } catch (error) {
        setErr(error.message)
      }
    }else {
      try {
        const responseAddClient = await (await clientsAPI.putClient(values)).json();
        if(responseAddClient.status === 200) setVisible(false);
        dispatch(fetchClients(adress));
        form.resetFields();
      } catch (error) {
        setErr(error.message)
      }
    }

    setIsFetch(false)
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      {
        err || 
          <Form
          form = {form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            preserve="false"
            label="name"
            name="name"
          >
            <Input preserve="false" />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
          >
            <Input type='email'/>
          </Form.Item>
          
          <Form.Item
            label='phone'
            name='phone'
            
            rules={[
              {
                required: true,
                message: 'Pleas input phone number!'
              }
            ]}
          >
            
            <Input type='tel' disabled={initialValues.id === 0}/>
          </Form.Item>
          

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button 
              type="primary" 
              htmlType="submit"
              loading={isFetch}
              disabled ={isFetch}
            >
              {
                initialValues.id !== 0 ? 'Добавить': 'Изменить'
              }
            </Button>
          </Form.Item>
        </Form>
      }
    </>
  );
};

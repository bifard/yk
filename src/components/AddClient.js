import React, {useEffect, useState} from "react";
import { Modal, Button } from 'antd';
import { FormClient } from "./FormClient";
import { useSelector } from "react-redux";

export const AddClient = () => {
  const addresID = useSelector(state => state.flats.selectedFlat.id);
  const [isDisabled, setIsDisabled] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if(addresID) {
      setIsDisabled(false)
    }else {
      setIsDisabled(true)
    }
  }, [addresID])

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" disabled={isDisabled} onClick={showModal}>
        Создать клиента
      </Button>
      <Modal
        getContainer={false}
        forceRender = {true}
        title="Создать клиента"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <FormClient setVisible = {setVisible}/>
      </Modal>
    </>
  );
};

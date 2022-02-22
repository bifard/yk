import { Button, Modal } from "antd";
import React, { useState } from "react";
import { FormClient } from "./FormClient";

export const ChangeClient = ({phone, email, name, id = 0}) => {
  const [visible, setVisible] = useState(false);

  const hendlerCancel = () => {
    setVisible(false);
  }
  const onVisible = () => {
    setVisible(true)
  }
  return (
    <>
      <Button onClick={onVisible}>
       Редактировать
      </Button>
      <Modal
        title='Редактирование клиента'
        visible={visible}
        onCancel = {hendlerCancel}
        footer = {false}
      >
        <FormClient initialValues={{phone,email,name, id}} setVisible={setVisible}/>
      </Modal>
    </>
  );
}
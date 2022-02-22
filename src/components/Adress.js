import React from "react";

export const Adress = ({street, building, flat}) => {
  return (
    <p>{`${'ул. ' + (street || 'Улица') + ', '}  ${(building  || 'Строение') + ', '}  ${flat || 'кв/офис'}`}</p>
  );
}
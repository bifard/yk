import React from "react";
import { Select } from 'antd';
import 'antd/dist/antd.min.css';
import { useDispatch } from "react-redux";
const { Option } = Select;

function onChange(value, option) {
  /* console.log(`selected ${option.onChange}`); */
  option.onChange()
}

function onSearch(val) {
 /*  console.log('search:', val); */
}
export const List = ({list, setID, placeholder, width}) => {
  const dispatch = useDispatch();
  return(
    <Select
      style={{minWidth: width}}
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
    { list &&
      list.map((elem)=> <Option key={elem.id+elem.name} onChange={() => dispatch(setID(elem))} value={elem.name} id={elem.id}>{elem.Name}</Option>)
    }
  </Select>
  );
}
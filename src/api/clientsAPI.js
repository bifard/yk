const urlGetForId = 'https://dispex.org/api/vtest/HousingStock/clients?addressId=';
const post = 'https://dispex.org/api/vtest/HousingStock/client';
const bindClient = 'https://dispex.org/api/vtest/HousingStock/bind_client';
const urlDelete = 'https://dispex.org/api/vtest/HousingStock/bind_client/';

export const clientsAPI = {
  getAll: async(id)=>{
    const response = await fetch(urlGetForId+id,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${process.env.REACT_APP_BEARER }`
      }
    })
    return response;
  },
  add: async(client) => {
    const {name, email, phone} = client;
    const data = {Id: 0, Name:name, Phone: phone, Email: email, BindId: 0}
    const response = await fetch(post, {
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.REACT_APP_BEARER }`,
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    return response;
  },

  bind: async(addressId, clientId) => {
    const data = {
      AddressId : addressId,
      ClientId: clientId
    }
    const response = await fetch(bindClient, {
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.REACT_APP_BEARER }`,
        "Content-Type": "application/json-patch+json"
      },
      method: "PUT"
    })
    return response;
  },

  putClient: async(client) => {
    const {name, email, phone, id} = client;
    const data = {Id: id, Name:name, Phone: phone, Email: email, BindId: 0}
    const response = await fetch(post, {
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.REACT_APP_BEARER }`,
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    return response;
  },
  delete: async(bindId) => {
    const response = await fetch(urlDelete+bindId, {
      headers: {
        Accept: "text/plain",
        Authorization: `${process.env.REACT_APP_BEARER }`
      },
      method: "DELETE"
    })
    return response;
  }
}
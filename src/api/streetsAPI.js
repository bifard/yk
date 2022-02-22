const url = 'https://dispex.org/api/vtest/Request/streets';
export const streetsAPI = {
  get: async()=> {
    const data = await fetch(url,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${process.env.REACT_APP_BEARER}`
      }
    })
    .then(res => res.json())
    return data;
  }
}
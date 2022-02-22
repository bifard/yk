const url =`https://dispex.org/api/vtest/Request/houses/`;
export const buildingsAPI = {
  get: async(id) => {
    const response = await fetch(url+id,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_BEARER || ' '}`
      }
    })
    return response.json();
  }
}
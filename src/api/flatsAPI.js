const url = 'https://dispex.org/api/vtest/Request/house_flats/'
export const flatsAPI = {
  get: async(idBuilding) => {
    const response = await fetch(url+idBuilding,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${process.env.REACT_APP_BEARER }`
      }
    })
    return response.json();
  }
}
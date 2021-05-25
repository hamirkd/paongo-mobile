export default function getMyBalance(id){
    const url = 'https://v2.api.paongo-trading.com/api/binance/'+id;
    const token =window && window.sessionStorage && sessionStorage.getItem('token');
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
  }
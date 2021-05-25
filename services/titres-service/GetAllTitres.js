  export default function findAllTitres(){
    const url = 'https://v2.api.paongo-trading.com/api/titres';
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
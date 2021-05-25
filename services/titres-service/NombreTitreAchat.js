
  export default function nombre_titre_acheter(titreModel){
    const url = 'https://v2.api.paongo-trading.com/api/achats_/nombre_titre_acheter/'+titreModel;
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
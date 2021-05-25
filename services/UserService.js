// export default DATA={user,token};

export default function login(login, password) {
    const url = 'https://v2.api.paongo-trading.com/api/auth/login';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: login,
            password: password,
        }),
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
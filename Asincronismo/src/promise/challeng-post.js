import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const dataUsers = {
  "email": "soy_un_pro@gmail.com",
  "password": "changeme",
  "name": "ramires",
  "role": "junior",
  "avatar": "https://cdn.lorem.space/images/face/.cache/640x480/pexels-alena-darmel-7710127.jpg"
}

postData(`${API}/users`, dataUsers)
  .then(response => response.json())
  .then(data => console.log(data));


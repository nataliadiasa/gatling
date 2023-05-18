import http from 'k6/http';
import config from '../config.js';

const generateRandomString = (myLength) => {
    const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    const randomArray = Array.from(
        { length: myLength },
        (v, k) => chars[Math.floor(Math.random() * chars.length)]
    );
        
    const randomString = randomArray.join("");
    return randomString;
};
    
export default function () {
    const id = generateRandomString(20);
    const email = `luffy-${id}@qa.com.br`;
    const url = `${config.SERVEREST_URL}/usuarios`;
    const payload = JSON.stringify({
        nome: "Monkey D. Luffy",
        email: email,
        password: "teste",
        administrador: "true"
    });
    
    const params = {
        headers: {
            'Content-Type': 'application/json',
            monitor: true
        },
    };
    
    return http.post(url, payload, params); 
}
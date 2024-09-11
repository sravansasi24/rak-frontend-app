import axios from 'axios';

let baseURL = "http://localhost:8080"

export default axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json' 
    },
    withCredentials: false
   
     // Disable SSL verification for local development
    //  httpAgent: new (require('https')).Agent({  
    //     rejectUnauthorized: false
    // })

});
import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{
        'okay':'okay_world'
    }
});
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';
instance.interceptors.request.use(request =>{
    // console.log(request);
    return request;
    }, error =>{
        console.log(error);
        return Promise.reject(error);
    });
export default instance;

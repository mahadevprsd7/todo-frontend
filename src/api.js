import axios from 'axios';

const api = axios.create({
 baseURL: 'https://todo-backend-2f6f.onrender.com/api/todos' 
});

export default api;
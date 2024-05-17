import axios from 'axios';

const usersServiceApi = axios.create({
    baseURL: 'http://localhost:5000/api',
});

const productsServiceApi = axios.create({
    baseURL: 'http://localhost:5001/api',
});

const weatherServiceApi = axios.create({
    baseURL: 'http://localhost:5002/api',
});

const shoppingCartServiceApi = axios.create({
    baseURL: 'http://localhost:5003/api',
});

const feedbackServiceApi = axios.create({ // Create axios instance for feedback service
    baseURL: 'http://localhost:5004/api', // Adjust port number if needed
});

const noteServiceApi = axios.create({ // Create axios instance for note-taking service
    baseURL: 'http://localhost:5005/api', // Adjust port number if needed
});

const contactServiceApi = axios.create({ // Create axios instance for feedback service
    baseURL: 'http://localhost:5006/api', // Adjust port number if needed
});

const randomNumberServiceApi = axios.create({ // Create axios instance for random number service
    baseURL: 'http://localhost:6002/api', // Adjust port number if needed
});

// Existing APIs
export const userAuthenticate = payload => usersServiceApi.post(`/user/auth`, payload);
export const userRegister = payload => usersServiceApi.post(`/user/register`, payload);

export const getAllProducts = () => productsServiceApi.get(`/products`);
export const getWeather = () => weatherServiceApi.get(`/weather`);
export const getProductsFromCart = id => shoppingCartServiceApi.get(`/cart/${id}`);
export const addProductToCart = payload => shoppingCartServiceApi.post(`/cart`, payload);

// Updated APIs
export const createFeedback = payload => feedbackServiceApi.post(`/sendfeedback`, payload);
export const createContact = payload => contactServiceApi.post(`/sendcontact`, payload);

export const createNote = payload => noteServiceApi.post(`/notes`, payload);
export const getNoteById = noteId => noteServiceApi.get(`/notes/${noteId}`);
export const updateNote = (noteId, payload) => noteServiceApi.put(`/notes/${noteId}`, payload);
export const deleteNote = noteId => noteServiceApi.delete(`/notes/${noteId}`);

// New API for random number service
export const getRandomNumber = () => randomNumberServiceApi.get(`/number`);

const apis = {
    userAuthenticate,
    userRegister,
    getAllProducts,
    getWeather,
    getProductsFromCart,
    addProductToCart,
    createFeedback,
    createContact,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
    getRandomNumber, // Add getRandomNumber to the exported object
};

export default apis;

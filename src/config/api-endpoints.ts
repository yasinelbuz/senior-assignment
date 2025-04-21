export const API_URL = import.meta.env.VITE_API_URL;

//api'ye istek atmak için kullanılır
export const ENDPOINTS = {
    POSTS: '/posts',
    POST: '/posts/:id',
    CREATE_POST: '/posts',
    UPDATE_POST: '/posts/:id',
    DELETE_POST: '/posts/:id',
    COMMENTS: '/comments',
}
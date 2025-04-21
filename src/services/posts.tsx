//fetch ile api'ye istek atmak için kullanılır

import { API_URL, ENDPOINTS } from '../config/api-endpoints';
import { useQuery } from '@tanstack/react-query';
import { PostsResponse } from '../types/posts';


export const getPosts = async (): Promise<PostsResponse> => {
    const response = await fetch(API_URL + ENDPOINTS.POSTS + `?_limit=${5}`);
    const data = await response.json();
    return data;
};


export const useGetPosts = () => {
    return useQuery<PostsResponse, Error>({
        queryKey: ['posts'],
        queryFn: getPosts,
    });
};

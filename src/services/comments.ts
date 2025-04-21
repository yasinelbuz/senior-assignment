//fetch ile api'ye istek atmak için kullanılır

import { API_URL, ENDPOINTS } from '../config/api-endpoints';
import { useQuery } from '@tanstack/react-query';
import { CommentsResponse } from '../types/comments';


export const getAllComments = async (): Promise<CommentsResponse> => {
    const response = await fetch(API_URL + ENDPOINTS.COMMENTS + `?_limit=${5}`);
    const data = await response.json();
    return data;
};


export const useGetAllComments = () => {
    return useQuery<CommentsResponse, Error>({
        queryKey: ['comments'],
        queryFn: getAllComments,
    });
};

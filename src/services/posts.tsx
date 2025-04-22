import { API_URL, ENDPOINTS } from '../config/api-endpoints';
import { useMutation, useQuery } from '@tanstack/react-query';
import { PayloadType, Post, PostsResponse, PostWithoutUserId } from '../types/posts';
import { CommentsResponse } from '../types/comments';



export const getPosts = async (payload: PayloadType): Promise<PostsResponse> => {
    const response = await fetch(`${API_URL}${ENDPOINTS.POSTS}?_limit=${payload.limit}`);
    const data = await response.json();
    return data;
};


export const useGetPosts = (payload: PayloadType) => {
    return useQuery<PostsResponse, Error>({
        queryKey: ['posts'],
        queryFn: () => getPosts(payload),
    });
};

export const getPost = async (id: string): Promise<Post> => {
    const response = await fetch(`${API_URL}${ENDPOINTS.POSTS}/${id}`);
    const data = await response.json();
    return data;
};

export const useGetPost = (id: string) => {
    return useQuery<Post, Error>({
        queryKey: ['post', id],
        queryFn: () => getPost(id),
        enabled: !!id
    });
};


export const getPostComments = async (id: string): Promise<CommentsResponse> => {
    const response = await fetch(`${API_URL}${ENDPOINTS.POSTS}/${id}/comments`);
    const data = await response.json();
    return data;
};

export const useGetPostComments = (id: string) => {
    return useQuery<CommentsResponse, Error>({
        queryKey: ['post-comments', id],
        queryFn: () => getPostComments(id),
    });
};

export const createPost = async (post: PostWithoutUserId): Promise<Post> => {
    const response = await fetch(`${API_URL}${ENDPOINTS.POSTS}`, {
        method: 'POST',
        body: JSON.stringify(post),
    });
    const data = await response.json();
    return data;
};

export const useCreatePost = () => {
    return useMutation<Post, Error, PostWithoutUserId>({
        mutationFn: (post) => createPost(post),
    });
};

export const updatePost = async (post: Post): Promise<Post> => {
    const response = await fetch(`${API_URL}${ENDPOINTS.POSTS}/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
    });
    const data = await response.json();
    return data;
};

export const useUpdatePost = () => {
    return useMutation<Post, Error, Post>({
        mutationFn: (post) => updatePost(post),
    });
};
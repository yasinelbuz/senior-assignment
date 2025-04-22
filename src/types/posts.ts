export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type PostWithoutUserId = Omit<Post, 'id'>;

export type PayloadType = {
    limit: number;
}

export type PostsResponse = Post[];

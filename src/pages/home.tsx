import Loading from "../components/loading";
import { useGetAllComments } from "../services/comments";
import { useGetPosts } from "../services/posts";
import { Comment } from "../types/comments";
import { Post } from "../types/posts";

const payload = {
  limit: 5,
}


export default function HomePage() {

    const { data: posts, isLoading:postsLoading } = useGetPosts(payload);
    const { data: comments, isLoading:commentsLoading } = useGetAllComments();

    if (postsLoading || commentsLoading) {
        return <Loading />;
    }

  return (
    <div className="flex gap-8 p-8">
      <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Posts List</h2>
        {posts?.map((post: Post, index: number) => (
            <div key={post.id} className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">{index + 1} - {post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
            </div>
        ))}
      </div>

      <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments List</h2>
        {comments?.map((comment:Comment, index: number) => (
            <div key={comment.id} className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">{index + 1} - {comment.name}</h3>
                <p className="text-gray-600">{comment.body}</p>
                
            </div>
        ))}
      </div>
    </div>
  )
}

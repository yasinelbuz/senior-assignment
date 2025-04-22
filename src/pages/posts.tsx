import { useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import { useNav } from "../hooks/use-nav";
import { useGetPosts } from "../services/posts";
import { Post } from "../types/posts";

const payload = {
  limit: 100,
}

export default function Posts() {

  const nav = useNav();
  const navigate = useNavigate();
  const { data: posts, isLoading } = useGetPosts(payload);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Posts List</h2>
        {posts?.map((post: Post, index: number) => (
          <div key={post.id} className="mb-4 flex justify-between items-center">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">{index + 1} - {post.title}</h3>
            </div>
            <div className="flex gap-2 mt-2">
                <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600" onClick={() => nav["post-edit"].go(navigate)({id: post.id})}>Update</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => nav.post.go(navigate)({id: post.id})}>View</button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" 
                onClick={() => nav['post-comments'].go(navigate)({id: post.id})}>View Comments</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

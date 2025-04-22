import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import { useGetPost } from "../services/posts";

export default function Post() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading } = useGetPost(id?.toString() ?? '');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8">
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          <button 
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Go Back
      </button> 
      {post?.title}</h2>
        <p className="text-gray-600">{post?.body}</p>
      </div>
    </div>
  )
}

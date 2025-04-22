import { useParams } from "react-router-dom";
import { useGetPostComments } from "../services/posts";
import Loading from "../components/loading";
import { Comment } from "../types/comments";

export default function PostComments() {

  const { id } = useParams();
  const { data: comments, isLoading } = useGetPostComments(id?.toString() ?? '');

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Yorum Listesi</h2>
        {comments?.map((comment: Comment, index: number) => (
          <div key={comment?.id} className="mb-4 flex justify-between items-center">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">{index + 1} - {comment.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

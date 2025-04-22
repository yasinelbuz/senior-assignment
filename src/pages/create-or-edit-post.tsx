/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreatePost, useGetPost, useUpdatePost } from "../services/posts";
import Loading from "../components/loading";
import { Post, PostWithoutUserId } from "../types/posts";

export default function CreateOrEditPost() {

  const params = useParams();

  const { mutateAsync: createPost, isPending: isCreatePending, data: createPostData } = useCreatePost();
  const { mutateAsync: updatePost, isPending: isUpdatePending, data: updatePostData } = useUpdatePost();
  const { data: post, isLoading } = useGetPost(params.id?.toString() ?? '');

  const [isCreateOrEdit, _setIsCreateOrEdit] = useState(params.id ? 'edit' : 'create');

  const navigate = useNavigate();

  const [formData, setFormData] = useState<PostWithoutUserId>({
    title: '',
    body: '',
    userId: 1
  });

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        body: post.body,
        userId: post.userId,
      });
    }
  }, [post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isCreateOrEdit === 'create') {
        const response: Post = await createPost(formData);
        if (response.id) {
          setFormData({
            title: '',
            body: '',
          userId: 1
          });
        }
      } else {
        const response = await updatePost({...formData, id: Number(params.id)});
        if (response.id) {
          setFormData({
            title: '',
            body: '',
            userId: 1
          });
        }
      }
    } catch (error) {
      console.error('Post creation error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Post</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="body" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={isCreatePending || isUpdatePending}
            >
              {isCreatePending || isUpdatePending ? 'Processing...' : isCreateOrEdit === 'create' ? 'Create' : 'Update'}
            </button>
          </div>
        </form>
        {(createPostData || updatePostData) && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-md">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-lg font-bold text-green-800">Post successfully {isCreateOrEdit === 'create' ? 'created' : 'updated'}!</h3>
            </div>
            <p className="text-green-600 mt-2">Post ID: {createPostData?.id || updatePostData?.id}</p>
          </div>
        )}
      </div>
    </div>
  );
}

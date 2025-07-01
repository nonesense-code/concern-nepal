import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Blog = {
  _id: string; // MongoDB _id as string
  title: string;
  status: string;
};

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
};

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const EditBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch blogs on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Blog[]>(
          `${VITE_BACKEND_URL}/blog/all`
        );
        setBlogs(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (_id: string) => {
    const confirmText = prompt(
      'Type "CONFIRM-DELETE" to permanently delete this blog.'
    );

    if (confirmText !== "CONFIRM-DELETE") {
      alert("Deletion cancelled. You must type CONFIRM-DELETE exactly.");
      return;
    }

    try {
      await axios.delete(`${VITE_BACKEND_URL}/blog/delete/${_id}`);
      setBlogs(blogs.filter((blog) => blog._id !== _id));
      alert("Blog deleted successfully.");
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to delete blog");
    }
  };

  // Navigate to edit page
  const handleEdit = (id: string) => {
    navigate(`/admin/edit/${id}`);
  };

  if (loading) return <p className="text-white p-6">Loading blogs...</p>;
  if (error) return <p className="text-red-400 p-6">{error}</p>;

  return (
    <div className="min-h-screen bg-[rgba(10,20,32,0.6)] backdrop-blur-md text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-white/20">
            <thead>
              <tr className="text-left text-white/80">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr
                  key={blog._id}
                  className="hover:bg-white/10 transition-colors duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusStyles[blog.status]
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-4">
                    <button
                      onClick={() => handleEdit(blog._id)}
                      className="text-blue-400 hover:text-blue-600 font-semibold transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="text-red-400 hover:text-red-600 font-semibold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EditBlog;

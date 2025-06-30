import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type BlogType = {
  _id: string;
  title: string;
  author: string;
  image?: string;
  tags?: string[];
  status?: string;
  content?: string;
};

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${VITE_BACKEND_URL}/blog/all`);
        setBlogs(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading blogs...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-12 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        All Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs
          .filter((blog) => blog.status?.toLowerCase() === "completed")
          .map((blog) => (
            <Link
              to={`/blog/${blog._id}`}
              key={blog._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {blog.image ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-400 text-xl">
                  No Image
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700 flex-grow line-clamp-3">
                  {blog.content
                    ? blog.content.substring(0, 120) + "..."
                    : "No description available."}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>By {blog.author || "Unknown"}</span>
                  {blog.status && (
                    <span
                      className={`capitalize px-2 py-1 rounded-full text-white ${
                        blog.status === "Pending"
                          ? "bg-yellow-500"
                          : blog.status === "In Progress"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    >
                      {blog.status}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Blog;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Blog = {
  _id: number;
  title: string;
  status: string;
};

const dummyBlogs: Blog[] = [
  { _id: 1, title: "How to Write Clean Code", status: "Pending" },
  { _id: 2, title: "State Management in React", status: "In Progress" },
  { _id: 3, title: "Tailwind CSS Best Practices", status: "Completed" },
];

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
};

const EditBlog = () => {
  const [blogs, setBlogs] = useState(dummyBlogs);
  const navigate = useNavigate();

  const handleDelete = (_id: number) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((blog) => blog._id !== _id));
      // Add your backend delete logic here
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/edit/${id}`);
  };

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

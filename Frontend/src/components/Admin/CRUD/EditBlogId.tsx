import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type BlogData = {
  title: string;
  author: string;
  tags: string;
  image: string;
  status: string;
  content: string;
};

const statusOptions = ["Pending", "In Progress", "Completed"];

const EditBlogId = () => {
  const { id } = useParams<{ id: string }>();

  const [blogData, setBlogData] = useState<BlogData>({
    title: "",
    author: "",
    tags: "",
    image: "",
    status: "Pending",
    content: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Fetch blog by id
  useEffect(() => {
    if (!id) {
      setError("No blog id provided");
      setLoading(false);
      return;
    }
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${VITE_BACKEND_URL}/blog/${id}`);
        setBlogData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setError(null);
    setSuccess(false);
    try {
      await axios.put(`${VITE_BACKEND_URL}/blog/edit/${id}`, blogData);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update blog");
    }
  };

  if (loading) return <p className="text-white p-6">Loading blog data...</p>;
  if (error) return <p className="text-red-400 p-6">{error}</p>;

  return (
    <div className="min-h-screen w-full bg-[rgba(10,20,32,0.6)] backdrop-blur-md text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg shadow-lg p-8 space-y-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={blogData.title}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={blogData.author}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
        />

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={blogData.tags}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={blogData.image}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
        />

        <select
          name="status"
          value={blogData.status}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-[rgba(255,255,255,0.1)] border border-white/20 text-white placeholder-gray-300"
        >
          {statusOptions.map((status) => (
            <option
              key={status}
              value={status}
              className="bg-[#0a1420] text-white"
            >
              {status}
            </option>
          ))}
        </select>
        <span className="inline-block px-3 py-2 bg-white text-red-600 font-semibold rounded-md shadow-sm border border-red-300">
          Use <code className="font-mono bg-red-100 px-1 rounded">h1:</code> -{" "}
          <code className="font-mono bg-red-100 px-1 rounded">h6:</code> to
          indicate heading. Eg:{" "}
          <code className="font-mono bg-red-100 px-1 rounded">
            h1:This is heading
          </code>
          ,{" "}
          <code className="font-mono bg-red-100 px-1 rounded">
            h4:This is subheading
          </code>
        </span>

        <textarea
          name="content"
          placeholder="Content"
          value={blogData.content}
          onChange={handleChange}
          rows={8}
          className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
        ></textarea>

        {success && (
          <p className="text-green-400 font-semibold">
            Blog updated successfully!
          </p>
        )}
        {error && <p className="text-red-400 font-semibold">{error}</p>}

        <button
          onClick={handleUpdate}
          className="w-full py-2 rounded-md font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition"
        >
          Update Blog
        </button>
      </div>
    </div>
  );
};

export default EditBlogId;

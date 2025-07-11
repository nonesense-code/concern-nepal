import { useState } from "react";
import axios from "axios";

const NewBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    tags: "",
    image: "",
    status: "Pending",
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Send formData object directly; axios automatically JSON.stringify it and sets headers
      await axios.post(`${VITE_BACKEND_URL}/blog/create`, formData);

      // Axios throws on bad status automatically, so you can just check response.data if needed
      setSuccess(true);
      setFormData({
        title: "",
        author: "",
        tags: "",
        image: "",
        status: "Pending",
        content: "",
      });
    } catch (err: any) {
      // Axios errors have response data in err.response.data
      const message =
        err.response?.data?.message || err.message || "Failed to create blog";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[rgba(10,20,32,0.6)] backdrop-blur-md text-white flex items-center justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-lg shadow-lg p-8 space-y-6 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-2">Create New Blog</h2>

        {error && <p className="text-red-400 font-semibold mb-2">{error}</p>}
        {success && (
          <p className="text-green-400 font-semibold mb-2">
            Blog created successfully!
          </p>
        )}

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
            placeholder="Enter blog title"
            disabled={loading}
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
            placeholder="Author name"
            disabled={loading}
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Tags (comma separated)
          </label>
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
            placeholder="e.g., tech, react, web"
            disabled={loading}
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
            placeholder="https://example.com/image.jpg"
            disabled={loading}
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-[rgba(255,255,255,0.1)] border border-white/20 text-white placeholder-gray-300
             appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            disabled={loading}
          >
            <option value="Pending" className="bg-[#0a1420] text-white">
              Pending
            </option>
            <option value="In Progress" className="bg-[#0a1420] text-white">
              In Progress
            </option>
            <option value="Completed" className="bg-[#0a1420] text-white">
              Completed
            </option>
          </select>
        </div>

        {/* Content */}
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
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            required
            className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
            placeholder="Write your blog content here..."
            disabled={loading}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-md font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default NewBlog;

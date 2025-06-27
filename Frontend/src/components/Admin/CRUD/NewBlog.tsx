import { useState } from "react";

const NewBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    tags: "",
    image: "",
    status: "Pending",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blog Data:", formData);
    // You can now POST `formData` to MongoDB using Axios/Fetch
  };

  return (
    <div className="min-h-screen bg-[rgba(10,20,32,0.6)] backdrop-blur-md text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-lg shadow-lg p-8 space-y-6 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-2">Create New Blog</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
            placeholder="Author name"
          />
        </div>

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
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-[rgba(255,255,255,0.1)] border border-white/20 text-white placeholder-gray-300
             appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-md font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type BlogData = {
  title: string;
  author: string;
  tags: string[];
  image: string;
  status: string;
  content: string;
};

const UniqueBlog = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No blog ID provided.");
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${VITE_BACKEND_URL}/blog/${id}`);
        const fetchedBlog = {
          ...res.data,
          tags: Array.isArray(res.data.tags)
            ? res.data.tags
            : typeof res.data.tags === "string"
            ? res.data.tags.split(",").map((t: string) => t.trim())
            : [],
        };
        setBlog(fetchedBlog);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading blog...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Blog not found.</p>
      </div>
    );

  return (
    <main className="min-h-screen mt-20 bg-white text-gray-800 font-serif">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          aria-label="Go back"
        >
          ← Back to blogs
        </button>
      </div>

      {/* Blog Header */}
      <section className="max-w-4xl mx-auto px-6">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mb-6"
          />
        )}

        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-600 mb-4">
          By <span className="font-semibold">{blog.author}</span>
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 mb-12 text-black font-serif">
        {blog.content.split(/\r?\n/).map((line, index) => {
          const trimmed = line.trim();

          // Check if line starts with h1:, h2:, ..., h6:
          const headingMatch = trimmed.match(/^(h[1-6]):(.*)/i);

          if (headingMatch) {
            const Tag =
              headingMatch[1].toLowerCase() as keyof JSX.IntrinsicElements; // 'h1' | 'h2' | ...
            const text = headingMatch[2].trim();

            return (
              <Tag
                key={index}
                className="mt-6 mb-4 font-bold"
                // Add heading size based on tag (optional)
                style={{
                  fontSize:
                    Tag === "h1"
                      ? "1.5rem"
                      : Tag === "h2"
                      ? "1.75rem"
                      : Tag === "h3"
                      ? "1.5rem"
                      : Tag === "h4"
                      ? "1rem"
                      : Tag === "h5"
                      ? ".75rem"
                      : "1rem",
                }}
              >
                {text}
              </Tag>
            );
          }

          if (trimmed === "") {
            // No extra empty lines; just skip
            return null;
          }

          // Normal paragraph
          return (
            <p key={index} className="mb-4 leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </article>
    </main>
  );
};

export default UniqueBlog;

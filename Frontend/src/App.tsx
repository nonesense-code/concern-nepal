import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Admin from "./components/Admin/Admin";
import PublicLayout from "./components/layouts/PublicLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import NewBlog from "./components/Admin/CRUD/NewBlog";
import EditBlog from "./components/Admin/CRUD/EditBlog";
import EditBlogId from "./components/Admin/CRUD/EditBlogId";
import DeleteBlog from "./components/Admin/CRUD/DeleteBlog";
import Blog from "./components/Blogs/Blog";
import UniqueBlog from "./components/Blogs/UniqueBlog";
import Login from "./components/Protect/Login";
import ProtectedRoute from "./components/Protect/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<UniqueBlog />} />
        </Route>

        {/* Admin Login (unprotected) */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuth={!!localStorage.getItem("isAdmin")}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Admin />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="edit-blog" element={<EditBlog />} />
          <Route path="edit/:id" element={<EditBlogId />} />
          <Route path="delete-blog" element={<DeleteBlog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

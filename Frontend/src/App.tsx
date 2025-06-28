import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Admin from "./components/Admin/Admin";
import PublicLayout from "./components/layouts/PublicLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import NewBlog from "./components/Admin/CRUD/NewBlog";
import EditBlog from "./components/Admin/CRUD/EditBlog";
import EditBlogId from "./components/Admin/CRUD/EditBlogId";
import DeleteBlog from "./components/Admin/CRUD/DeleteBlog";
import ManageUser from "./components/Admin/CRUD/ManageUser";
import Blog from "./components/Blogs/Blog";
import UniqueBlog from "./components/Blogs/UniqueBlog";
import Signup from "./components/Protect/Signup";
import Login from "./components/Protect/Login";
import ProtectedRoute from "./components/Protect/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<UniqueBlog />} />
        </Route>

        {/* Unprotected Admin login/signup */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Admin />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="edit-blog" element={<EditBlog />} />
          <Route path="edit/:id" element={<EditBlogId />} />
          <Route path="delete-blog" element={<DeleteBlog />} />
          <Route path="manage-user" element={<ManageUser />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

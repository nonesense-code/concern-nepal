import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Admin from "./components/Admin/Admin";
import PublicLayout from "./components/layouts/PublicLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import NewBlog from "./components/Admin/CRUD/NewBlog";
import EditBlog from "./components/Admin/CRUD/EditBlog";
import DeleteBlog from "./components/Admin/CRUD/DeleteBlog";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="new-blog" element={<NewBlog />} />
            <Route path="edit-blog" element={<EditBlog />} />
            <Route path="delete-blog" element={<DeleteBlog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

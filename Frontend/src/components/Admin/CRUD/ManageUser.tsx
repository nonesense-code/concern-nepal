import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  _id: string;
  email: string;
  createdAt: string;
};

const ManageUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${backendURL}/user/all`);
      setUsers(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string, email: string) => {
    const confirmInput = prompt(
      `Are you sure you want to delete user "${email}"?\nType "CONFIRM-DELETE" to proceed.`
    );
    if (confirmInput !== "CONFIRM-DELETE") return;

    try {
      await axios.delete(`${backendURL}/user/delete/${id}`);
      setUsers((prev) => prev.filter((user) => user._id !== id));
      alert(`User "${email}" deleted successfully.`);
    } catch (err: any) {
      alert(err.response?.data?.message || "Delete failed.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Manage Accounts
      </h1>

      {error && (
        <div className="text-red-600 bg-red-100 p-3 rounded text-center mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-600">Loading users...</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="min-w-full text-sm sm:text-base text-left">
            <thead className="bg-gray-100 border-b text-gray-700">
              <tr>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3 hidden sm:table-cell">Created At</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-4 py-4 text-center">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 text-gray-800">{user.email}</td>
                    <td className="px-4 py-3 hidden sm:table-cell text-gray-500">
                      {user.createdAt && !isNaN(Date.parse(user.createdAt))
                        ? new Date(user.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "Invalid Date"}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => deleteUser(user._id, user.email)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUser;

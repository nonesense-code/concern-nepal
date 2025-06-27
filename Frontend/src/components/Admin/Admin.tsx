import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="600"
      pointerEvents="none"
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Admin = () => {
  const blogStats = {
    Pending: 12,
    "In Progress": 8,
    Completed: 35,
  };

  const blogs = [
    { id: 1, title: "How to Write Clean Code", status: "Pending" },
    { id: 2, title: "State Management in React", status: "In Progress" },
    { id: 3, title: "Tailwind CSS Best Practices", status: "Completed" },
  ];

  const statusStyles: Record<string, string> = {
    Pending: "bg-yellow-400 text-yellow-900",
    "In Progress": "bg-blue-400 text-blue-900",
    Completed: "bg-green-400 text-green-900",
  };

  const chartData = Object.entries(blogStats).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  const COLORS = ["#facc15", "#3b82f6", "#22c55e"]; // Yellow, Blue, Green

  return (
    <div className="min-h-screen bg-[rgba(10,20,32,0.6)] backdrop-blur-lg p-6 text-white font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-white mb-1">
          Admin Dashboard
        </h1>
        <p className="text-gray-300">Overview and Blog Management</p>
      </div>

      {/* Stats Cards + Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Status Cards */}
        <div className="space-y-4">
          {Object.entries(blogStats).map(([status, count]) => (
            <div
              key={status}
              className="rounded-xl backdrop-blur-sm bg-white/10 shadow-lg p-5 flex flex-col items-center justify-center"
              style={{ minWidth: "12rem" }}
            >
              <h3
                className={`text-xl font-semibold mb-1 px-4 py-1 rounded-full ${statusStyles[status]}`}
              >
                {status}
              </h3>
              <p className="text-4xl font-bold">{count}</p>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">
            Blog Status Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250} minWidth={250}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={50}
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: "#000",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Blog Status Counts
          </h2>
          <ResponsiveContainer width="100%" height={250} minWidth={250}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: "#000",
                }}
              />
              <Legend wrapperStyle={{ color: "white" }} />
              <Bar dataKey="value" fill="#3b82f6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Blog Table */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 border-b border-white/20">
          <h2 className="text-lg font-semibold text-white">All Blogs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="hover:bg-white/10 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {blog.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        statusStyles[blog.status]
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-400 hover:text-blue-200 transition duration-150">
                      Edit
                    </button>
                    <button className="text-red-400 hover:text-red-200 transition duration-150">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;

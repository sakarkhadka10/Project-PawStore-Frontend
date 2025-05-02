import React, { useState, useEffect } from "react";
import {
  FaDog,
  FaBoxOpen,
  FaBlog,
  FaUsers,
  FaCartShopping,
  FaEnvelope,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { fetchBreeds } from "../../../services/api";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    breeds: 0,
    accessories: 0,
    blogs: 0,
    users: 0,
    orders: 0,
    messages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // In a real app, you would fetch all these stats from the backend
        // For now, we'll just simulate with some data
        const breeds = await fetchBreeds();

        setStats({
          breeds: breeds.length,
          accessories: 15,
          blogs: 8,
          users: 24,
          orders: 12,
          messages: 5,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Breeds",
      count: stats.breeds,
      icon: <FaDog className="text-blue-500" />,
      path: "/admin/breeds",
      change: "+2",
      changeType: "increase",
    },
    {
      title: "Accessories",
      count: stats.accessories,
      icon: <FaBoxOpen className="text-amber-500" />,
      path: "/admin/accessories",
      change: "+5",
      changeType: "increase",
    },
    {
      title: "Blogs",
      count: stats.blogs,
      icon: <FaBlog className="text-green-500" />,
      path: "/admin/blogs",
      change: "+1",
      changeType: "increase",
    },
    {
      title: "Users",
      count: stats.users,
      icon: <FaUsers className="text-purple-500" />,
      path: "/admin/users",
      change: "+3",
      changeType: "increase",
    },
    {
      title: "Orders",
      count: stats.orders,
      icon: <FaCartShopping className="text-red-500" />,
      path: "/admin/orders",
      change: "-2",
      changeType: "decrease",
    },
    {
      title: "Messages",
      count: stats.messages,
      icon: <FaEnvelope className="text-indigo-500" />,
      path: "/admin/messages",
      change: "+2",
      changeType: "increase",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      date: "2023-06-15",
      status: "Delivered",
      amount: 129.99,
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      date: "2023-06-14",
      status: "Processing",
      amount: 79.5,
    },
    {
      id: "ORD-003",
      customer: "Robert Johnson",
      date: "2023-06-13",
      status: "Shipped",
      amount: 199.99,
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      date: "2023-06-12",
      status: "Delivered",
      amount: 149.95,
    },
    {
      id: "ORD-005",
      customer: "Michael Brown",
      date: "2023-06-11",
      status: "Cancelled",
      amount: 89.99,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {statCards.map((stat) => (
              <Link
                key={stat.title}
                to={stat.path}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 mb-1">{stat.title}</p>
                    <h3 className="text-3xl font-bold">{stat.count}</h3>
                    <div
                      className={`flex items-center mt-2 ${
                        stat.changeType === "increase"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {stat.changeType === "increase" ? (
                        <FaArrowUp className="mr-1 text-xs" />
                      ) : (
                        <FaArrowDown className="mr-1 text-xs" />
                      )}
                      <span className="text-sm">
                        {stat.change} from last month
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-gray-100">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Orders</h2>
              <Link
                to="/admin/orders"
                className="text-amber-600 hover:text-amber-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : order.status === "Shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-red-100 text-red-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${order.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/admin/breeds/new"
                className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FaDog className="mr-2" /> Add New Breed
              </Link>
              <Link
                to="/admin/accessories/new"
                className="flex items-center justify-center p-4 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors"
              >
                <FaBoxOpen className="mr-2" /> Add New Accessory
              </Link>
              <Link
                to="/admin/blogs/new"
                className="flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
              >
                <FaBlog className="mr-2" /> Create New Blog
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;

import React from 'react';
import { FiPackage, FiShoppingCart, FiUsers, FiDollarSign, FiPieChart, FiTrendingUp } from 'react-icons/fi';

const Dashboard = () => {
  // Sample data - replace with your actual data
//   const stats = [
//     { title: "Today's Sales", value: "$1,250", change: "+12%", icon: <FiDollarSign className="text-green-500" /> },
//     { title: "Total Orders", value: "84", change: "+5%", icon: <FiShoppingCart className="text-blue-500" /> },
//     { title: "Inventory Items", value: "256", status: "12 Low Stock", icon: <FiPackage className="text-orange-500" /> },
//     { title: "Customers", value: "1,024", change: "+8%", icon: <FiUsers className="text-purple-500" /> }
//   ];

//   const recentOrders = [
//     { id: "#ORD-001", customer: "John Doe", items: 5, amount: "$85.20", status: "Delivered" },
//     { id: "#ORD-002", customer: "Jane Smith", items: 3, amount: "$42.50", status: "Processing" },
//     { id: "#ORD-003", customer: "Robert Johnson", items: 7, amount: "$112.75", status: "Shipped" },
//     { id: "#ORD-004", customer: "Emily Davis", items: 2, amount: "$28.90", status: "Pending" }
//   ];

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      Header
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex space-x-2">
          <select className="bg-white border rounded-md px-3 py-1 text-sm">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
                {stat.change && (
                  <p className="text-green-500 text-sm mt-1 flex items-center">
                    <FiTrendingUp className="mr-1" /> {stat.change}
                  </p>
                )}
                {stat.status && (
                  <p className="text-orange-500 text-sm mt-1">{stat.status}</p>
                )}
              </div>
              <div className="text-3xl p-2 rounded-full bg-gray-100 self-center">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* Charts and Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Sales Chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Sales Overview</h2>
            <FiPieChart className="text-blue-500" />
          </div>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            {/* Replace with your actual chart component */}
            <p className="text-gray-500">Sales Chart Visualization</p>
          </div>
        </div>

        {/* Quick Actions */}
        {/* <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h2 className="font-semibold text-lg mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
              <span>Add New Product</span>
              <FiPackage />
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-green-50 text-green-600 rounded-md hover:bg-green-100">
              <span>Process Order</span>
              <FiShoppingCart />
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-purple-50 text-purple-600 rounded-md hover:bg-purple-100">
              <span>View Inventory</span>
              <FiPackage />
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100">
              <span>Customer Insights</span>
              <FiUsers />
            </button>
          </div>
        </div> */}
      </div>

      {/* Recent Orders */}
      {/* <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Recent Orders</h2>
          <button className="text-blue-600 text-sm hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{order.customer}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{order.items}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
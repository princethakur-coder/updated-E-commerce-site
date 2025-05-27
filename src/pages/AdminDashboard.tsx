import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useAuth } from '../context/AuthContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/admin/login');
    }
  }, [user, navigate]);

  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65000, 59000, 80000, 81000, 56000, 95000],
        fill: false,
        borderColor: 'rgb(0, 0, 0)',
        tension: 0.1
      }
    ]
  };

  const profitData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Profit',
        data: [15000, 13000, 20000, 19000, 12000, 25000],
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }
    ]
  };

  const stats = [
    { label: 'Total Sales', value: '₹4,36,000' },
    { label: 'Total Orders', value: '256' },
    { label: 'Average Order Value', value: '₹1,703' },
    { label: 'Total Customers', value: '189' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold mb-4">Sales Overview</h2>
          <Line data={salesData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold mb-4">Profit Analysis</h2>
          <Bar data={profitData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
        <h2 className="text-lg font-bold p-6 border-b">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: '#12345', customer: 'Prince', amount: '₹2,500', status: 'Delivered' },
                { id: '#12346', customer: 'Sumit', amount: '₹1,800', status: 'Processing' },
                { id: '#12347', customer: 'Neha', amount: '₹3,200', status: 'Shipped' },
                { id: '#12348', customer: 'Sunny', amount: '₹1,500', status: 'Delivered' },
                { id: '#12349', customer: 'Rahul', amount: '₹2,100', status: 'Processing' },
              ].map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
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

export default AdminDashboard;
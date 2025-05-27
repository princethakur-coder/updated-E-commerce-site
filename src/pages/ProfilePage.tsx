import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  useEffect(() => {
    document.title = 'My Profile - rEnshop';
    
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
    { id: 'orders', label: 'Orders', icon: <Package size={18} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const mockOrders = [
    { id: 123456, date: '2025-05-15', status: 'Delivered', total: 1299 },
    { id: 123455, date: '2025-04-28', status: 'Shipped', total: 3499 },
    { id: 123454, date: '2025-03-12', status: 'Delivered', total: 999 },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                <img 
                  src={user.avatar || 'https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg'} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-medium text-lg">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
            
            <nav>
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center p-2 rounded-md transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gray-100 text-black font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-3">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center p-2 rounded-md text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <span className="mr-3"><LogOut size={18} /></span>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Profile Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Phone</label>
                    <input
                      type="tel"
                      value="+91 9876543210"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Location</label>
                    <input
                      type="text"
                      value="Chandigarh, India"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      readOnly
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-4">Default Shipping Address</h3>
                  <p className="text-gray-600">
                    123 Main Street<br />
                    Sector 17<br />
                    Chandigarh, 160017<br />
                    India
                  </p>
                </div>
                
                <div className="mt-8">
                  <button className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Order History</h2>
                
                {mockOrders.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="pb-3">Order #</th>
                          <th className="pb-3">Date</th>
                          <th className="pb-3">Status</th>
                          <th className="pb-3">Total</th>
                          <th className="pb-3"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockOrders.map((order) => (
                          <tr key={order.id} className="border-b">
                            <td className="py-4">{order.id}</td>
                            <td className="py-4">{new Date(order.date).toLocaleDateString('en-IN')}</td>
                            <td className="py-4">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                order.status === 'Delivered' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4">₹{order.total}</td>
                            <td className="py-4">
                              <button className="text-black hover:underline">
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Package size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-600">You haven't placed any orders yet.</p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-xl font-bold mb-6">My Wishlist</h2>
                
                <div className="text-center py-8">
                  <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600">Your wishlist is empty.</p>
                  <button className="mt-4 bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Explore Products
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Password</h3>
                    <button className="text-black hover:underline">
                      Change Password
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Email Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="orderUpdates" checked className="mr-2" />
                        <label htmlFor="orderUpdates">Order updates</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="promotions" checked className="mr-2" />
                        <label htmlFor="promotions">Promotions and discounts</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="newsletter" checked className="mr-2" />
                        <label htmlFor="newsletter">Newsletter</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Language</h3>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                    </select>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Currency</h3>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
                      <option value="inr">Indian Rupee (₹)</option>
                      <option value="usd">US Dollar ($)</option>
                    </select>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <button className="text-red-500 hover:underline">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
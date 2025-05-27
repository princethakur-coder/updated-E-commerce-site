import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Heart, ShoppingBag, Settings, X } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import { useCart } from '../context/CartContext';

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { cartItems } = useCart();

  const menuItems = [
    { icon: <Home size={20} />, label: 'HOME', path: '/' },
    { icon: <User size={20} />, label: 'PROFILE', path: '/profile' },
    { icon: <Heart size={20} />, label: 'WISHLIST', path: '/wishlist' },
    { icon: <ShoppingBag size={20} />, label: 'CART', path: '/cart' },
    { icon: <Settings size={20} />, label: 'SETTINGS', path: '/settings' },
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
        isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'
      }`}
    >
      {isOpen && (
        <div className="p-4">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <span className="text-gray-700">{item.icon}</span>
                    <span>{item.label}</span>
                    {item.label === 'CART' && cartItems.length > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
                        {cartItems.length}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {cartItems.length > 0 && (
            <div className="mt-8 border-t pt-4">
              <h3 className="font-semibold text-lg mb-4">Shopping Cart</h3>
              <ul className="space-y-3">
                {cartItems.slice(0, 3).map((item) => (
                  <li key={item.id} className="flex items-center space-x-2 text-sm">
                    <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="truncate">{item.name}</p>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                  </li>
                ))}
                {cartItems.length > 3 && (
                  <li className="text-sm text-gray-600">
                    +{cartItems.length - 3} more items
                  </li>
                )}
              </ul>
              <Link 
                to="/cart"
                className="mt-4 block w-full bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    toggleSidebar();
                  }
                }}
              >
                View Cart
              </Link>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
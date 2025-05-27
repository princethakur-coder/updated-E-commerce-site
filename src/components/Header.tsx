import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User, LogIn } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useSidebar } from '../context/SidebarContext';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart();
  const { user } = useAuth();
  const { isOpen, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSidebar} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-3xl font-bold">
              rEnshop
            </Link>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex items-center w-1/3 relative">
            <input
              type="text"
              placeholder="SEARCH"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <Search className="absolute left-3 text-gray-400" size={18} />
            <button type="submit" className="hidden">Search</button>
          </form>

          <div className="flex items-center space-x-6">
            {user ? (
              <Link to="/profile\" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                <User size={20} />
                <span className="hidden md:inline">PROFILE</span>
              </Link>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                <LogIn size={20} />
                <span className="hidden md:inline">LOG IN</span>
              </Link>
            )}
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 relative">
              <ShoppingBag size={20} />
              <span className="hidden md:inline">SHOPPING BAG</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
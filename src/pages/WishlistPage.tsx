import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const WishlistPage: React.FC = () => {
  const { user } = useAuth();
  
  useEffect(() => {
    document.title = 'My Wishlist - rEnshop';
  }, []);

  // Mock wishlist items (empty for now)
  const wishlistItems: any[] = [];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Wishlist items would go here */}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="mb-6">
            <Heart size={64} className="mx-auto text-gray-300" />
          </div>
          <h2 className="text-xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">
            {user 
              ? "You haven't saved any products to your wishlist yet." 
              : "Sign in to save products to your wishlist."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/" 
              className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag size={18} className="inline-block mr-2" />
              Explore Products
            </Link>
            
            {!user && (
              <Link 
                to="/login" 
                className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
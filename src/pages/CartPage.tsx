import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  
  useEffect(() => {
    document.title = 'Shopping Cart - rEnshop';
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-8 text-center">
        <div className="mb-6">
          <ShoppingBag size={64} className="mx-auto text-gray-300" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b px-6 py-4 hidden md:grid grid-cols-12 gap-4">
              <div className="col-span-6 font-medium">Product</div>
              <div className="col-span-2 font-medium text-center">Price</div>
              <div className="col-span-2 font-medium text-center">Quantity</div>
              <div className="col-span-2 font-medium text-right">Subtotal</div>
            </div>
            
            <div>
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.name}`} className="border-b last:border-b-0 px-6 py-4">
                  <div className="md:grid md:grid-cols-12 md:gap-4 md:items-center">
                    {/* Product */}
                    <div className="md:col-span-6 flex items-center mb-4 md:mb-0">
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          {item.size} | {item.color}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-sm flex items-center mt-1 hover:text-red-700"
                        >
                          <Trash2 size={14} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:col-span-2 text-center mb-4 md:mb-0">
                      <div className="md:hidden text-sm text-gray-600 mb-1">Price:</div>
                      <div>₹{item.price}</div>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:col-span-2 flex justify-center mb-4 md:mb-0">
                      <div className="md:hidden text-sm text-gray-600 mb-1 mr-2">Quantity:</div>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity || 1}
                          onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-12 h-8 border-t border-b border-gray-300 text-center"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Subtotal */}
                    <div className="md:col-span-2 text-right">
                      <div className="md:hidden text-sm text-gray-600 mb-1">Subtotal:</div>
                      <div className="font-medium">₹{item.price * (item.quantity || 1)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-black flex items-center"
            >
              ← Continue Shopping
            </Link>
            <button 
              onClick={clearCart}
              className="text-red-500 hover:text-red-700"
            >
              Clear Cart
            </button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            
            <Link
              to="/checkout"
              className="block w-full bg-black text-white text-center py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
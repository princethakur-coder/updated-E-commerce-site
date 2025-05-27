import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Package } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    document.title = 'Order Confirmation - rEnshop';
  }, []);

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);
  
  const formattedDeliveryDate = estimatedDelivery.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="max-w-2xl mx-auto py-8 text-center">
      <div className="mb-6">
        <CheckCircle size={64} className="mx-auto text-green-500" />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <p className="text-lg mb-6">
          Your order has been received and is now being processed.
        </p>
        
        <div className="border-t border-b py-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-left">
              <p className="text-gray-600">Order Number:</p>
              <p className="font-bold">{id}</p>
            </div>
            
            <div className="text-left">
              <p className="text-gray-600">Estimated Delivery:</p>
              <p className="font-bold">{formattedDeliveryDate}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <CheckCircle size={16} />
                </div>
                <span className="text-xs mt-1">Confirmed</span>
              </div>
              
              <div className="flex-grow h-1 bg-gray-200 mx-2 relative">
                <div className="absolute inset-0 bg-green-500" style={{ width: '0%' }}></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <Package size={16} />
                </div>
                <span className="text-xs mt-1">Processing</span>
              </div>
              
              <div className="flex-grow h-1 bg-gray-200 mx-2"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <Package size={16} />
                </div>
                <span className="text-xs mt-1">Shipped</span>
              </div>
              
              <div className="flex-grow h-1 bg-gray-200 mx-2"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <CheckCircle size={16} />
                </div>
                <span className="text-xs mt-1">Delivered</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          We've sent a confirmation email to your registered email address with all the details of your order.
        </p>
        
        <p className="text-gray-600">
          If you have any questions about your order, please contact our customer support team.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          to="/" 
          className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
        
        <Link 
          to="/profile" 
          className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
        >
          View Order History
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
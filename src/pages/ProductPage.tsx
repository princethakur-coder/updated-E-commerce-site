import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share2, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import { Product } from '../types';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === Number(id));
  
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - rEnshop`;
    } else {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (product) {
      const itemsToAdd = Array(quantity).fill(product);
      itemsToAdd.forEach(item => addToCart(item));
      setAddedToCart(true);
      
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    }
  };

  // Get similar products (same category)
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 hover:text-black mb-6"
      >
        <ArrowLeft size={18} className="mr-1" />
        Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Images */}
        <div>
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
            <img 
              src={Array.isArray(product.images) ? product.images[selectedImage] : product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {Array.isArray(product.images) && product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-gray-100 rounded overflow-hidden aspect-square ${
                    selectedImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="text-xl font-semibold flex items-center">
              {product.originalPrice && product.originalPrice > product.price ? (
                <>
                  <span className="text-gray-400 line-through mr-2">₹{product.originalPrice}</span>
                  <span>₹{product.price}</span>
                  {product.discount > 0 && (
                    <span className="ml-2 bg-red-100 text-red-700 text-sm px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                </>
              ) : (
                <span>₹{product.price}</span>
              )}
            </div>
          </div>
          
          <div className="mb-6 text-gray-600">
            <p><span className="font-medium">Size:</span> {product.size}</p>
            <p><span className="font-medium">Color:</span> {product.color}</p>
            {product.category && <p><span className="font-medium">Category:</span> {product.category}</p>}
          </div>
          
          <div className="border-t border-b py-6 mb-6">
            <p className="mb-4">{product.description || "Experience the unique essence of this premium product. Perfect for daily use and special occasions alike."}</p>
            
            {product.features && (
              <ul className="list-disc list-inside ml-2 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="quantity" className="block mb-2 font-medium">
              Quantity
            </label>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 h-10 border-t border-b border-gray-300 text-center"
              />
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3 px-6 flex items-center justify-center rounded-md font-medium transition-colors ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check size={20} className="mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={20} className="mr-2" />
                  Add to Cart
                </>
              )}
            </button>
            
            <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <Heart size={20} />
            </button>
            
            <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {similarProducts.length > 0 && (
        <ProductGrid products={similarProducts} title="You Might Also Like" />
      )}
    </div>
  );
};

export default ProductPage;
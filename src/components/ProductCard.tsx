import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const { id, name, price, originalPrice, discount, image, size, color } = product;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group">
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden rounded-md bg-gray-100 aspect-square mb-3 group-hover:shadow-md transition-all duration-300">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
        </div>
        
        <h3 className="font-medium text-center">{name}</h3>
        
        <div className="text-sm text-gray-600 text-center mt-1">
          Size: {size} | Color: {color}
        </div>
        
        <div className="flex items-center justify-center mt-2 space-x-2">
          {originalPrice && originalPrice > price ? (
            <>
              <span className="text-gray-400 line-through">₹{originalPrice}</span>
              <span className="font-semibold">₹{price}</span>
            </>
          ) : (
            <span className="font-semibold">₹{price}</span>
          )}
        </div>
      </Link>
      
      <button
        onClick={handleAddToCart}
        className="w-full mt-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
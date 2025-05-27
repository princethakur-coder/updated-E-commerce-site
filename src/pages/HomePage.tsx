import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'rEnshop - Premium Shopping Experience';
  }, []);

  const featuredProducts = products.slice(0, 10);
  const newArrivals = products.slice(10, 20);
  const bestSellers = products.filter(product => product.discount > 0).slice(0, 5);

  const categories = [
    { name: 'Fragrances', image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg', count: '25 Products' },
    { name: 'Luggage', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', count: '15 Products' },
    { name: 'Travel Accessories', image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg', count: '10 Products' },
    { name: 'Electronics', image: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg', count: '8 Products' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden mb-12">
        <img 
          src="https://images.pexels.com/photos/1470165/pexels-photo-1470165.jpeg"
          alt="Premium Shopping Experience" 
          className="absolute w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 py-20 px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Shopping Experience</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Discover our exclusive collection of luxury products designed for the modern lifestyle.</p>
          <Link 
            to="/product/1" 
            className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Categories */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Link to="/" className="text-gray-600 hover:text-black flex items-center">
            <span>View All</span>
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to="/" className="group relative rounded-lg overflow-hidden aspect-[4/3]">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-medium">{category.name}</h3>
                <p className="text-sm opacity-80">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-gray-50 -mx-4 px-4 py-12 mb-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Best Sellers</h2>
            <Link to="/" className="text-gray-600 hover:text-black flex items-center">
              <span>View All</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm p-4 group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden rounded-md bg-gray-100 aspect-square mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-center">{product.name}</h3>
                  <div className="flex items-center justify-center mt-2 space-x-2">
                    {product.originalPrice && product.originalPrice > product.price ? (
                      <>
                        <span className="text-gray-400 line-through">₹{product.originalPrice}</span>
                        <span className="font-semibold">₹{product.price}</span>
                      </>
                    ) : (
                      <span className="font-semibold">₹{product.price}</span>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductGrid products={featuredProducts} title="Featured Products" />

      {/* New Arrivals */}
      <ProductGrid products={newArrivals} title="New Arrivals" />
    </div>
  );
};

export default HomePage;
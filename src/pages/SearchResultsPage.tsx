import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, Search } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const [filters, setFilters] = useState({
    categories: [] as string[],
    colors: [] as string[],
    priceRange: [0, 5000] as [number, number],
    sizes: [] as string[]
  });
  
  useEffect(() => {
    document.title = `Search: ${query} - rEnshop`;
    
    // Filter products based on search query
    if (query) {
      const results = products.filter((product) => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category?.toLowerCase().includes(query.toLowerCase()) ||
        product.color.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query]);

  // Extract unique categories, colors, and sizes for filter options
  const allCategories = [...new Set(products.map((product) => product.category).filter(Boolean))];
  const allColors = [...new Set(products.map((product) => product.color))];
  const allSizes = [...new Set(products.map((product) => product.size))];

  const handleFilterChange = (type: keyof typeof filters, value: string | number[]) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      
      if (type === 'priceRange' && Array.isArray(value)) {
        newFilters.priceRange = value as [number, number];
      } else if (Array.isArray(newFilters[type])) {
        const filterArray = newFilters[type] as string[];
        const valueStr = value as string;
        
        if (filterArray.includes(valueStr)) {
          newFilters[type] = filterArray.filter((item) => item !== valueStr);
        } else {
          newFilters[type] = [...filterArray, valueStr];
        }
      }
      
      return newFilters;
    });
  };

  // Apply all filters to search results
  useEffect(() => {
    if (query) {
      let results = products.filter((product) => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category?.toLowerCase().includes(query.toLowerCase()) ||
        product.color.toLowerCase().includes(query.toLowerCase())
      );
      
      // Apply category filter
      if (filters.categories.length > 0) {
        results = results.filter((product) => 
          product.category && filters.categories.includes(product.category)
        );
      }
      
      // Apply color filter
      if (filters.colors.length > 0) {
        results = results.filter((product) => 
          filters.colors.includes(product.color)
        );
      }
      
      // Apply size filter
      if (filters.sizes.length > 0) {
        results = results.filter((product) => 
          filters.sizes.includes(product.size)
        );
      }
      
      // Apply price range filter
      results = results.filter((product) => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
      
      setFilteredProducts(results);
    }
  }, [query, filters]);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold">Search Results</h1>
        </div>
        
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center text-gray-600 hover:text-black"
        >
          <SlidersHorizontal size={18} className="mr-2" />
          Filters
        </button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={query}
            readOnly
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        {query && (
          <p className="mt-2 text-gray-600">
            {filteredProducts.length} results for "{query}"
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        {showFilters && (
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h2 className="font-bold mb-4">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  {allCategories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={filters.categories.includes(category)}
                        onChange={() => handleFilterChange('categories', category)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category}`} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Color</h3>
                <div className="space-y-2">
                  {allColors.map((color) => (
                    <div key={color} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`color-${color}`}
                        checked={filters.colors.includes(color)}
                        onChange={() => handleFilterChange('colors', color)}
                        className="mr-2"
                      />
                      <label htmlFor={`color-${color}`} className="text-sm">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Size</h3>
                <div className="space-y-2">
                  {allSizes.map((size) => (
                    <div key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`size-${size}`}
                        checked={filters.sizes.includes(size)}
                        onChange={() => handleFilterChange('sizes', size)}
                        className="mr-2"
                      />
                      <label htmlFor={`size-${size}`} className="text-sm">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="px-2">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">₹{filters.priceRange[0]}</span>
                    <span className="text-sm">₹{filters.priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
              
              <button 
                onClick={() => setFilters({
                  categories: [],
                  colors: [],
                  priceRange: [0, 5000],
                  sizes: []
                })}
                className="mt-6 w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Search Results */}
        <div className={`${showFilters ? 'md:col-span-3' : 'md:col-span-4'}`}>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mb-6">
                <Search size={48} className="mx-auto text-gray-300" />
              </div>
              <h2 className="text-xl font-bold mb-4">No products found</h2>
              <p className="text-gray-600 mb-8">
                We couldn't find any products matching your search.
              </p>
              <Link 
                to="/" 
                className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
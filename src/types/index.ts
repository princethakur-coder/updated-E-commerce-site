export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount: number;
  image: string;
  images?: string[];
  size: string;
  color: string;
  category?: string;
  description?: string;
  features?: string[];
  quantity?: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  isAdmin?: boolean;
}
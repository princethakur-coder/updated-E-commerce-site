import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { SidebarProvider } from './context/SidebarContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SidebarProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </SidebarProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
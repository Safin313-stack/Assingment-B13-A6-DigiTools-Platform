import { useState } from 'react';
import { toast } from 'react-toastify';
import products from '../products.json';
import ProductCard from './ProductCard';
import CartItem from './CartItem';

const MainSection = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info('Your cart is already empty!', { theme: 'light' });
      return;
    }
    setCartItems([]);
    toast.success('🎉 Checkout successful! Thank you for your purchase!', { position: 'top-center', theme: 'light' });
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-3xl text-[#101727] mb-2">Premium Digital Tools</h2>
          <p className="text-[#627382] text-sm max-w-lg mx-auto">
            Everything you need to run, grow and scale your digital business.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-[#F3F4F6] rounded-xl p-1 gap-1">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                activeTab === 'products'
                  ? 'bg-[#4F39F6] text-white shadow'
                  : 'text-[#627382] hover:text-[#101727]'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all relative ${
                activeTab === 'cart'
                  ? 'bg-[#4F39F6] text-white shadow'
                  : 'text-[#627382] hover:text-[#101727]'
              }`}
            >
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {activeTab === 'products' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
        )}

        {/* Cart Section */}
        {activeTab === 'cart' && (
          <div className="max-w-2xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 bg-[#F8F9FF] rounded-2xl border border-dashed border-gray-200">
                <p className="text-5xl mb-3">🛒</p>
                <h3 className="font-bold text-lg text-[#101727] mb-1">Your cart is empty</h3>
                <p className="text-[#627382] text-sm mb-5">Add some tools to get started!</p>
                <button
                  onClick={() => setActiveTab('products')}
                  className="bg-[#4F39F6] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#3B27E8] transition-colors"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#101727]">Your Cart ({cartItems.length} items)</h3>
                  <p className="text-sm text-[#627382]">Total: <span className="font-bold text-[#4F39F6]">${total}</span></p>
                </div>
                <div className="space-y-3 mb-5">
                  {cartItems.map(item => (
                    <CartItem key={item.id} item={item} onRemove={handleRemove} />
                  ))}
                </div>
                <div className="bg-[#F8F9FF] rounded-xl p-4 mb-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <p className="text-[#627382] font-medium text-sm">Total Amount</p>
                    <p className="font-extrabold text-xl text-[#4F39F6]">${total}</p>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#4F39F6] hover:bg-[#3B27E8] text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
                >
                  Proceed to Checkout →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;

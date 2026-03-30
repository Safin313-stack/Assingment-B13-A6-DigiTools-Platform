import { toast } from 'react-toastify';

import writingImg from '../assets/writing.png';
import designImg from '../assets/design-tool.png';
import packageImg from '../assets/package.png';
import operationImg from '../assets/operation.png';
import portfolioImg from '../assets/portfolio.png';
import socialImg from '../assets/social-media.png';
import shoppingImg from '../assets/shopping-cart.png';

const iconMap = {
  writing: writingImg,
  'design-tool': designImg,
  package: packageImg,
  operation: operationImg,
  portfolio: portfolioImg,
  'social-media': socialImg,
  'shopping-cart': shoppingImg,
};

const tagStyles = {
  popular: 'bg-orange-50 text-orange-600 border border-orange-200',
  new: 'bg-green-50 text-green-600 border border-green-200',
  bestseller: 'bg-purple-50 text-purple-600 border border-purple-200',
};

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const isInCart = cartItems.some(item => item.id === product.id);
  const iconSrc = iconMap[product.icon];

  const handleAddToCart = () => {
    if (isInCart) {
      toast.info(`${product.name} is already in your cart!`, { theme: 'light' });
      return;
    }
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`, { theme: 'light' });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#EDE9FE] flex items-center justify-center flex-shrink-0 p-2">
            {iconSrc ? (
              <img src={iconSrc} alt={product.name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-2xl">🛠️</span>
            )}
          </div>
          <div>
            <h3 className="font-bold text-[#101727] text-sm">{product.name}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'}`}>
              {product.tag}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#627382] text-xs leading-relaxed">{product.description}</p>

        {/* Price */}
        <div>
          <span className="font-extrabold text-[#101727] text-xl">${product.price}</span>
          <span className="text-xs text-[#627382] ml-1">/{product.period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-1.5 flex-1">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-[#627382]">
              <span className="text-[#4F39F6] font-bold flex-shrink-0">✓</span> {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Full-width button */}
      <div className="px-5 pb-5">
        <button
          onClick={handleAddToCart}
          className={`w-full font-bold py-2.5 rounded-xl text-sm transition-all ${
            isInCart
              ? 'bg-green-100 text-green-700 cursor-default'
              : 'bg-[#4F39F6] hover:bg-[#3B27E8] text-white'
          }`}
        >
          {isInCart ? '✓ Added to Cart' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
// Commit 6: Product card tweak
// ProductCard performance optimization

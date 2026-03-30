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

const CartItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    onRemove(item.id);
    toast.error(`${item.name} removed from cart`, { theme: 'light' });
  };

  const iconSrc = iconMap[item.icon];

  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#4F39F6]/30 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] flex items-center justify-center flex-shrink-0 p-2">
        {iconSrc
          ? <img src={iconSrc} alt={item.name} className="w-full h-full object-contain" />
          : <span className="text-xl">🛠️</span>
        }
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#101727] text-sm truncate">{item.name}</p>
        <p className="text-xs text-[#627382] capitalize">{item.period}</p>
      </div>
      <p className="font-bold text-[#4F39F6] text-base flex-shrink-0">${item.price}</p>
      <button
        onClick={handleRemove}
        className="text-xs font-semibold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors flex-shrink-0"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

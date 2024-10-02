import React, { useContext } from 'react';
import { CartContext } from './cartContext';
import './Cart.css'

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, ind) => (
            <li key={ind} className="flex items-center space-x-4 border-b pb-4">
              <img src={item.pic} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="font-medium text-lg">{item.name}</h3>
                <p className="text-gray-500">Price: ₹{item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className={`px-2 py-1 text-lg font-bold border rounded-md ${item.quantity === 1 ? 'text-gray-400' : 'text-gray-700'}`}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-4 text-lg">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-lg font-bold text-gray-700 border rounded-md"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700 text-2xl"
                onClick={() => removeItem(item.id)}
              >
                <img className='remove-button' src='/assets/extra/remove.png'></img>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

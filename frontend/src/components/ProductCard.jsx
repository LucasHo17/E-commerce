import React from 'react';
import toast from "react-hot-toast";
import { ShoppingCart } from 'lucide-react';
import { useUserStore } from '../stores/useUserStore';

const ProductCard = ({product}) => {
    const {user } = useUserStore()
    const handleAddToCart = () => {
        if (!user) {
            toast.error("Please log in to add to the cart", {id: "login"});
            return;
        }
    };

  return (
    <div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-400 shadow-lg bg-gray-300'>
        <div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
            <img className='object-cover w-full' src={product.image} alt='product image'/>
            <div/> 
        </div>

        <div className='mt-4 px-5 pb-5'>
			<h5 className='text-xl font-semibold tracking-tight text-gray-600'>{product.name}</h5>
		    <div className='mt-2 mb-5 flex items-center justify-between'>
				<p>
					<span className='text-3xl font-bold text-gray-900'>${product.price}</span>
				</p>
			</div>
			<button
				className='flex items-center justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-center text-sm font-medium
				text-gray-100 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300'
				onClick={handleAddToCart}
			>
				<ShoppingCart size={22} className='mr-2' />
				Add to cart
			</button>
		</div>
    </div>
  )
}

export default ProductCard;

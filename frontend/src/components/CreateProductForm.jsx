import React from 'react';
import { useState } from 'react';
import {motion} from 'framer-motion';
import { PlusCircle, Upload, Loader } from 'lucide-react';

const categories = ["Jeans","T-shirts", "Shoes", "Glasses", "Jackets", "Suits","Bags"];

const CreateProductForm = () => {
    const [newProducts, setNewProducts] = useState({
        name: "",
        description:"",
        price: "",
        category: "",
        image:"",
    });

    const loading = false;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newProducts);
    };

    const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setNewProducts({ ...newProducts, image: reader.result });
			};

			reader.readAsDataURL(file); // base64
		}
	};

    return (
        <motion.div
            className='bg-gray-800 shadow-lg rounded-lg p-8 max-w-xl mx-auto'
            initial = {{opacity:0, y: 20}}
            animate = {{opacity:1, y:0}}
            transition = {{duration: 0.8}}
        >
            <h2 className='font-bold text-gray-300 text-xl mb-6'>Create new Product</h2>
            <form onSubmit = {handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>
                        Product Name
                    </label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        required
                        value = {newProducts.name}
                        onChange={(e) => setNewProducts({...newProducts, name: e.target.value})}
                        className='block w-full px-3 py-2 bg-gray-700 border border-gray-600 
						rounded-md shadow-sm
							placeholder-gray-400 focus:outline-none focus:ring-emerald-500 
							focus:border-emerald-500 text-gray-100 sm:text-sm'
                    />
                </div>

                <div>
                    <label htmlFor='description' className='block text-sm font-medium text-gray-300 mb-1 '>
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        required
                        rows='3'
                        value = {newProducts.description}
                        onChange={(e) => setNewProducts({...newProducts, description: e.target.value})}
                        className='block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none
                        focus:ring-emerald-500 focus:border-emerald-500 text-gray-100 sm:text-sm'
                    />
                </div>

                <div>
					<label htmlFor='price' className='block text-sm font-medium text-gray-300 mb-1'>
						Price
					</label>
					<input
						type='number'
						id='price'
						name='price'
                        required
						value={newProducts.price}
						onChange={(e) => setNewProducts({ ...newProducts, price: e.target.value })}
						step='0.01'
						className=' block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
						py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500
						 focus:border-emerald-500'
					/>
				</div>

                <div>
                    <label htmlFor='category' className='block text-sm font-medium text-gray-300 mb-1'>
                        Category
                    </label>
                    <select
                    id='category'
                    name='category'
                    required
                    value={newProducts.category}
                    onChange={(e) => setNewProducts({ ...newProducts, category: e.target.value })}
                    className='block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
                    py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500'>
                        <option value='' className='text-gray-100'>
                            Select a category
                        </option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                    
                <div className='flex items-center mt-1'>
                    <input 
                        type='file'
                        id='image'
                        className='sr-only'
                        accept='image/*'
                        onChange = {handleImageChange}
                    />
                    <label htmlFor='image' className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm 
                    text-sm leading-4 font-medium text-gray-100 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-emerald-500'
                    >
                        <Upload className='h-5 w-5 inline-block mr-2'/>
                        Upload Image
                    </label>
                    {newProducts.image && <span className='ml-3 text-sm text-gray-400'>Image uploaded!</span>}
                </div>

                <button
                className=' w-full rounded-md flex bg-emerald-600 justify-center py-1 px-4 border border-transparent shadow-sm text-sm
                font-medium text-gray-100 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'>
                    {loading ? (
                        <>
                            <Loader className='h-5 w-5 animate-spin mr-2'/>
                            Loading...
                        </>
                    ):(
                        <>
                            <PlusCircle className='mr-2 h-5 w-5'/>
                            Create Product
                        </>
                    )}
                </button>
            </form>
        </motion.div>
  )
}

export default CreateProductForm

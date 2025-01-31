import React from 'react';
import CategoryItem from '../components/CategoryItem.jsx';

const categories = [
  {href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg"},
  {href: "/tshirts", name: "T-shirts", imageUrl: "/tshirts.jpg"},
  {href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg"},
  {href: "/glasses", name: "Glasses", imageUrl: "glasses.png"},
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];
const HomePage = () => {
  return (
    <div className='relative min-h-screen text-gray-900 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 py-16'>
        <h1 className='text-center text-5xl sm:text-6xl font-bold text-gray-900'>
          Explore our Categories
        </h1>

        <p className='text-center text-xl text-gray-900 mb-12 pt-3'>
          Discover the latest trends in eco-friendly fashion
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {categories.map((category) => (
            <CategoryItem category = {category}
             key={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

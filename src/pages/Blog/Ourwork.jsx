import React from 'react';

const blogData = [
  {
    image: 'https://images.unsplash.com/photo-1681497277914-699f76de87f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8',
    date: 'May 12, 2025',
    readTime: '4 min read',
    title: 'Mastering Wedding Planning: From Venues to Vows',
    description: 'Dive into the essentials of crafting unforgettable wedding experiences with expert insights and planning secrets.',
    author: 'Sophia Wells',
    tag: 'Wedding',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1673569490592-fdbffc9b8f67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'May 7, 2025',
    readTime: '3 min read',
    title: 'Corporate Events: Making Your Brand Stand Out',
    description: 'Explore how to host high-impact corporate events that elevate your brand and engage your audience effectively.',
    author: 'James Carter',
    tag: 'Corporate',
  },
  {
    image: 'https://images.unsplash.com/photo-1562967005-a3c85514d3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8',
    date: 'April 30, 2025',
    readTime: '5 min read',
    title: 'Birthday Bash Trends to Try This Year',
    description: 'Discover the latest birthday party themes and ideas to make your celebration unforgettable and fun for all ages.',
    author: 'Emily Ray',
    tag: 'Birthday',
  },
  {
    image: 'https://images.unsplash.com/photo-1681497277914-699f76de87f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8',
    date: 'May 15, 2025',
    readTime: '6 min read',
    title: 'Decor Tips That Wow Your Guests Instantly',
    description: 'Learn the top décor strategies that bring life, style, and elegance to any event theme or setup.',
    author: 'Liam Brooks',
    tag: 'Decor',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1673569490592-fdbffc9b8f67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'May 10, 2025',
    readTime: '2 min read',
    title: 'Event Catering: Food Ideas for Every Crowd',
    description: 'From gourmet bites to food trucks—find out what’s trending in event catering that guests will rave about.',
    author: 'Natalie Chen',
    tag: 'Catering',
  },
  {
    image: 'https://images.unsplash.com/photo-1562967005-a3c85514d3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8',
    date: 'May 18, 2025',
    readTime: '4 min read',
    title: 'Kids Party Planning: Fun, Safe & Memorable',
    description: 'Explore interactive games, creative themes, and pro tips for planning stress-free, exciting kids’ events.',
    author: 'Carlos Mendez',
    tag: 'Kids',
  },
];

const BlogCards = () => {
  return (
    <div className="relative bg-gray-100 py-20 px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Event Management Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {blogData.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
          >
            <div className="w-full aspect-[4/3]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center text-xs text-gray-500 mb-3 gap-4 flex-wrap">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 font-medium">{blog.author}</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {blog.tag.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;

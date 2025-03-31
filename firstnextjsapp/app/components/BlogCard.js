// components/BlogCard.js
import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{blog.title}</h3>
        <p className="text-gray-600">{blog.description}</p>
        {blog.author && (
          <div className="flex items-center mt-4">
            <img src={blog.author.image} alt={blog.author.name} className="w-8 h-8 rounded-full mr-2" />
            <div>
              <p className="text-sm font-medium">{blog.author.name}</p>
              <p className="text-xs text-gray-500">{blog.author.role}</p>
            </div>
          </div>
        )}
        <div className="mt-2">
          <span className="text-sm text-gray-500">Tags: {blog.tags.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

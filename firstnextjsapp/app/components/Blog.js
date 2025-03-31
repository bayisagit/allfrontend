// pages/blogs.js
import React from 'react';
import BlogCard from './BlogCard';
// Sample data
const blogs = [
    {
    "_id": "64dfe79d50961c55ce93e7e4",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5
   sntmkerd5hjjba.jpg",
    "title": "Mastering the Art of Code Refactoring",
    "description": "Code refactoring is an essential practice in
   software development that often separates novice programmers from
   experienced engineers. Refactoring isn't just about tidying up your code;
   it's about improving its structure, readability, and maintainability.
   Let's delve into the key aspects of mastering the art of code
   refactoring.",
    "author": {
    "_id": "64dfe6fb50961c55ce93e7de",
    "name": "bruke updated",
    "email": "Software Engineer",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtci
   tvklvajczcynqe.png",
    "role": "user"
    },
    "isPending": true,
    "tags": [
    "Programming",
    "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [],
    "createdAt": "2023-08-18T21:50:21.755Z",
    "updatedAt": "2023-08-18T21:50:21.755Z",
    "__v": 0
    },
    {
    "_id": "64dfe81250961c55ce93e7ed",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1692395536/A2sv/zt8efj
   gvtxiripl0d961.jpg",
    "title": "Mastering the Art of Code Refactoring 2",
    "description": "Code refactoring is an essential practice in
   software development that often separates novice programmers from
   experienced engineers. Refactoring isn't just about tidying up your code;
   it's about improving its structure, readability, and maintainability.
   Let's delve into the key aspects of mastering the art of code
   refactoring.",
    "author": {
    "_id": "64dfe6fb50961c55ce93e7de",
    "name": "bruke updated",
    "email": "Software Engineer",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtci
   tvklvajczcynqe.png",
    "role": "user"
    },
    "isPending": true,
    "tags": [
    "Programming",
    "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [],
    "createdAt": "2023-08-18T21:52:18.561Z",
    "updatedAt": "2023-08-18T21:52:18.561Z",
    "__v": 0
    },
    {
    "_id": "64dfe96a50d83607285ffa08",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1692395881/A2sv/fvpmjk
   srplpxgqkgxlj3.jpg",
    "title": "Mastering the Art of Code Refactoring 2",
    "description": "Code refactoring is an essential practice in
   software development that often separates novice programmers from
   experienced engineers. Refactoring isn't just about tidying up your code;
   it's about improving its structure, readability, and maintainability.
   Let's delve into the key aspects of mastering the art of code
   refactoring.",
    "author": null,
    "isPending": true,
    "tags": [
    "Programming",
    "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [
    "Web Development",
    "Mobile"
    ],
    "createdAt": "2023-08-18T21:58:02.754Z",
    "updatedAt": "2023-08-18T21:58:02.754Z",
    "__v": 0
    },
    {
    "_id": "64dfe9dd50d83607285ffa10",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1692395995/A2sv/c6fnsn
   ngdrjrrvxv8xos.jpg",
    "title": "Mastering the Art of Code Refactoring 2",
    "description": "Code refactoring is an essential practice in
   software development that often separates novice programmers from
   experienced engineers. Refactoring isn't just about tidying up your code;
   it's about improving its structure, readability, and maintainability.
   Let's delve into the key aspects of mastering the art of code
   refactoring.",
    "author": {
    "_id": "64dfe6fb50961c55ce93e7de",
    "name": "bruke updated",
    "email": "Software Engineer",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtci
   tvklvajczcynqe.png",
    "role": "user"
    },
    "isPending": true,
    "tags": [
    "Programming",
    "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [
    "Web Development",
    "Mobile"
    ],
    "createdAt": "2023-08-18T21:59:57.206Z",
    "updatedAt": "2023-08-18T21:59:57.206Z",
    "__v": 0
    },
    {
    "_id": "64e062e113118e7f1f0a59b5",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1692426976/A2sv/eqg5kg
   jzu8o4592darvb.jpg",
    "title": "Mastering the Art of Code Refactoring",
    "description": "Code refactoring is an essential practice in
   software development that often separates novice programmers from
   experienced engineers. Refactoring isn't just about tidying up your code;
   it's about improving its structure, readability, and maintainability.
   Let's delve into the key aspects of mastering the art of code
   refactoring.",
    "author": {
    "_id": "64dfe6fb50961c55ce93e7de",
    "name": "bruke updated",
    "email": "Software Engineer",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtci
   tvklvajczcynqe.png",
    "role": "user"
    },
    "isPending": true,
    "tags": [
    "Programming",
    "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [
    "Web Development",
    "Mobile"
    ],
    "createdAt": "2023-08-19T06:36:17.363Z",
    "updatedAt": "2023-08-19T06:36:17.363Z",
    "__v": 0
    },
    {
    "_id": "64e71c32ffcc678c7782c65a",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1692867633/A2sv/mdvs5j
   ef91utxwbouiki.jpg",
    "title": "Mastering the Art of Code Refactoring",
    "description": "Code ref refactoring is an essential practice in
   software development that often separates novice programmers from
   experienced engineers. Refactoring isn't just about tidying up your code;
   it's about improving its structure, readability, and maintainability.
   Let's delve into the key aspects of mastering the art of code
   refactoring.",
    "author": {
    "_id": "64dfe6fb50961c55ce93e7de",
    "name": "bruke updated",
    "email": "Software Engineer",
    "image":
   "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtci
   tvklvajczcynqe.png",
    "role": "user"
    },
    "isPending": true,
    "tags": [
    "Programming",
    "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [
    "Web Development",
    "Mobile"
    ],
    "createdAt": "2023-08-24T09:00:34.057Z",
    "updatedAt": "2023-08-24T09:00:34.057Z",
    "__v": 0
    }
    ]

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;

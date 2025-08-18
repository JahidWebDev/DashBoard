import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const CategoryList = () => {
   const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/category/getallcategory")
      .then((res) => {
        setCategories(res.data.data); // ধরে নিচ্ছি API থেকে array আসছে
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);
  console.log(categories);
  
  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Category List</h2>
      
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-600 uppercase">
                Sr No
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-600 uppercase">
                Category Name
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-600 uppercase">
                Category Description
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-center text-gray-600 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
  {categories.map((cat, index) => (
    <tr
      key={cat._id || index}
      className="transition-colors border-b hover:bg-gray-50"
    >
      <td className="px-6 py-4 text-sm font-medium text-gray-800">
        {index + 1}.
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800">
        {cat.name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-600">
        {cat.description}
      </td>
      <td className="px-6 py-4 text-center">
        <Link to={`/updatecategory/${cat._id}`}>
          <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Edit
          </button>
        </Link>
        <button className="px-3 py-1 ml-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600">
          Delete
        </button>
      </td>
    </tr>
  ))}

  {categories.length === 0 && (
    <tr>
      <td colSpan="4" className="py-6 text-center text-gray-500">
        No categories found.
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};


export default CategoryList
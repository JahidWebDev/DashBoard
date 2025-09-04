import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    description: "",
    price: "",
    color: "",
    storage: "",
    ram: "",
    size: "",
    discount: "",
    productCategory: "",
    subCategory: "",
  });

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [images, setImages] = useState([]); // ✅ এখানে ডিফাইন করতে হবে

  // ইনপুট পরিবর্তন হ্যান্ডেল
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // ফর্ম সাবমিট হ্যান্ডেল
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      formData.append(key, value);
    });
    images.forEach((img) => {
      formData.append("images", img);
    });

    console.log("Product Data:", product);
    console.log("Images:", images);

    alert("✅ Product submitted successfully!");
    // axios.post("http://localhost:5000/api/v1/product/create", formData);
  };

  // API থেকে ক্যাটাগরি লোড
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/category/getallcategory")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  // API থেকে সাবক্যাটাগরি লোড
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/subcategory/getallsubcategory")
      .then((res) => {
        setSubCategories(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching subcategories:", err);
      });
  }, []);

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 p-8 bg-white shadow-md rounded-2xl md:grid-cols-2"
        >
          <h2 className="col-span-2 text-2xl font-bold text-center text-gray-800">
            Create Product
          </h2>

          {/* Product Description */}
          <div className="col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Product Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter product description"
              rows={3}
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter price"
            />
          </div>

          {/* Color */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Color
            </label>
            <select
              name="color"
              value={product.color}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="">Select color</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
            </select>
          </div>

          {/* Storage */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Storage
            </label>
            <select
              name="storage"
              value={product.storage}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="">Select storage</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
              <option value="1TB">1TB</option>
            </select>
          </div>

          {/* RAM */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product RAM
            </label>
            <select
              name="ram"
              value={product.ram}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="">Select RAM</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              <option value="8GB">8GB</option>
              <option value="12GB">12GB</option>
              <option value="16GB">16GB</option>
            </select>
          </div>

          {/* Size */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Size
            </label>
            <input
              type="text"
              name="size"
              value={product.size}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter size (e.g., 6.5 inch)"
            />
          </div>

          {/* Discount */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Discount (%)
            </label>
            <input
              type="number"
              name="discount"
              value={product.discount}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter discount"
            />
          </div>

          {/* Product Category */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product Category
            </label>
            <select
              name="productCategory"
              value={product.productCategory}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Product SubCategory */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Product SubCategory
            </label>
            <select
              name="subCategory"
              value={product.subCategory}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="">Select subcategory</option>
              {subcategories.map((sub) => (
                <option key={sub._id} value={sub._id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>

          {/* Product Images */}
          <div className="col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Product Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setImages(Array.from(e.target.files))}
              className="w-full p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
            />
            {/* Preview */}
            <div className="flex flex-wrap gap-3 mt-3">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="object-cover w-24 h-24 rounded-lg shadow"
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full p-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;

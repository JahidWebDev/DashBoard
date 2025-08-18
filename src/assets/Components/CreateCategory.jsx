import React, { useState } from "react";
import { Typography, Button, Input, Textarea, Card } from "@material-tailwind/react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleSubmit = () => {
    console.log("Category:", categoryName);
    console.log("Description:", categoryDescription);
     const fromData = {
      name: categoryName,
      description: categoryDescription,

     }
    axios.post("http://localhost:5000/api/v1/category/createcategory",fromData)
  .then(response => {
    toast.success("Cratagory Create Successfull")
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  };

  return (
    
    <div className="flex items-center justify-center py-[150px] ">
      <Toaster/>
      <Card className="w-full max-w-md p-10 bg-white shadow-lg rounded-2xl">
        {/* Title */}
        <Typography variant="h4" className="mb-2 font-bold text-center text-blue-600">
          Create Category
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="mb-6 text-center"
        >
          Add a new category to organize your products.
        </Typography>

        {/* Category Name */}
        <div className="mb-4">
          <Input
            label="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            color="blue"
            crossOrigin={undefined}
          />
        </div>

        {/* Category Description */}
        <div className="mb-6">
          <Textarea
            label="Category Description"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            color="blue"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          color="blue"
          size="lg"
          className="w-full py-3 font-semibold transition-all rounded-lg shadow-md hover:shadow-lg"
        >
          Create Category
        </Button>
      </Card>
    </div>
  );
};

export default CreateCategory;

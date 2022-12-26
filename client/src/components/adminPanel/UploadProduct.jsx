import { CameraIcon, XIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

const UploadProduct = () => {
  const inputImageRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [productFormData, setProductFormData] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
    countInStock: "",
    description: "",
  });

  const { name, price, brand, category, countInStock, description } =
    productFormData;

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    setImage(e.target.files[0]);
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const handleFormData = (e) => {
    setProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(productFormData);
  console.log(image);
  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-5">
      <div className="rounded-2xl max-h-90 w-auto border-2 border-dashed mb-4">
        {selectedFile && (
          <div className="relative mb-4">
            <div
              className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
              onClick={() => setSelectedFile(null)}
            >
              <XIcon className="text-white h-5" />
            </div>
            <img
              src={selectedFile}
              alt=""
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        )}
        {!selectedFile && (
          <div className="flex items-center justify-center gap-3 p-4">
            {/* <p>Add Image</p> */}
            <p
              onClick={() => inputImageRef.current.click()}
              className="cursor-pointer"
            >
              <CameraIcon className="w-10 h-10" />
            </p>
          </div>
        )}
      </div>
      <input
        type="file"
        name=""
        id=""
        hidden
        ref={inputImageRef}
        onChange={addImageToPost}
      />

      <div className="mb-2">
        <label
          htmlFor="name"
          className="text-sm block font-semibold text-gray-700"
        >
          Product Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleFormData}
          className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="text-sm block font-semibold text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={handleFormData}
          className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="brand"
          className="text-sm block font-semibold text-gray-700"
        >
          Brand
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={brand}
          onChange={handleFormData}
          className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="category"
          className="text-sm block font-semibold text-gray-700"
        >
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={handleFormData}
          className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="countInStock"
          className="text-sm block font-semibold text-gray-700"
        >
          Count in Stock
        </label>
        <input
          type="number"
          min="0"
          name="countInStock"
          id="countInStock"
          value={countInStock}
          onChange={handleFormData}
          className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="description"
          className="text-sm block font-semibold text-gray-700"
        >
          Description
        </label>
        <textarea
          type="text"
          name="description"
          id="description"
          rows="5"
          value={description}
          onChange={handleFormData}
          className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 w-full sm:text-sm"
        />
      </div>
      <button type="submit" className="px-8 py-2 btn-color rounded-md mt-3">
        Upload Product
      </button>
    </form>
  );
};

export default UploadProduct;
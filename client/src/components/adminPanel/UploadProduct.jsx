import { CameraIcon, XIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  uploadProductImage,
} from "../../redux/actions/proudctActions";

const UploadProduct = () => {
  const inputImageRef = useRef(null);
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const [productFormData, setProductFormData] = useState({
    image: "",
    name: "",
    price: "",
    brand: "",
    category: "",
    countInStock: "",
    description: "",
  });

  const { image, name, price, brand, category, countInStock, description } =
    productFormData;

  const { loading } = useSelector((state) => state.createProduct);

  const handleFormData = (e) => {
    setProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image === "") {
      toast.error("No Image Found");
    } else {
      dispatch(
        createProduct(
          {
            name: name,
            price: price,
            image: image,
            brand: brand,
            category: category,
            countInStock: countInStock,
            description: description,
          }
          // toast
        )
      );
      if (loading) {
        setProductFormData({
          image: "",
          name: "",
          price: "",
          brand: "",
          category: "",
          countInStock: "",
          description: "",
        });
      }
    }
  };
  return (
    <div className="max-w-xl mx-auto mb-5">
      {/* upload image */}
      <div className="rounded-2xl max-h-90 w-auto border-2 border-dashed mb-4">
        {image && (
          <div className="relative mb-4">
            <img
              src={image}
              alt=""
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="">
        <div className="mb-2">
          <label
            htmlFor="name"
            className="text-sm block font-semibold text-gray-700"
          >
            Image Url
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
          />
        </div>
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
    </div>
  );
};

export default UploadProduct;

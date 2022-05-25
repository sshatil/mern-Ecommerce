import express from "express";
const router = express.Router();
import multer from "multer";
import mongoose from "mongoose";
import Product from "../models/productModel.js";
import {
  getProducts,
  getProductCategory,
  getProductById,
  deleteProduct,
  // createProduct,
  // updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
router.route("/categories").get(getProductCategory);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);
// .put(protect, admin, updateProduct);

// create product
const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid image type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

router.post(
  `/`,
  protect,
  admin,
  uploadOptions.single("image"),
  async (req, res) => {
    // const category = await Category.findById(req.body.category);
    // if (!category) return res.status(400).json({ error: "Invalid Category" });

    const file = req.file;
    if (!file)
      return res.status(400).json({ error: "No image in the request" });

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    let product = new Product({
      name: req.body.name,
      price: req.body.price,
      user: req.user._id,
      image: `${basePath}${fileName}`,
      brand: req.body.brand,
      category: req.body.category,
      countInStock: req.body.countInStock,
      numReviews: req.body.numReviews,
      description: req.body.description,
      // richDescription: req.body.richDescription,
      // rating: req.body.rating,
      // isFeatured: req.body.isFeatured,
    });

    product = await product.save();

    if (!product)
      return res.status(500).json({ error: "The product cannot be created" });

    res.send(product);
  }
);

router.put(
  "/:id",
  protect,
  admin,
  uploadOptions.single("image"),
  async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid Product Id" });
    }

    const file = req.file;
    if (!file)
      return res.status(400).json({ error: "No image in the request" });

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        user: req.user._id,
        image: `${basePath}${fileName}`,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        numReviews: req.body.numReviews,
        description: req.body.description,
      },
      { new: true }
    );

    if (!product)
      return res.status(500).json({ error: "the gallery cannot be updated!" });

    res.send(product);
  }
);

export default router;

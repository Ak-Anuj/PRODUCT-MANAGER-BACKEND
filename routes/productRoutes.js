import express from "express"
import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  togglePublish 
} from "../controllers/productController.js"

const router = express.Router()
router.put("/:id", updateProduct) 
router.post("/", createProduct)
router.get("/", getProducts)
router.delete("/:id", deleteProduct)
router.patch("/:id/publish", togglePublish)

export default router

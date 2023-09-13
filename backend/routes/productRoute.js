const express = require("express");
const { getAllProduct,createProduct, updateProduct, deleteProduct,getProductDetails} = require("../controller/productControler");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const router = express.Router();















router.route("/products").get(isAuthenticatedUser, authorizeRoles("admin"),getAllProduct);
router.route("/product/new").post(isAuthenticatedUser, authorizeRoles("admin"),createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)
module.exports = router;
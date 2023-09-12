const Product =  require("../models/productModel");
const ErrorHandler = require("../utils/errorHandle");
const catchAsynchError = require("../middleware/catchAsyncherror");


//create product -Admin
exports.createProduct = catchAsynchError(async (req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    });
});
// get all products

exports.getAllProduct = catchAsynchError(async (req,res)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    });
});

// get product detail by id

exports.getProductDetails = catchAsynchError(async (req, res,next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
        return next(new ErrorHandler("Product not found ",404));
    }
  
    res.status(200).json({
      success: true,
      product
    });
  });


// Update product Admin 

exports.updateProduct = catchAsynchError(async (req, res, next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
           message:"Product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        msg: "thanh cong update",
        product
      })
});
//Delete product

exports.deleteProduct = catchAsynchError(async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        await Product.deleteOne({ _id: req.params.id });

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        // Handle any potential errors here
        return res.status(500).json({
            success: false,
            message: "An error occurred while deleting the product"
        });
    }
});
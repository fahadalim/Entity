
const Product = require("../model/product")
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    // const product= await Product.find({}).lean().exec();
    // return res.status(200).send(product);
    if(req.query.filter)
    {
       // console.log(req.query.filter)
       const page=req.query.page||1
       const pagesize=req.query.pagesize||10
       const skip=(page-1)*pagesize
         const product = await Product.find().skip(skip).limit(pagesize).filter().lean().exec();
         const totalpages = Math.ceil(
           await Product.find().countDocuments() / pagesize
         );
         res.status(200).send({product,totalpages})
    }
    const page=req.query.page||1
    const pagesize=req.query.pagesize||10
    const skip=(page-1)*pagesize
      const product = await Product.find().skip(skip).limit(pagesize).lean().exec();
      const totalpages = Math.ceil(
        await Product.find().countDocuments() / pagesize
      );
      res.status(200).send({product,totalpages})

   

  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
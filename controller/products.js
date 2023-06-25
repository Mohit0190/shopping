const model = require('../model/product');
const Product = model.Product;

exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.status(201).json(product);
    }
    catch (err) {
        res.status(500).json(err);
    }
};


exports.getAllProducts = async (req, res) => {
    const product = await Product.find()
    res.json(product)
}



exports.getProductwithId = async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)
    res.json(product)

}

exports.replaceProduct = async (req, res) => {
    const id = req.params.id
    try{

        const doc  = await Product.findOneAndReplace({_id: id},req.body,{new:'true'})
         res.status(201).json(doc)
    }
    catch (err) {
            res.status(500).json(err)
        }
}


exports.updatedProduct = async (req, res) => {
    try{
        const id = req.params.id
        const doc  = await Product.findOneAndUpdate({_id: id},req.body,{new:'true'})
         res.status(201).json(doc)
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.deleteProduct = async(req, res) => {
    try{
        const id = req.params.id
        const doc  = await Product.findOneAndDelete({_id: id})
         res.status(201).json(doc)
    }
    catch(err){
        res.status(500).json(err)
    }
}
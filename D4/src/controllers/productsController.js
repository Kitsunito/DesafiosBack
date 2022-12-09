const Products = require("../containers/products");
const products = new Products();

// GET de todos los productos
const getProducts = (req, res) => {
	try {
		res.status(200).json(products.getProducts());
	} catch (error) {
		console.warn(error);
		res.status(400).json({ error: error.message });
	}
};

// GET de un producto
const getProduct = (req, res) => {
	try {
		const id = Number(req.params.id);
		res.status(200).json(products.getProduct(id));
	} catch (error) {
		res
			.status(error.statusCode ? error.statusCode : 500)
			.json({ error: error.message });
	}
};

// POST para un producto
const postProduct = (req, res) => {
	try {
		const { title, price, thumbnail } = req.body;
		res.status(201).json(products.save({ title, price, thumbnail }));
	} catch (error) {
		res
			.status(error.statusCode ? error.statusCode : 500)
			.json({ error: error.message });
	}
};

// PUT para un producto
const putProduct = (req, res) => {
	try {
		const { title, price, thumbnail } = req.body;
    const id = Number(req.params.id);
		res.status(200).json(products.updateProduct(id, { title, price, thumbnail }));
	} catch (error) {
		res
			.status(error.statusCode ? error.statusCode : 500)
			.json({ error: error.message });
	}
};

// DELETE para un producto
const deleteProduct = (req, res) => {
	try {
    const id = Number(req.params.id);
		res.status(200).json(products.deleteProduct(id));
	} catch (error) {
		res
			.status(error.statusCode ? error.statusCode : 500)
			.json({ error: error.message });
	}
};

module.exports = { getProducts, getProduct, postProduct, putProduct, deleteProduct };

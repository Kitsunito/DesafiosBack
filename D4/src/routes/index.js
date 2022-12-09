const router = require("express").Router();
const {
	getProducts,
	getProduct,
	postProduct,
	putProduct,
	deleteProduct,
} = require("../controllers/productsController");

router
	.get("/", getProducts) // GET para todos los productos
	.get("/:id", getProduct) // GET para un producto en particular
	.post("/", postProduct) // POST para agregar un producto
	.put("/:id", putProduct) // PUT para actualizar el producto de id indicado en parámetro
	.delete("/:id", deleteProduct); // DELETE para eliminar el producto de id indicado en parámetro

module.exports = router;

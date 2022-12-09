class Products {
	constructor() {
		this.products = [];
		this.maxId = 0;
	}

	getProducts() {
		return this.products;
	}

	save(object) {
		//Aumentamos el maxId ya que agregamos un nuevo elemento
		this.maxId++;
		//Incorporamos el nuevo elemento con su correspondiente id
		const product = { ...object, id: this.maxId };
		this.products.push(product);
		//Devolvemos el elemento
		return product;
	}

	getProduct(id) {
		//Validmoas que el parámetro recibido sea numérico
		if (isNaN(id)) {
			const error = new Error("El id debe ser un número");
			error.statusCode = 400;
			throw error;
		}

		//Si es un número, buscamos el producto con dicho ID
		const product = this.products.find((product) => product.id === id);

		//Validamos si se encontró el producto o no
		if (!product) {
			const error = new Error("El producto no existe");
			error.statusCode = 404;
			throw error;
		}
		// Devolvemos el producto
		return product;
	}

	updateProduct(id, newProduct) {
		if (this.getProduct(id)) {
			this.products = this.products.map((product) => {
				if (product.id === id) return { ...newProduct, id };
				return product;
			});
		}
	}

	deleteProduct(id) {
		if (this.getProduct(id)) {
			this.products = this.products.filter(
				(product) => product.id !== this.getProduct(id).id
			);
		}
	}
}

module.exports = Products;

const express = require("express");
const Container = require("./container");

const app = express();
const container = new Container("productos.txt");
const PORT = 8080;

/*---------------*/
/*--Controllers--*/
/*---------------*/

//GET para todos los elementos
const getProducts = (req, res) =>
	container.getAll().then((result) => res.status(200).json(result));

//POST para un producto
const postProduct = (req, res) => {
	container
		.save(req.query)
		.then((result) => res.status(200).json(result))
		.catch((error) => {
			console.log(`Error: ${error}`);
			res.status(500).send(error);
		});
	//const {title, price, thumbnail} = req.params
};

//GET para un elemento aleatorio
const getRandom = (req, res) => {
	container
		.getAll()
		.then((result) => {
			res.status(200).json(result[Math.floor(Math.random() * result.length)]);
		})
		.catch((error) => console.log(error));
};

/*--------------*/
/*----Routes----*/
/*--------------*/
app
	//Todos los productos
	.get("/productos", getProducts)
	//Guardar un producto
	.post("/producto", postProduct)
	//Obtener un producto aleatorio
	.get("/productoRandom", getRandom);

//Iniciamos la aplicación
app.listen(PORT, (error) => {
	if (error) console.log(`Se produjo un error: ${error}`);
	else console.log(`Servidor escuchando el puerto ${PORT}`);
});

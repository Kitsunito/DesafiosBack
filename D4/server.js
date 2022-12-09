const express = require("express");
const routes = require("./src/routes");

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public"));
app.use("/api/productos", routes);

app.listen(PORT, (error) => {
	if (error) console.warn(`Se produjo un error al iniciar el server: ${error}`);
	else console.info(`Servidor escuchando el puerto ${PORT}`);
});

const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const morgan = require('morgan');

//configuraciones
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//static
app.use(express.static(path.join(__dirname, 'public')));

// middlewars
app.use(morgan('dev'));
	//entender los datos de un formulario
app.use(express.urlencoded({extended: false}));

	//base de datos
app.use(myConnection(mysql, {
	host: 'localhost',
	user: 'root',
	password: '',
	port:3306,
	database: 'CAdb'
}, 'single'));

//rutas
app.use(require('./routes/cuenta.routes'));
app.use(require('./routes/familiar.routes'));
app.use(require('./routes/transaccion.routes'));
app.use(require('./routes/reseña.routes'));

app.listen(3000, () => {
	console.log('Server en el puerto 3000');
});

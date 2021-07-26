const controlador = {};

controlador.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM  cuenta', (err, cuentas) =>{
			if(err){
				res.json(err);
			}
			res.render('cuenta' , {
				usuario: cuentas
			});
		});
	});
};
controlador.save=(req, res) => {
	const usuario =  req.body;
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO cuenta set ?',[usuario], (err, cuenta) => {
			res.redirect('/');
		});
	});
};
controlador.delete=(req, res) => {
	const { id } =  req.params;
	req.getConnection((err, conn) => {
		conn.query('DELETE FROM cuenta WHERE numero = ?',[id], (err, rows) => {
			res.redirect('/');
		});
	});
};
module.exports = controlador;
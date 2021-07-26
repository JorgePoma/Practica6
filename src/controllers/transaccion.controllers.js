const controlador = {};

controlador.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM  transaccion', (err, transacciones) =>{
			if(err){
				res.json(err);
			}
                res.render('transaccion' , {
                    transaccion: transacciones
            });
		});
	});
};

controlador.saved=(req, res) => {
	const transaccion =  req.body;
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO transaccion set ?',[transaccion], (err, cuenta) => {
			res.redirect('/transacciones');
		});
	});
};

module.exports = controlador;
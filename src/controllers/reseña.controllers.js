const controlador = {};

controlador.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM  resenia', (err, resenias) =>{
			if(err){
				res.json(err);
			}
                res.render('reseña' , {
                    resenia: resenias
            });
		});
	});
};

controlador.saved=(req, res) => {
	const resenia =  req.body;
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO resenia set ?',[resenia], (err, cuenta) => {
			res.redirect('/resenias');
		});
	});
};

module.exports = controlador;

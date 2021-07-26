const controlador = {};

controlador.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM  familiar', (err, familiares) =>{
			if(err){
				res.json(err);
			}
			res.render('familiar' , {
		        familiar: familiares
			});
		});
	});
};

controlador.save=(req, res) => {
	const familiar =  req.body;
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO familiar set ?',[familiar], (err, cuenta) => {
			console.log(familiar);
			res.redirect('/familiar');
		});
	});
};

controlador.delete=(req, res) => {
	const { id } =  req.params;
	req.getConnection((err, conn) => {
		conn.query('DELETE FROM familiar WHERE cedula = ?',[id], (err, rows) => {
			res.redirect('/familiar');
		});
	});
};

module.exports = controlador;
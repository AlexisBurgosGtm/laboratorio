

let config = {
	user: 'db_a6478c_laboratorio_admin',
	password: 'razors1805',
	server: 'sql8020.site4now.net',
	database: 'db_a6478c_laboratorio',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};



const sql = require('mssql');

let execute = {
	Query : (res,sqlqry)=>{	
		
		
		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					console.log(err.message);
					res.send('error')
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
			  res.send('error');
		  })
		} catch (error) {
			console.log(error);
		  res.send('error')   
		  sql.close();
		}
	}
}



module.exports = execute;


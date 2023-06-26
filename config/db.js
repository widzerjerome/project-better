
const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'backend_project',
  port: ' 3306',
});

// Conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectarse a la base de datos: ', error);
  } else {
    console.log('conection to the data base');
  }
});

// Función de consulta para obtener las regiones
const getRegions = (callback) => {
  connection.query('SELECT * FROM regions', (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

// Función de consulta para obtener las comunas por región
const getCommunesByRegion = (regionId, callback) => {
  connection.query('SELECT * FROM communes WHERE region_id = ?', [regionId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getRegions,
  getCommunesByRegion,
};

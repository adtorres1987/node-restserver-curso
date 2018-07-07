// ===============================
//   Puerto
// ===============================
process.env.PORT = process.env.PORT || 3000;

// ===============================
//   Entorno
// ===============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============================
//   Bse de datos
// ===============================
let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb://cafe-user:cafe123@ds129801.mlab.com:29801/cafe';
}

process.env.URLDB = urlDB;

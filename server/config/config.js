// ===============================
//   Puerto
// ===============================
process.env.PORT = process.env.PORT || 3000;

// ===============================
//   Entorno
// ===============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============================
//   Vencimiento del token
// ===============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = '48h';

// ===============================
//   Seed
// ===============================
process.env.SEED = process.env.SEED || 'seed-de-desarrollo-node-auth' ;

// ===============================
//   Base de datos
// ===============================
let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


// ===============================
//   Google Client ID
// ===============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '360080573369-uch9ehffdgs8hiv082teqmlets160isa.apps.googleusercontent.com' ;
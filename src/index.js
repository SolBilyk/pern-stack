import app from "./app.js";  //Al importar se debe aclarar que es un archivo js

app.listen(3000);  //Esto es para lanzar en el puerto 3000 (CAMBIE EL PUERTO A 3030 PORQUE CON 3000 ME SALIAN ERRORES, DEBIDO A QUE ESE PUERTO ESTA SIENDO USADO TAMBIEN

console.log("Server on port", 3000);  //Para lanzarlo escribimos en la terminal npm run dev
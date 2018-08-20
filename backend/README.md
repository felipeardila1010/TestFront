# Backend prueba tecnica frontend para Almundo.com
 
 El backend es desarrollado con NodeJS y una estructura por capas.
 
 ## Ejecución para entorno de desarrollo
 
 1. Ejecutar `node app`
 
 ### Comentarios
 
 El server se ejecuta sobre la ruta `http://localhost:37000/testFront/1.0/`
 
 Para la utilización sobre los modulos realizados son:
    
    Método: GET
    http://localhost:37000/testFront/1.0/hotels/id?
    id? <- opcional
 
 ## Ejecución para entorno de producción
 
 Se cambia el puerto de express en el en el archivo `resources/config.json` a 38000, que dando así:
 
     "express": {
         "port": "38000",
         "prefix": "/testFront/1.0/"
       } 
 
 Iniciandose el backend ahora en la ruta `http://localhost:38000/testFront/1.0/`
# Frontend

El frontend fue desarrollado con la versión 6.0.8 de angular-cli

## Ejecución para entorno de desarrollo

1. Ejecutar `ng serve -o`
2. Navigate to `http://localhost:4200/`

## Ejecución de pruebas unitarias

Ejecutar `ng test` para desplegar las pruebas unitarias del proyecto.

## Ejecución de pruebas de coverage

Ejecutar `npm run coverage` para desplegar los coverage en el proyecto.

## Ejecución para entorno de producción

1. Ejecutar `ng build --prod`
2. Se crea una carpeta `dist` en el proyecto que contiene el compilado del proyecto que internamente
crea las siguientes caracteristicas:
  
  - Ahead-of-Time (AOT) Compilation
  - Production mode
  - Bundling
  - Minification
  - Uglification
  - Dead code elimination
  
3. Es necesario tener a disposición un servidor web (Ej. Apache) para colocar el compilado en la raiz para
capturar el index y pueda ser leido por el proyecto

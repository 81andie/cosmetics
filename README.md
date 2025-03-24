# Cleopatra Cosmétics  🌟💄

[Ver la página web](https://81andie.github.io/cosmetics/)

![mockDrop_Apple Pencil close by (3) (1)](https://github.com/user-attachments/assets/0ca2c215-3414-4a5a-8045-b538beeece7a)


Este proyecto ha sido desarrollado con React.

Bienvenidos al mundo de  Cleopatra Cosmetics. Esta aplicación es un e-comerce que te permite explorar una gran variedad de productos cosméticos, descubrir nuevas marcas y realizar compras. Si te apasionan los productos de belleza, este es tu sitio ideal.


## Requisitos

- **Node.js** (recomendado la versión 18.x o superior)
- **npm** (gestor de paquetes de Node.js).
- React (puedes instalarlo globalmente con `npm install -g create-react-app`)

## Clonar el repositorio

```bash
https://github.com/81andie/cosmetics.git


```

















# Como desplegar web en github  (Breve tutorial)

Paso 1) Hacer el repositorio publico
Paso 2) Habilitar el github pages. Un exemplo: https://github.com/81andie/cosmetics/settings/pages
Paso 3) Si es un proyecto de react: 
Executar en la terminal:
  npm install gh-pages --save-dev
Paso 4) Editar el package.json.
En la linia 3 añadir esto:
"homepage": "https://{username}.github.io/{repo-name}",
Donde {username} es tu nombre usuario en github
Donde {repo-name} es el nombre del repositorio
Paso 5) Editar el package.json.
En donde hay scripts, modificarlos a:
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "github": "npm run predeploy && npm run deploy",
    "start": "react-scripts start",
    "build": "react-scripts build",
Paso 6) Ejecutar npm run github
Paso 7) Ir a github al cabo de unos minotos y comprovar que hay una nueva branca que se llama gh-pages
Paso 8) Una vez creada, volver a settings -> pages y seleccionar como branca de deploy la branca gh-pages y aplicar cambios guardando con save
Paso 9) Revisar el routing para que tenga el BrowserRouting apuntando a como se llama el proyecto.
Ejemplo: https://github.com/81andie/cosmetics/blob/master/src/Routing/Rutas.jsx linia 19

# Como desplegar web en github

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
Paso 7) Ir al archivo .gitignore y borrar cualquier referencia a la carpeta build
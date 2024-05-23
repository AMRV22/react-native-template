# Bienvenido a tu aplicación Expo 👋

Este es un proyecto [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Comenzando

1. Instala las dependencias

   ```bash
   npm install
   ```

2. Inicia la aplicación

   ```bash
   npx expo start
   ```

## Configuración de Husky

Husky es una herramienta que nos permite ejecutar scripts antes de los commits (pre-commit) y antes de los push (pre-push). Para configurar Husky, sigue estos pasos:

1. Instala Husky en tu proyecto:

   ```bash
   npm install husky --save-dev
   ```

2. Ejecuta el script de preparación:

   ```bash
   npm run prepare
   ```

Esto creará dos archivos en el directorio `.husky`: `pre-commit` y `pre-push`. Estos archivos se ejecutarán antes de cada commit y push, respectivamente.

El contenido de `pre-commit` debería ser:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/husky.sh"

echo '\n\nPlease be patient, this may take a while...\n'

echo 'First, lets check the code style or linting errors :art:'

npm run lint || {
  echo 'Linting failed, please fix the errors and try again'
  exit 1
}

echo "\n\nNow we'll run some task for you :robot_face:"

echo '\n\nAll good, you can commit now :tada:'
```

Y el contenido de `pre-push` debería ser:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/husky.sh"

echo "\n\nLet's check if the tests are passing 🧪"
```

Con esta configuración, Husky ejecutará ESLint antes de cada commit y ejecutará tus pruebas antes de cada push. Si alguna de estas tareas falla, el commit o push se abortará.
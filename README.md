# Prueba técnica React 🧙‍♂️🚀

## Descripción
Esta prueba consiste en la creación de una mini-aplicación para escuchar
podcasts musicales.
La aplicación tendrá únicamente tres vistas:
- Vista principal
- Detalles de un podcast
- Detalles de un capítulo de un podcast


## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:
- \[Node.js\](https://nodejs.org/) (Preferiblemente la última versión LTS)
- Gestor de paquetes como \[npm\](https://www.npmjs.com/) (generalmente viene con Node.js)

## Instalación

### Clonar el Repositorio
Primero, clona el repositorio en tu máquina local utilizando el siguiente comando en tu terminal:

\```sh
git clone URL_DEL_REPOSITORIO
\```

### Instalar Dependencias
Una vez clonado el repositorio, navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

\```sh
npm install
\```

### Configuración del Entorno
Si tu aplicación necesita variables de entorno (por ejemplo, claves de API, URLs de servicios externos, etc.), deberás configurarlas. Crea un archivo `.env` en la raíz del proyecto y rellénalo con las claves necesarias siguiendo el formato proporcionado en `.env.example` (si existe).

### Ejecutar la Aplicación
Para iniciar la aplicación en modo de desarrollo, ejecuta:

\```sh
npm run dev
\```

Esto iniciará la aplicación y debería estar disponible (localhost) en tu navegador por defecto.

## Construcción para Producción
Para construir la aplicación para producción, usa el siguiente comando:

\```sh
npm run build
\```

Esto generará una versión optimizada de la aplicación en la carpeta `dist`, lista para ser desplegada en tu servidor o plataforma de hosting preferida.

Puedes usar el siguiente comando para previsualizar una copia estática de producción:

\```sh
npm run preview
\```



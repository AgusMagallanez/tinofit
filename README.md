# TINOFIT Website

Este es el repositorio para el sitio web TINOFIT, orientado a la venta de planes de fitness personalizados. El objetivo principal es ofrecer a los usuarios una plataforma sencilla donde puedan explorar diferentes planes y contactarse vía WhatsApp para adquirirlos.

## Características Principales

- Visualización de diferentes planes de fitness.
- Redirección directa a WhatsApp para finalizar la compra de un plan.
- Gestión de contenido desde Contentful, permitiendo actualizar los planes sin necesidad de conocer o modificar el código.
- Diseño responsivo, optimizado tanto para escritorio como para móviles.

## Tecnologías Utilizadas

- **React**: Para la creación de la interfaz de usuario.
- **Vite**: Como herramienta de desarrollo y empaquetado.
- **Contentful**: Para la gestión del contenido dinámico de los planes de fitness.
- **CSS3**: Para la personalización del diseño y la estética del sitio web.
- **Netlify**: Plataforma utilizada para el despliegue del sitio web.

## Instalación y Configuración

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

### Requisitos previos

- Node.js (versión 14 o superior).
- Una cuenta de Contentful.

### Pasos de instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tinofit.git
   ```

2. Navega a la carpeta del proyecto:

   ```bash
   cd tinofit
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables (debes obtener las credenciales de Contentful):

   ```bash
   VITE_CONTENTFUL_SPACE_ID=tu_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=tu_access_token
   ```

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

6. Accede a la aplicación desde el puerto que te asigne Vite.

## Despliegue en Netlify

El sitio está configurado para desplegarse automáticamente en Netlify:

1. Conéctate a Netlify y enlaza el repositorio.
2. Define las mismas variables de entorno que en `.env` dentro de las configuraciones de Netlify.
3. Netlify automáticamente hará un build del proyecto y desplegará los cambios.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](./LICENSE).

# 📝 Next.js Blog App

Este es una aplicación de blog simple construida con Next.js 13 y App Router, obteniendo datos de la API JSON Placeholder.

## ✨ Características

- **Server-Side Rendering (SSR)**: Cada entrada del blog se renderiza en el servidor para mejorar el SEO y tiempos de carga iniciales más rápidos.
- **Rutas Dinámicas**: La aplicación usa rutas dinámicas (`[slug]`) para mostrar entradas individuales del blog.
- **Obtención de Datos**: Los datos se obtienen de la API JSON Placeholder utilizando `getServerSideProps`.
- **Estilos**: La aplicación está estilizada con Tailwind CSS y NextUI para una apariencia moderna.

## 🚀 Comenzando

Clona el repositorio:

```bash
git clone https://github.com/davidcortesa/post.git
cd post
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📁 Estructura del Proyecto

```
src
├── app
│   ├── components
│   │   ├── PostItem.js
│   │   └── PostList.js
│   ├── data
│   │   └── data.js
│   ├── layout.js
│   ├── page.js
│   └── posts
│       └── [slug]
│           └── page.js
├── providers.js
└── styles
    └── globals.css
```

- **app**: Directorio principal de la aplicación para el App Router.
- **components**: Componentes de UI reutilizables.
  - **PostItem.js**: Muestra una sola entrada del blog.
  - **PostList.js**: Renderiza una lista de entradas del blog.
- **data**: Lógica de obtención de datos.
  - **data.js**: Funciones para obtener datos de la API JSON Placeholder.
- **layout.js**: Define la disposición general de la aplicación.
- **page.js**: Componente de la página principal.
- **posts/[slug]**: Ruta dinámica para entradas individuales del blog.
  - **page.js**: Renderiza una sola entrada del blog basada en el parámetro `slug`.
- **providers.js**: Proporciona contexto para la aplicación (e.g., `NextUIProvider`).
- **styles**: Estilos CSS globales.

## 📡 Obtención de Datos

La aplicación utiliza `getServerSideProps` para obtener datos en el servidor para cada solicitud. Esto asegura que el contenido siempre esté actualizado y mejora el SEO.

## 🎨 Estilos

La aplicación está estilizada con Tailwind CSS para CSS basado en utilidades y NextUI para componentes pre-construidos.

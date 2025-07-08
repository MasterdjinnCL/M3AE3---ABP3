# Proyecto SASS 7-1 Pattern

Este proyecto demuestra la implementación del patrón 7-1 de SASS para crear una interfaz web modular y escalable.

## 🌐 Demo en Vivo

**Ver el proyecto:** [https://masterdjinncl.github.io/M3AE3---ABP3/](https://masterdjinncl.github.io/M3AE3---ABP3/)

## 📁 Estructura del Proyecto

```
├── index.html              # Archivo HTML principal
├── css/                    # CSS compilado
├── html/                   # Archivos HTML adicionales
├── sass/                   # Archivos SASS organizados en 7-1
│   ├── abstracts/          # Variables, funciones y mixins
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _functions.scss
│   ├── base/               # Estilos base y reset
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   └── _colors.scss
│   ├── components/         # Componentes reutilizables
│   │   ├── _buttons.scss
│   │   └── _cards.scss
│   ├── layout/             # Estructura de la página
│   │   ├── _header.scss
│   │   └── _footer.scss
│   ├── pages/              # Estilos específicos de páginas
│   │   └── _home.scss
│   ├── themes/             # Temas (opcional)
│   ├── vendors/            # CSS de terceros (opcional)
│   └── style.scss          # Archivo principal que importa todo
└── package.json            # Dependencias y scripts
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js y npm instalados
- SASS instalado globalmente o como dependencia del proyecto

### Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Instala SASS globalmente (opcional):
```bash
npm install -g sass
```

### Scripts Disponibles

- **Compilar SASS una vez:**
  ```bash
  npm run sass
  ```

- **Modo desarrollo (watch):**
  ```bash
  npm run dev
  ```
  o
  ```bash
  npm run sass:watch
  ```

- **Compilar para producción:**
  ```bash
  npm run build
  ```

- **Servidor local:**
  ```bash
  npm run serve
  ```

## 🎨 Características del Proyecto

### Patrón 7-1 de SASS
- **Abstracts:** Variables, mixins y funciones reutilizables
- **Base:** Reset CSS, tipografía y estilos base
- **Components:** Botones, tarjetas y otros componentes UI
- **Layout:** Header, footer y estructura de la página
- **Pages:** Estilos específicos para cada página
- **Themes:** Temas personalizables (opcional)
- **Vendors:** CSS de bibliotecas externas (opcional)

### Componentes Incluidos
- **Header responsivo** con navegación y menú hamburguesa
- **Hero section** con gradientes y animaciones
- **Sistema de botones** con múltiples variantes
- **Tarjetas (cards)** con diferentes estilos
- **Footer** con enlaces sociales
- **Grid responsivo** para diferentes dispositivos

### Características CSS
- **Sistema de colores** completo con variables (tema naranja)
- **Tipografía escalable** con responsive font sizes
- **Mixins reutilizables** para media queries y efectos
- **Animaciones suaves** y transiciones
- **Sombras y efectos modernos**
- **Diseño completamente responsivo**
- **Imágenes libres de derechos** de Unsplash y Pexels

## 📱 Breakpoints Responsivos

- **xs:** 0px (móviles pequeños)
- **sm:** 576px (móviles)
- **md:** 768px (tablets)
- **lg:** 992px (desktop pequeño)
- **xl:** 1200px (desktop)
- **xxl:** 1400px (desktop grande)

## 🎯 Uso de Variables y Mixins

### Variables Principales
```scss
// Colores (Tema Naranja)
$color-primary: #ff6b35;
$color-secondary: #ff9500;

// Espaciado
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;

// Tipografía
$font-primary: 'Segoe UI', sans-serif;
$font-size-base: 1rem;
```

### Mixins Útiles
```scss
// Media queries
@include respond-to(md) { ... }

// Flexbox
@include flex-center;
@include flex-between;

// Botones
@include button-variant($color-primary);
@include button-outline($color-secondary);
```

## 🛠️ Extensión del Proyecto

Para añadir nuevos componentes o páginas:

1. Crea el archivo SASS correspondiente en la carpeta apropiada
2. Importa el archivo en `sass/style.scss`
3. Utiliza las variables y mixins existentes para mantener consistencia

## 📖 Recursos Adicionales

- [Documentación oficial de SASS](https://sass-lang.com/)
- [Patrón 7-1 de Sass Guidelines](https://sass-guidelin.es/#the-7-1-pattern)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Unsplash - Imágenes gratuitas](https://unsplash.com/)
- [Pexels - Imágenes gratuitas](https://pexels.com/)

## 🖼️ Imágenes

Este proyecto utiliza imágenes libres de derechos de:
- **Unsplash**: Para fotografías de alta calidad
- **Pexels**: Para imágenes adicionales


## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

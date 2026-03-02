# DogCare

Aplicación web para gestionar la información de tus mascotas, construida con React + TypeScript + Tailwind CSS.

## Tecnologías usadas

- Vite + React
- TypeScript
- Tailwind CSS

## Componentes

- **Sidebar** — Menú de navegación lateral con prop `activePage` para resaltar la página activa y prop `logo` para la imagen del logo.
- **InfoCard** — Tarjeta de información de cada perro con props `dogName`, `dogAge`, `dogBreed`, `dogImage` y `dogDescription`.
- **Button** — Botón reutilizable con prop `label`.

## Decisiones de diseño

- Se usó un layout de sidebar fijo a la izquierda y contenido principal a la derecha para facilitar la navegación.
- Las tarjetas se organizan en un grid responsive que se adapta a 1, 2 o 3 columnas dependiendo del tamaño de pantalla.
- Cada tarjeta muestra la foto del perro en círculo, su nombre, raza, edad y descripción.

## Utilidades Tailwind más usadas

- `flex` y `grid` — para organizar el layout principal y las tarjetas.
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — para que las tarjetas se acomoden en 1, 2 o 3 columnas según el tamaño de pantalla.
- `rounded-lg` y `rounded-full` — para bordes redondeados en tarjetas, botones y foto del perro.
- `hover:bg-gray-100` — para resaltar las opciones del menú al pasar el mouse.
- `focus-visible:ring-2` — para accesibilidad en el botón.
- `w-64 h-screen` — para fijar el ancho y alto del sidebar.
- `object-cover` — para que las fotos no se distorsionen en el círculo.
- `transition-colors` — para que los hover se vean suaves.

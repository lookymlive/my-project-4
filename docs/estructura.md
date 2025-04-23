# Estructura del Proyecto

## Carpetas principales

- **src/components/**: Componentes reutilizables y layouts.
- **src/pages/**: Páginas tradicionales de Next.js (incluye auth, API routes, _app,document, etc.).
- **src/app/**: Rutas con app router (si aplica).
- **src/hooks/**: Custom hooks.
- **src/utils/**: Utilidades y helpers.
- **public/**: Recursos estáticos.
- **copycoder-prompts/**: Prompts y reglas de desarrollo.
- **docs/**: Documentación técnica y guías.

## Convenciones

- Los layouts principales están en `src/components/layout/`.
- Las páginas de autenticación deben estar solo en `src/pages/auth/`.
- Los archivos especiales (`_app.tsx`, `_document.tsx`) y las API routes deben estar en `src/pages/`.
- No dupliques rutas entre `pages/` y `app/`.
- Sigue la estructura y reglas de los prompts en `copycoder-prompts/`.

# Estructura del Proyecto

## Carpetas principales

- **src/components/**: Componentes reutilizables y layouts.
- **src/pages/**: Rutas tradicionales de Next.js (incluye auth).
- **src/app/**: Rutas con app router (si aplica).
- **src/hooks/**: Custom hooks.
- **src/utils/**: Utilidades y helpers.
- **public/**: Recursos estáticos.
- **copycoder-prompts/**: Prompts y reglas de desarrollo.
- **docs/**: Documentación técnica y guías.

## Convenciones

- Los layouts principales están en `src/components/layout/`.
- Las páginas de autenticación deben estar solo en `src/pages/auth/`.
- No dupliques rutas entre `pages/` y `app/`.
- Sigue la estructura y reglas de los prompts en `copycoder-prompts/`.

# Guía de Desarrollo

## Agregar nuevas páginas

1. Crea el archivo en `src/pages/` o `src/app/` según corresponda.
2. Usa los layouts de `src/components/layout/` para mantener consistencia.
3. Si la página requiere autenticación, verifica la protección en `src/middleware.ts`.

## Componentes

- Los componentes compartidos van en `src/components/shared/`.
- Los específicos de una funcionalidad en su subcarpeta correspondiente.

## Estado global

- Usa contextos de React o librerías como Zustand/Redux si es necesario.
- Mantén la estructura sugerida en los prompts para el estado global.

## Estilos

- Usa TailwindCSS.
- Mantén la consistencia con los colores y breakpoints definidos en los prompts.

## Pruebas

- Agrega pruebas unitarias en `src/__tests__/` o junto a los componentes.
- Usa Jest y React Testing Library (si están configuradas).

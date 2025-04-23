# My Project 4

Aplicación web construida con Next.js, TypeScript y TailwindCSS, orientada a la gestión de videos, reuniones, biblioteca personal y funcionalidades colaborativas.

## Estructura del Proyecto

- `src/`: Código fuente principal (componentes, páginas, hooks, estilos, utilidades).
- `public/`: Archivos estáticos y recursos.
- `copycoder-prompts/`: Prompts y documentación de estructura y reglas de desarrollo.
- `docs/`: Documentación técnica y guías de desarrollo.
- `.next/`: Archivos generados por Next.js (no modificar manualmente).
- Configuración: `next.config.js/ts`, `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json`, etc.

## Instalación

1. **Clona el repositorio**

```sh
   git clone <url-del-repo>
   cd my-project-4
   ```

2.**Instala dependencias**

   ```sh
   npm install
   ```

3.**Configura variables de entorno**

- Crea un archivo `.env.local` en la raíz si es necesario.
- Ejemplo:

```sh
     NEXT_PUBLIC_API_URL=https://api.tuapp.com
     ```

4. **Ejecuta la app en desarrollo**
   ```sh
   npm run dev
   ```

5.**Build para producción**

```sh
   npm run build
   npm start
   ```

## Scripts útiles

- `npm run dev`: Modo desarrollo.
- `npm run build`: Compila para producción.
- `npm run lint`: Linter con ESLint.
- `npm run test`: Ejecuta pruebas unitarias (si están configuradas).

## Estructura de Rutas

- `/home`: Dashboard principal.
- `/my-library`: Biblioteca personal.
- `/meetings-beta`: Gestión de reuniones.
- `/notifications`: Centro de notificaciones.
- `/watch-later`, `/history`, `/settings`, `/videos`, `/archive`, `/screenshots`: Funcionalidades específicas según el prompt.

## Autenticación

- Rutas de autenticación en `src/pages/auth/`:
  - `/auth/signin`
  - `/auth/signup`
  - `/auth/reset-password`
- Middleware en `src/middleware.ts` para proteger rutas.

## Buenas Prácticas

- Mantén los componentes de layout en `src/components/layout/`.
- No dupliques rutas entre `pages/` y `app/`.
- Sigue las convenciones de los prompts en `copycoder-prompts/`.
- Usa `min-h-screen` y `w-full` para layouts responsivos.

## Escalabilidad

- Añade nuevas páginas en `src/pages/` o `src/app/` según corresponda.
- Usa la carpeta `docs/` para documentar nuevas funcionalidades.
- Mantén la separación de lógica de negocio, presentación y utilidades.

## Más información

Consulta la carpeta [`docs/`](docs/) para guías detalladas de desarrollo, arquitectura y contribución.

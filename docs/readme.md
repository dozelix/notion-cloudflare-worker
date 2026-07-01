```markdown
# Notion Cloudflare Worker

Este proyecto es un ejemplo de cómo integrar Notion con Cloudflare Workers para crear una aplicación web dinámica.

## Stack Tecnológico

- Node.js 14.x
- TypeScript
- Cloudflare Workers
- Notion API

## Instalación/Setup

1. Clona el repositorio:
   ```sh
   git clone https://github.com/your-repo/notion-cloudflare-worker.git
   cd notion-cloudflare-worker
   ```

1. Instala las dependencias:

   ```sh
   npm install
   ```

2. Configura las variables de entorno en un archivo `.env`:

   ```env
   NOTION_API_KEY=your-notion-api-key
   WORKER_ENV=production
   ```

3. Crea el worker en Cloudflare:

   ```sh
   wrangler publish
   ```

## Uso/Ejecución

1. Ejecuta el worker localmente para desarrollo:

   ```sh
   npm run dev
   ```

2. Despliega el worker a Cloudflare:

   ```sh
   wrangler publish
   ```

## Arquitectura/Estructura de archivos

```
notion-cloudflare-worker/
├── .env.example
├── package.json
├── tsconfig.json
├── wrangler.toml
└── src/
    ├── index.ts
    ├── utils/
    │   └── notion.ts
    └── types/
        └── notion.d.ts
```

## Endpoints/Scripts principales

- `GET /api/data`: Obtiene datos de Notion.
- `POST /api/update`: Actualiza datos en Notion.

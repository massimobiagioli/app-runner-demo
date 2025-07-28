# Fastify 5 TypeScript Application

Applicazione Node.js con Fastify 5 e TypeScript, configurata per AWS App Runner.

## Sviluppo

```bash
# Installa le dipendenze
npm install

# Avvia in modalità sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia l'applicazione
npm start
```

## Endpoint

- `GET /health` - Health check endpoint

## Configurazione

L'applicazione utilizza le seguenti variabili d'ambiente:

- `PORT` - Porta del server (default: 3000)
- `HOST` - Host del server (default: 0.0.0.0)
- `NODE_ENV` - Ambiente di esecuzione

## Deployment

L'applicazione è configurata per AWS App Runner tramite il file `apprunner.yaml`.
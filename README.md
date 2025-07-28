# AWS App Runner Demo

Progetto completo per il deployment di un'applicazione Fastify 5 con TypeScript su AWS App Runner, utilizzando Terraform per l'infrastruttura.

## 📁 Struttura del Progetto

```
.
├── README.md                    # Documentazione principale
├── infra/                       # Infrastruttura Terraform
│   ├── main.tf                  # Risorse AWS principali
│   ├── variables.tf             # Variabili di configurazione
│   ├── outputs.tf               # Output del deployment
│   ├── terraform.tfvars.example # Esempio di configurazione
│   └── README.md                # Documentazione infrastruttura
└── code/                        # Applicazione Node.js
    ├── src/                     # Codice sorgente
    │   ├── app.ts               # Factory dell'applicazione Fastify
    │   ├── index.ts             # Entry point del server
    │   └── routes/              # Rotte dell'applicazione
    │       ├── index.ts         # Homepage route
    │       └── health.ts        # Health check route
    ├── test/                    # Test automatici
    │   ├── health.test.ts       # Test endpoint health
    │   └── routes.test.ts       # Test homepage e static files
    ├── views/                   # Template EJS
    │   └── index.ejs            # Template homepage
    ├── public/                  # File statici
    │   ├── css/
    │   │   └── style.css        # Stili personalizzati
    │   └── js/
    │       └── app.js           # JavaScript client-side
    ├── apprunner.yaml           # Configurazione AWS App Runner
    ├── package.json             # Dipendenze e script npm
    ├── tsconfig.json            # Configurazione TypeScript
    └── README.md                # Documentazione applicazione
```

## 🚀 Quick Start

### 1. Setup dell'Applicazione

```bash
cd code
npm install
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:3000`

### 2. Test

```bash
cd code
npm test
```

### 3. Build per Produzione

```bash
cd code
npm run build
npm start
```

### 4. Deploy su AWS

```bash
cd infra
cp terraform.tfvars.example terraform.tfvars
# Modifica terraform.tfvars con i tuoi valori
terraform init
terraform plan
terraform apply
```

## 🛠️ Tecnologie Utilizzate

### Backend
- **Fastify 5**: Framework web ad alte performance
- **TypeScript**: Tipizzazione statica
- **EJS**: Template engine per HTML
- **Material Design**: UI framework (Materialize CSS)

### Infrastruttura
- **AWS App Runner**: Servizio di deployment containerizzato
- **Terraform**: Infrastructure as Code
- **GitHub**: Repository per il codice sorgente

### Testing
- **Node.js Test Runner**: Test nativi di Node.js
- **tsx**: Esecuzione TypeScript per sviluppo

## 📋 Endpoint Disponibili

- `GET /` - Homepage con interfaccia Material Design
- `GET /health` - Health check endpoint (JSON)
- `GET /public/*` - File statici (CSS, JS, immagini)

## 🔧 Configurazione

### Variabili d'Ambiente

L'applicazione supporta le seguenti variabili:

- `PORT` - Porta del server (default: 3000)
- `HOST` - Host del server (default: 0.0.0.0)
- `NODE_ENV` - Ambiente di esecuzione

### Terraform Variables

Configura `infra/terraform.tfvars`:

```hcl
app_name                 = "my-fastify-app"
github_repository_url    = "https://github.com/username/repository"
github_branch           = "main"
auto_deployments_enabled = true
cpu                     = "0.25 vCPU"
memory                  = "0.5 GB"
aws_region              = "us-east-1"
```

## 🧪 Testing

Il progetto include test automatici per:

- **Health Check**: Verifica che l'endpoint `/health` restituisca status 200
- **Homepage**: Verifica che la homepage serva HTML correttamente
- **Static Files**: Verifica che i file CSS/JS siano serviti

### Esecuzione Test

```bash
# Test con tsx (sviluppo)
npm test

# Test compilati (produzione)
npm run test:build
```

## 📦 Script NPM Disponibili

```bash
npm run dev        # Avvia in modalità sviluppo con watch
npm run build      # Compila TypeScript
npm start          # Avvia l'applicazione compilata
npm test           # Esegue i test
npm run test:build # Esegue i test compilati
```

## 🏗️ Architettura

### Applicazione
- **Modular Design**: Rotte separate in file dedicati
- **Path Aliases**: Import puliti con `@src/` e `@test/`
- **Factory Pattern**: App factory per testing e riutilizzo
- **Error Handling**: Gestione errori robusta

### Infrastruttura
- **IAM Roles**: Ruoli dedicati per App Runner
- **Auto Deployment**: Deploy automatico da GitHub
- **Health Checks**: Monitoraggio automatico dell'applicazione
- **Scalabilità**: Configurazione CPU/memoria flessibile

## 🔒 Sicurezza

- **IAM Least Privilege**: Permessi minimi necessari
- **HTTPS**: Terminazione SSL automatica su App Runner
- **Environment Variables**: Configurazione sicura tramite variabili

## 📈 Monitoraggio

AWS App Runner fornisce automaticamente:
- **Logs**: CloudWatch Logs per debugging
- **Metrics**: Metriche di performance e utilizzo
- **Health Checks**: Monitoraggio continuo su `/health`

## 🤝 Contribuire

1. Fork del repository
2. Crea un branch per la feature (`git checkout -b feature/amazing-feature`)
3. Commit delle modifiche (`git commit -m 'Add amazing feature'`)
4. Push del branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 🆘 Supporto

Per problemi o domande:
1. Controlla la documentazione in `code/README.md` e `infra/README.md`
2. Verifica i log di AWS CloudWatch
3. Esegui i test localmente per debugging
4. Apri un issue su GitHub
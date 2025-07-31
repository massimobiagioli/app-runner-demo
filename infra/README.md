# Infrastructure

Questa cartella contiene i file Terraform per il deployment dell'applicazione su AWS App Runner.

## Struttura

- `main.tf` - Risorse principali (App Runner service, IAM roles)
- `variables.tf` - Variabili di input
- `outputs.tf` - Output del deployment
- `terraform.tfvars.example` - Esempio di configurazione

## Utilizzo

1. Copia `terraform.tfvars.example` in `terraform.tfvars`
2. Modifica le variabili secondo le tue necessità
3. Esegui:
   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

## Variabili principali

- `app_name` - Nome dell'applicazione
- `github_repository_url` - URL del repository GitHub
- `github_branch` - Branch da deployare (default: main)
- `auto_deployments_enabled` - Abilita deployment automatici (richiede connessione GitHub)

## Auto-deployments

Per abilitare i deployment automatici:

1. Crea manualmente una connessione GitHub nella console AWS App Runner
2. Imposta `auto_deployments_enabled = true` nel terraform.tfvars
3. Aggiungi la risorsa `aws_apprunner_connection` nel main.tf se necessario

**Nota**: Gli auto-deployments richiedono autenticazione GitHub anche per repository pubblici.
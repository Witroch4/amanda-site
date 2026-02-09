# Quick Deploy Commands

## Build e Tag Local
```powershell
# Opção 1: Usando compose (recomendado)
docker compose build

# Opção 2: Build direto com tags
docker build --build-arg NEXT_PUBLIC_WHATSAPP_NUMBER=558592091821 --build-arg NEXT_PUBLIC_RAIZ_ROUTE=oab -t witrocha/amanda-site-next:v1.0 -t witrocha/amanda-site-next:latest .
```

## Tag da Imagem Existente
```powershell
# Se já fez build, apenas tag
docker tag amanda-site-next-amanda-site:latest witrocha/amanda-site-next:v1.0
docker tag amanda-site-next-amanda-site:latest witrocha/amanda-site-next:latest
```

## Push para Docker Hub
```powershell
# Login (primeira vez)
docker login

# Push
docker push witrocha/amanda-site-next:v1.0
docker push witrocha/amanda-site-next:latest
```

## Ou use o script automatizado
```powershell
.\build-and-push.ps1
```

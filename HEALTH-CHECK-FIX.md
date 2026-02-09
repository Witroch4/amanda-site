# 🔧 Fix Health Check - Rebuild Required

## Problema Identificado

O health check estava falhando porque usava `node -e require('http').get()` que não funciona bem com Next.js standalone mode.

## Solução Aplicada

✅ **Health check atualizado para usar `wget`** (mais confiável)
✅ **Dockerfile atualizado** para instalar `wget` no Alpine
✅ **compose.yml e compose-deploy.yaml atualizados**

---

## 🚀 Passos para Corrigir

### 1. Rebuild da Imagem

```powershell
# Opção A: Usando o script
.\build-and-push.ps1

# Opção B: Manual
docker build --build-arg NEXT_PUBLIC_WHATSAPP_NUMBER=558592091821 --build-arg NEXT_PUBLIC_RAIZ_ROUTE=oab -t witrocha/amanda-site-next:latest .
docker push witrocha/amanda-site-next:latest
```

### 2. Remover Stack Antiga

```bash
docker stack rm amanda_site

# Aguarde a remoção completa (30 segundos)
docker stack ls
```

### 3. Redeploy

```bash
docker stack deploy -c compose-deploy.yaml amanda_site
```

### 4. Verificar Health Check

```bash
# Ver logs
docker service logs -f amanda_site_amanda_site

# Verificar status
docker service ps amanda_site_amanda_site

# Inspecionar health
docker inspect $(docker ps -q -f name=amanda_site) | grep -A 10 Health
```

---

## ✅ Resultado Esperado

Após o rebuild, o health check deve passar:

```json
"Health": {
  "Status": "healthy",
  "FailingStreak": 0
}
```

E o container deve permanecer rodando.

---

## 🐛 Se Ainda Falhar

### Testar Health Check Manualmente

```bash
# Entrar no container
docker exec -it $(docker ps -q -f name=amanda_site) sh

# Testar wget
wget --no-verbose --tries=1 --spider http://localhost:3000

# Testar curl (alternativa)
curl -f http://localhost:3000 || exit 1
```

### Verificar Logs do Next.js

```bash
docker service logs --tail 50 amanda_site_amanda_site
```

Deve mostrar:
```
✓ Ready in 124ms
- Local:   http://localhost:3000
- Network: http://0.0.0.0:3000
```

---

## 📝 Mudanças nos Arquivos

### Dockerfile
```diff
+ # Install wget for health checks
+ RUN apk add --no-cache wget
```

### compose-deploy.yaml
```diff
- test: ["CMD", "node", "-e", "require('http').get(...)"]
+ test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000"]
```

# ===============================
# Etapa 1: Build da aplicação
# ===============================
FROM node:20-alpine AS builder

WORKDIR /app

# Dependências de sistema necessárias no build
# Adicionado libc6-compat que é vital para Alpine
RUN apk update && apk add --no-cache \
    build-base \
    g++ \
    python3 \
    make \
    libc6-compat 

# -----------------------------------------
# ARGS/ENVs usados DURANTE o build
# -----------------------------------------
ARG NEXT_PUBLIC_WHATSAPP_NUMBER
ARG NEXT_PUBLIC_RAIZ_ROUTE

# Disponibiliza como variáveis de ambiente no build
ENV NEXT_PUBLIC_WHATSAPP_NUMBER=${NEXT_PUBLIC_WHATSAPP_NUMBER} \
    NEXT_PUBLIC_RAIZ_ROUTE=${NEXT_PUBLIC_RAIZ_ROUTE}

# (Debug - remova depois)
RUN echo "BUILD: WHATSAPP=${NEXT_PUBLIC_WHATSAPP_NUMBER} ROUTE=${NEXT_PUBLIC_RAIZ_ROUTE}"

# Dependências JS para build
COPY package.json package-lock.json ./

# Instalar todas as dependências
RUN npm ci

# Código-fonte
COPY . .

# Build Next.js
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# Mantém apenas dependências necessárias em produção
RUN npm prune --production

# Limpeza
RUN rm -rf .next/cache && \
    rm -rf node_modules/@types && \
    rm -rf node_modules/typescript && \
    rm -rf node_modules/.cache && \
    rm -rf /tmp/* && \
    rm -rf /var/cache/apk/*

# ===============================
# Etapa 2: Runtime (produção)
# ===============================
FROM node:20-alpine

WORKDIR /app

# Dependências de sistema para runtime
RUN apk update && apk add --no-cache wget && \
    rm -rf /var/cache/apk/* && \
    rm -rf /tmp/*

# Copiar artefatos e dependências geradas no builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules

# Artefatos buildados (.next e public são os essenciais)
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# --- CORREÇÃO FEITA ---
# A linha 'COPY next.config...' foi REMOVIDA.
# Como o arquivo não existe no seu projeto, o Next.js usará a config padrão.

# Ambiente de runtime
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Porta exposta
EXPOSE 3000

# Entrypoint
CMD ["npm", "start"]
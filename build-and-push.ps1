# Build and Push Script for Docker Hub
# Usage: .\build-and-push.ps1

$IMAGE_NAME = "witrocha/amanda-site-next"
$VERSION = "v1.0"
$LATEST_TAG = "latest"

Write-Host "[BUILD] Building Docker image..." -ForegroundColor Cyan

# Build with version tag
docker build `
  --build-arg NEXT_PUBLIC_WHATSAPP_NUMBER=558592091821 `
  --build-arg NEXT_PUBLIC_RAIZ_ROUTE=oab `
  -t "${IMAGE_NAME}:${VERSION}" `
  -t "${IMAGE_NAME}:${LATEST_TAG}" `
  .

if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "[SUCCESS] Build successful!" -ForegroundColor Green
Write-Host ""
Write-Host "[PUSH] Pushing to Docker Hub..." -ForegroundColor Cyan

# Push version tag
docker push "${IMAGE_NAME}:${VERSION}"

if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Push failed for ${VERSION}!" -ForegroundColor Red
    exit 1
}

# Push latest tag
docker push "${IMAGE_NAME}:${LATEST_TAG}"

if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Push failed for ${LATEST_TAG}!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[SUCCESS] Successfully pushed:" -ForegroundColor Green
Write-Host "   - ${IMAGE_NAME}:${VERSION}" -ForegroundColor Yellow
Write-Host "   - ${IMAGE_NAME}:${LATEST_TAG}" -ForegroundColor Yellow
Write-Host ""
Write-Host "[DEPLOY] Ready to deploy on Portainer!" -ForegroundColor Cyan

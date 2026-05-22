# SOLVIST — Instrucciones para Claude Code

## REGLAS OBLIGATORIAS — seguir siempre sin excepción

### Después de CADA tarea:
1. git add + git commit (mensaje descriptivo en español)
2. git push origin main (SIEMPRE, sin excepción)
3. Si es backend: ejecutar deploy en Render (ver abajo)

### Al leer código:
- NUNCA leas archivos completos
- Busca SOLO la función o sección relevante
- Máximo 2 archivos por tarea

### Commits:
- Un solo commit por tarea
- Mensaje en español descriptivo

## Deploy backend (ejecutar tras CADA commit de backend)
curl -X POST "https://api.render.com/v1/services/srv-d6ic6ah5pdvs73e0sp8g/deploys" -H "Authorization: Bearer rnd_U5DWyqUBb2DiWy5jmKUGA64OAUvp"

## Stack
- Frontend: /Users/didac/Desktop/SOLVIST SAAS/solvist-frontend (rama main, Vercel auto-deploy)
- Backend: /Users/didac/Desktop/SOLVIST SAAS/solvist-api (rama main, Render deploy manual)
- Supabase project ID: ooazcufyxjjidzwszcii
- Backend URL: https://solvist-api-wbz1.onrender.com
- Frontend URL: https://solvist-frontend-2wag.vercel.app

## Supabase
- Company ID demo: 5d657695-06a3-48e1-9f5b-e6fd55688ff6
- Usuario demo: dpuigbaro@gmail.com

## Producto
- Solvist: plataforma B2B SaaS para instaladores solares
- Detecta oportunidades de venta en carteras de instalaciones existentes
- Motor de scoring automático por cliente

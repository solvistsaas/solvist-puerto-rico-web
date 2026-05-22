# Reglas para Claude Code — Solvist

## Modelo a usar por tipo de tarea
- **Haiku**: bugs simples, fixes de lógica, correcciones de imports, cambios de una sola función, SQL directo
- **Sonnet**: nuevas funcionalidades, rediseño de componentes, lógica de negocio compleja, prompts de copywriting, endpoints nuevos con múltiples tablas
- **Opus**: decisiones de arquitectura, refactors grandes, análisis de seguridad (usar solo si se indica explícitamente)

## Reglas generales
- NO leas archivos completos — busca solo la sección relevante
- Un commit por tarea
- Git push tras cada commit
- Deploy Render solo si se toca el backend:
  curl -X POST "https://api.render.com/v1/services/srv-d6ic6ah5pdvs73e0sp8g/deploys" -H "Authorization: Bearer rnd_U5DWyqUBb2DiWy5jmKUGA64OAUvp"

## Stack
- Frontend: /Users/didac/Desktop/SOLVIST SAAS/solvist-frontend (Next.js, rama main) → Vercel auto-deploy
- Backend: /Users/didac/Desktop/SOLVIST SAAS/solvist-api (FastAPI Python 3.9, rama main) → Render manual deploy
- Supabase project: ooazcufyxjjidzwszcii
- Backend URL: https://solvist-api-wbz1.onrender.com
- Frontend URL: https://solvist-frontend-2wag.vercel.app
- company_id demo: 5d657695-06a3-48e1-9f5b-e6fd55688ff6

## Colores de marca
- Azul: #0066FF
- Cian: #00CCFF

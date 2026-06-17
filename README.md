# VitalTrace — Landing Page

Landing page estática profesional para presentar el proyecto **VitalTrace HealthNet**: migración de infraestructura on-premise a Microsoft Azure.

## Descripción

VitalTrace es un operador nacional de salud digital en Colombia que integra IPS, laboratorios, aseguradoras (EPS) y programas de salud pública. Este sitio presenta la propuesta de migración cloud del equipo **MonsterOps**, incluyendo arquitectura, flujos, stack tecnológico y plan de migración por oleadas.

## Estructura del proyecto

```
proyecto2/
├── index.html              # Landing page principal
├── styles.css              # Estilos personalizados (tema, animaciones, dark mode)
├── script.js               # Interactividad (navegación, tema, scroll reveal)
├── README.md               # Este archivo
├── assets/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── og-image.svg
│   └── diagrams/
│       ├── azure-nube.png       # Arquitectura Azure Hub-Spoke
│       ├── kubernetes-aks.png   # AKS, Linkerd, Flux, observabilidad
│       ├── microsoft-fabric.png # Modernización de datos y Fabric
│       └── disaster-recovery.png # DR activo-pasivo BR → CL
└── VitalTrace_Migracion_Azure.pdf
```

## Tecnologías

- **HTML5** semántico
- **TailwindCSS** (CDN)
- **JavaScript** vanilla (sin dependencias)
- **CSS** custom para dark mode, animaciones y diagramas SVG

## Secciones

1. Hero — Presentación y métricas clave
2. Qué es VitalTrace — Contexto del proyecto
3. Problema actual en salud — Desafíos on-premise
4. Nuestra solución — Propuesta de valor
5. Arquitectura técnica — Hub-Spoke Azure, AKS, territorio
6. Flujo del sistema — Flujo clínico y GitOps/CI-CD
7. Stack tecnológico — Cloud, apps, DevOps, datos
8. Seguridad y privacidad — Compliance y cifrado
9. Migración a Azure — Timeline por oleadas (A, B, C)
10. Beneficios — Impacto del proyecto
11. Equipo — MonsterOps
12. Profesor — Christian David Flor Astudillo (Universidad Icesi)
13. Footer — Enlaces y recursos

## Recursos externos

| Recurso | Enlace |
|---------|--------|
| Presentación Google Slides | [Abrir](https://docs.google.com/presentation/d/1STp6fNi7XQBJpHUnUkyKpAgSrT1IKFYdqWl_B6t5Rok/edit) |
| Documentación Notion | [VitalHealth](https://app.notion.com/p/VitalHealth-357bdb691660805ea4daee210f7f143e) |
| Plan de migración | [Notion](https://app.notion.com/p/98e1e5f564ca42c5a92a96aff6c1ad82?v=6b7c6618bb3542af9fb9a00bb997fd06) |
| Diagramas Draw.io | [Abrir](https://app.diagrams.net/#G1N3Z7Kvm5pmCARyjvJm4US8KXpDR2GF7p) |

## Diagramas incluidos

Las cuatro imágenes PNG del proyecto se muestran en la sección **Arquitectura técnica** y son ampliables con clic (lightbox):

- **azure-nube.png** — Hub-Spoke multi-región (Brazil South + Chile Central)
- **kubernetes-aks.png** — AKS con namespaces, Linkerd mTLS y Flux GitOps
- **microsoft-fabric.png** — Tiering de datos y pipeline medallion en Fabric
- **disaster-recovery.png** — DR activo-pasivo, failover y objetivos RTO/RPO

## Cómo ejecutar localmente

### Opción 1: Servidor Python

```bash
cd proyecto2
python3 -m http.server 8080
```

Abrir [http://localhost:8080](http://localhost:8080)

### Opción 2: Abrir directamente

Abrir `index.html` en el navegador. Algunas funciones (como fetch de recursos locales) funcionan mejor con un servidor HTTP.

### Opción 3: Live Server (VS Code / Cursor)

Instalar la extensión "Live Server" y hacer clic en "Go Live" sobre `index.html`.

## Dark mode

- Toggle manual en la barra de navegación
- Respeta `prefers-color-scheme` del sistema en la primera visita
- Preferencia guardada en `localStorage` (`vitaltrace-theme`)

## Recursos relacionados

- **Presentación Slides:** [Google Slides](https://docs.google.com/presentation/d/1STp6fNi7XQBJpHUnUkyKpAgSrT1IKFYdqWl_B6t5Rok/edit)
- **Documentación:** [Notion VitalHealth](https://app.notion.com/p/VitalHealth-357bdb691660805ea4daee210f7f143e)
- **Plan de migración:** [Notion](https://app.notion.com/p/98e1e5f564ca42c5a92a96aff6c1ad82?v=6b7c6618bb3542af9fb9a00bb997fd06)
- **Presentación PDF:** `VitalTrace_Migracion_Azure.pdf`
- **Diagramas:** [Draw.io — VitalTrace](https://app.diagrams.net/#G1N3Z7Kvm5pmCARyjvJm4US8KXpDR2GF7p)

## Equipo MonsterOps

| Miembro | Rol |
|---------|-----|
| Santiago Hernandez | Lead DevOps Engineer |
| Juan Velosa | Cloud Engineer |
| Lina Andrade | Product Owner |
| Andres Mesa | DevOps Engineer |
| Juan Jose Barrera | SRE Engineer |
| Andres Bueno | DevOps Engineer JR |
| Juan Jose De La Pava | SRE Engineer |

## Licencia

Proyecto académico — Versión 1.0 · Junio 2026 · CONFIDENCIAL (Datos de Salud)
# VitalHealth

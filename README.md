# DevOps Health IT Portfolio

A professional React portfolio built to present real-world DevOps, cloud, monitoring, and Health IT case studies.

## Purpose

This portfolio is structured around evidence-based project documentation. Each project is written as a case study that explains:

- The real-world problem
- The technical solution
- Architecture and design decisions
- Security considerations
- Implementation details
- Deployment steps
- Monitoring and reliability
- Troubleshooting stories
- Results and lessons learned

## CHS implementation case study

The site is currently hosted at https://mbimunyui.shop. The implementation case is available at `/projects/chs-offline-desktop-web-fhir` after this change is deployed. Content lives in `src/data/chsImplementation.js`, with a source-controlled SVG architecture diagram. The existing Health Screening planning case remains a design baseline.

The case distinguishes the deployed PC pilot and completed automated checks from the blocked desktop 1.0.2 installer, physical two-PC acceptance and future OVHcloud/doctor/AI work. Evidence is pinned to the October 20, 2026 source snapshots; documentation was prepared October 22. It is not a new uptime or production-readiness assessment.

The CHS case includes seven reviewed synthetic UI captures, grouped under functional scope, data flow, security and FHIR interoperability. Each offers a full-size image link. Capture provenance and hashes are recorded in `public/assets/images/projects/chs-offline-desktop-web-fhir/screenshots.json`. The screenshots are browser-fixture UI demonstrations, not live patient records, native desktop captures or additional backend acceptance results.

Do not add credentials, real patient screenshots, private deployment files or database dumps. Add screenshots only from reviewed synthetic fixtures. Both deployment workflows run on pushes to `main`; review the pull request before merging because that can update the live portfolio.

## Other Featured Project

### One Community Platform - Docker Compose Production Deployment

A production community skills platform deployed with:

- React frontend
- Node.js and Express backend
- PostgreSQL database
- Docker Compose orchestration
- NGINX reverse proxy
- HTTPS with Certbot
- Object storage media uploads
- Prometheus, cAdvisor, and Grafana monitoring
- PostgreSQL backup planning

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS v4
- GitHub Pages ready structure

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Screenshot Convention

Project screenshots should be stored under:

```text
public/assets/images/projects/project-name/screenshot-name.jpg
```

Example:

```text
public/assets/images/projects/one-community-docker-compose/grafana-dashboard.jpg
```

## Resume Convention

Place the resume PDF here:

```text
public/assets/documents/mbimunyui-emmanuel-resume.pdf
```

## Project Structure

```text
src/components
src/data
src/pages
src/routes
src/utils
public/assets/images
public/assets/documents
```

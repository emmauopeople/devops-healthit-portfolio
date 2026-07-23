export const projects = [
  {
    slug: "one-community-docker-compose",
    name: "One Community Platform - Docker Compose Production Deployment",
    shortName: "One Community Docker Compose",
    status: "Completed / Running",
    category: "Production DevOps Case Study",
    timeframe: "2026",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Docker Compose", "NGINX", "Certbot", "Prometheus", "Grafana", "Object Storage"],
    focus: ["Production deployment", "Reverse proxy", "HTTPS", "Monitoring", "Backups", "Troubleshooting"],
    summary: "A production community skills platform deployed with Docker Compose, NGINX, HTTPS, PostgreSQL, object storage media uploads, monitoring, and backup automation.",
    problem: "In many developing communities, including Cameroon, informal skilled workers are an important part of the local economy. Carpenters, plumbers, hair dressers, tailors, mechanics, electricians, and other service providers often depend on word-of-mouth referrals to find customers. Although smartphone access is increasingly common, many skilled workers still have little or no digital visibility. A person may be looking for a carpenter while a qualified carpenter is only a few blocks away, but both remain disconnected because there is no simple local platform for discovery. This lack of digital visibility leads to missed opportunities for workers, customers, and communities. It also creates a data gap because communities have limited structured information to understand which skills are available, which services are lacking, and which skills may be oversupplied in a specific area.",
    solution: "One Community was developed as a digital visibility and data platform for informal skilled workers and local service providers. The platform allows providers to publish their skills, services, location, contact information, and media, while giving the public a simple way to discover nearby services. It also creates a foundation for collecting useful community-level skills data that can support workforce visibility, local planning, service discovery, and future community development.",
    architecture: [
      "Public users access the React frontend through NGINX and HTTPS.",
      "Frontend requests are routed to the backend through a dedicated backend service.",
      "The backend stores application data in PostgreSQL and media files in object storage.",
      "Prometheus and cAdvisor collect service and container metrics.",
      "Grafana visualizes operational metrics for performance and reliability review.",
      "Cron-based PostgreSQL backups are pushed to object storage for recovery planning."
    ],
    security: [
      "HTTPS enabled with Certbot certificates.",
      "NGINX reverse proxy separates public traffic from internal containers.",
      "PostgreSQL is not directly exposed to the public internet.",
      "CORS configuration restricts browser access to approved frontend domains.",
      "Environment variables hold deployment-specific configuration.",
      "Media uploads enforce image type and size validation.",
      "Admin portal is separated from the public application workflow."
    ],
    implementation: [
      "Docker Compose services were used to run frontend, backend, database, monitoring, and supporting services.",
      "The public frontend supports skill discovery and provider-facing workflows.",
      "The admin dashboard supports provider management, request tracking, status updates, and monitoring views.",
      "The backend exposes endpoints for authentication, provider workflows, skills, media uploads, and admin operations.",
      "Object storage was integrated for provider skill images and media assets."
    ],
    deployment: [
      "Provisioned a Linux VPS and installed Docker and Docker Compose using an automation [script](https://github.com/emmauopeople/scripts/blob/main/install-docker.sh).",
      "NGINX and Certbot run as Docker Compose services instead of being managed only as host-level services.",
      "Configured production domains for frontend and backend routing.",
      "Created the NGINX configuration for frontend and backend reverse proxy traffic using [site.conf](https://github.com/emmauopeople/scripts/blob/main/site.conf).",
      "Configured TLS certificates for secure browser access using the Certbot container service.",
      "Started and recreated production containers with Docker Compose using docker compose up --force-recreate.",
      {
        text: "Verified running services with docker ps to confirm NGINX, Certbot, cAdvisor, Prometheus, node exporter, frontend, and backend containers were up.",
        images: {
          title: "Running services",
          description: "docker ps output confirming the production containers were running after deployment.",
          src: "/assets/images/projects/one-community-docker-compose/docker-ps.png"
        }
      },
      {
        text: "Validated production endpoints using browser testing, curl checks, and logs.",
        images: [
          {
            title: "Backend API health check",
            description: "curl https://api.cameroonskills.org",
            src: "/assets/images/projects/one-community-docker-compose/health-check.png"
          },
          {
            title: "Backend CPU logs",
            description: "curl https://api.cameroonskills.org/metrics",
            src: "/assets/images/projects/one-community-docker-compose/backend-cpu-logs.png"
          }
        ]
      }
    ],
    monitoring: [
      "Prometheus collects application and container metrics.",
      "cAdvisor exposes container CPU, memory, and network usage.",
      "Grafana dashboards provide visibility into production behavior.",
      "Custom admin login metrics track successful and failed login events.",
      "Backup automation supports PostgreSQL disaster-recovery planning using [backup script](https://github.com/emmauopeople/scripts/blob/main/backup_pg.sh) and [restore script](https://github.com/emmauopeople/scripts/blob/main/restore_pg.sh)."
    ],
    troubleshooting: "A key production issue involved mobile image uploads intermittently failing while desktop uploads worked. The investigation covered browser policy, storage rules, secure browser context, mobile file size, MIME type normalization, NGINX logs, and device-specific behavior. The main finding was instability in mobile browser-based image upload behavior, especially when providers attempted to upload and manage listing images directly from mobile browsers. The solution was to create a dedicated provider support mobile app for creating and managing listings, which provided a more reliable upload workflow and resolved the mobile image upload problem.",
    results: [
      "Production frontend and backend are running behind HTTPS.",
      "PostgreSQL persists application data for provider and public workflows.",
      {
        text: "The public platform and provider support workflow were validated across desktop and mobile interfaces.",
        images: [
          {
            title: "One Community desktop view",
            description: "Desktop view of the One Community public platform.",
            src: "/assets/images/projects/one-community-docker-compose/one-community-desktop.png",
            layout: "full"
          },
          {
            title: "Provider mobile app",
            description: "Provider support mobile app for creating and managing listings.",
            src: "/assets/images/projects/one-community-docker-compose/provider-mobile.jpeg",
            layout: "phone"
          },
          {
            title: "Public mobile view",
            description: "Public mobile view for discovering local skills and services.",
            src: "/assets/images/projects/one-community-docker-compose/public-mobile.jpeg",
            layout: "phone"
          }
        ]
      },
      "[Admin dashboard](https://admin.cameroonskills.org) supports operational review and workflow management.",
      "Monitoring stack provides visibility into containers and service health.",
      "Daily database backup strategy is prepared for recovery planning.",
      "Production troubleshooting process is documented as part of the case study."
    ],
    lessons: [
      "Production deployment requires more than writing application code.",
      "Monitoring and logs are essential for troubleshooting real systems.",
      "Mobile browsers can expose integration problems that desktop testing misses.",
      "Backups, security, and operational documentation are part of system ownership.",
      "Docker Compose is effective for a small production platform, while Kubernetes is the next scaling step."
    ],
    links: {
      repository: "https://github.com/emmauopeople/1community_app",
      adminRepository: "https://github.com/emmauopeople/one-community-admin",
      publicSite: "https://www.cameroonskills.org",
      adminPortal: "https://admin.cameroonskills.org"
    },
    sectionImages: {
      architecture: {
        title: "Production Architecture Diagram",
        description: "Architecture diagram for frontend, backend, database, object storage, monitoring, backups, and reverse proxy flow.",
        src: "/assets/images/projects/one-community-docker-compose/architecture-diagram.png"
      },
      deployment: {
        title: "One Community Infrastructure on OVHcloud",
        description: "Deployment view showing users in Cameroon, OVHcloud application and database servers, monitoring, and AWS S3 media storage.",
        src: "/assets/images/projects/one-community-docker-compose/one-community-infrastructure.png"
      },
      monitoring: {
        title: "Grafana Monitoring Dashboard",
        description: "Monitoring evidence showing the Grafana dashboard for production visibility.",
        src: "/assets/images/projects/one-community-docker-compose/monitoring-dashboard.png"
      }
    }
  },
  {
    slug: "one-community-kubernetes",
    name: "One Community Platform - Kubernetes Migration",
    shortName: "One Community Kubernetes",
    status: "Planned / Next Phase",
    category: "Cloud-Native Migration",
    timeframe: "Planned",
    stack: ["Kubernetes", "Amazon EKS", "Helm", "Ingress", "Terraform", "GitHub Actions"],
    focus: ["Container orchestration", "Scalability", "Cloud migration", "Infrastructure as Code"],
    summary: "Migration plan to move the production One Community deployment from Docker Compose to a full Kubernetes environment on Amazon EKS.",
    problem: "The current Docker Compose production deployment works for a small platform, but future growth requires stronger orchestration, scalability, rolling deployments, service discovery, and cloud-native operational patterns.",
    solution: "The planned solution is to migrate the platform to Kubernetes on Amazon EKS using Terraform for infrastructure provisioning, Helm for packaging, ingress for external routing, and GitHub Actions for CI/CD automation.",
    architecture: [
      "Amazon EKS will run public frontend, backend API, admin services, and supporting workloads.",
      "Ingress will route HTTPS traffic to the correct Kubernetes services.",
      "Managed PostgreSQL can be used for stronger database reliability.",
      "Object storage will continue to support media assets and backup storage.",
      "Prometheus and Grafana will provide cluster and application observability."
    ],
    security: [
      "Kubernetes secrets or cloud secret management will store sensitive configuration.",
      "Network policies can restrict service-to-service traffic.",
      "Ingress TLS will protect browser traffic.",
      "RBAC will limit administrative access inside the cluster."
    ],
    implementation: [
      "Create Kubernetes manifests or Helm charts for frontend, backend, admin, and monitoring components.",
      "Use Terraform modules for VPC, EKS, node groups, IAM, and related cloud resources.",
      "Build CI/CD workflows to deploy images safely to the cluster."
    ],
    deployment: [
      "Provision AWS infrastructure with Terraform.",
      "Deploy workloads to EKS using Helm or Kubernetes manifests.",
      "Configure ingress, DNS, TLS, monitoring, and rollout validation."
    ],
    monitoring: [
      "Prometheus will collect pod, node, and application metrics.",
      "Grafana dashboards will show service health and capacity trends.",
      "Alerting can notify on downtime, high resource use, or failed deployments."
    ],
    troubleshooting: "This case study will document migration issues such as image pull errors, ingress routing, TLS problems, database connectivity, pod scheduling, and configuration drift.",
    results: ["Planned project. Results will be added after the Kubernetes migration is implemented."],
    lessons: ["Kubernetes should be introduced after the production workflow is understood and monitoring is already in place."]
  },
  {
    slug: "church-management-kubernetes",
    name: "Church Management System: Production-Grade DevOps Deployment on AWS EKS",
    shortName: "Church Management K8s",
    status: "Planned / In Progress",
    category: "Microservices / Kubernetes Case Study",
    timeframe: "Planned",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "Kubernetes", "Helm", "Ingress", "GitHub Actions", "Prometheus", "Grafana"],
    focus: ["Microservice architecture", "Kubernetes deployment", "Service discovery", "CI/CD", "Observability"],
    summary: "This is a real production deployment for a growing parish with multiple mission stations, replacing paper-based member, sacrament, certificate, document, and parish administration workflows with a modern web platform. The project demonstrates how application code becomes a secure, scalable, observable production cloud platform using React, Fastify microservices, PostgreSQL, containers, CI/CD, GitOps, AWS EKS, monitoring, logging, backups, rollback, and security controls.",
    problem: "The Parish of \"Parish Name\" is growing, with multiple outstations and an increasing number of members. However, the parish still depends on a manual paper-based system to manage member records, sacrament records, church cards, certificates, and documents. This makes it difficult to track church growth, know which outstations need more support, find old documents, reproduce lost certificates, and analyze parish membership by age group, station, or sacrament status.",
    solution: "This project aims to replace the parish's manual, paper-based record system with a centralized digital Church Management System that improves member tracking, document management, sacrament records, mission station reporting, and data-driven parish planning.",
    objectives: [
      "Production-grade AWS infrastructure design.",
      "Kubernetes deployment using Amazon EKS.",
      "GitHub Actions CI/CD.",
      "GitOps deployment with Argo CD.",
      "Helm-based application packaging.",
      "PostgreSQL migration to Amazon RDS.",
      "Centralized monitoring, logging, and alerting.",
      "Backup, restore, and rollback strategy.",
      "Cloud security using IAM, WAF, TLS, private subnets, secrets, and RBAC."
    ],
    architecture: [
      "Frontend: React + TypeScript + Vite application.",
      "Auth Service: Handles login, users, JWT authentication, and role-based access.",
      "Church Core Service: Manages members, sacrament records, member codes, and parish business rules.",
      "Document Service: Handles certificate generation, document upload, preview, search, and download.",
      "Databases: Separate PostgreSQL-backed data stores for authentication, church core records, and document records.",
      "Observability: Fastify structured logs, health endpoints, database health checks, and Prometheus metrics."
    ],
    sectionImages: {
      architecture: {
        title: "Church Management System - Application Architecture",
        description: "Architecture diagram showing the React + TypeScript frontend, Fastify microservices, PostgreSQL-backed domain modules, and observability outputs.",
        src: "/assets/images/projects/church-managment-system/application-architecture.png",
        layout: "full"
      }
    },
    security: [
      "Role-based access control will separate parish administrator, priest, secretary, finance, outstation leader, and general user permissions.",
      "TLS termination through ingress will protect browser traffic.",
      "Kubernetes secrets or a cloud secret manager will store sensitive configuration.",
      "Network policies can restrict internal service-to-service communication.",
      "Sacrament records, certificates, member records, and uploaded parish documents will require careful access controls and audit-friendly workflows.",
      "Container images will be built through CI/CD and deployed with least-privilege credentials."
    ],
    implementation: [
      "Build containerized APIs for each service with health endpoints and clear environment configuration.",
      "Create frontend workflows for parish staff, priests, outstation leaders, and administrators.",
      "Package services with Kubernetes manifests or Helm charts.",
      "Create database migration and seed-data workflows for each service boundary.",
      "Automate image builds, tests, and deployment through GitHub Actions."
    ],
    deployment: [
      "Provision a Kubernetes cluster for the application workloads.",
      "Build and push service images to a container registry.",
      "Deploy frontend, backend services, databases, ingress, secrets, and config maps.",
      "Configure DNS and TLS for the public application domain.",
      "Validate deployments with readiness probes, liveness probes, logs, and endpoint tests.",
      "Use rolling updates to release service changes without taking the whole platform offline."
    ],
    monitoring: [
      "Prometheus will collect pod, service, and application metrics.",
      "Grafana dashboards will show API health, request trends, pod restarts, and resource usage.",
      "Structured logs will help trace issues across services.",
      "Alerts can notify on failed deployments, high error rates, database connection failures, or unhealthy pods.",
      "Audit-friendly reporting will help track administrative and document-related activity."
    ],
    troubleshooting: "This case study will document expected microservice and Kubernetes issues such as service discovery failures, ingress routing problems, readiness probe failures, database migration order, environment configuration drift, document upload and retrieval problems, certificate generation errors, role-permission mistakes, and cross-service debugging.",
    results: ["Planned project. Results will be added after the church management microservices platform is implemented and deployed."],
    lessons: [
      "Microservices require clear service boundaries and operational discipline.",
      "Kubernetes adds deployment power, but observability and configuration management must be designed from the beginning.",
      "Church management systems handle sensitive member, sacrament, certificate, and document records, so security and role design are part of the architecture, not an afterthought."
    ]
  },
  {
    slug: "health-screening-application-planning",
    name: "Health Screening Application Planning",
    shortName: "Health Screening Planning",
    status: "Planned / In Progress",
    category: "Health IT / Clinical Informatics Planning",
    timeframe: "Planned / In Progress",
    stack: ["Electron", "React", "TypeScript", "SQLite", "Node.js", "PostgreSQL", "FHIR R4", "LLM Integration", "Offline-first Sync", "Docker", "CI/CD"],
    focus: ["Community hypertension screening", "Offline-first workflow", "Referral follow-up", "FHIR interoperability", "Clinician AI assistance", "Clinical governance"],
    summary: "In Progress - Designed as an offline-first community hypertension screening and referral platform for low-connectivity settings. Current work focuses on clinical workflow modeling, local data architecture, central synchronization, FHIR R4 interoperability, and a clinician-facing AI-assisted review experience.",
    problem: "In many underserved communities, individuals may not have an established primary care provider and may seek formal healthcare only when illness becomes severe. Hypertension is particularly dangerous because it can remain clinically silent for years while contributing to stroke, chronic kidney disease, visual impairment, heart disease, and other long-term complications. Community gatherings such as churches, faith communities, village meetings, and quarter meetings create an opportunity for repeated screening and follow-up, but paper-based records make it difficult to identify trends, retrieve previous readings, follow referrals, or confirm whether a person reached a healthcare provider.",
    solution: "Build a complete but focused offline-first community health screening platform centered on hypertension detection, referral, follow-up, and longitudinal patient history. Each participant is registered before screening. Subsequent visits are linked to the same patient record. The field application operates without internet, queues changes locally, and synchronizes with a central operational API when connectivity becomes available. The central platform manages organizations, hospital onboarding, approved access, synchronization, audit history, workflow reporting, FHIR publication, and a doctor portal for authorized clinical review and AI-assisted analysis.",
    objectives: [
      "Provide reliable offline patient registration and repeated community screening.",
      "Maintain longitudinal blood pressure, pulse, lifestyle, food-pattern, and OTC medication history.",
      "Create and track referrals through follow-up and closure.",
      "Synchronize data safely and idempotently when connectivity returns.",
      "Enable hospital onboarding, approval, and scoped access to shared patient data.",
      "Publish standardized FHIR R4 resources through a dedicated interoperability layer.",
      "Provide a doctor portal for chart review, document upload, and evidence-linked AI assistance.",
      "Demonstrate clinical workflow design, health data interoperability, offline-first engineering, and secure API architecture.",
      "Keep the community application within screening and referral boundaries; it does not diagnose hypertension or prescribe treatment.",
      "Keep the operational PostgreSQL database as the primary workflow system of record; FHIR is the interoperability representation."
    ],
    clinicalWorkflow: [
      "Patient registration starts with a search-before-create workflow to reduce duplicate records, followed by demographics, contact information, community/location association, local identifier, and consent or participation acknowledgement.",
      "Weekly screening encounters record one or more blood pressure readings, pulse, screening date/time, location, screener, device metadata when tracked, and notes.",
      "The workflow captures weekly lifestyle activity, commonly consumed foods, OTC medications, and the reason each OTC medication was taken.",
      "Approved screening rules determine the next action without generating a diagnosis.",
      "When criteria require professional evaluation, the system creates a referral and provides referral information.",
      "Referral follow-up tracks open, contacted, seen, unable-to-confirm, and closed status with facility, date seen, treatment/advice summary, outcome source, and next follow-up action.",
      "The longitudinal participant timeline is updated after each screening, referral, and follow-up event."
    ],
    functionalScope: [
      "Offline desktop application: role-based login for administrator, nurse, and trained screener roles; patient search and registration; location and screening-session management; BP and pulse recording; lifestyle, food-pattern, and OTC questionnaires; referral creation, printing, status tracking, follow-up capture, timeline, trend charts, reports, SQLite storage, transactional outbox, sync status, and local audit trail.",
      "Central operational platform: sync ingestion API with authentication, idempotency, validation, per-item acknowledgement, central PostgreSQL workflow database, hospital account request and approval, API-client credential lifecycle, scoped token management, reports, audit logging, sync monitoring, and FHIR publication status.",
      "FHIR interoperability layer: separate FHIR server or API backed by its own FHIR resource store, operational-to-FHIR R4 mapping, stable operational-to-FHIR identifiers, scoped hospital retrieval, and publication retry/error monitoring.",
      "Doctor portal: doctor authentication under an approved hospital organization, permitted patient lookup, longitudinal timeline, charts, referral/follow-up history, lifestyle and OTC context, document uploads, and AI workspace.",
      "AI clinical copilot: builds bounded patient context from authorized structured data and uploaded documents, returns structured summaries and draft recommendations for clinician review, logs evidence links and model metadata, and never writes AI output as verified clinical facts without clinician action."
    ],
    architecture: [
      "The architecture is divided into four domains: offline community edge application, central operational platform, FHIR interoperability layer, and clinician/AI experience.",
      "Community screening site includes nurse/trained screener workflows, an Electron + React desktop app, local SQLite storage, patients, encounters, BP readings, lifestyle, OTC, referrals, follow-ups, sync outbox, and HTTPS sync when online.",
      "Central operational platform includes sync, validation, workflow API, access control, admin portal, identity and API access, operational PostgreSQL, secure document storage, and a FHIR publish queue/registry.",
      "FHIR interoperability layer includes FHIR mapping and publishing service, FHIR R4 API/server, separate FHIR resource store, and authorized FHIR retrieval.",
      "Clinician experience includes authenticated doctor access, doctor portal, patient search, timeline, trends, uploads, chat, patient context builder, LLM clinical copilot, evidence-linked response, and AI audit log.",
      "Core principles: offline-first, operational database first, FHIR as interoperability, eventual consistency with visibility, least privilege, human-in-the-loop AI, and traceability."
    ],
    dataFlow: [
      "Register or find the participant at the community edge.",
      "Record weekly screening data: BP, pulse, lifestyle, food, and OTC context.",
      "Save locally in SQLite and add the change to the durable sync outbox.",
      "Apply approved screening rules and referral workflow locally.",
      "When internet is available, sync pending outbox batches to the central operational API.",
      "The central API authenticates the organization, validates payloads, applies idempotency, writes accepted records to PostgreSQL, and returns item-level acknowledgements.",
      "FHIR publication jobs map accepted operational records into FHIR resources without blocking the operational workflow.",
      "Hospital doctors retrieve authorized patient data, upload labs or notes, and use AI-assisted review with evidence links and clinician oversight."
    ],
    dataArchitecture: [
      "Local SQLite domain includes users, locations, patients, screening_sessions, screening_encounters, bp_readings, lifestyle_logs, food_logs, otc_medication_logs, referrals, followups, sync_outbox, audit_log, and meta.",
      "Central PostgreSQL domain includes organizations, organization_requests, users, hospital_doctors, api_clients, credentials, patients, identifiers, screening sessions, encounters, observations, lifestyle, food, OTC records, referrals, followups, sync jobs/items, uploaded_documents, document_extractions, FHIR publish queue/registry/status, AI requests/responses/evidence links, and audit logs.",
      "The operational database remains the primary workflow system of record while the FHIR resource store remains a standards-oriented interoperability representation.",
      "Stable client-generated identifiers and server-side idempotency are required to prevent duplicate records when offline clients replay batches."
    ],
    fhirInteroperability: [
      "Operational patient demographics and identifiers map to FHIR Patient.",
      "Screening location maps to FHIR Location.",
      "Community screening visit maps to FHIR Encounter.",
      "Blood pressure and pulse readings map to FHIR Observation.",
      "Lifestyle and food responses map to QuestionnaireResponse or Observation where appropriate.",
      "Patient-reported OTC medication use maps to MedicationStatement.",
      "Referral maps to ServiceRequest and referral/follow-up execution state maps to Task.",
      "Uploaded documents map to DocumentReference and formal lab reports can map to DiagnosticReport plus Observation where appropriate.",
      "Hospital access requires organization request, platform approval, scoped credentials, doctor-level authentication, scoped retrieval, audit logging, and optional machine-to-machine credentials for approved integrations."
    ],
    doctorPortalAi: [
      "Doctor workspace includes patient identification, access authorization, longitudinal timeline, blood-pressure trend visualization, referral and follow-up history, lifestyle, common food patterns, OTC medication use, uploaded labs, clinical notes, PDFs, images, natural-language questions, and structured AI output.",
      "AI output contract includes patient summary, relevant longitudinal trends, abnormal or concerning findings, potential contributing factors, missing or conflicting information, questions the clinician may clarify, draft recommendations for clinician review, evidence/source references, and uncertainty notes.",
      "AI responses are decision support for authenticated clinicians only; the system must not silently convert AI output into verified diagnoses, medication orders, or treatment plans.",
      "The system logs AI request context identifiers, outputs, model metadata, evidence links, and clinician disposition for auditability."
    ],
    security: [
      "Authentication: separate local and central identities where appropriate, with strong authentication for central administrators and doctors.",
      "Authorization: role-based and organization-scoped access with patient access checks for doctor retrieval.",
      "Transport security: TLS for all central API, sync, portal, and FHIR traffic.",
      "Data at rest: encrypted server storage and backups; evaluate encrypted local database strategy and device controls for field systems.",
      "Credential management: no long-lived plaintext tokens stored in UI code; support token rotation, revocation, and expiration.",
      "Auditability: record authentication, sensitive patient access, exports, changes, FHIR retrieval, document upload, and AI use.",
      "Consent and data sharing: define what participants consent to, how data may be shared, and how access is limited.",
      "Backup and recovery: back up central PostgreSQL, FHIR store, and document storage; define restore testing.",
      "AI data governance: minimize model context, enforce authorization before context assembly, log context identifiers, and review provider data-handling requirements before real patient deployment.",
      "Clinical governance: screening thresholds, urgent referral rules, and patient-facing recommendations must be approved and version-controlled."
    ],
    nonFunctionalRequirements: [
      "Offline resilience: all essential field workflows work without internet and local writes are durable after application restart.",
      "Synchronization: at-least-once transmission with server-side idempotency, per-item status, retry strategy, and dead-letter/failure visibility.",
      "Performance: patient search and data-entry screens should remain responsive on low-cost Windows hardware; central APIs should use pagination, indexing, and bounded responses.",
      "Maintainability: clear module boundaries, local and server database migrations, documented FHIR mappings, and configuration separated from source code.",
      "Observability: structured logs, sync metrics, API errors, FHIR publication failures, and AI request audits.",
      "Accessibility and usability: large readable controls, minimal typing where possible, and clear offline/sync indicators.",
      "Data quality: required fields, range validation, duplicate-prevention workflow, source provenance, and timestamps."
    ],
    agileDelivery: [
      "Epic 1 - Foundation and Governance: freeze workflows, terminology, architecture, project skeleton, database migration strategy, threat model, and development standards.",
      "Epic 2 - Offline Clinical Application: deliver local patient and screening workflow with auth, roles, registration, sessions, BP/pulse, lifestyle, food, OTC, timeline, and reports.",
      "Epic 3 - Referral and Follow-up: referral rules, referral creation, print/export, referral status, follow-up capture, and outcome reporting.",
      "Epic 4 - Central API and Synchronization: operational API, PostgreSQL, auth, sync endpoint, idempotency, acknowledgements, admin monitoring, and hospital onboarding.",
      "Epic 5 - FHIR Interoperability: FHIR mapping service, resource registry, selected FHIR resources, validation, and FHIR access controls.",
      "Epic 6 - Doctor Portal and Documents: doctor login, patient access, timeline, charts, referral history, upload/storage, document metadata, and extraction pipeline.",
      "Epic 7 - LLM Clinical Copilot: context builder, natural-language Q&A, structured output, evidence links, AI audit logs, safety prompts, and UI warnings.",
      "Epic 8 - Security, Validation, and Pilot Readiness: security review, backups, restore test, performance test, sync failure drills, FHIR validation, UAT, deployment runbooks, and support runbooks."
    ],
    backlog: [
      "Foundation: define patient identifier strategy, approved screening/referral protocol interface, glossary, status enums, ADRs, and environment strategy.",
      "Offline app: secure preload/IPC boundary, database migrations, repositories, role-based navigation, patient registration/search, screening entry, repeated BP measurements, lifestyle/food/OTC forms, timeline, and trend report.",
      "Referral: referral domain model, print template, status transitions, follow-up form, outcome sources, and overdue/open referral report.",
      "Central and sync: central API auth, sync contracts, schema versioning, stable UUIDs, idempotency keys, batch sync, acknowledgement, retry/error dashboard, hospital request and approval.",
      "FHIR: select FHIR R4 server approach, define identifiers/references, map Patient/Location/Encounter/Observation, map ServiceRequest/Task, map lifestyle/OTC/documents, add validation tests and example bundles.",
      "Doctor portal: doctor identity, hospital membership, patient access policy, timeline/trend views, secure upload, document registry, extraction workflow, and provenance display.",
      "AI: allowed tasks, prohibited behaviors, patient context assembler, structured response schema, evidence IDs, audit, clinician review, hallucination tests, missing-data tests, and conflicting-data tests.",
      "Hardening: threat-model review, backup/restore runbook and test, offline failure tests, sync replay/duplicate tests, FHIR conformance tests, user acceptance testing, pilot deployment, and support runbook."
    ],
    acceptanceScenarios: [
      "Offline New Patient: a screener with no internet registers a participant, records screening, lifestyle, food, OTC information, restarts the app, and still sees the complete record marked pending sync.",
      "Repeat Screening: an existing participant is found without duplicate creation; the new encounter appears on the longitudinal timeline and previous readings remain unchanged.",
      "Referral Follow-through: a screening creates a referral and later follow-up records whether the participant saw a provider, with source and outcome captured.",
      "Connectivity Recovery: pending records sync after internet returns and replaying the same batch does not create duplicate central records.",
      "FHIR Publication: an accepted BP encounter produces linked Patient, Encounter, and Observation resources with stable identifiers and correct references.",
      "Hospital Onboarding: a hospital requests access, is reviewed and approved, receives scoped integration access, and doctors authenticate individually.",
      "Doctor Review: an authorized doctor opens a patient and sees permitted screening, referral, lifestyle, OTC, and document history.",
      "AI Question: a doctor asks a natural-language question; the system builds authorized context, returns structured evidence-linked output, and logs request and response.",
      "Unauthorized Access: a doctor or API client without required scope cannot retrieve patient data and the denied attempt is logged.",
      "Backup Recovery: a documented restore procedure recovers the operational database and associated document metadata in a test environment."
    ],
    risks: [
      "Clinical misuse: users may interpret screening output as diagnosis; mitigate with explicit screening/referral language, approved protocols, training, and clinician oversight.",
      "Duplicate patient identities: mitigate with search-first workflow, stable identifiers, duplicate review tools, and conservative merge process.",
      "Lost or stolen field device: mitigate with device login, session timeout, local retention limits where practical, encryption/device controls, and operational procedures.",
      "Sync conflicts or duplicates: mitigate with client-generated UUIDs, idempotency keys, append-only clinical observations, and clear conflict policies.",
      "FHIR complexity: mitigate by keeping the operational model independent, adding mapping tests incrementally, and using a bounded resource set.",
      "AI hallucination or overreach: mitigate with evidence-linked outputs, structured schema, uncertainty fields, clinician review, and no autonomous orders or diagnoses.",
      "Poor internet: mitigate with batch limits, resumable/retry behavior, background queues, and delayed document upload where necessary.",
      "Community trust and consent: mitigate with plain-language consent, transparent purpose, limited access, and documented withdrawal/access policies.",
      "Sustainability: mitigate with simple deployment boundaries, managed services where justified, automation, and runbooks."
    ],
    implementation: [
      "Create low-fidelity screen flows for the desktop app, admin portal, and doctor portal.",
      "Create repositories and start Epic 1 engineering setup.",
      "Finalize local SQLite and central PostgreSQL logical schemas.",
      "Define sync payload contracts, schema versioning, conflict handling, and idempotency rules.",
      "Build the offline clinical workflow before advanced interoperability and AI features.",
      "Update implementation claims only as each deliverable is completed."
    ],
    deployment: [
      "Deployment target will be selected based on cost and operational needs.",
      "Planned direction is containerized services with automated test, security scan, build, and deployment pipelines.",
      "Production readiness requires backup/restore, monitoring, incident response, support runbooks, configuration guide, and restore testing.",
      "The offline desktop application must remain usable without continuous internet connectivity."
    ],
    monitoring: [
      "Track structured logs, sync metrics, API errors, FHIR publication failures, AI request audits, and unauthorized access attempts.",
      "Expose sync status and retry/failure diagnostics to administrators.",
      "Monitor FHIR publication success rate, sync failure rate, duplicate prevention events, doctor portal access failures, and AI audit completion.",
      "Operational dashboards should support referral follow-up visibility, hospital onboarding visibility, and central platform health."
    ],
    results: [
      "Planning baseline completed for a portfolio-grade Health IT and clinical informatics project.",
      "Clinical workflow, architecture, data flow, FHIR mapping, security model, Agile roadmap, acceptance scenarios, risks, and deliverables are documented.",
      "Implementation is not yet claimed as complete; the project is presented as planned / in progress.",
      "Architecture diagrams and planning artifacts are being added to the portfolio as evidence of design and delivery planning."
    ],
    successMeasures: [
      "Percentage of repeat participants correctly linked to an existing record.",
      "Percentage of screening encounters successfully synchronized.",
      "Number and percentage of referrals with documented follow-up status.",
      "Median time from referral creation to follow-up confirmation.",
      "Rate of sync failures and duplicate prevention events.",
      "FHIR publication success rate for eligible records.",
      "Doctor portal access failures or unauthorized attempts detected.",
      "AI responses with valid evidence references and completed clinician review.",
      "User-reported ease of registration, screening, referral, and follow-up workflows."
    ],
    deliverables: [
      "Planning and governance: problem statement, workflow, architecture, data model, security plan, and Agile roadmap.",
      "Offline desktop app: packaged Electron application with complete community workflow.",
      "Operational backend: Web API, PostgreSQL schema, admin workflow, hospital onboarding, and sync services.",
      "FHIR layer: FHIR server/API, resource mappings, validation examples, and access controls.",
      "Doctor portal: secure clinician access, patient timeline, trends, and document upload/review.",
      "AI clinical copilot: bounded context builder, natural-language questions, structured evidence-linked outputs, and AI audit.",
      "Testing evidence: unit, integration, offline, sync, authorization, FHIR validation, and end-to-end tests.",
      "Operations: deployment manifests, configuration guide, backup/restore, monitoring, incident and support runbooks.",
      "Portfolio artifacts: architecture diagrams, screenshots, demo video, API examples, FHIR examples, implementation status, and lessons learned."
    ],
    immediateNextSteps: [
      "Approve the project scope and architecture baseline.",
      "Finalize the exact clinical screening/referral protocol with qualified clinical governance.",
      "Finalize local SQLite and central PostgreSQL logical schemas.",
      "Define identifiers, sync payload contracts, and conflict/idempotency rules.",
      "Select the FHIR server implementation approach and document the initial resource profiles.",
      "Create low-fidelity screen flows for the desktop app, admin portal, and doctor portal.",
      "Create repositories and start Epic 1 engineering setup.",
      "Publish the planning document and architecture diagrams to the portfolio with status clearly marked In Progress."
    ],
    troubleshooting: "Expected troubleshooting areas include offline local storage durability, sync replay behavior, duplicate patient prevention, FHIR validation errors, authorization scope mistakes, hospital onboarding access, document extraction quality, AI context assembly, unstable network recovery, and controlled handling of real clinical data before pilot deployment.",
    lessons: [
      "Clinical workflow design must come before software implementation.",
      "Offline-first healthcare systems require durable local storage, explicit sync status, and careful idempotency design.",
      "FHIR should be used as an interoperability layer, not forced into every internal workflow table.",
      "AI features in clinical contexts require bounded context, evidence links, audit logs, and clinician review.",
      "Portfolio claims must clearly separate planned architecture from implemented production functionality."
    ],
    sectionImages: {
      clinicalWorkflow: {
        title: "Community Screening, Referral, and Follow-up Workflow",
        description: "Workflow showing participant arrival, search/registration, consent, screening encounter, referral decision, follow-up tracking, and longitudinal timeline update.",
        src: "/assets/images/projects/health-screening-application-planning/clinical-workflow.png",
        layout: "full"
      },
      architecture: {
        title: "Full System Architecture and Major Trust Zones",
        description: "Architecture for the offline community edge application, central operational platform, FHIR interoperability layer, doctor portal, and AI assistance workflow.",
        src: "/assets/images/projects/health-screening-application-planning/full-system-architecture.png",
        layout: "full"
      },
      dataFlow: {
        title: "End-to-End Operational and Interoperability Data Flow",
        description: "Data flow from offline patient registration and screening through sync, PostgreSQL storage, FHIR publication, doctor review, document upload, and AI-assisted analysis.",
        src: "/assets/images/projects/health-screening-application-planning/end-to-end-data-flow.png",
        layout: "full"
      },
      fhirInteroperability: {
        title: "Operational Data to FHIR R4 Representation",
        description: "Mapping from operational records such as patients, locations, encounters, BP readings, referrals, follow-ups, OTC use, and documents into FHIR R4 resources.",
        src: "/assets/images/projects/health-screening-application-planning/fhir-mapping.png",
        layout: "full"
      },
      doctorPortalAi: {
        title: "Doctor Portal, Document Ingestion, Context Building, and LLM Workflow",
        description: "Clinician workflow for authorized patient review, document ingestion, patient context building, LLM assistance, evidence-linked response, and AI audit logging.",
        src: "/assets/images/projects/health-screening-application-planning/doctor-ai-workflow.png",
        layout: "full"
      },
      agileDelivery: {
        title: "Agile Epic Sequence and Delivery Progression",
        description: "Planned delivery sequence from foundation and governance through offline clinical app, central API, FHIR, doctor portal, AI copilot, and pilot readiness.",
        src: "/assets/images/projects/health-screening-application-planning/agile-epic-sequence.png",
        layout: "full"
      }
    }
  },
  {
    slug: "serverless-deployment",
    name: "Serverless Deployment Case Study",
    shortName: "Serverless Deployment",
    status: "Planned",
    category: "Cloud Architecture",
    timeframe: "Planned",
    stack: ["AWS Lambda", "Gateway", "S3", "CloudFront", "DynamoDB", "IAM"],
    focus: ["Serverless architecture", "Cost optimization", "Cloud security", "Managed services"],
    summary: "A future project to demonstrate event-driven and serverless deployment patterns using AWS managed services.",
    problem: "Some workloads do not need always-running servers, but they still require secure APIs, low operational overhead, and cost-aware scaling.",
    solution: "The planned solution is a serverless architecture using managed AWS services for compute, storage, routing, identity, and delivery.",
    architecture: [
      "CloudFront and S3 can serve static frontend assets.",
      "API Gateway can route API requests to Lambda functions.",
      "DynamoDB can store serverless application data.",
      "IAM controls service permissions."
    ],
    security: ["Use least-privilege IAM policies, HTTPS, managed secrets, and strict API access controls."],
    implementation: ["Create infrastructure as code, Lambda handlers, API routes, storage policies, and CI/CD deployment workflows."],
    deployment: ["Deploy managed services through Terraform or AWS SAM and validate with endpoint tests."],
    monitoring: ["Use CloudWatch logs, metrics, alarms, and tracing to observe serverless behavior."],
    troubleshooting: "Expected troubleshooting areas include IAM permission errors, cold starts, API Gateway mapping issues, and CloudWatch log analysis.",
    results: ["Planned project. Results will be added after implementation."],
    lessons: ["Serverless architecture reduces server management but still requires strong observability, security, and deployment discipline."]
  }
];

export function getFeaturedProject() {
  return projects[0];
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

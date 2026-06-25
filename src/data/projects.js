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
    name: "Church Management System - Microservices on Kubernetes",
    shortName: "Church Management K8s",
    status: "Planned / In Progress",
    category: "Microservices / Kubernetes Case Study",
    timeframe: "Planned",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "Kubernetes", "Helm", "Ingress", "GitHub Actions", "Prometheus", "Grafana"],
    focus: ["Microservice architecture", "Kubernetes deployment", "Service discovery", "CI/CD", "Observability"],
    summary: "A planned parish operations platform that digitizes member records, sacrament records, church cards, certificates, documents, outstation reporting, and parish planning.",
    problem: "The Parish of \"Parish Name\" is growing, with multiple outstations and an increasing number of members. However, the parish still depends on a manual paper-based system to manage member records, sacrament records, church cards, certificates, and documents. This makes it difficult to track church growth, know which outstations need more support, find old documents, reproduce lost certificates, and analyze parish membership by age group, station, or sacrament status.",
    solution: "This project aims to replace the parish's manual, paper-based record system with a centralized digital Church Management System that improves member tracking, document management, sacrament records, mission station reporting, and data-driven parish planning.",
    solutionDetailsTitle: "What the System Does",
    solutionDetails: [
      "Registers and manages members across the main parish and all outstations.",
      "Tracks member movement, active members, inactive members, new members, and transferred members.",
      "Stores sacrament records such as baptism, confirmation, marriage, first communion, and other church records.",
      "Generates church cards, sacrament certificates, and official parish documents digitally.",
      "Keeps digital copies of important documents for easy searching and retrieval.",
      "Allows lost certificates or church cards to be traced and reproduced faster.",
      "Organizes members by outstation, age group, family, gender, and sacrament status.",
      "Shows which outstations are growing and which need more evangelization or support.",
      "Provides reports and analytics for parish leadership to support planning and decision-making.",
      "Reduces paperwork, manual searching, duplication of records, and loss of important church documents."
    ],
    architecture: [
      "A React frontend will provide member, leader, and administrator workflows.",
      "Ingress will route HTTPS traffic to the frontend and backend APIs.",
      "An authentication service will manage login, roles, and access control.",
      "Member, sacrament, document, reporting, certificate, and notification services will own separate business workflows.",
      "Each service can use its own database schema or database boundary to reduce coupling.",
      "Kubernetes services will provide internal service discovery between workloads.",
      "Prometheus and Grafana will collect and display service, pod, and cluster health metrics."
    ],
    security: [
      "Role-based access control will separate parish administrator, priest, secretary, finance, outstation leader, and general user permissions.",
      "TLS termination through ingress will protect browser traffic.",
      "Kubernetes secrets or a cloud secret manager will store sensitive configuration.",
      "Network policies can restrict internal service-to-service communication.",
      "Sacrament records, certificates, member records, and uploaded parish documents will require careful access controls and audit-friendly workflows.",
      "Container images will be built through CI/CD and deployed with least-privilege credentials."
    ],
    implementation: [
      "Define microservice boundaries for authentication, member records, sacrament records, document management, certificate generation, reporting, and notifications.",
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
    slug: "health-screening-app",
    name: "Health Screening and FHIR Data Platform",
    shortName: "Health Screening / FHIR App",
    status: "Planned",
    category: "Health IT Engineering",
    timeframe: "Planned",
    stack: ["React", "Node.js", "PostgreSQL", "FHIR", "Offline-first sync", "Backend design"],
    focus: ["Healthcare workflows", "Patient data", "FHIR mapping", "Offline-first architecture"],
    summary: "A planned healthcare project focused on offline-first patient data capture, PostgreSQL synchronization, FHIR mapping, and later AI-assisted clinical querying.",
    problem: "Some healthcare environments need patient data collection tools that can work with unreliable internet access while still supporting structured data exchange and future interoperability.",
    solution: "The planned solution is an offline-first health screening application that syncs data to a backend, maps records to FHIR-compatible structures, and exposes secure APIs for clinical review.",
    architecture: [
      "Offline-capable client collects screening and lifestyle data.",
      "A backend API receives synchronized records and stores workflow data in PostgreSQL.",
      "A mapping layer converts selected records into FHIR-compatible resources.",
      "A FHIR server stores standardized clinical data for interoperability."
    ],
    security: [
      "Authentication and authorization will restrict access to patient data.",
      "Sensitive data will require encrypted transport and controlled storage.",
      "Audit logs will support clinical accountability."
    ],
    implementation: [
      "Build patient data collection workflows.",
      "Implement offline storage and synchronization logic.",
      "Create PostgreSQL-to-FHIR mapping rules.",
      "Expose secure APIs for doctor-facing access."
    ],
    deployment: ["Deploy backend API, database, and FHIR server in a controlled environment after MVP validation."],
    monitoring: ["Monitor API health, sync failures, database behavior, and FHIR mapping errors."],
    troubleshooting: "Expected troubleshooting areas include sync conflicts, incomplete patient records, FHIR validation errors, and unstable network behavior.",
    results: ["Planned project. Results will be added after MVP implementation."],
    lessons: ["Healthcare data platforms must prioritize workflow accuracy, privacy, reliability, and interoperability from the beginning."]
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

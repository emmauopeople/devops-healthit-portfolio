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
    problem: "Small communities and service providers need a practical way to publish skills, services, and contact information online. The platform needed public access, provider workflows, administrative review, media upload support, and reliable production operations.",
    solution: "I deployed a full-stack system using a React public app, Node and Express backend, PostgreSQL database, Docker Compose orchestration, NGINX reverse proxy, HTTPS, object storage media support, monitoring dashboards, and scheduled database backups.",
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
      "Provisioned a Linux VPS and installed Docker, Docker Compose, NGINX, and Certbot.",
      "Configured production domains for frontend and backend routing.",
      "Created NGINX server blocks for frontend and backend reverse proxy traffic.",
      "Configured TLS certificates for secure browser access.",
      "Started and verified containers through Docker Compose.",
      "Validated production endpoints using browser testing, curl checks, and logs."
    ],
    monitoring: [
      "Prometheus collects application and container metrics.",
      "cAdvisor exposes container CPU, memory, and network usage.",
      "Grafana dashboards provide visibility into production behavior.",
      "Custom admin login metrics track successful and failed login events.",
      "Backup automation supports PostgreSQL disaster-recovery planning."
    ],
    troubleshooting: "A key production issue involved mobile image uploads intermittently failing while desktop uploads worked. The investigation covered browser policy, storage rules, secure browser context, mobile file size, MIME type normalization, NGINX logs, and device-specific behavior.",
    results: [
      "Production frontend and backend are running behind HTTPS.",
      "PostgreSQL persists application data for provider and public workflows.",
      "Admin dashboard supports operational review and workflow management.",
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
      deploymentRepository: "https://github.com/emmauopeople/1community_deployment_configurations"
    },
    screenshots: [
      { title: "Public homepage desktop view", description: "Public landing page for service discovery and community access.", src: "/assets/images/projects/one-community-docker-compose/public-homepage-desktop.jpg" },
      { title: "Public homepage mobile view", description: "Mobile responsive view of the public platform.", src: "/assets/images/projects/one-community-docker-compose/public-homepage-mobile.jpg" },
      { title: "Admin dashboard overview", description: "Admin operational dashboard for provider and platform management.", src: "/assets/images/projects/one-community-docker-compose/admin-dashboard-overview.jpg" },
      { title: "Grafana monitoring dashboard", description: "Monitoring dashboard for container and service metrics.", src: "/assets/images/projects/one-community-docker-compose/grafana-dashboard.jpg" },
      { title: "Docker containers running", description: "Production containers running through Docker Compose.", src: "/assets/images/projects/one-community-docker-compose/docker-containers-running.jpg" },
      { title: "Architecture diagram", description: "High-level architecture of the production deployment.", src: "/assets/images/projects/one-community-docker-compose/architecture-diagram.png" }
    ]
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
    summary: "Migration plan to move the production One Community deployment from Docker Compose to a full Kubernetes environment on Amazon EKS."
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
    summary: "A planned healthcare project focused on offline-first patient data capture, PostgreSQL synchronization, FHIR mapping, and later AI-assisted clinical querying."
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
    summary: "A future project to demonstrate event-driven and serverless deployment patterns using AWS managed services."
  }
];

export function getFeaturedProject() {
  return projects[0];
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

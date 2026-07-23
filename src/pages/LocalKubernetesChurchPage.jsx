import Container from "../components/common/Container";
import ProjectMenu from "../components/projects/ProjectMenu";

const assetBase = `${import.meta.env.BASE_URL}assets/images/projects/local-kubernetes-church-microservices/`;

const techStack = [
  "Kubernetes",
  "Docker / WSL",
  "React",
  "Fastify / TypeScript",
  "PostgreSQL",
  "GitHub Actions",
  "Amazon ECR",
  "Helm",
  "Argo CD",
  "Prometheus",
  "Grafana",
  "Fluent Bit",
  "OpenSearch",
];

const solutionItems = [
  "Containerized four services: frontend, auth-service, church-core-service, and document-service.",
  "Built a local Kubernetes test environment using Docker/WSL on a Windows workstation.",
  "Used GitHub Actions to build Docker images, push to Amazon ECR, and update GitOps image tags.",
  "Used Argo CD to reconcile the Kubernetes deployment from the platform repository.",
  "Added Prometheus/Grafana for metrics and Fluent Bit/OpenSearch for centralized logs.",
  "Kept the current PostgreSQL development/test database hosted externally on OVHcloud.",
];

const securityPractices = [
  "Private Amazon ECR repositories for service images.",
  "GitHub OIDC used for AWS authentication instead of long-lived AWS access keys.",
  "GitHub repository secret used for controlled GitOps repository updates.",
  "Kubernetes Secrets used for database URLs and JWT secrets in local testing.",
  "No database credentials committed to source control.",
  "Namespace separation: argocd, church-prod, monitoring, and logging.",
  "Local UI access through port-forward rather than public exposure.",
];

const productionHardening = [
  "Move the database to Amazon RDS with private subnets and security groups.",
  "Use AWS Secrets Manager or External Secrets Operator for runtime secrets.",
  "Add image scanning and policy checks before deployment.",
  "Restrict Kubernetes RBAC and service accounts per component.",
  "Add network policies between namespaces and services.",
  "Configure TLS, WAF, ACM, Route 53, and ALB for AWS EKS.",
  "Define log retention and access controls for OpenSearch.",
];

const improvements = [
  "Deploy the platform on AWS EKS using Terraform-managed VPC, EKS, IAM, IRSA, ACM, Route 53, WAF, ALB, S3, and RDS.",
  "Replace the current OVHcloud PostgreSQL dependency with private Amazon RDS PostgreSQL for the demo environment.",
  "Add document storage to S3 instead of storing uploaded file bytes in PostgreSQL.",
  "Add image vulnerability scanning and CI quality gates before pushing production tags.",
  "Implement Horizontal Pod Autoscaler and resource tuning based on Prometheus metrics.",
  "Add alert rules for service downtime, high error rate, high latency, pod restarts, and database failures.",
  "Build an AI-assisted monitoring feature: approved OpenSearch queries → incident summary → suggested remediation using an OpenAI-powered agent.",
];

function BulletList({ items, columns = false }) {
  return (
    <ul className={`mt-5 grid gap-3 ${columns ? "lg:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ImageCard({ src, title, caption, full = false }) {
  return (
    <figure className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 ${full ? "lg:col-span-2" : ""}`}>
      <div className="bg-slate-50">
        <img src={`${assetBase}${src}`} alt={title} loading="lazy" className="w-full object-contain" />
      </div>
      <figcaption className="border-t border-slate-200 bg-white px-5 py-4">
        <p className="text-sm font-black text-slate-950">{title}</p>
        {caption && <p className="mt-1 text-sm leading-6 text-slate-600">{caption}</p>}
      </figcaption>
    </figure>
  );
}

function Section({ eyebrow, title, children }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
      <div className="flex items-center gap-4">
        <div>
          {eyebrow && <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-700">{eyebrow}</p>}
          <h2 className="mt-2 text-2xl font-black text-slate-950">{title}</h2>
        </div>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      {children}
    </section>
  );
}

function LocalKubernetesChurchPage() {
  return (
    <section className="h-[calc(100vh-4rem)] overflow-hidden bg-slate-50">
      <div className="grid h-full w-full lg:grid-cols-[320px_minmax(0,1fr)]">
        <ProjectMenu activeSlug="local-kubernetes-church-microservices" />

        <main className="min-w-0 overflow-y-auto py-10 lg:py-12">
          <Container>
            <article>
              <header className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-slate-50 p-8 shadow-xl shadow-slate-200/70 sm:p-10">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-700">Completed local platform validation</p>
                <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Local Kubernetes Church Microservices Platform
                </h1>
                <p className="mt-5 max-w-5xl text-lg font-semibold leading-8 text-sky-900 sm:text-2xl">
                  A production-style DevOps platform for the Church Management System, validated locally with Kubernetes, GitHub Actions, Amazon ECR, Argo CD, Prometheus, Grafana, Fluent Bit, and OpenSearch before AWS EKS deployment.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {techStack.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </header>

              <section className="mt-8 grid gap-6 lg:grid-cols-3">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
                  <p className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-black text-white">Runtime</p>
                  <p className="mt-4 text-sm leading-6 text-slate-700">Local Kubernetes cluster on Docker/WSL with four application services.</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
                  <p className="rounded-xl bg-emerald-700 px-4 py-2 text-sm font-black text-white">Delivery</p>
                  <p className="mt-4 text-sm leading-6 text-slate-700">GitHub Actions builds images, pushes to ECR, and updates GitOps tags.</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
                  <p className="rounded-xl bg-violet-700 px-4 py-2 text-sm font-black text-white">Observability</p>
                  <p className="mt-4 text-sm leading-6 text-slate-700">Prometheus, Grafana, Fluent Bit, OpenSearch, and OpenSearch Dashboards.</p>
                </div>
              </section>

              <figure className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70">
                <img src={`${assetBase}01-local-test-infrastructure.png`} alt="Local Kubernetes test infrastructure diagram" className="w-full rounded-2xl object-contain" />
                <figcaption className="px-2 py-4 text-sm italic text-slate-600">Local test infrastructure diagram. Current database: OVHcloud PostgreSQL. Local app access: localhost / kubectl port-forward.</figcaption>
              </figure>

              <section className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-700">Project Title</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">Church Management System - DevOps Platform Foundation</h2>
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    The application is a multi-service church management system that requires repeatable deployment, image traceability, and operational visibility.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-700">Problem Solved</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">From single-server mindset to platform validation</h2>
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    Before this platform work, the main challenge was proving that the frontend and backend microservices could run consistently outside a single-server setup, with clear CI/CD, GitOps deployment, metrics, logs, and troubleshooting evidence.
                  </p>
                </div>
              </section>

              <Section eyebrow="Solution Summary" title="Local Kubernetes platform foundation">
                <BulletList items={solutionItems} columns />
              </Section>

              <section className="mt-8 rounded-[2rem] border border-amber-200 bg-amber-50 p-7 shadow-xl shadow-amber-100/60 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700">Note</p>
                <p className="mt-4 max-w-5xl text-base leading-8 text-slate-800">
                  Screenshots show nodes ready, namespaces active, pods running, Argo CD Synced/Healthy, GitHub Actions success, ECR repositories, Grafana metrics, and OpenSearch logs. This demonstrates practical Kubernetes, CI/CD, GitOps, observability, logging, cloud registry, and troubleshooting skills.
                </p>
              </section>

              <div className="mt-8 grid gap-6">
                <Section eyebrow="Architecture" title="System / Infrastructure Architecture">
                  <p className="mt-5 text-base leading-8 text-slate-700">Local Kubernetes runtime with cloud registry and external OVHcloud PostgreSQL database.</p>
                  <div className="mt-6 grid gap-6">
                    <ImageCard src="01-local-test-infrastructure.png" title="Figure 1 - Local Kubernetes test infrastructure" caption="GitHub Actions, ECR, Argo CD, app namespaces, monitoring, logging, and OVHcloud PostgreSQL." full />
                  </div>
                </Section>

                <Section eyebrow="Application Architecture" title="Application Architecture">
                  <p className="mt-5 text-base leading-8 text-slate-700">The system is organized around a React frontend and Fastify/TypeScript microservices with separate databases.</p>
                  <div className="mt-6 grid gap-6">
                    <ImageCard src="02-application-architecture.png" title="Figure 2 - Application architecture" caption="Frontend modules, backend services, PostgreSQL data stores, JWT auth, health checks, and metrics." full />
                  </div>
                </Section>

                <Section eyebrow="CI/CD Pipeline" title="CI/CD Pipeline">
                  <BulletList
                    items={[
                      "Source repo: church_app contains the frontend and backend microservice source code.",
                      "GitHub Actions builds all four service images as a matrix job.",
                      "Images are tagged with prod-<short-sha> and sha-<full-sha> for traceability.",
                      "Images are pushed to Amazon ECR private repositories.",
                      "After successful image builds, the workflow updates the platform GitOps values file in k8s-microservice-cms.",
                    ]}
                  />
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <ImageCard src="03-github-actions-workflow-success.png" title="GitHub Actions workflow success and image summary" />
                    <ImageCard src="04-ecr-private-repositories.png" title="Amazon ECR private repositories for application images" />
                  </div>
                  <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-5">
                    <h3 className="text-lg font-black text-slate-950">Pipeline result</h3>
                    <BulletList items={["Four images built and pushed successfully.", "GitOps update job completed successfully.", "New tag committed to values-image-tags.yaml."]} />
                  </div>
                </Section>

                <Section eyebrow="GitOps Deployment" title="GitOps Deployment with Argo CD">
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    The platform repository is the deployment source of truth. Argo CD watches the Helm chart and values files, then reconciles the local Kubernetes cluster to match Git. The local application is tracked as church-app-local and deploys into the church-prod namespace.
                  </p>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <ImageCard src="05-argocd-synced-healthy-cli.png" title="GitOps evidence" caption="kubectl reports church-app-local as Synced and Healthy." />
                    <ImageCard src="06-values-image-tags.png" title="Image tag state" caption="values-image-tags.yaml updated by GitHub Actions." />
                    <ImageCard src="07-argocd-ui-synced-healthy.png" title="Argo CD UI" caption="Argo CD UI showing church-app-local as Healthy and Synced." full />
                  </div>
                </Section>

                <Section eyebrow="Kubernetes Runtime" title="Local Kubernetes Runtime">
                  <BulletList
                    items={[
                      "Cluster: three local nodes are Ready in the Docker/WSL Kubernetes lab.",
                      "Namespaces separate application, GitOps, monitoring, logging, and other lab workloads.",
                      "church-prod hosts frontend, auth-service, church-core-service, and document-service.",
                      "Services are exposed internally as ClusterIP services and accessed locally by port-forward during testing.",
                    ]}
                  />
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <ImageCard src="08-kubernetes-nodes-ready.png" title="Local Kubernetes nodes ready" />
                    <ImageCard src="09-kubernetes-namespaces-active.png" title="Namespaces including argocd, church-prod, monitoring, and logging" />
                    <ImageCard src="10-church-prod-pods-running.png" title="church-prod pods running" />
                    <ImageCard src="11-church-prod-deployments.png" title="Deployments available in church-prod" />
                    <ImageCard src="12-church-prod-services.png" title="ClusterIP services for backend and frontend workloads" full />
                  </div>
                </Section>

                <Section eyebrow="Application Functionality" title="Application Functionality Evidence">
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    The application was tested through the browser while running in the local Kubernetes cluster. The screenshots show a working parish management UI and service health/target visibility.
                  </p>
                  <div className="mt-6 grid gap-6">
                    <ImageCard src="13-application-browser-ui.png" title="Church management application running in the browser via local access" full />
                    <ImageCard src="14-prometheus-targets.png" title="Prometheus target list showing application services being scraped" full />
                  </div>
                </Section>

                <Section eyebrow="Monitoring" title="Monitoring with Prometheus and Grafana">
                  <BulletList
                    items={[
                      "Fastify backend services expose /metrics using prom-client.",
                      "Prometheus scrapes auth-service, church-core-service, and document-service.",
                      "Grafana visualizes request rate, latency, application instances, memory, CPU, and restarts.",
                      "This provides operational visibility similar to a production Kubernetes environment.",
                    ]}
                  />
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <ImageCard src="15-grafana-request-rate-latency.png" title="Grafana: HTTP request rate and p95 latency" />
                    <ImageCard src="16-grafana-instances-memory.png" title="Grafana: application instances and memory RSS" />
                    <ImageCard src="17-grafana-cpu-rate.png" title="Grafana: process CPU rate" />
                    <ImageCard src="18-grafana-pod-restarts.png" title="Grafana: pod restart panel" />
                  </div>
                </Section>

                <Section eyebrow="Logging" title="Centralized Logging with Fluent Bit and OpenSearch">
                  <BulletList
                    items={[
                      "Fluent Bit runs as a DaemonSet and collects Kubernetes container logs.",
                      "Logs are shipped into OpenSearch indexes such as kubernetes-YYYY.MM.DD.",
                      "OpenSearch Dashboards provides searchable log analysis by time range, namespace, service, request route, and Pino log level.",
                      "This enabled filtering logs for church-prod and individual containers such as document-service.",
                    ]}
                  />
                  <div className="mt-6 grid gap-6">
                    <ImageCard src="19-opensearch-discover-logs.png" title="OpenSearch Discover filtered to church-prod and document-service logs" full />
                  </div>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
                      <h3 className="text-lg font-black text-violet-950">Useful log filters</h3>
                      <p className="mt-3 font-mono text-sm leading-7 text-slate-700">kubernetes.namespace_name:&quot;church-prod&quot;;<br />kubernetes.container_name:&quot;document-service&quot;; level:50 for errors.</p>
                    </div>
                    <div className="rounded-2xl border border-teal-100 bg-teal-50 p-5">
                      <h3 className="text-lg font-black text-teal-950">Operational value</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-700">Centralized logs reduce manual pod-by-pod troubleshooting and help isolate service failures quickly.</p>
                    </div>
                  </div>
                </Section>

                <Section eyebrow="Security Practices" title="Security Practices Demonstrated">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-black text-slate-950">Implemented / Demonstrated</h3>
                      <BulletList items={securityPractices} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-950">Planned Production Hardening</h3>
                      <BulletList items={productionHardening} />
                    </div>
                  </div>
                </Section>

                <Section eyebrow="Next Improvements" title="Next Improvements">
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    The local platform validates the deployment pattern. The next phase is to move the same pattern into AWS EKS and add production-grade security, scaling, storage, and reliability controls.
                  </p>
                  <BulletList items={improvements} />
                  <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white">
                    <h3 className="text-lg font-black">Portfolio positioning</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      This project demonstrates both application deployment and platform operations: containerization, CI/CD, GitOps, Kubernetes, cloud registry, observability, logging, and practical troubleshooting.
                    </p>
                  </div>
                </Section>

                <section className="rounded-[2rem] border border-sky-200 bg-sky-50 p-7 text-slate-950 shadow-xl shadow-slate-200/70 sm:p-9">
                  <h2 className="text-2xl font-black text-slate-950">Project Links</h2>
                  <div className="mt-6 rounded-2xl border border-sky-200 bg-white p-5">
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-700">Live Demo Access</p>
                    <a href="https://www.gestionparoissiale.org" target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-xl bg-sky-700 px-4 py-2 text-sm font-black text-white transition hover:bg-sky-800">
                      Open gestionparoissiale.org
                    </a>
                    <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
                      <p>Username: <span className="font-black text-slate-950">recruiter@gmail.com</span></p>
                      <p>Password: <span className="font-black text-slate-950">recruiter2026</span></p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="https://github.com/emmauopeople/church_app" target="_blank" rel="noreferrer" className="rounded-xl border border-sky-300 bg-white px-4 py-2 text-sm font-black text-blue-700 underline underline-offset-4 transition hover:bg-sky-100 hover:text-blue-900">
                      Application Repository
                    </a>
                    <a href="https://github.com/emmauopeople/k8s-microservice-cms" target="_blank" rel="noreferrer" className="rounded-xl border border-sky-300 bg-white px-4 py-2 text-sm font-black text-blue-700 underline underline-offset-4 transition hover:bg-sky-100 hover:text-blue-900">
                      Platform / GitOps Repository
                    </a>
                  </div>
                </section>
              </div>
            </article>
          </Container>
        </main>
      </div>
    </section>
  );
}

export default LocalKubernetesChurchPage;

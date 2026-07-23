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

const sections = [
  {
    title: "Architecture",
    body: "The local validation environment runs the church microservices in a three-node Kubernetes lab on Docker/WSL while keeping the current development PostgreSQL databases on OVHcloud. The platform separates GitOps, application workloads, monitoring, and logging into dedicated namespaces.",
    bullets: [
      "Local Kubernetes cluster hosts frontend, auth-service, church-core-service, and document-service in the church-prod namespace.",
      "Amazon ECR stores versioned container images built by GitHub Actions.",
      "Argo CD watches the platform repository and reconciles the Helm deployment from Git.",
      "Prometheus, Grafana, Fluent Bit, OpenSearch, and OpenSearch Dashboards provide runtime visibility.",
    ],
  },
  {
    title: "CI/CD Pipeline",
    body: "GitHub Actions builds all four services as a matrix workflow, tags images with prod-<short-sha> and sha-<full-sha>, pushes them to Amazon ECR, and updates the GitOps image tag file in the platform repository.",
    bullets: [
      "Source repository: church_app contains frontend and backend microservice source code.",
      "Workflow builds frontend, auth-service, church-core-service, and document-service images.",
      "Images are pushed to private Amazon ECR repositories for traceable deployment.",
      "After successful builds, the workflow commits the new image tag to values-image-tags.yaml.",
    ],
  },
  {
    title: "GitOps Deployment",
    body: "The platform repository is the deployment source of truth. Argo CD watches the Helm chart and values files, then reconciles the local Kubernetes cluster to match the declared state in Git.",
    bullets: [
      "Argo CD application: church-app-local.",
      "Target namespace: church-prod.",
      "Sync status: Synced.",
      "Health status: Healthy.",
      "Image tags are managed through Git instead of manual kubectl changes.",
    ],
  },
  {
    title: "Kubernetes Runtime Evidence",
    body: "The local cluster validates the core Kubernetes runtime model before moving to AWS EKS. Workloads are separated into namespaces and application services are exposed internally with ClusterIP services for local testing through port-forward.",
    bullets: [
      "Three local Kubernetes nodes are Ready.",
      "Namespaces include argocd, church-prod, monitoring, and logging.",
      "Application pods are running in church-prod.",
      "Deployments are available and services are reachable through ClusterIP.",
    ],
  },
  {
    title: "Monitoring and Logging",
    body: "Prometheus and Grafana provide metrics visibility, while Fluent Bit and OpenSearch provide centralized searchable logs. Together they create an operations workflow similar to a production Kubernetes environment.",
    bullets: [
      "Fastify backend services expose /metrics using prom-client.",
      "Grafana visualizes request rate, p95 latency, application instances, memory, CPU, and pod restarts.",
      "Fluent Bit collects Kubernetes container logs as a DaemonSet.",
      "OpenSearch Dashboards supports log search by time range, namespace, container, route, and Pino log level.",
    ],
  },
];

const securityPractices = [
  "Private Amazon ECR repositories for service images.",
  "GitHub OIDC used for AWS authentication instead of long-lived AWS access keys.",
  "GitHub repository secret used for controlled GitOps repository updates.",
  "Kubernetes Secrets used for database URLs and JWT secrets in local testing.",
  "No database credentials committed to source control.",
  "Namespace separation for argocd, church-prod, monitoring, and logging.",
  "Local UI access through port-forward rather than public exposure.",
];

const lessons = [
  "Connected application CI/CD to GitOps so image builds update Kubernetes deployment state through Git.",
  "Used Argo CD to detect Git changes and reconcile workloads to declared Helm values.",
  "Used ECR with Kubernetes imagePullSecrets in a local test cluster.",
  "Built Grafana dashboards for request rate, latency, memory, CPU, pod instances, and restarts.",
  "Used Fluent Bit, OpenSearch, and OpenSearch Dashboards for centralized Kubernetes logging.",
  "Troubleshot ImagePullBackOff, Argo CD CRD apply errors, DNS/service resolution issues, and wrong kubectl context.",
];

const improvements = [
  "Deploy the same platform on AWS EKS using Terraform-managed VPC, EKS, IAM, IRSA, ACM, Route 53, WAF, ALB, S3, and RDS.",
  "Replace the current OVHcloud PostgreSQL dependency with private Amazon RDS PostgreSQL for the demo environment.",
  "Move document storage to Amazon S3 instead of storing uploaded file bytes in PostgreSQL.",
  "Add image vulnerability scanning and CI quality gates before pushing production tags.",
  "Implement Horizontal Pod Autoscaler and resource tuning based on Prometheus metrics.",
  "Add alert rules for service downtime, high error rate, high latency, pod restarts, and database failures.",
  "Build a future AI-assisted monitoring feature using approved OpenSearch queries, incident summaries, and OpenAI-powered remediation suggestions.",
];

function BulletList({ items }) {
  return (
    <ul className="mt-5 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EvidenceSection({ section }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <p className="mt-5 text-base leading-8 text-slate-700">{section.body}</p>
      <BulletList items={section.bullets} />
    </section>
  );
}

function InfoGrid({ title, items }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black text-slate-950">{title}</h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <BulletList items={items} />
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

              <section className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-700">Problem solved</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">From application code to operational platform</h2>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    The church management system is made of multiple frontend and backend services that need repeatable deployment, traceable container images, runtime visibility, and reliable troubleshooting before moving to AWS EKS.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-700">Solution summary</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">Local Kubernetes platform foundation</h2>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    I containerized four services, deployed them to a local Kubernetes cluster, connected CI/CD to GitOps image updates, and added monitoring and centralized logging. The current PostgreSQL development/test database remains hosted on OVHcloud.
                  </p>
                </div>
              </section>

              <section className="mt-8 rounded-[2rem] border border-amber-200 bg-amber-50 p-7 shadow-xl shadow-amber-100/60 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700">Note</p>
                <p className="mt-4 max-w-5xl text-base leading-8 text-slate-800">
                  Screenshots show nodes ready, namespaces active, pods running, Argo CD Synced/Healthy, GitHub Actions success, ECR repositories, Grafana metrics, and OpenSearch logs. This demonstrates practical Kubernetes, CI/CD, GitOps, observability, logging, cloud registry, and troubleshooting skills.
                </p>
              </section>

              <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-black text-slate-950">Screenshots</h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  Actual screenshot evidence extracted from the validation document: Kubernetes runtime, GitOps, CI/CD, ECR, application UI, Grafana metrics, and OpenSearch logs.
                </p>
                <figure className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                  <img
                    src={`${assetBase}actual-screenshot-evidence.svg`}
                    alt="Actual screenshot evidence for the local Kubernetes church microservices project"
                    className="w-full object-contain"
                  />
                  <figcaption className="border-t border-slate-200 bg-white px-5 py-4 text-sm leading-6 text-slate-600">
                    Actual screenshots from the local Kubernetes validation run.
                  </figcaption>
                </figure>
              </section>

              <div className="mt-8 grid gap-6">
                {sections.map((section) => (
                  <EvidenceSection key={section.title} section={section} />
                ))}

                <InfoGrid title="Security Practices" items={securityPractices} />
                <InfoGrid title="What I Learned" items={lessons} />
                <InfoGrid title="Next Improvements" items={improvements} />

                <section className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-xl shadow-slate-200/70 sm:p-9">
                  <h2 className="text-2xl font-black">Portfolio Positioning</h2>
                  <p className="mt-4 max-w-4xl text-base leading-8 text-slate-200">
                    This project demonstrates both application deployment and platform operations: containerization, CI/CD, GitOps, Kubernetes, cloud registry, observability, logging, and practical troubleshooting. It is ready to present as a DevOps, cloud, Kubernetes, platform engineering, or Health IT infrastructure portfolio project.
                  </p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-200">Live Demo Access</p>
                    <a href="https://www.gestionparoissiale.org" target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-xl bg-sky-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-sky-200">
                      Open gestionparoissiale.org
                    </a>
                    <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-200 sm:grid-cols-2">
                      <p>Username: <span className="font-black text-white">recruiter@gmail.com</span></p>
                      <p>Password: <span className="font-black text-white">recruiter2026</span></p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="https://github.com/emmauopeople/church_app" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-sky-100">
                      Application Repository
                    </a>
                    <a href="https://github.com/emmauopeople/k8s-microservice-cms" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-sky-100">
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

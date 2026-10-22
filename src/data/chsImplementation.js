const web = "https://github.com/emmauopeople/CHS-web";
const desktop = "https://github.com/emmauopeople/health-screening-desktop";
const webSnapshot = `${web}/tree/547374409d1cbd9e7fa745a55d1ae93668c39e6b`;
const webFiles = webSnapshot.replace("/tree/", "/blob/");
const desktopFiles = `${desktop}/blob/fe4e6c7cf8096c0b574673bc86b8a0f30b67c350`;
const desktopSnapshot = `${desktop}/tree/fe4e6c7cf8096c0b574673bc86b8a0f30b67c350`;

const screenshot = (file, title, description, layout = "full") => ({
  title,
  description: `${description} Captured October 22, 2026 from the documented release using synthetic browser fixtures and intercepted API responses; this is UI evidence, not a live patient record or an independent backend acceptance result.`,
  src: `/assets/images/projects/chs-offline-desktop-web-fhir/${file}.jpg`,
  layout,
  fullSizeLink: true
});

export const chsImplementation = {
  slug: "chs-offline-desktop-web-fhir",
  name: "CHS — Offline Desktop, Central Operations and Private FHIR",
  shortName: "CHS Desktop, Web & FHIR",
  status: "PC pilot deployed / desktop release gate open",
  category: "Health IT / DevOps Implementation Case Study",
  timeframe: "Implementation evidence: October 20, 2026 · documented October 22, 2026",
  stack: ["Electron", "React", "TypeScript", "SQLite", "Fastify", "PostgreSQL", "Docker Compose", "Keycloak", "Cloudflare Tunnel", "HAPI FHIR R4", "GitHub Actions"],
  focus: ["Offline capture", "Replay-safe synchronization", "Private infrastructure", "Scoped authorization", "FHIR publication", "Release verification"],
  summary: "An implemented offline screening desktop and central web pilot: authenticated synchronization, operational PostgreSQL, scoped portal administration, provider sharing, and private FHIR R4 publication. Documents delivered capabilities and automated evidence separately from the unfinished Windows installer and physical two-PC acceptance.",
  problem: "Field screening needs to continue when connectivity is unavailable, preserve locally authored records across restarts, and later deliver them to a central service without duplicating accepted work. Central reviewers also need controlled identity reconciliation, access administration and a standards-based representation that does not make successful synchronization depend on FHIR availability.",
  solution: "The desktop captures and queues work in local SQLite. A central API accepts authenticated bounded batches into authoritative PostgreSQL and returns durable per-record outcomes. CHS-web provides scoped operational workflows. A separate worker projects accepted data into a private PostgreSQL-backed HAPI FHIR R4 server. Keycloak handles portal authentication; CHS grants determine authorization. This case study describes the October 20 implementation snapshot, rather than claiming the original doctor/AI roadmap is complete.",
  objectives: [
    "Support offline screening and deliberate, recoverable synchronization when connectivity returns.",
    "Keep operational data, identity authorization and derived FHIR storage in separate services and volumes.",
    "Make deployment, credential lifecycle, recovery and release gates reviewable through source and test evidence.",
    "Preserve the earlier [Health Screening planning case study](https://mbimunyui.shop/projects/health-screening-application-planning) as design history; use this implementation record for delivered scope."
  ],
  functionalScope: [
    "Desktop: patient registration/search, screening encounters and vitals, Lifestyle/Food/OTC capture, referrals and follow-up, local audit and synchronization workflows. Enrollment displays/copies the installation UUID; each PC has its own server registration and credential.",
    "Desktop central history: merged read-only central history, offline cache and restart recovery. Downloaded history is kept separate from authored clinical data and must not generate new outbox work. See [central-history PR #55](https://github.com/emmauopeople/health-screening-desktop/pull/55).",
    "CHS-web: canonical patient review, Medical ID recovery, duplicate-risk identity review/resolution, sync monitoring, desktop enrollment/token rotation/revocation, and staff/admin/super-admin account administration.",
    "Provider access: authenticated hospital requests, super-admin approval, organization scopes, expiring patient-specific sharing grants and confidential OAuth client credential lifecycle. Approval alone does not authorize every patient.",
    "FHIR viewer: POST searches by name and/or recorded birth date, mapped resource-type filtering, actual Patient/Encounter and related JSON, references and generation-bound pagination. A FHIR_VIEWER account receives only organization-scoped FHIR_READ; other operational APIs remain denied.",
    "Release boundary: desktop source is at the 1.0.2 pilot candidate. The last packaging attempt did not produce a ready new installer because Windows Application Control blocked the mandatory packaged SQLite check. An older installer is not evidence of this candidate."
  ],
  architecture: [
    "A Windows PC hosts the CHS Docker Compose pilot alongside the separate One Community project. CHS uses its own services, networks and volumes; this is a single-host pilot, not a high-availability cloud deployment.",
    "A dedicated outbound Cloudflare Tunnel routes chsweb.servicecam.org to the web gateway, api-chs.servicecam.org to the API and auth-chs.servicecam.org to Keycloak. No public FHIR hostname or database endpoint is provided.",
    "The operational API is a modular monolith. Portal users authenticate through OIDC/PKCE; live database grants enforce permission and organization scope. Desktop installation bearer credentials and provider OAuth clients use distinct access paths.",
    "Operational PostgreSQL is authoritative. Keycloak uses its own PostgreSQL database. HAPI uses another PostgreSQL database and volume for derived resources. The publication worker reaches the operational database and private FHIR service.",
    "Compose health checks, memory limits and digest-pinned service images constrain the pilot. Coexistence on one machine shares host failure and resource risks; it does not establish capacity under production traffic."
  ],
  dataFlow: [
    "1. Desktop records authored work and pending synchronization locally, allowing the field workflow to continue offline.",
    "2. A registered installation submits a bounded batch to the central API using its individual credential.",
    "3. The API validates contracts, resolves dependencies and persists canonical records plus durable outcomes. An exact replay recovers the original stored response instead of duplicating accepted work.",
    "4. Patient identity decisions and CHS Medical ID acknowledgments return through controlled sync workflows; central history can be retrieved and cached read-only on the desktop.",
    "5. Database triggers enqueue affected patients in the source transaction. They make no remote network call. The worker publishes deterministic resource IDs and records generation/hash metadata after successful FHIR transactions.",
    "6. Authorized portal/provider requests read scoped history or published FHIR resources. Grant checks, expiry/revocation and patient-sharing rules remain enforced by the API."
  ],
  dataArchitecture: [
    "The web snapshot has 21 immutable migrations and 67 canonical tables. These are schema counts at the documented commit, not patient-volume or performance claims.",
    "The desktop uses better-sqlite3 behind the Electron main process. The Windows packaging hook must load the packaged native module and complete an in-memory read/write/integrity probe before installer creation.",
    "The FHIR queue tracks source and published generations, leases, outcomes and retry timing. The resource registry stores stable identity references and content hashes rather than raw clinical JSON; the FHIR database stores the derived resources themselves.",
    "Patient-specific worker locking, repeatable source snapshots, generation checks and deterministic transaction PUTs handle concurrent source changes and replay after uncertain network outcomes. Failed publication leaves accepted operational records intact."
  ],
  fhirInteroperability: [
    "Patient identity → Patient; organizations and screening locations → Organization and Location; screening encounters and source attribution → Encounter and Provenance.",
    "Blood pressure, pulse and weight → Observations with source-supported codes/units. Waist uses a local code because the source does not establish the measurement method/site required by a more specific LOINC code.",
    "Lifestyle, Food and OTC snapshots → typed QuestionnaireResponse resources; referrals → ServiceRequest and Task; follow-up/addenda → Communication; review flags → Flag.",
    "Approximate age remains an age/as-of extension rather than an invented birth date. Reported medication use is not converted into a prescription, and referral text is not promoted into a diagnosis.",
    "The private HAPI R4 server validates requests. Synthetic acceptance exercises transaction publication and resource validation against an actual server, including outage recovery, resource references, concurrent updates and lease recovery.",
    "Base R4 mapping is delivered. Hospital/national implementation guides, SMART-on-FHIR launch, document ingestion and AI clinical analysis remain outside this snapshot. The FHIR viewer is a read-only demonstration interface, not an arbitrary public FHIR proxy."
  ],
  security: [
    "Keycloak provides sign-in; CHS permission grants provide authorization. Admins manage staff in scope; super admins also manage admins and provider approval. FHIR-only role restrictions are enforced in the API as well as the navigation.",
    "Desktop credentials are individual to installations and support rotation/revocation. Provider secrets are displayed once and are not persisted as plaintext in operational audit metadata; reads recheck live access.",
    "Patient sharing requires explicit organization scope, patient grant, authorization basis and expiry. Provider access cannot be inferred from possession of a valid signed token alone.",
    "Secrets are excluded from source control. Linux secret ownership must match the non-root HAPI process while retaining restrictive file permissions; widening read permissions is not the documented fix.",
    "Audited POST requests keep search names and birth dates out of URLs. Responses use no-store headers, clinical request bodies/tokens are redacted from logs, and FHIR viewer data clears when the tab is hidden.",
    "This public case study contains no login credentials, tunnel tokens, patient records, database dumps or internal policy identifiers. Portal links lead to authenticated services; they are not unrestricted recruiter demos."
  ],
  implementation: [
    "Desktop engineering evidence: [candidate source snapshot](" + desktopSnapshot + "), [read-only central history PR #55](https://github.com/emmauopeople/health-screening-desktop/pull/55), and [candidate acceptance record](" + desktopFiles + "/docs/operations/pilot-1.0.2.md).",
    "Web delivery evidence: [deployment/enrollment PR #67](https://github.com/emmauopeople/CHS-web/pull/67), [account administration PR #68](https://github.com/emmauopeople/CHS-web/pull/68), [provider/private FHIR PR #69](https://github.com/emmauopeople/CHS-web/pull/69), and [restricted FHIR viewer PR #70](https://github.com/emmauopeople/CHS-web/pull/70).",
    "The [web source snapshot](" + webSnapshot + ") pins the implementation described here. Counts below are recorded acceptance results from October 20, 2026; they are not newly executed tests on the documentation date."
  ],
  deployment: [
    "Generate private deployment configuration and secrets idempotently, configure the three HTTPS hostnames/tunnel routes and keep the token outside Git. Reuse existing volumes rather than recreating application data.",
    "Back up operational, identity and FHIR databases before migrations or identity changes. Build images first, apply immutable migrations, bootstrap private identity administration clients, then recreate the changed API/gateway/worker services with health checks.",
    "The optional compose.fhir.deploy.yaml overlay adds the private FHIR database, HAPI service and publication worker to the CHS deployment. It does not expose a raw FHIR listener publicly.",
    "Check public portal/API/OIDC readiness, exact-origin CORS, installation authentication and denied anonymous provider/FHIR POST reads. Inspect grouped publication states and errors without printing clinical payloads.",
    "Rollback is a controlled release operation: retain the previous image and backups, check schema compatibility before selecting an older API, and rehearse destructive restore only in an isolated target. Never delete production volumes or reset desktop outboxes to fix a publication problem.",
    "OVHcloud migration is planned. Region/data residency, encrypted backup strategy, recovery objectives, alert ownership, staging/load targets and cutover validation must be agreed before presenting it as a deployed cloud environment."
  ],
  monitoring: [
    "Implemented API signals include liveness/startup/readiness, version metadata, bounded Prometheus-compatible metrics and structured redacted logs. These endpoints do not imply a deployed Prometheus/Grafana monitoring stack for CHS.",
    "Operational portal views provide sync monitoring, identity review and FHIR publication counts/failures. Queue retry state survives worker restarts and FHIR unavailability.",
    "CI exercises synchronization incident recovery, PostgreSQL backup/restore rehearsal, bounded API load profiles, browser workflows and a fresh private HAPI server. A successful rehearsal does not establish an approved production RPO/RTO or tested off-host backup schedule."
  ],
  results: [
    "October 20 recorded web validation: 133 database integration tests, 17 synthetic history/provider/real-FHIR acceptance tests and 13 Chromium workflows passed, alongside unit, type, documentation and security checks. Some specialized tests overlap the broader integration suite; these counts should not be added together.",
    "Desktop pnpm verify passed formatting, lint, both TypeScript projects and 2,175 tests for the 1.0.2 candidate. Installer creation remained blocked at the required packaged runtime check.",
    "The PC pilot's portal/API/authentication routing and private FHIR publication were verified at delivery. These are dated deployment observations, not an uptime promise for the current day.",
    "User-reported laptop synchronization succeeded. Automated multi-installation coverage passed, but formal physical two-PC acceptance with the new installer remains unexecuted; the user report does not close that gate.",
    "Recruiters can inspect source, merged PRs, architecture and acceptance procedures without receiving health data or production credentials. Screenshot galleries use synthetic local browser fixtures; they do not establish live authentication, backend correctness or packaged Windows execution."
  ],
  immediateNextSteps: [
    "Make administrator approval effective under the enforced Windows signing/application-control policy, rerun the mandatory probe on the preserved candidate and complete NSIS packaging. Record the final installer hash and source revision.",
    "Complete physical two-PC acceptance using synthetic patients: offline capture, restart durability, reconnect/sync, acknowledgments, central history/cache, late follow-up, replay, credential revocation, native dialogs and data-preserving upgrade.",
    "Revalidate representative staging capacity and recovery before OVH migration; establish cloud infrastructure, off-host encrypted backups and monitoring/alert ownership.",
    "Treat doctor document workflows, partner-specific interoperability profiles and AI assistance as future milestones with their own governance and acceptance gates."
  ],
  troubleshooting: "Two practical lessons emerged. A desktop that had already synchronized to a different local CHS server could carry dependency state that the new server did not possess; investigation had to distinguish installation/server history before choosing a recovery procedure, without deleting its data. Separately, the Windows 1.0.2 build passed source checks but failed the mandatory packaged SQLite probe because the operating system enforced an application-control/signing policy. Reported administrator approval did not make the preserved binary executable. Packaging remained stopped; disabling the guard or distributing an older installer would have produced misleading release evidence.",
  lessons: [
    "An offline-to-central system needs explicit identity, dependency, replay and credential boundaries; a successful HTTP response alone is not sufficient sync evidence.",
    "Keep interoperability publication asynchronous so an unavailable derived store cannot undo accepted operational work.",
    "A hidden navigation item is not authorization. Test the forbidden API calls using the restricted role, including accidentally assigned operational grants.",
    "Source tests, packaged native-runtime checks, device acceptance and production operations prove different things. Report each gate independently.",
    "Pilot service isolation supports coexistence, but shared hardware and single-host availability still need deliberate operational ownership."
  ],
  sectionImages: {
    functionalScope: [
      screenshot("patient-timeline", "Synthetic patient review and identity assurance", "The central patient viewer shows a fictional patient, canonical identifier and identity-review notice."),
      screenshot("screening-history", "Synthetic screening history and recorded vitals", "The same fixture demonstrates the screening-history view, recorded vitals and source context.")
    ],
    dataFlow: [
      screenshot("desktop-enrollment", "Web enrollment for another desktop installation", "The CHS-web form associates a sample installation UUID with its central location. Capture occurs before credential generation; no token is visible. This is the web administration screen, not the native desktop application.")
    ],
    security: [
      screenshot("accounts-permissions", "Organization-scoped account administration", "A super-admin workflow selects a sample admin role and organization before account creation. No temporary password or real account credential is shown.")
    ],
    fhirInteroperability: [
      screenshot("fhir-patient", "FHIR-only workspace: synthetic Patient resource", "The implemented viewer displays a synthetic Patient resource with name and birth-date search fields and a mapped resource list."),
      screenshot("fhir-encounter", "Synthetic Encounter mapping and POST request", "The Encounter example shows its Patient reference, resource-type selection and POST JSON request body without an authorization token."),
      screenshot("fhir-mobile", "FHIR viewer on a narrow screen", "The same synthetic Encounter and POST example are shown at a mobile viewport width.", "phone")
    ],
    architecture: [{
      title: "CHS PC pilot architecture",
      description: "Implemented service boundaries at the October 20 snapshot. Arrows show application traffic and publication; they do not represent public database access. OVHcloud is a future hosting move.",
      src: "/assets/images/projects/chs-offline-desktop-web-fhir/architecture.svg",
      layout: "full"
    }]
  },
  links: {
    "Desktop source snapshot": desktopSnapshot,
    "Web source snapshot": webSnapshot,
    "CHS-web portal (authentication required)": "https://chsweb.servicecam.org",
    "FHIR implementation and operations": `${webFiles}/docs/fhir/publication.md`,
    "Combined acceptance procedure": `${webFiles}/docs/sync/HSW-019F-pilot-acceptance.md`,
    "Provider access and sharing": `${webFiles}/docs/administration/provider-access.md`
  }
};

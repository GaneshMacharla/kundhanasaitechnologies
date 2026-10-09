export interface ServiceChallenge {
  title: string;
  description: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  technologies: string[];
}

export interface ServiceUseCase {
  title: string;
  industry: string;
  summary: string;
  solutionArchitecture: string;
  impactMetrics: string;
}

export interface ServiceDeliveryStep {
  step: string;
  phase: string;
  deliverables: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface EnterpriseService {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  tagline: string;
  iconName: string;
  badge: string;
  summary: string;
  overview: string;
  businessChallenges: ServiceChallenge[];
  capabilities: ServiceCapability[];
  technologies: string[];
  useCases: ServiceUseCase[];
  deliveryPhases: ServiceDeliveryStep[];
  faqs: ServiceFaq[];
}

export const ENTERPRISE_SERVICES: EnterpriseService[] = [
  {
    id: 'genai-agentic',
    slug: 'generative-ai-agentic-development',
    title: 'Generative AI & Agentic AI Development',
    shortTitle: 'Generative & Agentic AI',
    headline: 'Engineering Autonomous Intelligence & Enterprise Knowledge Orchestration',
    tagline: 'Unlock cognitive workflow automation, domain-specific RAG engines, and secure multi-agent systems designed for enterprise scale.',
    iconName: 'Sparkles',
    badge: 'Flagship Practice',
    summary: 'We build autonomous agentic workflows, retrieval-augmented generation (RAG) platforms, and custom LLM solutions tailored for mission-critical enterprise environments.',
    overview: 'Our Generative AI & Agentic AI practice empowers enterprises to move beyond simple chat interfaces to production-grade cognitive systems. We design deterministic guardrails, multi-agent coordination protocols, and private retrieval engines that synthesize complex corporate data into actionable intelligence while preserving absolute data sovereignty.',
    businessChallenges: [
      {
        title: 'Information Trapped in Siloed Documents',
        description: 'Crucial organizational knowledge remains buried in disparate PDFs, contracts, legacy wikis, and ERP notes, making rapid decision-making impossible.'
      },
      {
        title: 'High Latency in Knowledge-Intensive Operations',
        description: 'Customer support, regulatory compliance, and audit reviews consume thousands of manual hours with inconsistent quality and high error risk.'
      },
      {
        title: 'Data Privacy & Enterprise IP Exposure',
        description: 'Unregulated use of public commercial AI APIs exposes sensitive intellectual property and violates sector compliance mandates like GDPR or HIPAA.'
      },
      {
        title: 'Hallucination & Lack of Auditability',
        description: 'Unanchored foundation models hallucinate answers, eroding user trust and creating unacceptable legal and operational risks.'
      }
    ],
    capabilities: [
      {
        title: 'Enterprise Retrieval-Augmented Generation (RAG)',
        description: 'Design and deployment of hybrid semantic search, re-ranking pipelines, dense vector stores, and contextual chunking architectures connected to private enterprise knowledge bases.',
        technologies: ['LangGraph', 'LlamaIndex', 'Pinecone', 'Milvus', 'Azure AI Search']
      },
      {
        title: 'Autonomous Multi-Agent Orchestration',
        description: 'Engineering multi-agent systems using Model Context Protocol (MCP) and state-machine frameworks to automate complex, multi-step business procedures with human-in-the-loop safeguards.',
        technologies: ['CrewAI', 'LangGraph', 'AutoGPT', 'Python', 'FastAPI']
      },
      {
        title: 'Private LLM Deployment & Parameter Optimization',
        description: 'Self-hosted open-weights models and specialized fine-tuning for proprietary domain terminology, minimizing cloud inference expenses and guaranteeing 100% data residency.',
        technologies: ['vLLM', 'Hugging Face', 'Ollama', 'LoRA / QLoRA', 'NVIDIA Triton']
      },
      {
        title: 'AI Security, Governance & PII Redaction',
        description: 'Zero-trust guardrail layers that inspect prompts, filter PII, prevent prompt injections, enforce role-based access control, and log all model interactions for audit trails.',
        technologies: ['NeMo Guardrails', 'Presidio', 'Llama Guard', 'Azure OpenVINO']
      }
    ],
    technologies: [
      'Generative AI',
      'Agentic AI',
      'Python',
      'LangGraph',
      'LlamaIndex',
      'OpenAI',
      'Anthropic Claude',
      'Pinecone',
      'Vector DBs',
      'FastAPI'
    ],
    useCases: [
      {
        title: 'Regulatory & Compliance Intelligence Assistant',
        industry: 'Banking & Financial Services',
        summary: 'Representative architecture: Indexing tens of thousands of dynamic financial regulations, cross-referencing internal risk policies, and providing verified, citation-backed answers in seconds.',
        solutionArchitecture: 'Hybrid vector-lexical RAG with contextual document re-ranking, automated policy ingestion via Apache Tika, and strict role-based access control.',
        impactMetrics: 'Illustrative impact: 85% reduction in compliance research cycle time with 100% audit-traceable references.'
      },
      {
        title: 'Autonomous IT Service Operations Multi-Agent Swarm',
        industry: 'Enterprise IT & Operations',
        summary: 'Representative architecture: Collaborative agents that analyze incoming infrastructure alerts, triage root causes against runbooks, and propose remediations for human approval.',
        solutionArchitecture: 'LangGraph multi-agent coordination with specialized diagnostic, documentation, and remediation verification roles.',
        impactMetrics: 'Illustrative impact: Dramatically accelerated mean time to detect (MTTD) and streamlined incident response workflows.'
      },
      {
        title: 'Automated Complex Contract & RFQ Analysis',
        industry: 'Manufacturing & Legal Operations',
        summary: 'Representative architecture: Automated extraction and comparative clause analysis across hundreds of vendor proposals, highlighting deviations from standard procurement covenants.',
        solutionArchitecture: 'Structured JSON schema extraction using fine-tuned LLMs with deterministic validation checks and discrepancy heat-maps.',
        impactMetrics: 'Illustrative impact: Decreases contract review turnaround from 14 days to under 48 hours.'
      }
    ],
    deliveryPhases: [
      {
        step: '01',
        phase: 'AI Readiness & Discovery',
        deliverables: 'Use-case prioritization, data inventory audit, privacy risk evaluation, and technical feasibility blueprint.'
      },
      {
        step: '02',
        phase: 'Architecture & Guardrail Blueprint',
        deliverables: 'Model selection, vector database schema, retrieval pipeline design, and enterprise security guardrails.'
      },
      {
        step: '03',
        phase: 'Iterative Engineering & Benchmarking',
        deliverables: 'Agent state graph implementation, RAG benchmarking (RAGAS evaluation), and latency optimization.'
      },
      {
        step: '04',
        phase: 'Production Deployment & Observability',
        deliverables: 'Zero-trust cloud/on-prem containerized deployment, token usage telemetry, and model drift monitoring.'
      }
    ],
    faqs: [
      {
        question: 'How do you prevent proprietary enterprise data from leaking into public AI models?',
        answer: 'We utilize isolated cloud VPC tenancies with zero-data-retention enterprise agreements, or deploy self-hosted open-weights models (such as Llama 3 or Mistral) completely within your secure private infrastructure. Your data is never used to train public models.'
      },
      {
        question: 'What is the operational difference between traditional chatbots and Agentic AI systems?',
        answer: 'Traditional chatbots simply respond to user text with pre-canned answers or static search summaries. Agentic AI systems can autonomously plan multi-step workflows, query multiple enterprise databases, call internal APIs, evaluate their own intermediate steps, and perform transactions with human oversight.'
      },
      {
        question: 'How do you benchmark and validate accuracy in Generative AI systems?',
        answer: 'We implement rigorous evaluation frameworks like RAGAS and TruLens, testing for faithfulness, answer relevance, context recall, and hallucination rates against curated golden test datasets prior to deployment.'
      }
    ]
  },
  {
    id: 'data-engineering',
    slug: 'data-engineering-cloud-solutions',
    title: 'Data Engineering & Cloud Data Solutions',
    shortTitle: 'Data Engineering & Cloud',
    headline: 'Modernizing Data Architecture with Resilient Lakehouses & High-Throughput Pipelines',
    tagline: 'Transform disconnected data into an agile, governed enterprise asset through modern data lakes, Snowflake, and streaming pipelines.',
    iconName: 'Database',
    badge: 'Enterprise Core',
    summary: 'We architect and build modern cloud data platforms, high-speed streaming pipelines, and governed data lakehouses that power executive reporting and machine learning.',
    overview: 'In the modern enterprise, data velocity and integrity dictate competitive advantage. Our Data Engineering practice modernizes brittle legacy ETL systems into resilient, automated data fabrics. Leveraging Snowflake, Databricks, Azure Data Factory, and PySpark, we design Medallion architectures that guarantee clean, governed data for analytics and AI.',
    businessChallenges: [
      {
        title: 'Fragmented Silos & Delayed Data Freshness',
        description: 'Business leaders struggle with reports reflecting yesterday or last week data because legacy overnight batch pipelines take too long to complete.'
      },
      {
        title: 'Escalating Cloud Compute & Storage Costs',
        description: 'Unoptimized queries, unpartitioned cloud tables, and redundant warehouse clusters result in unpredictable monthly billing spikes.'
      },
      {
        title: 'Brittle Pipelines & Frequent Data Breakages',
        description: 'Schema changes in source systems break downstream analytics jobs without alerts, resulting in erroneous executive dashboards.'
      },
      {
        title: 'Inadequate Data Quality & Compliance Governance',
        description: 'Lack of end-to-end data lineage makes it difficult to satisfy data privacy compliance (GDPR, DPDP) or trace metric discrepancies.'
      }
    ],
    capabilities: [
      {
        title: 'Modern Lakehouse & Warehouse Implementation',
        description: 'Architecting high-performance cloud warehouses and lakehouses using Snowflake, Databricks, and Azure Synapse with optimized storage tiering.',
        technologies: ['Snowflake', 'Databricks', 'Delta Lake', 'Apache Iceberg', 'Azure Synapse']
      },
      {
        title: 'Real-Time Streaming & Event-Driven Ingestion',
        description: 'High-throughput event streaming architectures capturing real-time telemetry, transaction feeds, and change data capture (CDC) from operational systems.',
        technologies: ['Apache Kafka', 'Spark Streaming', 'Azure Event Hubs', 'AWS Kinesis']
      },
      {
        title: 'Enterprise ETL/ELT Modernization with Talend & dbt',
        description: 'Migration of legacy monolithic ETL routines into modular, version-controlled transformations utilizing dbt and enterprise Talend Cloud orchestration.',
        technologies: ['Talend Cloud', 'dbt Core/Cloud', 'Apache Airflow', 'Azure Data Factory']
      },
      {
        title: 'Medallion Architecture & Data Governance',
        description: 'Structuring clean Bronze (raw), Silver (cleansed/joined), and Gold (business aggregates) data layers with automated schema validation and lineage tracking.',
        technologies: ['Datafold', 'Great Expectations', 'Purview', 'Unity Catalog']
      }
    ],
    technologies: [
      'Snowflake',
      'Databricks',
      'Talend',
      'Azure Data Engineering',
      'PySpark',
      'Apache Kafka',
      'Apache Airflow',
      'SQL Server',
      'dbt',
      'Cloud Warehousing'
    ],
    useCases: [
      {
        title: 'Unified Customer 360 & Real-Time Financial Analytics Fabric',
        industry: 'Banking & Financial Services',
        summary: 'Representative architecture: Consolidating disparate core banking, CRM, and transaction logs into a unified Snowflake cloud warehouse with sub-second querying.',
        solutionArchitecture: 'Kafka-driven event ingestion, PySpark transformation layers, and Snowflake auto-scaling virtual warehouses.',
        impactMetrics: 'Illustrative impact: Replaces 12-hour batch processing with near real-time 3-minute data availability.'
      },
      {
        title: 'Multi-Channel Retail Inventory & Supply Chain Telemetry',
        industry: 'Retail & E-Commerce',
        summary: 'Representative architecture: Ingesting millions of daily point-of-sale and warehouse logistics events to optimize stock allocation and prevent stockouts.',
        solutionArchitecture: 'Azure Data Factory orchestration, Delta Lake storage, and automated dbt modeling for executive merchandising dashboards.',
        impactMetrics: 'Illustrative impact: Enabled intraday replenishment triggers and eliminated data discrepancy reconciliation delays.'
      },
      {
        title: 'Legacy On-Premises Oracle/SQL Server Migration to Cloud',
        industry: 'Enterprise Technology',
        summary: 'Representative architecture: Seamless migration of multi-terabyte legacy data marts to Snowflake with zero operational downtime for business analysts.',
        solutionArchitecture: 'Automated schema conversion, parallelized bulk extractors, and automated regression testing across SQL query results.',
        impactMetrics: 'Illustrative impact: Cut compute licensing overhead by 40% while quadrupling reporting performance.'
      }
    ],
    deliveryPhases: [
      {
        step: '01',
        phase: 'Data Landscape & Volume Assessment',
        deliverables: 'Source system profiling, throughput requirements, schema complexity audit, and cloud TCO projection.'
      },
      {
        step: '02',
        phase: 'Target Architecture & Dimensional Modeling',
        deliverables: 'Lakehouse storage strategy, Medallion data flow diagrams, data governance policies, and security matrix.'
      },
      {
        step: '03',
        phase: 'Pipeline Development & Validation',
        deliverables: 'Automated ingestion scripts, dbt models, Airflow DAGs, and automated data quality test suites.'
      },
      {
        step: '04',
        phase: 'Cutover, Optimization & Enablement',
        deliverables: 'Parallel run reconciliation, performance tuning, warehouse auto-suspend policies, and operational runbooks.'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure zero business disruption during an enterprise data warehouse migration?',
        answer: 'We use dual-pipeline parallel running strategies. We keep legacy systems operational while the new cloud pipelines run simultaneously, continuously running automated data reconciliation tests until 100% parity is verified before cutover.'
      },
      {
        question: 'Can your pipelines accommodate both streaming and scheduled batch workloads?',
        answer: 'Yes. We architect Lambda and Kappa architectures where streaming engines like Kafka and Spark handle continuous real-time feeds, while automated orchestrators like Airflow manage scheduled analytical batch transformations.'
      },
      {
        question: 'How do you prevent unexpected runaway costs in cloud data warehouses like Snowflake?',
        answer: 'We enforce strict resource monitors, automated warehouse auto-suspend timeouts (e.g. 60 seconds), separated workload clusters, and query timeout thresholds to prevent accidental runaway computations.'
      }
    ]
  },
  {
    id: 'data-science',
    slug: 'data-science-ai-ml',
    title: 'Data Science & AI/ML',
    shortTitle: 'Data Science & AI/ML',
    headline: 'Transforming Enterprise Data into Actionable Foresight & Predictive Intelligence',
    tagline: 'Leverage statistical machine learning, deep learning, and continuous MLOps to drive intelligent automation and predictive decision-making.',
    iconName: 'Cpu',
    badge: 'Advanced Analytics',
    summary: 'We build predictive models, computer vision systems, and automated MLOps pipelines that translate historical enterprise data into proactive business strategies.',
    overview: 'Data without foresight is an untapped asset. Our Data Science and AI/ML practice collaborates with executive stakeholders to build robust, explainable predictive models. From customer lifetime value forecasting and churn mitigation to automated anomaly detection and visual quality control, we build solutions that integrate seamlessly into existing enterprise workflows.',
    businessChallenges: [
      {
        title: 'Reactive Rather than Proactive Decision-Making',
        description: 'Organizations frequently find out about customer defections, equipment breakdowns, or supply chain bottlenecks only after they have occurred.'
      },
      {
        title: 'High Machine Learning Proof-of-Concept Failure Rate',
        description: 'Models developed in isolated research notebooks frequently fail when deployed into production due to lack of standard engineering and pipeline scaffolding.'
      },
      {
        title: 'Silent Model Decay & Concept Drift',
        description: 'Unmonitored models degrade rapidly over time as customer behavior or market conditions shift, leading to dangerous decision skew.'
      },
      {
        title: 'Black-Box Complexity & Regulatory Resistance',
        description: 'Inability to explain how machine learning models arrive at critical scores impedes adoption by business stakeholders and compliance officers.'
      }
    ],
    capabilities: [
      {
        title: 'Predictive Modeling & Statistical Forecasting',
        description: 'Supervised and unsupervised learning models for demand forecasting, customer lifetime value modeling, and risk scoring using rigorous mathematical foundations.',
        technologies: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Statsmodels', 'Python']
      },
      {
        title: 'Industrial Computer Vision & Visual AI',
        description: 'Deep neural networks for automated defect detection, inventory scanning, visual asset inspection, and security camera telemetry analysis.',
        technologies: ['PyTorch', 'TensorFlow', 'YOLO', 'OpenCV', 'NVIDIA TensorRT']
      },
      {
        title: 'Natural Language Processing & Sentiment Engines',
        description: 'Information extraction, sentiment categorization, entity resolution, and conversational intent modeling across unstructured customer communications.',
        technologies: ['spaCy', 'Hugging Face Transformers', 'NLTK', 'BERT', 'FastAPI']
      },
      {
        title: 'Production MLOps & Continuous Retraining',
        description: 'End-to-end operationalization with feature stores, automated CI/CD for models, drift monitoring alerts, and containerized microservice serving.',
        technologies: ['MLflow', 'Kubeflow', 'Feast', 'Docker', 'Prometheus']
      }
    ],
    technologies: [
      'Data Science',
      'AI/ML',
      'Python',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'MLflow',
      'Pandas',
      'FastAPI',
      'Docker'
    ],
    useCases: [
      {
        title: 'Predictive Equipment Maintenance & Anomaly Detection',
        industry: 'Manufacturing & Energy',
        summary: 'Representative architecture: Ingesting sensor vibration and thermal time-series data to forecast industrial asset failures 72 hours before critical outages occur.',
        solutionArchitecture: 'LSTM and isolation forest anomaly detection models wrapped in containerized edge microservices with real-time alerting.',
        impactMetrics: 'Illustrative impact: Up to 35% reduction in unscheduled downtime and substantial maintenance cost savings.'
      },
      {
        title: 'Dynamic Customer Churn Prediction & Next-Best-Action Engine',
        industry: 'Telecommunications & SaaS',
        summary: 'Representative architecture: Analyzing behavioral usage metrics, support ticket frequency, and billing trends to identify high-risk customer accounts.',
        solutionArchitecture: 'Gradient boosting ensemble with SHAP explainability scoring integrated directly into enterprise CRM interfaces.',
        impactMetrics: 'Illustrative impact: Proactive retention workflows enabled for 70%+ of at-risk accounts.'
      },
      {
        title: 'Automated Credit Risk & Fraud Telemetry Scoring',
        industry: 'Financial Services',
        summary: 'Representative architecture: Real-time transactional fraud evaluation scoring payments against historical patterns in under 150 milliseconds.',
        solutionArchitecture: 'Low-latency feature serving via Redis and optimized XGBoost inference pipeline.',
        impactMetrics: 'Illustrative impact: Reduced false-positive alerts by 40% while catching complex synthetic fraud patterns.'
      }
    ],
    deliveryPhases: [
      {
        step: '01',
        phase: 'Problem Framing & Data Sanity Audit',
        deliverables: 'Hypothesis matrix, target metric definitions, label distribution analysis, and data feasibility sign-off.'
      },
      {
        step: '02',
        phase: 'Feature Engineering & Baseline Modeling',
        deliverables: 'Exploratory data analysis report, feature transformation pipelines, and benchmark model comparison.'
      },
      {
        step: '03',
        phase: 'Hyperparameter Tuning & Explainability',
        deliverables: 'Model validation across out-of-time splits, SHAP/LIME feature importance plots, and compliance documentation.'
      },
      {
        step: '04',
        phase: 'MLOps Containerization & Drift Monitoring',
        deliverables: 'REST API endpoints, automated retraining triggers on data drift, and real-time inference latency dashboards.'
      }
    ],
    faqs: [
      {
        question: 'How do you ensure our business users understand why a model made a specific prediction?',
        answer: 'We bake explainability into our modeling pipeline from day one. Using techniques like SHAP (SHapley Additive exPlanations) and LIME, we generate intuitive visual summaries that explain the exact mathematical drivers behind every single prediction.'
      },
      {
        question: 'What infrastructure is needed to support continuous model retraining?',
        answer: 'We implement lightweight, reproducible MLOps architectures using tools like MLflow and Docker. When our automated drift detection identifies performance degradation, a retraining pipeline executes automatically against new verified data.'
      },
      {
        question: 'Can your models be deployed on-premises to adhere to data sovereignty laws?',
        answer: 'Absolutely. We package models inside self-contained Docker containers and Kubernetes pods that run seamlessly in your private on-premises server racks with zero external cloud dependencies.'
      }
    ]
  },
  {
    id: 'enterprise-app-dev',
    slug: 'enterprise-application-development',
    title: 'Enterprise Application Development',
    shortTitle: 'Enterprise App Dev',
    headline: 'High-Availability Cloud-Native Software, Distributed Microservices, and Robust Web Portals',
    tagline: 'Modernize monolithic applications and build secure, resilient full-stack systems designed for enterprise agility and massive concurrency.',
    iconName: 'Code',
    badge: 'Full Stack Excellence',
    summary: 'We build high-concurrency enterprise web applications, distributed microservices, and modern cloud APIs with Java, .NET, React, and Angular.',
    overview: 'Enterprises require software that does not fail under peak loads and adapts rapidly to changing market demands. Our Enterprise Application Development practice combines domain-driven design, clean code architecture, and modern DevOps to deliver bulletproof web portals, internal line-of-business software, and scalable backend platforms.',
    businessChallenges: [
      {
        title: 'Legacy Monolithic Architectural Bottlenecks',
        description: 'Tightly coupled codebases make even minor feature updates risky, resulting in multi-week deployment cycles and frequent regressions.'
      },
      {
        title: 'Poor Scalability During Peak Demand Spikes',
        description: 'Legacy web applications experience severe latency degradation or outages during unexpected seasonal usage surges.'
      },
      {
        title: 'Fragmented Internal & External User Experiences',
        description: 'Inconsistent UI designs and outdated frontends confuse employees and customers, depressing user adoption and operational efficiency.'
      },
      {
        title: 'Security Vulnerabilities & Compliance Exposure',
        description: 'Aging libraries and unmaintained dependencies create serious vulnerabilities against OWASP Top 10 threats.'
      }
    ],
    capabilities: [
      {
        title: 'Distributed Microservices & Cloud-Native Backends',
        description: 'Designing resilient, decoupled backends with asynchronous messaging, fault tolerance, and automated horizontal scaling.',
        technologies: ['.NET Core', 'C#', 'Java Spring Boot', 'Node.js', 'Go']
      },
      {
        title: 'Modern Enterprise Frontends & Web Portals',
        description: 'Building responsive, accessible, and high-performance digital interfaces, customer portals, and internal administrative dashboards.',
        technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js']
      },
      {
        title: 'Enterprise API Gateway & Integration Hubs',
        description: 'Architecting secure RESTful and GraphQL APIs with OAuth2/OIDC token authentication, rate limiting, and automated API contract testing.',
        technologies: ['Kong', 'Azure API Management', 'Swagger / OpenAPI', 'GraphQL']
      },
      {
        title: 'Legacy Modernization & Cloud Re-Platforming',
        description: 'Strategically decomposing monolithic codebases using the Strangler Fig pattern to achieve zero-downtime migration to modern cloud environments.',
        technologies: ['Docker', 'Kubernetes', 'Azure App Services', 'AWS ECS']
      }
    ],
    technologies: [
      'Java',
      '.NET',
      'Full Stack Development',
      'React',
      'Angular',
      'TypeScript',
      'C#',
      'Spring Boot',
      'SQL Server',
      'PostgreSQL'
    ],
    useCases: [
      {
        title: 'Global B2B Partner Portal & Order Orchestration Engine',
        industry: 'Distribution & Logistics',
        summary: 'Representative architecture: A mission-critical distributor portal providing multi-tenant order placement, live freight tracking, and ERP integration.',
        solutionArchitecture: 'React frontend with .NET Core microservices backend, Redis distributed cache, and SQL Server database with read replicas.',
        impactMetrics: 'Illustrative impact: 99.99% system availability with sub-second page loads across peak ordering cycles.'
      },
      {
        title: 'Enterprise Employee Workflow & Operations Hub',
        industry: 'Corporate Enterprise Services',
        summary: 'Representative architecture: Consolidating approval requests, timesheets, and internal ticketing into a unified, mobile-responsive portal.',
        solutionArchitecture: 'Angular corporate portal connected to Java Spring Boot services with Azure AD Single Sign-On (SSO).',
        impactMetrics: 'Illustrative impact: Streamlined cross-department administrative request approvals by 60%.'
      },
      {
        title: 'High-Concurrency Digital Customer Verification Portal',
        industry: 'Financial Technology',
        summary: 'Representative architecture: End-to-end customer digital KYC onboarding portal handling identity validation, biometric checks, and document upload.',
        solutionArchitecture: 'Next.js frontend with serverless background processing workers and automated cloud encryption at rest.',
        impactMetrics: 'Illustrative impact: Reduced onboarding drop-off rate by 28% while meeting stringent banking security guidelines.'
      }
    ],
    deliveryPhases: [
      {
        step: '01',
        phase: 'Domain Modeling & Requirement Specification',
        deliverables: 'User journey maps, bounded context definitions, entity relational schemas, and non-functional requirements.'
      },
      {
        step: '02',
        phase: 'Architecture Blueprint & UI Prototyping',
        deliverables: 'Design system specifications, interactive wireframes, API contracts, and security architecture validation.'
      },
      {
        step: '03',
        phase: 'Sprint-Based Agile Engineering',
        deliverables: 'Bi-weekly deployed increments, automated unit & integration test coverage, and code quality gating.'
      },
      {
        step: '04',
        phase: 'Penetration Testing & Zero-Downtime Rollout',
        deliverables: 'OWASP vulnerability remediation, load testing sign-off, blue/green production deployment, and SLA handoff.'
      }
    ],
    faqs: [
      {
        question: 'Do you provide ongoing SLA-backed support after application deployment?',
        answer: 'Yes. We offer tailored post-launch managed support tiers with guaranteed response times, proactive security patching, performance monitoring, and ongoing feature enhancement cycles.'
      },
      {
        question: 'How do you handle enterprise authentication and single sign-on (SSO)?',
        answer: 'We integrate industry-standard enterprise identity protocols including SAML 2.0, OAuth 2.0, and OpenID Connect with providers like Microsoft Entra ID (Azure AD), Okta, and Ping Identity.'
      },
      {
        question: 'Can your engineers integrate directly with our in-house development team?',
        answer: 'Yes. We operate both as dedicated turnkey project squads and as seamless team augmentation partners, adhering strictly to your internal Git workflows, code reviews, and sprint ceremonies.'
      }
    ]
  },
  {
    id: 'sap-data-warehousing',
    slug: 'sap-integration-data-warehousing',
    title: 'SAP Integration & Data Warehousing',
    shortTitle: 'SAP & Data Warehousing',
    headline: 'Consolidating Enterprise ERP Data into High-Performance Analytical Warehouses',
    tagline: 'Bridge operational SAP systems with modern cloud analytics to enable cross-departmental intelligence and accelerated executive reporting.',
    iconName: 'Layers',
    badge: 'Enterprise Core',
    summary: 'We integrate complex SAP ERP landscapes with modern cloud data warehouses, building unified reporting marts and enterprise BI dashboards.',
    overview: 'Organizations running SAP S/4HANA or ECC require rapid, governed access to transaction data without impacting operational ERP performance. Our SAP Integration and Data Warehousing practice designs reliable data extraction pipelines, dimensional star schemas, and executive business intelligence layers that unite SAP with non-SAP enterprise systems.',
    businessChallenges: [
      {
        title: 'ERP Data Locked in Complex Proprietary Schemas',
        description: 'Deciphering transactional tables in SAP requires specialized ABAP and ERP domain knowledge that typical BI analysts do not possess.'
      },
      {
        title: 'Severe Performance Impact on Operational ERP',
        description: 'Running heavy analytical queries directly against transactional ERP production tables causes latency spikes for frontline business operators.'
      },
      {
        title: 'Disconnection Between SAP and Non-SAP Platforms',
        description: 'Inability to merge SAP financial records with external Salesforce CRM data or web ecommerce logs prevents holistic customer and revenue visibility.'
      },
      {
        title: 'Delayed Financial Month-End Reconciliation',
        description: 'Finance teams waste days each month manually exporting spreadsheets and resolving conflicting numbers across fragmented systems.'
      }
    ],
    capabilities: [
      {
        title: 'SAP S/4HANA & ECC Data Extraction',
        description: 'Engineering non-intrusive delta extraction from SAP tables, CDS views, and OData APIs using certified connectors and Change Data Capture (CDC).',
        technologies: ['SAP S/4HANA', 'SAP ECC', 'Talend Cloud', 'Azure Data Factory', 'SAP OData']
      },
      {
        title: 'Enterprise Dimensional Modeling & Star Schemas',
        description: 'Designing high-performance analytical data marts in SQL Server and Snowflake optimized for cross-functional drill-down queries.',
        technologies: ['Snowflake', 'SQL Server', 'Kimball Methodology', 'Oracle', 'dbt']
      },
      {
        title: 'Executive BI & Semantic Layer Construction',
        description: 'Building interactive executive reporting dashboards with verified financial, supply chain, and sales KPIs in Power BI and Tableau.',
        technologies: ['Power BI', 'Tableau', 'Looker Studio', 'DAX', 'SQL']
      },
      {
        title: 'Master Data Management (MDM) & Harmonization',
        description: 'Reconciling customer, vendor, and product master hierarchies across SAP and legacy enterprise applications to ensure single source of truth.',
        technologies: ['Talend MDM', 'Profisee', 'Informatica', 'Python']
      }
    ],
    technologies: [
      'SAP',
      'SQL Server',
      'Talend',
      'Data Warehousing',
      'Snowflake',
      'Power BI',
      'Oracle',
      'Azure Data Factory'
    ],
    useCases: [
      {
        title: 'Enterprise Financial Consolidation & Reporting Mart',
        industry: 'Manufacturing & Industrial',
        summary: 'Representative architecture: Automated extraction of General Ledger and Accounts Receivable data from multiple global SAP entities into a unified analytical data mart.',
        solutionArchitecture: 'Talend CDC pipelines feeding an Azure SQL Data Warehouse with Power BI row-level security dashboards.',
        impactMetrics: 'Illustrative impact: Reduced month-end financial reporting close cycles from 10 days to under 36 hours.'
      },
      {
        title: 'Integrated Supply Chain & Procurement Analytics Hub',
        industry: 'Consumer Goods & Retail',
        summary: 'Representative architecture: Correlating SAP purchase orders and warehouse stock levels with supplier logistics feeds to mitigate stockout risks.',
        solutionArchitecture: 'Near real-time delta extraction into Snowflake with automated inventory replenishment threshold alerts.',
        impactMetrics: 'Illustrative impact: Enhanced inventory turnover efficiency and reduced safety stock carrying costs by 15%.'
      },
      {
        title: 'Legacy Data Warehouse Modernization for SAP Data',
        industry: 'Energy & Utilities',
        summary: 'Representative architecture: Upgrading aging on-premises SQL Server data warehouses to cloud storage while retaining historical SAP audit trails.',
        solutionArchitecture: 'Automated dbt transformations with role-based masking to comply with corporate retention policies.',
        impactMetrics: 'Illustrative impact: Achieved 8x faster BI query response times on multi-year trend queries.'
      }
    ],
    deliveryPhases: [
      {
        step: '01',
        phase: 'SAP Landscape & Security Audit',
        deliverables: 'ERP module inventory, extraction authorization review, network bandwidth check, and data volume sizing.'
      },
      {
        step: '02',
        phase: 'Dimensional Blueprint & Data Flow Design',
        deliverables: 'Star/Snowflake schema data model, CDC architecture specifications, and KPI dictionary.'
      },
      {
        step: '03',
        phase: 'Pipeline Engineering & BI Semantic Build',
        deliverables: 'Extraction jobs, incremental load schedules, Power BI data models, and automated reconciliations.'
      },
      {
        step: '04',
        phase: 'Validation, User Training & Go-Live',
        deliverables: 'Financial parity sign-off, dashboard training sessions for finance and operations, and maintenance handover.'
      }
    ],
    faqs: [
      {
        question: 'Will data extraction from SAP slow down our live ERP system?',
        answer: 'No. We use delta-based Change Data Capture (CDC) and scheduled low-impact extractors that read only changed records during off-peak windows or via dedicated secondary replicas, eliminating operational ERP overhead.'
      },
      {
        question: 'Can your team integrate non-SAP data sources like Salesforce or HubSpot with SAP?',
        answer: 'Yes. That is a core specialty. We harmonize disparate customer, leads, and transaction records into a unified data warehouse schema using standardized Master Data Management rules.'
      },
      {
        question: 'Do you assist with SAP S/4HANA migration reporting readiness?',
        answer: 'Yes. We help enterprises archive legacy data and build independent data warehouse layers so analytics continue functioning smoothly before, during, and after S/4HANA upgrades.'
      }
    ]
  },
  {
    id: 'devops-cloud',
    slug: 'devops-cloud-infrastructure',
    title: 'DevOps & Cloud Infrastructure',
    shortTitle: 'DevOps & Cloud',
    headline: 'Accelerating Release Velocity with Infrastructure as Code & Resilient Cloud Architecture',
    tagline: 'Automate deployments, harden security posture, and optimize cloud compute spending across AWS, Azure, and hybrid environments.',
    iconName: 'Cloud',
    badge: 'Reliability & Scale',
    summary: 'We implement automated CI/CD pipelines, container orchestration, Infrastructure as Code, and 24/7 cloud reliability engineering.',
    overview: 'Modern enterprises cannot afford fragile deployments, security drift, or uncontrolled cloud spend. Our DevOps and Cloud Infrastructure practice partners with your engineering teams to build automated, secure, and self-healing cloud foundations. We treat infrastructure as software, ensuring every environment is reproducible, resilient, and optimized for cost.',
    businessChallenges: [
      {
        title: 'Manual, High-Risk Deployment Procedures',
        description: 'Releases require weekend maintenance windows and manual script executions, resulting in human error and customer-facing downtime.'
      },
      {
        title: 'Uncontrolled Cloud Cost Sprawl & Zombie Resources',
        description: 'Lack of automated governance and tagging leads to idle servers, oversized databases, and ballooning monthly cloud bills.'
      },
      {
        title: 'Environment Inconsistencies ("Works on My Machine")',
        description: 'Differences between local developer environments, staging, and production cause mysterious bugs that delay critical go-lives.'
      },
      {
        title: 'Slow Disaster Recovery & Insufficient Monitoring',
        description: 'Inadequate automated backups and fragmented logs mean teams take hours to diagnose and recover from infrastructure outages.'
      }
    ],
    capabilities: [
      {
        title: 'Infrastructure as Code (IaC) & Cloud Provisioning',
        description: 'Codifying cloud environments with Terraform, OpenTofu, and Azure Bicep to ensure automated, reproducible infrastructure across all tiers.',
        technologies: ['Terraform', 'Azure Bicep', 'AWS CloudFormation', 'Ansible']
      },
      {
        title: 'Continuous Integration & Continuous Delivery (CI/CD)',
        description: 'Building zero-downtime deployment pipelines with automated linting, security scans, unit tests, and canary or blue/green deployments.',
        technologies: ['GitHub Actions', 'Azure DevOps', 'GitLab CI', 'ArgoCD']
      },
      {
        title: 'Containerization & Kubernetes Orchestration',
        description: 'Architecting scalable microservices clusters on managed Kubernetes (AKS, EKS) with service mesh, auto-scaling, and zero-trust networking.',
        technologies: ['Docker', 'Kubernetes', 'Helm', 'Azure AKS', 'AWS EKS']
      },
      {
        title: 'Cloud FinOps & Observability Engineering',
        description: 'Comprehensive logging, distributed tracing, and metric alerts paired with FinOps cost optimization strategies that eliminate cloud waste.',
        technologies: ['Prometheus', 'Grafana', 'Datadog', 'Azure Monitor', 'CloudWatch']
      }
    ],
    technologies: [
      'Cloud',
      'DevOps',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Azure DevOps',
      'AWS',
      'Azure'
    ],
    useCases: [
      {
        title: 'Enterprise GitOps & Zero-Downtime Deployment Pipeline',
        industry: 'FinTech & Software Platforms',
        summary: 'Representative architecture: Automated pipeline that promotes containerized microservices from development to production with automated rollbacks on error.',
        solutionArchitecture: 'GitHub Actions with ArgoCD managing multiple Kubernetes clusters with blue/green deployment switching.',
        impactMetrics: 'Illustrative impact: Deployment frequency increased from bi-weekly to multiple times daily with zero planned downtime.'
      },
      {
        title: 'Multi-Region High-Availability Azure Cloud Migration',
        industry: 'Healthcare & SaaS',
        summary: 'Representative architecture: Re-platforming a critical patient communication system into multi-region active-passive Azure architecture with automated failover.',
        solutionArchitecture: 'Terraform-managed Azure Front Door, AKS clusters, and geo-replicated databases with sub-5-minute RPO/RTO.',
        impactMetrics: 'Illustrative impact: Achieved 99.99% system availability while ensuring strict regulatory data encryption compliance.'
      },
      {
        title: 'Enterprise Cloud FinOps & Cost Governance Audit',
        industry: 'Media & Digital Services',
        summary: 'Representative architecture: Deep-dive infrastructure audit identifying idle instances, unattached storage volumes, and rightsizing opportunities.',
        solutionArchitecture: 'Automated policy enforcement with AWS Cost Explorer, auto-shutdown schedules for non-production environments, and Reserved Instance planning.',
        impactMetrics: 'Illustrative impact: Reduced monthly cloud infrastructure expenditure by 32% within 60 days.'
      }
    ],
    deliveryPhases: [
      {
        step: '01',
        phase: 'Cloud Infrastructure & Security Assessment',
        deliverables: 'Well-Architected Framework review, cost leakage analysis, deployment bottleneck report, and security risk matrix.'
      },
      {
        step: '02',
        phase: 'IaC Blueprint & Pipeline Architecture',
        deliverables: 'Modular Terraform templates, Git branching strategy, secret management architecture, and monitoring design.'
      },
      {
        step: '03',
        phase: 'Automation Engineering & Migration',
        deliverables: 'CI/CD pipeline builds, container registry configuration, cluster provisioning, and security policy hardening.'
      },
      {
        step: '04',
        phase: 'Observability, Runbooks & Knowledge Transfer',
        deliverables: 'Grafana dashboards, PagerDuty alerting thresholds, disaster recovery drills, and team operational enablement.'
      }
    ],
    faqs: [
      {
        question: 'Which cloud platforms do your DevOps engineers specialize in?',
        answer: 'We have proven, certified delivery capabilities across Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP), as well as hybrid on-premises Kubernetes deployments.'
      },
      {
        question: 'How do you guarantee that Infrastructure as Code changes do not cause outages?',
        answer: 'We treat Terraform code exactly like production software: PR code reviews, static security scans (Tfsec / Checkov), automated speculative plan runs in staging, and gated approvals before production execution.'
      },
      {
        question: 'Can you help us remediate security vulnerabilities discovered in our cloud infrastructure?',
        answer: 'Yes. We conduct CIS benchmark audits, enforce automated least-privilege IAM policies, configure secret managers (Azure Key Vault / AWS Secrets Manager), and remediate container image vulnerabilities.'
      }
    ]
  },
  {
    id: 'servicenow',
    slug: 'servicenow-implementation-support',
    title: 'ServiceNow Implementation & Support',
    shortTitle: 'ServiceNow Solutions',
    headline: 'Optimizing Enterprise Workflows & Digital Employee Experiences',
    tagline: 'Modernize IT Service Management (ITSM), automate cross-system workflows, and build high-efficiency enterprise service catalogs.',
    iconName: 'CheckCircle2',
    badge: 'Enterprise Systems',
    summary: 'We deliver end-to-end ServiceNow implementations, custom IntegrationHub flows, ITSM modernization, and continuous managed support.',
    overview: 'Disconnected internal tools and manual approvals slow down enterprise velocity. Our ServiceNow practice transforms how enterprises deliver services to employees and clients. We streamline ITSM, ITOM, and CSM processes, integrating ServiceNow with your enterprise ERP, Active Directory, and cloud platforms to deliver automated, self-service digital workflows.',
    businessChallenges: [
      {
        title: 'Overwhelmed IT Service Desks with Growing Backlogs',
        description: 'Employees wait days for simple password resets, hardware requests, or software access licenses due to manual routing.'
      },
      {
        title: 'Untracked Hardware & Software Asset Sprawl',
        description: 'Lack of an accurate, automated Configuration Management Database (CMDB) leads to software license compliance penalties and unmanaged security risks.'
      },
      {
        title: 'Fragmented Cross-Departmental Workflows',
        description: 'Onboarding a new hire requires coordinating HR, IT, facilities, and finance through fragmented email chains with no single point of visibility.'
      },
      {
        title: 'Complex ServiceNow Instance Upgrades',
        description: 'Heavy legacy customizations make routine ServiceNow platform family upgrades difficult, risking broken workflows.'
      }
    ],
    capabilities: [
      {
        title: 'ITSM Process Modernization & Automation',
        description: 'Configuring best-practice Incident, Problem, Change, and Release Management workflows aligned with ITIL v4 frameworks.',
        technologies: ['ServiceNow ITSM', 'Flow Designer', 'Service Portal', 'Virtual Agent']
      },
      {
        title: 'IT Operations Management (ITOM) & CMDB Discovery',
        description: 'Automated infrastructure discovery, service mapping, and event management to maintain a healthy, single source of truth CMDB.',
        technologies: ['ServiceNow ITOM', 'Discovery', 'Service Mapping', 'Event Management']
      },
      {
        title: 'ServiceNow IntegrationHub & API Orchestration',
        description: 'Connecting ServiceNow with Active Directory, Jira, SAP, Salesforce, and monitoring tools to execute automated provisioning workflows.',
        technologies: ['IntegrationHub', 'REST APIs', 'Webhooks', 'MID Server', 'OAuth']
      },
      {
        title: 'Continuous Instance Support & Upgrade Governance',
        description: 'Platform health checks, technical debt reduction, automated test framework (ATF) suites, and seamless bi-annual family upgrades.',
        technologies: ['Automated Test Framework (ATF)', 'JavaScript', 'Instance Scan']
      }
    ],
    technologies: [
      'ServiceNow',
      'ITSM',
      'ITOM',
      'IntegrationHub',
      'Flow Designer',
      'JavaScript',
      'REST APIs',
      'Enterprise Workflows'
    ],
    useCases: [
      {
        title: 'Automated Employee Digital Onboarding Workflow',
        industry: 'Corporate Enterprises',
        summary: 'Representative architecture: A unified self-service onboarding portal that automatically orchestrates Active Directory account provisioning, laptop shipping, and building badge issuance.',
        solutionArchitecture: 'ServiceNow HR Service Delivery (HRSD) connected via IntegrationHub to Azure AD and internal ERP systems.',
        impactMetrics: 'Illustrative impact: Reduced onboarding processing time by 75% with zero missing access privileges on Day 1.'
      },
      {
        title: 'Intelligent Incident Routing & Automated Remediation',
        industry: 'Banking & Financial Technology',
        summary: 'Representative architecture: Automated categorization and routing of critical production alerts directly to on-call engineering squads.',
        solutionArchitecture: 'ServiceNow Event Management correlated with CloudWatch and Prometheus alerts with automated initial diagnostics.',
        impactMetrics: 'Illustrative impact: Cut Mean Time to Resolve (MTTR) by 45% for high-severity infrastructure incidents.'
      },
      {
        title: 'CMDB Health Optimization & License Reclamation',
        industry: 'Healthcare & Life Sciences',
        summary: 'Representative architecture: Deploying automated MID Server discovery schedules to map thousands of networked medical and enterprise IT assets.',
        solutionArchitecture: 'ServiceNow Discovery paired with Software Asset Management (SAM) reclamation rules.',
        impactMetrics: 'Illustrative impact: Identified and reclaimed over $180,000 in unused software licenses annually.'
      }
    ],
    deliveryPhases: [
      {
        step: '01',
        phase: 'Process Maturity & Gap Analysis',
        deliverables: 'Current-state workflow mapping, ITIL maturity benchmarking, requirements backlog, and instance sizing.'
      },
      {
        step: '02',
        phase: 'Instance Architecture & Catalog Design',
        deliverables: 'Data model specification, role-based security ACLs, Service Portal wireframes, and IntegrationHub mapping.'
      },
      {
        step: '03',
        phase: 'Configuration, Flows & Integrations',
        deliverables: 'Flow Designer builds, catalog items, MID Server deployment, and automated test scripts.'
      },
      {
        step: '04',
        phase: 'UAT, Admin Training & Managed Handover',
        deliverables: 'User acceptance sign-off, administrator training guides, production go-live, and hypercare support.'
      }
    ],
    faqs: [
      {
        question: 'Can you migrate our existing legacy helpdesk data into ServiceNow?',
        answer: 'Yes. We have structured data migration methodologies to extract, cleanse, and load historical tickets, knowledge articles, and user profiles into ServiceNow while preserving audit trails.'
      },
      {
        question: 'How do you ensure custom workflows do not break during ServiceNow platform upgrades?',
        answer: 'We build strictly adhering to ServiceNow best practices: utilizing Flow Designer and no-code/low-code capabilities instead of complex custom UI scripts, and deploying the Automated Test Framework (ATF) to validate all critical paths before upgrade cutovers.'
      },
      {
        question: 'Do you offer ongoing post-implementation ServiceNow managed services?',
        answer: 'Yes. We provide flexible administrative and developer managed support retainers covering continuous enhancements, catalog additions, health check maintenance, and upgrade support.'
      }
    ]
  }
];

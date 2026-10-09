export interface TechnologyPillarItem {
  name: string;
  shortDesc: string;
  enterpriseRole: string;
  highlightedCapabilities: string[];
}

export interface TechnologyGroup {
  id: string;
  category: string;
  subtitle: string;
  description: string;
  iconName: string;
  colorTheme: string;
  items: TechnologyPillarItem[];
}

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    id: 'ai-data',
    category: 'AI & Data',
    subtitle: 'Autonomous Cognitive Systems & Advanced Analytics',
    description: 'Harnessing modern foundational models, statistical mathematics, and agentic workflows to convert institutional data into automated intelligence.',
    iconName: 'Sparkles',
    colorTheme: 'from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/30',
    items: [
      {
        name: 'Generative AI and Agentic AI Engineering',
        shortDesc: 'Autonomous multi-agent architectures, enterprise RAG, and custom LLM orchestration with Model Context Protocol (MCP).',
        enterpriseRole: 'Cognitive Automation & Knowledge Synthesis',
        highlightedCapabilities: [
          'Enterprise RAG with Hybrid Vector Search',
          'Autonomous Multi-Agent Workflows (LangGraph, CrewAI)',
          'Zero-Trust AI Guardrails & PII Redaction',
          'Private LLM Hosting & Domain Fine-Tuning'
        ]
      },
      {
        name: 'Python',
        shortDesc: 'The primary language powering our machine learning, asynchronous microservices, data pipelines, and AI agent frameworks.',
        enterpriseRole: 'AI, Data Pipelines & High-Performance Scripting',
        highlightedCapabilities: [
          'High-throughput asynchronous backends with FastAPI',
          'Numerical computing & scientific data manipulation',
          'Automated data ingestion & scraping pipelines',
          'Production machine learning serving with Docker'
        ]
      },
      {
        name: 'Data Science',
        shortDesc: 'Statistical modeling, exploratory analytics, hypothesis testing, and quantitative research translating complex data into business decisions.',
        enterpriseRole: 'Quantitative Research & Decision Science',
        highlightedCapabilities: [
          'Exploratory data analysis & feature importance discovery',
          'Cohort segmentation & behavioral lifetime modeling',
          'A/B testing experimentation frameworks',
          'Statistical anomaly and risk pattern identification'
        ]
      },
      {
        name: 'AI/ML',
        shortDesc: 'Supervised, unsupervised, and deep learning algorithms powering predictive systems, computer vision, and NLP in production.',
        enterpriseRole: 'Predictive Intelligence & Pattern Recognition',
        highlightedCapabilities: [
          'Gradient boosting and time-series forecasting (XGBoost)',
          'Deep neural network architectures with PyTorch & TensorFlow',
          'Computer vision for automated quality inspection',
          'Automated MLOps pipelines with MLflow & drift alerts'
        ]
      }
    ]
  },
  {
    id: 'data-platforms',
    category: 'Data Platforms',
    subtitle: 'Modern Cloud Warehousing, Lakehouses & ETL Pipelines',
    description: 'Building resilient, scalable data fabrics that capture, transform, and govern petabyte-scale data for business intelligence and analytics.',
    iconName: 'Database',
    colorTheme: 'from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/30',
    items: [
      {
        name: 'Talend',
        shortDesc: 'Enterprise ETL/ELT orchestration, data integration, API-led connectivity, and Talend Cloud management console governance.',
        enterpriseRole: 'Enterprise Data Integration & Governance',
        highlightedCapabilities: [
          'High-volume batch and real-time Change Data Capture (CDC)',
          'Multi-system ERP, CRM, and cloud warehouse connectors',
          'Master Data Management (MDM) rule enforcement',
          'Automated error handling, alerts, and audit logging'
        ]
      },
      {
        name: 'Snowflake',
        shortDesc: 'Elastic cloud data warehousing, decoupled compute/storage, Snowpipe automated ingestion, and secure data sharing.',
        enterpriseRole: 'Cloud Data Warehouse & Analytics Engine',
        highlightedCapabilities: [
          'Multi-cluster auto-scaling compute warehouses',
          'Zero-copy cloning and Time Travel data recovery',
          'Continuous automated ingestion using Snowpipe',
          'Direct integration with modern BI semantic layers'
        ]
      },
      {
        name: 'Azure Data Engineering',
        shortDesc: 'Comprehensive cloud analytics on Microsoft Azure using Azure Data Factory (ADF), Azure Synapse, and Azure Databricks.',
        enterpriseRole: 'Enterprise Cloud Analytics Ecosystem',
        highlightedCapabilities: [
          'Scalable pipeline orchestration with Azure Data Factory',
          'Unified Spark analytics with Azure Databricks',
          'Enterprise data lake storage (ADLS Gen2) architecture',
          'Microsoft Purview data cataloging and compliance'
        ]
      },
      {
        name: 'SQL Server',
        shortDesc: 'Mission-critical relational database engineering, performance tuning, indexed views, and high-availability Always-On clusters.',
        enterpriseRole: 'Transactional RDBMS & Relational Data Marts',
        highlightedCapabilities: [
          'Complex T-SQL stored procedures and query optimization',
          'Always-On Availability Groups for disaster recovery',
          'Integration Services (SSIS) & Reporting Services (SSRS)',
          'Partitioned tables for multi-million row operational workloads'
        ]
      },
      {
        name: 'Data Warehousing',
        shortDesc: 'Dimensional modeling, Star and Snowflake schemas, Medallion lakehouse structures, and enterprise data marts.',
        enterpriseRole: 'Architectural Frameworks & Semantic Models',
        highlightedCapabilities: [
          'Kimball dimensional modeling & slowly changing dimensions (SCD)',
          'Medallion architecture (Bronze, Silver, Gold layers)',
          'Semantic metric layers for self-service BI analytics',
          'Enterprise data dictionary and metadata governance'
        ]
      }
    ]
  },
  {
    id: 'enterprise-applications',
    category: 'Enterprise Applications',
    subtitle: 'Mission-Critical Systems, Microservices & Core Platforms',
    description: 'Engineering bulletproof full-stack software, distributed microservices, and enterprise platform integrations that power daily operations.',
    iconName: 'Code',
    colorTheme: 'from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/30',
    items: [
      {
        name: 'Java',
        shortDesc: 'Robust backend development using enterprise Java, Spring Boot, and Quarkus for high-concurrency transactional systems.',
        enterpriseRole: 'Enterprise Backends & Transactional Systems',
        highlightedCapabilities: [
          'Spring Boot microservices with Spring Cloud orchestration',
          'Reactive asynchronous programming with Project Reactor',
          'Enterprise message broker integration (Kafka, RabbitMQ)',
          'Strict unit, integration, and contract test automation'
        ]
      },
      {
        name: '.NET',
        shortDesc: 'Modern cloud-native backends, Web APIs, and microservices powered by C# and high-performance .NET 8 / 9 runtime.',
        enterpriseRole: 'Scalable Microservices & Microsoft Ecosystem',
        highlightedCapabilities: [
          'High-throughput ASP.NET Core RESTful & gRPC APIs',
          'Entity Framework Core with optimized query performance',
          'Asynchronous background workers and event consumers',
          'Enterprise Azure integration and containerized deployments'
        ]
      },
      {
        name: 'SAP',
        shortDesc: 'Enterprise resource planning integration, SAP S/4HANA & ECC data extraction, ABAP interfaces, and analytics.',
        enterpriseRole: 'Core ERP Infrastructure & Operations',
        highlightedCapabilities: [
          'S/4HANA & ECC transactional data extraction pipelines',
          'Custom OData services and BAPI integration interfaces',
          'ERP financial and supply chain reconciliation marts',
          'Preparation for cloud S/4HANA migration programs'
        ]
      },
      {
        name: 'ServiceNow',
        shortDesc: 'Streamlining IT Service Management (ITSM), IT Operations (ITOM), and custom automated enterprise workflows.',
        enterpriseRole: 'Digital Workflow & ITSM Automation',
        highlightedCapabilities: [
          'ITIL v4-compliant incident and problem management',
          'Automated self-service employee service catalogs',
          'ServiceNow IntegrationHub connectors to ERP and cloud tools',
          'CMDB asset discovery and software license management'
        ]
      },
      {
        name: 'Full Stack Development',
        shortDesc: 'End-to-end web architectures pairing responsive React and Angular frontends with secure, scalable backend services.',
        enterpriseRole: 'Modern Web Portals & Omnichannel Experiences',
        highlightedCapabilities: [
          'Accessible, component-driven UI architectures with React & Angular',
          'TypeScript end-to-end type safety from DB to UI',
          'State management and client caching architectures',
          'Cross-device responsive design and Core Web Vitals optimization'
        ]
      }
    ]
  },
  {
    id: 'cloud-operations',
    category: 'Cloud & Operations',
    subtitle: 'Resilient Infrastructure, DevOps Automation & FinOps',
    description: 'Codifying cloud environments, automating release pipelines, and maintaining 99.99% availability with modern DevOps methodologies.',
    iconName: 'Cloud',
    colorTheme: 'from-amber-500/20 to-orange-600/20 text-amber-400 border-amber-500/30',
    items: [
      {
        name: 'Cloud',
        shortDesc: 'Multi-cloud architecture across Microsoft Azure, AWS, and GCP delivering high availability, security, and elasticity.',
        enterpriseRole: 'Multi-Cloud Architecture & Scalability',
        highlightedCapabilities: [
          'Multi-region high-availability failover architectures',
          'Zero-trust cloud networking and IAM security policies',
          'Serverless computing and autoscaling compute instances',
          'FinOps cost governance and automated resource rightsizing'
        ]
      },
      {
        name: 'DevOps',
        shortDesc: 'Continuous integration, container orchestration, Infrastructure as Code, and automated deployment pipelines.',
        enterpriseRole: 'Automated CI/CD & Reliability Engineering',
        highlightedCapabilities: [
          'Infrastructure as Code (IaC) with Terraform & ARM/Bicep',
          'Zero-downtime CI/CD with GitHub Actions & Azure DevOps',
          'Production Kubernetes cluster administration (AKS / EKS)',
          'Continuous observability, metric alerting & automated rollbacks'
        ]
      }
    ]
  }
];

export interface TechItem {
  name: string;
  category: 'AI & Data' | 'Cloud & DevOps' | 'Core Engineering' | 'Enterprise';
  tagline: string;
}

export const TECHNOLOGIES_LIST: TechItem[] = [
  { name: 'Generative AI', category: 'AI & Data', tagline: 'LLMs, RAG, Prompt Engineering' },
  { name: 'Agentic AI', category: 'AI & Data', tagline: 'Multi-agent systems & MCP automation' },
  { name: 'Data Engineering', category: 'AI & Data', tagline: 'PySpark, Kafka & Airflow pipelines' },
  { name: 'Snowflake', category: 'Cloud & DevOps', tagline: 'Cloud Data Warehouse & Snowpipe' },
  { name: 'Talend', category: 'AI & Data', tagline: 'Enterprise ETL & Talend Cloud TMC' },
  { name: '.NET Full Stack', category: 'Core Engineering', tagline: 'C#, ASP.NET Core & Angular/React' },
  { name: 'Python', category: 'Core Engineering', tagline: 'Modern backend, data & AI scripting' },
  { name: 'Java', category: 'Core Engineering', tagline: 'Enterprise Spring Boot applications' },
  { name: 'Azure Data Engineering', category: 'Cloud & DevOps', tagline: 'ADF, Synapse & Databricks' },
  { name: 'DevOps & CI/CD', category: 'Cloud & DevOps', tagline: 'Docker, Kubernetes, GitHub Actions' },
  { name: 'Cloud Infrastructure', category: 'Cloud & DevOps', tagline: 'AWS, Azure & Google Cloud' },
  { name: 'SQL Server', category: 'AI & Data', tagline: 'High-performance relational DB engineering' },
  { name: 'Data Warehousing', category: 'AI & Data', tagline: 'Dimensional modeling & Medallion layers' },
  { name: 'Data Science & AI/ML', category: 'AI & Data', tagline: 'Predictive modeling & Scikit-Learn' },
  { name: 'SAP Solutions', category: 'Enterprise', tagline: 'ERP data integration & analytics' },
  { name: 'ServiceNow', category: 'Enterprise', tagline: 'ITSM, ITOM & automated workflows' }
];


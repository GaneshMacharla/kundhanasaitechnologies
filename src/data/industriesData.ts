export interface IndustryDomain {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  overview: string;
  keyChallenges: string[];
  solutionsProvided: string[];
  relevantServices: string[];
}

export const VERIFIED_INDUSTRIES: IndustryDomain[] = [
  {
    id: 'financial-services',
    name: 'Financial Services & Banking',
    tagline: 'High-Throughput Analytics, Regulatory Compliance & Risk Telemetry',
    iconName: 'Building',
    overview: 'Banking and financial institutions face intense compliance scrutiny, high transaction volumes, and legacy core systems. We deliver governed data platforms, fraud analytics architectures, and secure AI assistants that adhere to stringent regulatory standards.',
    keyChallenges: [
      'Strict regulatory reporting mandates and auditability requirements',
      'High-throughput transactional fraud detection in sub-second latency',
      'Fragmented customer records across core banking and lending systems'
    ],
    solutionsProvided: [
      'Governed Snowflake and Azure data fabrics for consolidated risk reporting',
      'Low-latency machine learning pipelines for transactional anomaly scoring',
      'Private, role-restricted generative AI knowledge assistants for compliance policies'
    ],
    relevantServices: [
      'Generative AI & Agentic AI Development',
      'Data Engineering & Cloud Data Solutions',
      'Data Science & AI/ML'
    ]
  },
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    tagline: 'Secure Data Interoperability, Clinical Insights & HIPAA-Compliant Workflows',
    iconName: 'Activity',
    overview: 'Healthcare organizations navigate complex patient data privacy regulations while seeking to modernize operational workflows. We engineer secure cloud platforms, clinical document extraction pipelines, and automated service workflows.',
    keyChallenges: [
      'HIPAA and patient data privacy constraints prohibiting public cloud AI use',
      'Unstructured medical records, PDFs, and diagnostic notes trapped in silos',
      'Slow administrative coordination across patient intake and billing teams'
    ],
    solutionsProvided: [
      'Zero-trust, on-prem/private cloud generative AI document processing',
      'Automated ServiceNow workflows for medical staff onboarding and IT requests',
      'High-availability cloud microservices with role-based audit access'
    ],
    relevantServices: [
      'Generative AI & Agentic AI Development',
      'ServiceNow Implementation & Support',
      'Enterprise Application Development'
    ]
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & Consumer Goods',
    tagline: 'Real-Time Inventory Telemetry, Omnichannel Portals & Demand Forecasting',
    iconName: 'ShoppingBag',
    overview: 'Modern retail requires instantaneous visibility into supply chains, omnichannel customer interactions, and dynamic stock allocation. We modernize ERP integration, deploy predictive forecasting models, and develop high-concurrency web portals.',
    keyChallenges: [
      'Inventory stockouts and high safety stock holding costs',
      'Disconnection between physical store POS and online e-commerce transactions',
      'Website performance degradation during peak sales spikes'
    ],
    solutionsProvided: [
      'Real-time streaming ingestion connecting POS data with Snowflake warehouses',
      'Predictive demand forecasting and customer churn mitigation models',
      'Resilient full-stack web portals built on modern cloud microservices'
    ],
    relevantServices: [
      'Data Engineering & Cloud Data Solutions',
      'Data Science & AI/ML',
      'Enterprise Application Development'
    ]
  },
  {
    id: 'manufacturing-supply-chain',
    name: 'Manufacturing & Supply Chain',
    tagline: 'Predictive Equipment Maintenance, SAP Integration & Industrial IoT',
    iconName: 'Factory',
    overview: 'Industrial manufacturers require continuous factory floor uptime, lean supply chains, and seamless ERP visibility. We bridge SAP transactional data with operational analytics and deploy IoT predictive maintenance models.',
    keyChallenges: [
      'Unscheduled machinery downtime causing costly production halts',
      'Complex SAP ERP tables making supply chain data hard to analyze',
      'Fragmented supplier and vendor logistics coordination'
    ],
    solutionsProvided: [
      'Predictive vibration and thermal telemetry analytics using machine learning',
      'Automated extraction of SAP materials management into reporting data marts',
      'Automated contract and RFQ comparative analysis using AI models'
    ],
    relevantServices: [
      'SAP Integration & Data Warehousing',
      'Data Science & AI/ML',
      'DevOps & Cloud Infrastructure'
    ]
  },
  {
    id: 'energy-utilities',
    name: 'Energy & Utilities',
    tagline: 'Smart Grid Analytics, Asset Lifecycle Tracking & Cloud Reliability',
    iconName: 'Zap',
    overview: 'Energy providers manage vast distributed physical assets, smart meter time-series data, and mission-critical reliability needs. We build scalable data ingestion architectures and secure cloud infrastructures that maintain high availability.',
    keyChallenges: [
      'Massive petabyte-scale time-series smart meter sensor feeds',
      'Aging legacy on-premises databases with slow query performance',
      'Stringent infrastructure security and continuous uptime mandates'
    ],
    solutionsProvided: [
      'Distributed Kafka and PySpark data pipelines for continuous telemetry',
      'Cloud data warehouse modernization replacing brittle legacy SQL servers',
      'Multi-region high-availability cloud infrastructure with automated failovers'
    ],
    relevantServices: [
      'Data Engineering & Cloud Data Solutions',
      'DevOps & Cloud Infrastructure',
      'Data Science & AI/ML'
    ]
  },
  {
    id: 'technology-platforms',
    name: 'Technology & Digital Platforms',
    tagline: 'Agentic Workflow Orchestration, Modern DevOps & Scalable Microservices',
    iconName: 'Terminal',
    overview: 'SaaS and tech platforms must innovate rapidly, maintain 99.99% SLAs, and incorporate modern agentic AI features without inflating cloud bills. We provide specialized engineering augmentation and cloud modernization.',
    keyChallenges: [
      'Rapidly deploying generative AI features without creating security vulnerabilities',
      'Cloud cost sprawl across multiple dev, staging, and production clusters',
      'Monolithic architecture slowing feature velocity and deployment confidence'
    ],
    solutionsProvided: [
      'Autonomous agentic workflows and custom RAG engines with guardrails',
      'Kubernetes cluster orchestration, GitOps CI/CD, and FinOps cost governance',
      'Modular microservices in .NET, Java, and Python with decoupled event streaming'
    ],
    relevantServices: [
      'Generative AI & Agentic AI Development',
      'DevOps & Cloud Infrastructure',
      'Enterprise Application Development'
    ]
  }
];

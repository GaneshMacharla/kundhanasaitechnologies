export interface EnterpriseSolution {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  capabilities: string[];
  technologies: string[];
}

export const ENTERPRISE_SOLUTIONS: EnterpriseSolution[] = [
  {
    id: 'data-engineering-cloud',
    title: 'Data Engineering & Cloud Modernization',
    shortDesc: 'Modernize legacy data architectures with robust lakehouses, serverless data pipelines, and scalable warehouse platforms on Azure & AWS.',
    iconName: 'Database',
    capabilities: [
      'Data lakehouse design with Delta Lake and Databricks',
      'High-throughput streaming ingestion with Apache Kafka & Spark',
      'Automated batch ETL/ELT pipelines and governance',
      'Snowflake & Cloud warehouse migration'
    ],
    technologies: ['Snowflake', 'Databricks', 'Azure Data Factory', 'AWS Glue', 'PySpark', 'Airflow']
  },
  {
    id: 'genai-agentic-systems',
    title: 'Generative AI & Agentic Automation',
    shortDesc: 'Design custom LLM applications, enterprise RAG engines, domain-specific AI agents, and intelligent workflow automations.',
    iconName: 'Sparkles',
    capabilities: [
      'Enterprise Document RAG with vector search and semantic routing',
      'Multi-agent systems using CrewAI, LangGraph, and MCP protocols',
      'Secure LLM deployment with custom guardrails and PII masking',
      'Prompt engineering frameworks and continuous model evaluation'
    ],
    technologies: ['OpenAI', 'Anthropic Claude', 'LangGraph', 'LlamaIndex', 'Pinecone', 'Python']
  },
  {
    id: 'enterprise-app-dev',
    title: 'Enterprise Application Development',
    shortDesc: 'Custom full-stack web and cloud applications built for high availability, security, and seamless enterprise integration.',
    iconName: 'Code',
    capabilities: [
      'Microservices architecture and robust RESTful / GraphQL APIs',
      'Scalable backend systems using ASP.NET Core, Java, and Python',
      'Responsive, modern frontend portals with Angular & React',
      'Legacy application modernization and cloud migration'
    ],
    technologies: ['.NET Core', 'C#', 'Java Spring Boot', 'React', 'Angular', 'SQL Server']
  },
  {
    id: 'data-science-aiml',
    title: 'Data Science & Predictive AI/ML',
    shortDesc: 'Harness machine learning models to forecast business trends, automate decisions, and extract actionable operational intelligence.',
    iconName: 'Cpu',
    capabilities: [
      'Predictive modeling, customer churn, and demand forecasting',
      'Computer vision and natural language processing solutions',
      'MLOps pipelines for automated model retraining and monitoring',
      'Feature store creation and automated experiment tracking'
    ],
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow', 'FastAPI']
  },
  {
    id: 'sap-data-warehousing',
    title: 'SAP & Enterprise Data Warehousing',
    shortDesc: 'Enterprise data consolidation, SAP ecosystem integration, and multi-source analytics for global organizations.',
    iconName: 'Layers',
    capabilities: [
      'ERP data extraction and dimensional modeling',
      'Data mart creation and enterprise BI reporting integration',
      'High-performance OLAP query optimization',
      'Master Data Management (MDM) and regulatory compliance'
    ],
    technologies: ['SAP', 'SQL Server', 'Oracle', 'Talend', 'Power BI', 'Looker']
  },
  {
    id: 'devops-cloud-infra',
    title: 'DevOps & Cloud Infrastructure',
    shortDesc: 'Automate build, test, and deployment cycles while ensuring cloud infrastructure reliability, scalability, and cost optimization.',
    iconName: 'Cloud',
    capabilities: [
      'Infrastructure as Code (IaC) with Terraform & ARM templates',
      'Automated CI/CD pipelines using GitHub Actions & Azure DevOps',
      'Containerization and orchestration with Docker & Kubernetes',
      '24/7 cloud monitoring, logging, and security compliance'
    ],
    technologies: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'GitHub Actions', 'Terraform']
  },
  {
    id: 'servicenow-integration',
    title: 'ServiceNow Implementation & Support',
    shortDesc: 'Streamline enterprise IT service workflows, incident management, and digital customer service processes.',
    iconName: 'CheckCircle',
    capabilities: [
      'ITSM, ITOM, and CSM workflow configuration',
      'Service catalog design and automated service portal development',
      'Custom integration with enterprise ERP and cloud platforms',
      'Ongoing platform administration and release upgrades'
    ],
    technologies: ['ServiceNow', 'ITSM', 'REST APIs', 'JavaScript', 'IntegrationHub']
  }
];

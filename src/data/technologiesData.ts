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
  { name: 'Google BigQuery', category: 'Cloud & DevOps', tagline: 'Petabyte-scale serverless analytics' },
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

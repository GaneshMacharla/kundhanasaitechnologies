export interface Course {
  id: string;
  slug: string;
  title: string;
  badge?: string;
  category: 'AI & Data' | 'Cloud & Analytics' | 'Software Engineering';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  mode: string;
  timing: string;
  nextBatch: string;
  keyTopics: string[];
  syllabus: {
    moduleTitle: string;
    topics: string[];
  }[];
  realTimeProjects: {
    title: string;
    description: string;
  }[];
  careerRoles: string[];
  tools: string[];
  freeSessions: string;
}

export const COURSES: Course[] = [
  {
    id: 'genai-agentic-ai',
    slug: 'genai-agentic-ai',
    title: 'Generative AI & Agentic AI',
    badge: 'Trending & High Demand',
    category: 'AI & Data',
    shortDesc: 'Master prompt engineering, LLM architectures, RAG systems, AI agents, MCP, and autonomous multi-agent pipelines for enterprise automation.',
    fullDesc: 'Step into the future of software with our comprehensive Generative AI & Agentic AI program. Designed for engineers and data professionals, this course takes you from foundational LLM mechanics to designing autonomous multi-agent systems, Retrieval-Augmented Generation (RAG) engines, and real-time enterprise AI assistants.',
    duration: '8 - 10 Weeks',
    mode: 'Online Live & Classroom',
    timing: 'Morning 7:30 AM & Evening 8:30 PM',
    nextBatch: 'Upcoming Monday (Limited Seats)',
    freeSessions: 'First 4 Sessions FREE',
    keyTopics: [
      'Prompt Engineering',
      'AI Agents & Automation',
      'RAG (Retrieval-Augmented Gen)',
      'LangChain & LangGraph',
      'LlamaIndex',
      'Model Context Protocol (MCP)',
      'Multi-Agent Systems',
      'LLM Fine-Tuning & Evaluation',
      'Real-Time AI Enterprise Projects'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Foundations of Generative AI & LLMs',
        topics: [
          'Transformer architectures, attention mechanisms, tokenization',
          'OpenAI GPT-4o, Anthropic Claude, Meta Llama 3, Google Gemini',
          'Prompt Engineering: Zero-shot, Few-shot, Chain-of-Thought (CoT)',
          'Hallucination mitigation, guardrails, and deterministic outputs'
        ]
      },
      {
        moduleTitle: 'Module 2: RAG (Retrieval-Augmented Generation) at Scale',
        topics: [
          'Vector Databases: Pinecone, Qdrant, ChromaDB, PGVector',
          'Chunking strategies, dense/sparse embeddings, hybrid search',
          'Reranking with Cohere, contextual compression',
          'Building enterprise document QA bots with high recall & precision'
        ]
      },
      {
        moduleTitle: 'Module 3: LangChain, LangGraph & LlamaIndex Frameworks',
        topics: [
          'LCEL (LangChain Expression Language) syntax and chaining',
          'Stateful cyclic graphs with LangGraph for production workflows',
          'LlamaIndex data connectors, index structures, query engines',
          'Memory management, streaming responses, and token optimization'
        ]
      },
      {
        moduleTitle: 'Module 4: Autonomous Agentic AI & Multi-Agent Swarms',
        topics: [
          'ReAct framework (Reasoning + Acting) and tool calling',
          'CrewAI and AutoGen multi-agent collaboration patterns',
          'Model Context Protocol (MCP) servers, tools, and clients',
          'Human-in-the-loop workflows, error recovery, and autonomous planning'
        ]
      },
      {
        moduleTitle: 'Module 5: Production Deployment & Real-World Projects',
        topics: [
          'API serving with FastAPI, streaming websockets, Docker containerization',
          'Cloud deployment on AWS & Azure, CI/CD for AI models',
          'Model monitoring, latency reduction, cost management, and caching',
          'Security best practices: prompt injection defense, PII masking'
        ]
      }
    ],
    realTimeProjects: [
      {
        title: 'Enterprise Multi-Agent Customer Support & Automation System',
        description: 'Built with LangGraph, MCP tools, and vector search to handle ticket routing, CRM updates, and autonomous issue triage.'
      },
      {
        title: 'Financial Document RAG Analyzer with Source Attribution',
        description: 'End-to-end RAG system processing 1000s of SEC filings, balance sheets, and PDF audit reports with hybrid search & reranking.'
      },
      {
        title: 'Autonomous Code Review & Refactoring Agent',
        description: 'Multi-agent developer assistant that analyzes Git pull requests, runs linting checks, and suggests performance improvements.'
      }
    ],
    careerRoles: [
      'Generative AI Engineer',
      'AI Solutions Architect',
      'Agentic AI Developer',
      'Prompt Engineer & LLM Specialist',
      'Applied Machine Learning Engineer'
    ],
    tools: ['LangChain', 'LangGraph', 'LlamaIndex', 'CrewAI', 'OpenAI', 'Claude', 'Hugging Face', 'Pinecone', 'ChromaDB', 'FastAPI', 'Docker']
  },
  {
    id: 'data-engineering',
    slug: 'data-engineering',
    title: 'Data Engineering',
    badge: 'Industry Essential',
    category: 'AI & Data',
    shortDesc: 'End-to-end data pipelines using Python, SQL, PySpark, Apache Airflow, Kafka, Databricks, AWS, Azure, and modern cloud data warehouses.',
    fullDesc: 'Become a job-ready Data Engineer by building scalable, resilient enterprise data infrastructure. This practical curriculum covers big data processing with Apache Spark and Databricks, orchestration with Airflow, real-time streaming with Kafka, and modern cloud data warehouse architectures.',
    duration: '10 - 12 Weeks',
    mode: 'Online Live & Classroom',
    timing: 'Morning 7:30 AM & Evening 8:30 PM',
    nextBatch: 'Upcoming Monday (Limited Seats)',
    freeSessions: 'First 4 Sessions FREE',
    keyTopics: [
      'Python & Advanced SQL',
      'Apache PySpark & Spark SQL',
      'Apache Airflow Orchestration',
      'Apache Kafka Streaming',
      'AWS & Azure Cloud Data Services',
      'Databricks Lakehouse Platform',
      'ETL / ELT & Data Modeling',
      'Data Warehousing & Medallion Architecture',
      'Real-Time Big Data Projects'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Advanced SQL & Python for Data Engineering',
        topics: [
          'Window functions, CTEs, complex joins, query plan optimization',
          'Data structures, OOP, file handling (Parquet, Avro, JSON, CSV)',
          'Pandas, NumPy, and multiprocessing for ETL scripts'
        ]
      },
      {
        moduleTitle: 'Module 2: Big Data with Apache Spark & PySpark',
        topics: [
          'Spark Architecture: Driver, Executors, DAG, Transformations vs Actions',
          'PySpark DataFrames, Spark SQL, Spark optimization & partitioning',
          'Delta Lake: ACID transactions, Time Travel, schema enforcement'
        ]
      },
      {
        moduleTitle: 'Module 3: Databricks Lakehouse Platform',
        topics: [
          'Databricks workspaces, clusters, jobs, and notebooks',
          'Medallion Architecture: Bronze, Silver, Gold data layers',
          'Unity Catalog: Governance, access control, and data lineage'
        ]
      },
      {
        moduleTitle: 'Module 4: Orchestration & Streaming (Airflow & Kafka)',
        topics: [
          'Apache Airflow DAGs, Operators, Sensors, Taskflow API, scheduling',
          'Apache Kafka: Producers, Consumers, Topics, Partitions, Consumer Groups',
          'Spark Structured Streaming with Kafka'
        ]
      },
      {
        moduleTitle: 'Module 5: Cloud Data Platforms (AWS & Azure)',
        topics: [
          'AWS: S3, Glue, Athena, Redshift, EMR, IAM',
          'Azure: ADLS Gen2, Azure Data Factory (ADF), Synapse Analytics',
          'CI/CD with Git, Docker, and production data deployment'
        ]
      }
    ],
    realTimeProjects: [
      {
        title: 'Real-Time E-Commerce Clickstream & Orders Pipeline',
        description: 'Kafka + Spark Structured Streaming ingestion into Delta Lake with automated DBT transformations and Looker dashboards.'
      },
      {
        title: 'Healthcare Medallion Lakehouse on Azure Databricks',
        description: 'End-to-end data pipeline processing millions of patient electronic records with HIPAA compliance, CDC, and Airflow orchestration.'
      },
      {
        title: 'Multi-Cloud Retail Sales Data Warehouse on AWS',
        description: 'Automated ingestion from multiple ERPs using Airflow DAGs, Glue cataloging, and optimized star-schema Redshift reporting.'
      }
    ],
    careerRoles: [
      'Cloud Data Engineer',
      'PySpark / Databricks Developer',
      'Big Data Engineer',
      'ETL / Pipeline Architect',
      'Azure / AWS Data Specialist'
    ],
    tools: ['Python', 'SQL', 'PySpark', 'Databricks', 'Airflow', 'Kafka', 'AWS', 'Azure', 'Delta Lake', 'Git', 'Docker']
  },
  {
    id: 'snowflake',
    slug: 'snowflake',
    title: 'Snowflake Cloud Data Warehouse',
    badge: 'High Enterprise Demand',
    category: 'Cloud & Analytics',
    shortDesc: 'Master Snowflake architecture, multi-cluster virtual warehouses, Snowpipe, Streams, Tasks, Time Travel, zero-copy cloning, and security.',
    fullDesc: 'Master the world’s leading cloud data warehouse. This intensive course teaches you Snowflake’s revolutionary separation of storage and compute, automated ingestion pipelines with Snowpipe, CDC handling with Streams and Tasks, performance tuning, and cross-cloud data sharing.',
    duration: '6 - 8 Weeks',
    mode: 'Online Live & Classroom',
    timing: 'Morning 7:30 AM & Evening 8:30 PM',
    nextBatch: 'Upcoming Monday (Limited Seats)',
    freeSessions: 'First 4 Sessions FREE',
    keyTopics: [
      'Snowflake Multi-Cluster Architecture',
      'Snowpipe & Continuous Ingestion',
      'Streams & Tasks (CDC Pipelines)',
      'Time Travel & Fail-safe',
      'Zero-Copy Cloning',
      'Secure Data Sharing & Marketplace',
      'Data Modeling & Semi-Structured Data (JSON, Parquet)',
      'Performance Optimization & Micro-Partitioning',
      'End-to-End Snowflake Projects'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Architecture & Cloud Data Platforms',
        topics: [
          'Storage layer, Compute layer (Virtual Warehouses), Cloud Services layer',
          'Snowflake editions, pricing models, credits, and cost governance',
          'Snowflake Web UI (Snowsight), SnowSQL CLI, and Worksheet basics'
        ]
      },
      {
        moduleTitle: 'Module 2: Data Loading & Ingestion Pipelines',
        topics: [
          'Internal & External stages (AWS S3, Azure Blob, GCP GCS)',
          'COPY INTO command, File formats (CSV, JSON, Parquet, ORC, XML)',
          'Snowpipe automated continuous loading with Cloud Event notifications'
        ]
      },
      {
        moduleTitle: 'Module 3: Continuous Data Pipelines (Streams & Tasks)',
        topics: [
          'Snowflake Streams for Change Data Capture (CDC)',
          'Snowflake Tasks, DAG execution, serverless tasks, CRON scheduling',
          'Building automated incremental transformation pipelines without third-party tools'
        ]
      },
      {
        moduleTitle: 'Module 4: Advanced Features & Administration',
        topics: [
          'Time Travel (AT, BEFORE, UNDROP) and Fail-safe mechanisms',
          'Zero-Copy Cloning for Dev/QA environments instantly',
          'Secure Views, Secure UDFs, Dynamic Data Masking, Row Access Policies',
          'Direct Data Sharing and Snowflake Marketplace'
        ]
      },
      {
        moduleTitle: 'Module 5: Performance Tuning & Production Capstone',
        topics: [
          'Micro-partitioning, Clustering Keys, Query Profiler analysis',
          'Search Optimization Service, Result Caching, Warehouse sizing strategies',
          'Snowpark for Python developers, stored procedures, and external functions'
        ]
      }
    ],
    realTimeProjects: [
      {
        title: 'Global Telematics Real-Time Ingestion with Snowpipe',
        description: 'Streaming millions of IoT sensor events into Snowflake via S3 stages and Snowpipe with semi-structured JSON flattening.'
      },
      {
        title: 'Automated CDC Data Pipeline Using Streams & Tasks',
        description: 'Tracking incremental inserts, updates, and deletes from operational databases to build clean dimensional models in Snowflake.'
      }
    ],
    careerRoles: [
      'Snowflake Data Engineer',
      'Cloud Data Warehouse Architect',
      'Snowflake Developer',
      'BI & Analytics Data Engineer'
    ],
    tools: ['Snowflake', 'Snowsight', 'SnowSQL', 'Snowpark', 'AWS S3', 'Azure ADLS', 'SQL', 'Python']
  },
  {
    id: 'google-bigquery',
    slug: 'google-bigquery',
    title: 'Google BigQuery & Cloud Analytics',
    badge: 'Cloud Modernization',
    category: 'Cloud & Analytics',
    shortDesc: 'Learn serverless enterprise data analytics with BigQuery SQL, partitioning, clustering, Dataflow, Looker Studio, and cost optimization.',
    fullDesc: 'Unlock the power of Google Cloud’s petabyte-scale data warehouse. Learn how to write high-performance BigQuery SQL, build streaming pipelines with Dataflow, design dashboards in Looker Studio, integrate with Cloud Storage, and optimize query slot consumption.',
    duration: '6 - 8 Weeks',
    mode: 'Online Live & Classroom',
    timing: 'Morning 7:30 AM & Evening 8:30 PM',
    nextBatch: 'Upcoming Monday (Limited Seats)',
    freeSessions: 'First 4 Sessions FREE',
    keyTopics: [
      'BigQuery Serverless Architecture',
      'Advanced BigQuery SQL & Analytics',
      'Partitioning & Clustering Strategies',
      'Google Cloud Storage (GCS) Integration',
      'Cloud Dataflow & Pub/Sub Integration',
      'Looker Studio & Enterprise BI Tools',
      'Real-Time Analytics & BI Engine',
      'Cost & Slot Optimization Techniques',
      'End-to-End Enterprise Analytics Projects'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: BigQuery Architecture & GCP Data Services',
        topics: [
          'Colossus distributed storage, Dremel execution engine, Borg resource allocator',
          'Datasets, tables, views, authorized views, and IAM security',
          'On-demand pricing vs Slot commitments and capacity management'
        ]
      },
      {
        moduleTitle: 'Module 2: Data Loading & Storage Optimization',
        topics: [
          'Ingesting data from Cloud Storage, Google Drive, and streaming API',
          'Table partitioning by ingestion time, timestamp, and integer range',
          'Clustering columns for multi-column query filtering & pruning'
        ]
      },
      {
        moduleTitle: 'Module 3: Advanced BigQuery SQL & Real-Time Processing',
        topics: [
          'Analytic window functions, user-defined functions (UDFs) in SQL & JS',
          'Working with ARRAY and STRUCT nested/repeated fields',
          'Real-time streaming ingestion with Pub/Sub and Cloud Dataflow'
        ]
      },
      {
        moduleTitle: 'Module 4: BigQuery ML & Business Intelligence',
        topics: [
          'In-database machine learning using BigQuery ML (BQML)',
          'BigQuery BI Engine for sub-second dashboard performance',
          'Connecting and building interactive dashboards in Looker Studio & Power BI'
        ]
      }
    ],
    realTimeProjects: [
      {
        title: 'Petabyte-Scale Digital Ads Performance Warehouse',
        description: 'Analyzing user click streams, conversions, and attribution models with partitioned tables and BI Engine acceleration.'
      },
      {
        title: 'Real-Time Fraud Detection Pipeline on GCP',
        description: 'Streaming transaction logs via Pub/Sub to Dataflow, loading into BigQuery with automated alert queries.'
      }
    ],
    careerRoles: [
      'GCP Data Engineer',
      'BigQuery Specialist',
      'Cloud Analytics Consultant',
      'Enterprise BI Engineer'
    ],
    tools: ['Google BigQuery', 'Cloud Storage', 'Cloud Dataflow', 'Cloud Pub/Sub', 'Looker Studio', 'BQML', 'Python', 'SQL']
  },
  {
    id: 'talend',
    slug: 'talend',
    title: 'Talend Open Studio & Talend Cloud',
    badge: 'Enterprise ETL Specialist',
    category: 'Cloud & Analytics',
    shortDesc: 'Master ETL/ELT pipelines, Talend Open Studio for Data Integration, Talend Cloud, API integration, CDC, data quality, and enterprise scheduling.',
    fullDesc: 'Talend remains an industry staple for data integration across banking, healthcare, and retail enterprises. This hands-on program covers Talend Open Studio (TOS), Talend Cloud (TMC), CDC, API integrations, context variables, and connecting diverse databases and cloud warehouses.',
    duration: '6 - 8 Weeks',
    mode: 'Online Live & Classroom',
    timing: 'Morning 7:30 AM & Evening 8:30 PM',
    nextBatch: 'Upcoming Monday (Limited Seats)',
    freeSessions: 'First 4 Sessions FREE',
    keyTopics: [
      'Talend Open Studio (TOS) & Architecture',
      'Talend Cloud Management Console (TMC)',
      'ETL / ELT Pipeline Development',
      'API Integration (REST / SOAP)',
      'Change Data Capture (CDC)',
      'Data Quality & Profiling',
      'Job Scheduling, TAC & TMC Execution',
      'Context Variables & Metadata Repository',
      'Real-Time Cloud ETL Projects'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Talend Architecture & Studio Fundamentals',
        topics: [
          'Talend GUI, Repository, Workspace, Designer, Palette',
          'Component lifecycles: tFileInputDelimited, tMap, tLogRow, tFileOutput',
          'Connecting to Oracle, MySQL, SQL Server, and Cloud data lakes'
        ]
      },
      {
        moduleTitle: 'Module 2: Advanced Transformations with tMap',
        topics: [
          'tMap expressions, joins (Inner, Left Outer, Unique/All match)',
          'Handling rejects, filters, variable declarations within tMap',
          'Routine creation and Java custom functions in Talend'
        ]
      },
      {
        moduleTitle: 'Module 3: Error Handling & Context Management',
        topics: [
          'Context parameters for Dev, Test, Prod environments',
          'Trigger links: OnSubjobOk, OnComponentOk, RunIf, OnSubjobError',
          'Logging, auditing, and alerting with tLogCatcher, tStatCatcher'
        ]
      },
      {
        moduleTitle: 'Module 4: Cloud Integration, CDC & Talend Cloud',
        topics: [
          'Connecting Talend to AWS S3, Snowflake, and Salesforce',
          'Change Data Capture (CDC) mechanisms and incremental loading',
          'Publishing jobs to Talend Cloud (TMC), Remote Engines, and scheduling'
        ]
      }
    ],
    realTimeProjects: [
      {
        title: 'Banking Core Transaction Migration to Cloud Warehouse',
        description: 'End-to-end ETL processing legacy flat files, Oracle transactional tables, and securely loading into Snowflake with automated email alerts.'
      },
      {
        title: 'Salesforce & ERP Customer 360 Synchronization',
        description: 'REST API extraction from Salesforce, data deduplication, cleansing, and loading into enterprise analytics data marts.'
      }
    ],
    careerRoles: [
      'Talend ETL Developer',
      'Data Integration Specialist',
      'Talend Cloud Engineer',
      'Enterprise Data Consultant'
    ],
    tools: ['Talend Open Studio', 'Talend Cloud', 'TMC', 'Java', 'SQL', 'Snowflake', 'Oracle', 'AWS S3']
  },
  {
    id: 'dotnet-fullstack',
    slug: 'dotnet-fullstack',
    title: '.NET Full Stack Development',
    badge: 'Enterprise Software Engineering',
    category: 'Software Engineering',
    shortDesc: 'Build modern enterprise applications with C#, ASP.NET Core, SQL Server, Angular/React, Entity Framework Core, Web APIs, and Microservices.',
    fullDesc: 'Learn the powerhouse stack that powers Fortune 500 enterprise software. From object-oriented C# and ASP.NET Core Web APIs to modern frontend frameworks (Angular & React), Entity Framework Core, SQL Server database design, and Microservices architecture.',
    duration: '10 - 12 Weeks',
    mode: 'Online Live & Classroom',
    timing: 'Morning 7:30 AM & Evening 8:30 PM',
    nextBatch: 'Upcoming Monday (Limited Seats)',
    freeSessions: 'First 4 Sessions FREE',
    keyTopics: [
      'C# Language Fundamentals to Advanced',
      'ASP.NET Core Web API & MVC',
      'SQL Server Database Design & Stored Procedures',
      'Entity Framework (EF) Core & LINQ',
      'Angular & React Frontend Development',
      'RESTful APIs & Authentication (JWT, Identity)',
      'Microservices Architecture & Docker',
      'Unit Testing, CI/CD & Azure Deployment',
      'Full-Stack Enterprise Capstone Projects'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: C# Object-Oriented Programming & LINQ',
        topics: [
          'OOP principles: Encapsulation, Inheritance, Polymorphism, Abstraction',
          'Generics, Delegates, Events, Async/Await asynchronous programming',
          'LINQ to Objects, LINQ to Entities, performance considerations'
        ]
      },
      {
        moduleTitle: 'Module 2: ASP.NET Core Web API & Backend Architecture',
        topics: [
          'Clean Architecture / Repository Pattern, Dependency Injection',
          'Middleware pipeline, routing, request validation with FluentValidation',
          'Entity Framework Core: Code-First migrations, DbContext, optimizations'
        ]
      },
      {
        moduleTitle: 'Module 3: Database Engineering with SQL Server',
        topics: [
          'Relational database modeling, normalization, indexes, execution plans',
          'Stored procedures, triggers, views, transactions (ACID), and tuning'
        ]
      },
      {
        moduleTitle: 'Module 4: Frontend Development (Angular & React)',
        topics: [
          'Components, directives, services, RxJS observables in Angular',
          'React functional components, hooks, state management, Axios API calls',
          'Responsive UI with Tailwind CSS and modern component libraries'
        ]
      },
      {
        moduleTitle: 'Module 5: Security, Microservices & Azure Cloud',
        topics: [
          'JWT authentication, Role-Based Access Control (RBAC), ASP.NET Identity',
          'Microservices fundamentals, API Gateway, Docker containerization',
          'Deploying full-stack web applications to Microsoft Azure App Services'
        ]
      }
    ],
    realTimeProjects: [
      {
        title: 'Enterprise Healthcare Appointment & Billing Portal',
        description: 'ASP.NET Core Web API backend with EF Core, Angular frontend, JWT security, and SQL Server database with real-time notifications.'
      },
      {
        title: 'B2B Inventory & Order Management System',
        description: 'Microservices-based solution with C#, Docker, React dashboard, Redis caching, and automated Azure CI/CD pipelines.'
      }
    ],
    careerRoles: [
      '.NET Full Stack Developer',
      'ASP.NET Core Web Developer',
      'C# Backend Engineer',
      'Enterprise Software Consultant'
    ],
    tools: ['C#', 'ASP.NET Core', 'SQL Server', 'EF Core', 'Angular', 'React', 'TypeScript', 'Docker', 'Azure', 'Git']
  }
];

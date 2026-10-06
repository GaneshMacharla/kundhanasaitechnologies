export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Admissions & Batches' | 'Placement & Projects';
  note?: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What courses do you offer at Kundhana Sai Technologies?',
    answer: 'We offer intensive, job-oriented training in high-demand technologies: Generative AI & Agentic AI, Data Engineering (PySpark, Databricks, Airflow), Snowflake Cloud Data Warehouse, Google BigQuery, Talend Open Studio & Cloud, and .NET Full Stack Development. We also deliver customized enterprise corporate training.'
  },
  {
    id: 'faq-2',
    category: 'Placement & Projects',
    question: 'Do you provide placement assistance?',
    answer: 'Yes. Every regular training program includes dedicated placement assistance. This comprises industry-tailored resume building, technical mock interviews, HR interview preparation, continuous job alerts, and post-placement job support during your initial project ramp-up.'
  },
  {
    id: 'faq-3',
    category: 'Admissions & Batches',
    question: 'Are classes available online or in a classroom?',
    answer: 'Both options are available! We offer live interactive online sessions via Zoom/Teams with screen sharing, live doubt clarification, and recorded backups. We also provide classroom training at our Hyderabad centre in KPHB.'
  },
  {
    id: 'faq-4',
    category: 'Placement & Projects',
    question: 'Do you provide real-time enterprise projects?',
    answer: 'Yes. Our core philosophy is practical, outcome-driven learning. You build genuine enterprise-grade projects (e.g., automated RAG pipelines, clickstream Delta Lake lakehouses, and microservices architectures) rather than simple toy exercises.'
  },
  {
    id: 'faq-5',
    category: 'Admissions & Batches',
    question: 'Are free demo classes available?',
    answer: 'Yes! Our current promotional offer includes the First 4 Sessions FREE. You can attend the live interactive sessions, evaluate the trainer’s teaching methodology, review the curriculum, and only then proceed with final enrollment.'
  },
  {
    id: 'faq-6',
    category: 'Admissions & Batches',
    question: 'What are the batch timings?',
    answer: 'We run multiple batches to accommodate both college graduates and working professionals: Morning Batch at 7:30 AM (IST) and Evening Batch at 8:30 PM (IST). Weekend sessions and self-paced mentoring options are also available.'
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'Do you provide course completion certificates?',
    answer: 'Students receive an industry-recognized Certificate of Completion and Project Experience letter upon successful submission of capstone projects and assessments. (Note: Specific accreditation details to be confirmed with admissions office).'
  },
  {
    id: 'faq-8',
    category: 'Placement & Projects',
    question: 'What is Job Support and how does it work?',
    answer: 'Job support is continuous guidance provided once you transition into a client project or new role. Our experienced mentors guide you through project onboarding, architecture understanding, and troubleshooting real-time hurdles during your initial months.'
  },
  {
    id: 'faq-9',
    category: 'General',
    question: 'I come from a non-IT background. Can I switch careers into these technologies?',
    answer: 'Absolutely. Many of our learners transition from non-IT, civil, mechanical, or support backgrounds. We start with fundamental programming concepts and databases before progressing to advanced frameworks, backed by one-on-one doubt clarification.'
  }
];

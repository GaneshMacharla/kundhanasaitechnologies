export interface CorporateLocation {
  city: string;
  isHeadquarter: boolean;
  facilityType: string;
  addressLines: string[];
  landmark?: string;
  pincode: string;
  state: string;
  country: string;
  verificationStatus: 'Verified Corporate Registration' | 'Pending Final Client Sign-off';
  notes?: string;
  alternateAddressLines?: string[];
  alternatePincode?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  verified: boolean;
  note: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  summary: string;
  detail: string;
  iconName: string;
}

export interface CorporateConfig {
  companyName: string;
  legalName: string;
  tagline: string;
  establishedYear: number;
  cin: string;
  cinVerified: boolean;
  corporateStatus: string;
  email: {
    primary: string;
    support: string;
    hr: string;
    inquiries: string;
    careers: string;
  };
  phoneNumbers: {
    display: string;
    value: string;
    type: string;
  }[];
  whatsappNumber: {
    display: string;
    value: string;
    prefilledMessage: string;
  };
  locations: CorporateLocation[];
  leadership: LeadershipMember[];
  valuePropositions: ValueProposition[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const CORPORATE_DATA: CorporateConfig = {
  companyName: 'Kundhana Sai IT Solutions',
  legalName: 'Kundhana Sai IT Solutions Pvt. Ltd.',
  tagline: 'Engineering Intelligence. Enabling Transformation.',
  establishedYear: 2018,
  cin: 'U72200TG2018PTC126276',
  cinVerified: true,
  corporateStatus: 'Active Private Limited Company (Incorporated 2018 under RoC Hyderabad)',
  email: {
    primary: 'info@kundhanasai.in',
    support: 'support@kundhanasai.in',
    hr: 'hr@kundhanasai.in',
    inquiries: 'info@kundhanasai.in',
    careers: 'hr@kundhanasai.in'
  },
  phoneNumbers: [
    {
      display: '+91 97004 65570',
      value: '+919700465570',
      type: 'Primary Enterprise Hotline'
    },
    {
      display: '+91 81230 77723',
      value: '+918123077723',
      type: 'Consulting & WhatsApp Desk'
    }
  ],
  whatsappNumber: {
    display: '+91 81230 77723',
    value: '918123077723',
    prefilledMessage: 'Hi Kundhana Sai IT Solutions, I would like to inquire about your enterprise technology services and solutions.'
  },
  locations: [
    {
      city: 'Hyderabad',
      isHeadquarter: true,
      facilityType: 'Corporate Headquarters & Center of Excellence',
      addressLines: [
        'Plot No. 45, KPHB 9th Phase, Nexus Mall Road',
        'Lakshmi Krishna Plaza, Beside Akruthi, Kukatpally'
      ],
      landmark: 'Beside Akruthi, near Nexus Mall Road',
      pincode: '500072',
      state: 'Telangana',
      country: 'India',
      verificationStatus: 'Verified Corporate Registration',
      notes: 'Corporate office documentation reflects KPHB Phase 9 location. PIN code 500072 / 500085 variant documented.',
      alternateAddressLines: [
        'Lakshmikrishnaplaza, 2nd Floor, 9th Phase Road',
        'KPHB Phase 9, Kukatpally'
      ],
      alternatePincode: '500085'
    },
    {
      city: 'Vijayawada',
      isHeadquarter: false,
      facilityType: 'Regional Technology Center',
      addressLines: [
        '1st Floor, D.No. 59A-8/10-2',
        'Behind Ushodaya Super Market, Guru Nanak Colony'
      ],
      landmark: 'Behind Ushodaya Super Market, Guru Nanak Colony',
      pincode: '520007',
      state: 'Andhra Pradesh',
      country: 'India',
      verificationStatus: 'Pending Final Client Sign-off',
      notes: 'Regional facility details subject to ongoing operational verification.'
    }
  ],
  leadership: [
    {
      name: 'Venkata Sai Subhashini Naidu',
      role: 'Director',
      bio: 'Corporate leadership overseeing organizational governance and strategic initiatives.',
      verified: false,
      note: 'MCA director record documented. Profile details pending final client executive review.'
    },
    {
      name: 'Bhagya Gulgothulu',
      role: 'Director',
      bio: 'Directorial management supporting business operations and enterprise relations.',
      verified: false,
      note: 'MCA director record documented. Profile details pending final client executive review.'
    }
  ],
  valuePropositions: [
    {
      id: 'client-focused',
      title: 'Client-Focused Solutions',
      summary: 'Tailored technology architectures aligned precisely to organizational business goals.',
      detail: 'We reject generic templates. Every engagement begins with a deep exploration of your operational realities, technical debt, and business KPIs to deliver purpose-built systems that create measurable enterprise value.',
      iconName: 'Target'
    },
    {
      id: 'engineering-expertise',
      title: 'Engineering Expertise',
      summary: 'Rigorous technical competencies across modern data, AI, cloud, and enterprise stacks.',
      detail: 'Our engineering teams bring deep hands-on expertise spanning generative AI frameworks, high-throughput lakehouses, distributed microservices, and mission-critical ERP integrations.',
      iconName: 'Cpu'
    },
    {
      id: 'innovation-driven',
      title: 'Innovation-Driven Approach',
      summary: 'Continuous adoption of emerging architectural paradigms that keep clients ahead.',
      detail: 'From agentic workflows and retrieval-augmented generation (RAG) to modern cloud data fabrics, we integrate proven emerging technologies with pragmatic enterprise stability.',
      iconName: 'Zap'
    },
    {
      id: 'reliable-partnership',
      title: 'Reliable Partnership',
      summary: 'Transparent delivery milestones, dependable governance, and enduring commitment.',
      detail: 'We build relationships rooted in accountability. With disciplined sprint governance, strict security compliance, and direct senior engineer access, we stand as your dedicated long-term technology ally.',
      iconName: 'ShieldCheck'
    }
  ],
  stats: [
    {
      label: 'Established Heritage',
      value: '2018',
      description: 'Years of dedicated IT services & consulting delivery'
    },
    {
      label: 'Core Practices',
      value: '7',
      description: 'Specialized enterprise technology capability domains'
    },
    {
      label: 'Engagement Focus',
      value: '100%',
      description: 'Committed to business outcomes & architectural rigor'
    },
    {
      label: 'Delivery Model',
      value: 'Global Hybrid',
      description: 'Flexible onshore architecture and offshore engineering'
    }
  ]
};

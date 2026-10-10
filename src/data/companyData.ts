export interface LocationInfo {
  city: string;
  isHeadquarter: boolean;
  addressLines: string[];
  landmark?: string;
  pincode: string;
  state: string;
  country: string;
  clientVerificationNote?: string;
  hasAlternateOption?: boolean;
  alternateAddressLines?: string[];
  alternatePincode?: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear: number;
  cin: string;
  cinVerified: boolean;
  directors: {
    name: string;
    verified: boolean;
    note: string;
  }[];
  phoneNumbers: {
    display: string;
    value: string;
    note: string;
  }[];
  whatsappNumber: {
    display: string;
    value: string; // international format for click-to-chat
    prefilledMessage: string;
  };
  email: {
    general: string;
    support: string;
    hr: string;
    training: string;
    verified: boolean;
  };
  locations: LocationInfo[];
  batchTimings: {
    morning: string;
    evening: string;
    freeSessionsOffer: string;
  };
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const COMPANY_DATA: CompanyConfig = {
  name: 'Kundhana Sai Technologies',
  legalName: 'Kundhana Sai IT Solutions Pvt. Ltd.',
  tagline: 'Building careers. Empowering businesses. Delivering technology.',
  establishedYear: 2018,
  cin: 'U72200TG2018PTC126276',
  cinVerified: true, // From MCA registered data in material
  directors: [
    {
      name: 'Venkata Sai Subhashini Naidu',
      verified: false,
      note: 'CONFIRM_WITH_CLIENT before final corporate publication'
    },
    {
      name: 'Bhagya Gulgothulu',
      verified: false,
      note: 'CONFIRM_WITH_CLIENT before final corporate publication'
    }
  ],
  phoneNumbers: [
    {
      display: '+91 97004 65570',
      value: '+919700465570',
      note: 'Primary enterprise & admissions line'
    },
    {
      display: '+91 81230 77723',
      value: '+918123077723',
      note: 'Consulting & WhatsApp Desk'
    }
  ],
  whatsappNumber: {
    display: '+91 81230 77723',
    value: '918123077723',
    prefilledMessage: 'Hi Kundhana Sai Technologies, I would like to connect regarding your services.'
  },
  email: {
    general: 'info@kundhanasai.in',
    support: 'support@kundhanasai.in',
    hr: 'hr@kundhanasai.in',
    training: 'admissions@kundhanasai.in',
    verified: true
  },
  locations: [
    {
      city: 'Hyderabad',
      isHeadquarter: true,
      addressLines: [
        'Plot No. 45, KPHB 9th Phase, Nexus Mall Road',
        'Beside Akruthi, Lakshmi Krishna Plaza, Kukatpally'
      ],
      landmark: 'Beside Akruthi, near Nexus Mall Road',
      pincode: '500072',
      state: 'Telangana',
      country: 'India',
      clientVerificationNote: 'VERIFY_WITH_CLIENT_ADDRESS — Promotional materials show two slight variants in KPHB Phase 9 (PIN 500072 vs 500085). Confirmed address will be finalized for production.',
      hasAlternateOption: true,
      alternateAddressLines: [
        'Lakshmikrishnaplaza, 2nd Floor, 9th Phase Road',
        'KPHB Phase 9, Kukatpally'
      ],
      alternatePincode: '500085'
    },
    {
      city: 'Vijayawada',
      isHeadquarter: false,
      addressLines: [
        '1st Floor, D.No. 59A-8/10-2',
        'Behind Ushodaya Super Market, Guru Nanak Colony'
      ],
      landmark: 'Behind Ushodaya Super Market, Guru Nanak Colony',
      pincode: '520007',
      state: 'Andhra Pradesh',
      country: 'India',
      clientVerificationNote: 'CONFIRM_WITH_CLIENT before production release'
    }
  ],
  batchTimings: {
    morning: '7:30 AM (IST)',
    evening: '8:30 PM (IST)',
    freeSessionsOffer: 'First 4 Sessions FREE'
  },
  stats: [
    {
      label: 'Years in Business',
      value: '9+',
      sublabel: 'Established IT excellence since 2018'
    },
    {
      label: 'Placement Support',
      value: 'Dedicated',
      sublabel: 'Comprehensive interview & job assistance'
    },
    {
      label: 'Tech Programs',
      value: '6+',
      sublabel: 'High-demand industry stacks'
    },
    {
      label: 'Training Approach',
      value: '100% Real-Time',
      sublabel: 'Practical enterprise capstone projects'
    }
  ]
};

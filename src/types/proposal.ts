export type ServiceType = 'Social Media Marketing' | 'SEO' | 'Website Development' | 'Custom';

export interface ProposalSection {
  id: string;
  title: string;
  content: string; // rich text or markdown/html
  enabled: boolean;
  order: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  billingFrequency: string; // e.g. "Monthly", "One-time"
  features: string[];
}

export interface ProposalTemplate {
  serviceName: ServiceType;
  sections: ProposalSection[];
  packages: PricingPackage[];
}

export interface ClientData {
  name: string;
  contactPerson: string;
  industry: string;
  location: string;
  website: string;
  email: string;
  phone: string;
  proposalDate: string;
  validUntil: string;
  logo: string | null; // base64 or URL
  coverImage: string | null;
  requirements: string;
}

export interface MasterCompanyData {
  name: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  logo: string | null;
  about: string;
  terms: string;
}

export interface ProposalState {
  id: string;
  proposalNumber: string;
  service: ServiceType;
  client: ClientData;
  sections: ProposalSection[];
  selectedPackageId: string | null;
  customPrice: string;
  addOns: string[];
}

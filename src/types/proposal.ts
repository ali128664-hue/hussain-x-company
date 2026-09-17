// ─── Core Enums & Primitive Types ───────────────────────────────────────────

export type ServiceType =
  | 'Social Media Marketing'
  | 'SEO'
  | 'Google Ads / PPC'
  | 'Meta Ads'
  | 'Website Development'
  | 'WordPress Development'
  | 'Shopify Development'
  | 'Graphic Design'
  | 'Content Marketing'
  | 'Complete Digital Marketing'
  | 'Custom Proposal';

export type Currency = 'PKR' | 'USD';
export type BillingFrequency = 'Monthly' | 'One-time' | 'Per Project' | 'TBD';

// ─── Section ─────────────────────────────────────────────────────────────────

export interface ProposalSection {
  id: string;
  title: string;
  content: string;
  enabled: boolean;
  order: number;
  locked?: boolean; // locked sections can't be reordered/deleted
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price_pkr: number;   // 0 = Custom
  price_usd: number;   // 0 = Custom
  billingFrequency: BillingFrequency;
  features: PackageFeature[];
  recommended?: boolean;
  color?: string; // accent color for this tier
}

// ─── Add-ons ─────────────────────────────────────────────────────────────────

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price_pkr: number;
  price_usd: number;
}

// ─── Service Template ────────────────────────────────────────────────────────

export interface ProposalTemplate {
  serviceName: ServiceType;
  icon: string;           // emoji icon
  tagline: string;        // short service tagline
  sections: ProposalSection[];
  packages: PricingPackage[];
  addOns: AddOn[];
  kpis: string[];         // key metrics for this service
  process: { step: number; title: string; description: string }[];
  deliverables: string[];
}

// ─── Client Data ─────────────────────────────────────────────────────────────

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
  logo: string | null;        // base64
  coverImage: string | null;  // base64
  requirements: string;
}

// ─── Master Company Data ─────────────────────────────────────────────────────

export interface MasterCompanyData {
  name: string;
  website: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  logo: string | null;
  about: string;
  mission: string;
  terms: string;
  paymentTerms: string;
  cta: string;
}

// ─── Full Proposal State ──────────────────────────────────────────────────────

export interface ProposalState {
  id: string;
  proposalNumber: string;
  service: ServiceType;
  currency: Currency;
  client: ClientData;
  sections: ProposalSection[];
  selectedPackageId: string | null;
  customPrice: string;
  selectedAddOnIds: string[];
  notes: string; // internal notes, not shown in PDF
}

// ─── Saved Proposal (for list) ───────────────────────────────────────────────

export interface SavedProposal {
  id: string;
  proposalNumber: string;
  clientName: string;
  service: ServiceType;
  date: string;
  snapshot: ProposalState;
}

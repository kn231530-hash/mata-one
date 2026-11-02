export type PlanCategory = 'business' | 'consumer' | 'single-app';

export interface ChannelInfo {
  id: string;
  name: string;
  icon: 'whatsapp' | 'instagram' | 'messenger' | 'telegram' | 'webchat' | 'bot' | 'facebook';
  color: string;
  status: 'active' | 'synced' | 'ready';
  tag: string;
}

export interface BenefitStep {
  step: string;
  title: string;
  bullets: string[];
}

export interface MetaOnePlan {
  id: string;
  name: string;
  category: PlanCategory;
  badge: string;
  badgeType: 'primary' | 'secondary' | 'emerald' | 'amber';
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  isPopular?: boolean;
  appBadge?: string;
  metaVerifiedIncluded: boolean;
  channels: ChannelInfo[];
  keyPerks: string[];
  benefitSteps: BenefitStep[];
  features: string[];
  ctaLabel: string;
  aiLimits: string;
  storageBackup?: string;
}

export interface VerificationProfile {
  businessName: string;
  legalEntity: string;
  category: string;
  officialPhone: string;
  instagramHandle: string;
  domainUrl: string;
  metaVerificationId: string;
  isVerified: boolean;
  trustScore: number;
  issuedDate: string;
}

export interface ChatMessage {
  id: string;
  sender: 'customer' | 'agent' | 'system';
  text: string;
  time: string;
  channel: 'whatsapp' | 'instagram' | 'webchat' | 'facebook';
  confidenceScore?: number;
  verified?: boolean;
}

import React, { useState } from 'react';
import { VerifiedBadge } from './VerifiedBadge';
import { Check, ChevronRight, ChevronDown, Calculator, Sparkles, HelpCircle } from 'lucide-react';

interface ComparisonMatrixScreenProps {
  onSelectPlan: (tierId: string) => void;
}

export const ComparisonMatrixScreen: React.FC<ComparisonMatrixScreenProps> = ({
  onSelectPlan,
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    channels: true,
    aiEngine: true,
    trustSecurity: true,
    enterprise: false,
  });

  // ROI Calculator states
  const [monthlyInquiries, setMonthlyInquiries] = useState(15000);
  const [supportRepCost, setSupportRepCost] = useState(3200);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ROI math
  const repsNeeded = Math.max(1, Math.ceil(monthlyInquiries / 1800));
  const currentCost = repsNeeded * supportRepCost;
  const wistabPlanCost = monthlyInquiries > 25000 ? 239 : monthlyInquiries > 5000 ? 99 : 39;
  const monthlySavings = currentCost - wistabPlanCost;
  const hoursSaved = Math.round(monthlyInquiries * 0.12);

  const matrixSections = [
    {
      id: 'channels',
      title: 'Connected Channels & Inbound Coverage',
      description: 'Native official API bridges across consumer messaging applications',
      rows: [
        {
          feature: 'Official WhatsApp Cloud API',
          tooltip: 'Direct tier-certified Meta infrastructure with no ban risks',
          core: 'Single Number',
          advanced: '2 Numbers Included',
          premium: 'Unlimited Cluster',
        },
        {
          feature: 'Instagram Direct & Story Mentions',
          tooltip: 'Respond autonomously to story tags, reel shares, and direct messages',
          core: false,
          advanced: true,
          premium: true,
        },
        {
          feature: 'Facebook Messenger & Page Chat',
          tooltip: 'Unified customer records across Facebook business assets',
          core: false,
          advanced: true,
          premium: true,
        },
        {
          feature: 'Telegram Bot API v7',
          tooltip: 'Full support for inline keyboards, media, and broadcast channels',
          core: false,
          advanced: 'Add-on ($19/mo)',
          premium: true,
        },
        {
          feature: 'Web Chat Embed SDK',
          tooltip: 'Ultra-lightweight 8kb script with custom branding & CSS variables',
          core: true,
          advanced: true,
          premium: true,
        },
      ],
    },
    {
      id: 'aiEngine',
      title: 'Neural Engine & Conversational Intelligence',
      description: 'Model parameters, inference speeds, and RAG knowledge retrieval',
      rows: [
        {
          feature: 'Underlying Model Architecture',
          tooltip: 'State of the art multimodal reasoning engines',
          core: 'Gemini 2.5 Flash',
          advanced: 'Gemini 2.5 Flash + Neural Edge',
          premium: 'Bespoke Fine-Tuned Weights',
        },
        {
          feature: 'Knowledge Base Document Capacity',
          tooltip: 'Upload PDFs, Notion pages, website URLs, and internal standard SOPs',
          core: '25 Documents (5MB)',
          advanced: '250 Documents + URL Crawl',
          premium: 'Unlimited Vectors & Realtime RAG',
        },
        {
          feature: 'Response Latency Guarantee',
          tooltip: 'Time-to-first-token delivered to the end customer',
          core: '< 450ms',
          advanced: '< 180ms',
          premium: '< 90ms Global Edge',
        },
        {
          feature: 'Cross-Channel Context Memory',
          tooltip: 'Customer identified across both WhatsApp and Instagram seamlessly',
          core: 'Single Session',
          advanced: '30-Day Omnichannel Memory',
          premium: 'Permanent Unified Profile',
        },
        {
          feature: 'Autonomous Stripe & In-Chat Checkout',
          tooltip: 'Generate dynamic payment links and catalog items directly in chat',
          core: false,
          advanced: true,
          premium: true,
        },
      ],
    },
    {
      id: 'trustSecurity',
      title: 'Verified Trust & Identity Protection',
      description: 'Social verification badges, cryptographic audit trails, and compliance',
      rows: [
        {
          feature: 'Scalloped Blue Verified Entity Badge',
          tooltip: 'Authentic Meta-style verified rosette rendered in agent responses',
          core: false,
          advanced: true,
          premium: true,
        },
        {
          feature: 'Green Tick WhatsApp Official Assistance',
          tooltip: 'Assistance submitting Tier 2 Official Business Account review',
          core: false,
          advanced: 'Included Assistance',
          premium: 'Guaranteed Priority Submission',
        },
        {
          feature: 'Anti-Hallucination & Brand Guardrails',
          tooltip: 'Strict factual confidence filtering preventing rogue answers',
          core: 'Standard Guardrails',
          advanced: 'Strict Brand Thresholds',
          premium: 'Custom Compliance Rulesets',
        },
        {
          feature: 'Data Encryption & Zero-Training Guarantee',
          tooltip: 'Your proprietary business conversations are never used to train public LLMs',
          core: true,
          advanced: true,
          premium: true,
        },
      ],
    },
    {
      id: 'enterprise',
      title: 'Enterprise Architecture & Operations',
      description: 'Team permissions, webhook triggers, SLA guarantees, and support tiers',
      rows: [
        {
          feature: 'Included Admin & Operator Seats',
          tooltip: 'Team member logins with granular permission levels',
          core: '2 Seats',
          advanced: '5 Seats',
          premium: 'Unlimited Team Seats',
        },
        {
          feature: 'Human Handoff with Round-Robin Routing',
          tooltip: 'Live escalation to human agents when sentiment drops',
          core: 'Email Alert',
          advanced: 'Live Agent Desk + Push Alert',
          premium: 'Omnichannel CRM Routing',
        },
        {
          feature: 'Custom Webhooks & REST API',
          tooltip: 'Real-time JSON event dispatch for external ERP and databases',
          core: '5,000 calls/mo',
          advanced: '50,000 calls/mo',
          premium: 'Unmetered High-Throughput',
        },
        {
          feature: 'Service Level Agreement (SLA)',
          tooltip: 'Guaranteed network uptime and incident resolution speed',
          core: '99.5% Uptime',
          advanced: '99.9% Uptime',
          premium: '99.99% Financial Backed SLA',
        },
      ],
    },
  ];

  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <span className="w-5 h-5 rounded-full bg-[#0064E0] text-white flex items-center justify-center mx-auto shadow-xs">
          <Check className="w-3 h-3 stroke-[3]" />
        </span>
      ) : (
        <span className="text-slate-300 font-bold mx-auto text-sm">—</span>
      );
    }
    return <span className="text-xs font-semibold text-[#0F141C]">{val}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0064E0] text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full Architectural Breakdown</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-[800] text-[#0F141C] tracking-tight">
          Comprehensive Tier Capability Matrix
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Compare specifications side-by-side with locked header cards and expandable feature rows.
        </p>
      </div>

      {/* Side-by-Side Comparison Matrix Board */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
        {/* Sticky/Locked Header Bar */}
        <div className="grid grid-cols-12 bg-[#F9F9FF] border-b border-slate-200 p-4 sm:p-6 items-center">
          <div className="col-span-5 sm:col-span-6 pr-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Capability & Feature Specs
            </span>
            <div className="text-lg font-extrabold text-[#0F141C] mt-0.5">
              Compare All Tiers
            </div>
          </div>

          <div className="col-span-7 sm:col-span-6 grid grid-cols-3 gap-2 text-center">
            {/* Core Header */}
            <div className="p-2 sm:p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-[11px] font-bold text-slate-500 uppercase">Core</div>
              <div className="text-base sm:text-lg font-black text-[#0F141C]">$39<span className="text-[10px] font-normal text-slate-400">/mo</span></div>
              <button
                type="button"
                onClick={() => onSelectPlan('core')}
                className="mt-1.5 text-[10px] font-bold text-[#0064E0] hover:underline"
              >
                Select
              </button>
            </div>

            {/* Advanced Header (Highlighted) */}
            <div className="p-2 sm:p-3 rounded-xl bg-[#0064E0] text-white shadow-sm ring-2 ring-[#0064E0]/20">
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-200 flex items-center justify-center gap-1">
                <span>Advanced</span>
                <VerifiedBadge size="xs" />
              </div>
              <div className="text-base sm:text-lg font-black">$99<span className="text-[10px] font-normal text-blue-200">/mo</span></div>
              <button
                type="button"
                onClick={() => onSelectPlan('advanced')}
                className="mt-1.5 text-[10px] font-bold bg-white text-[#0064E0] px-2 py-0.5 rounded-full shadow-xs"
              >
                Choose
              </button>
            </div>

            {/* Premium Header */}
            <div className="p-2 sm:p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-[11px] font-bold text-[#007A54] uppercase">Premium</div>
              <div className="text-base sm:text-lg font-black text-[#0F141C]">$239<span className="text-[10px] font-normal text-slate-400">/mo</span></div>
              <button
                type="button"
                onClick={() => onSelectPlan('premium')}
                className="mt-1.5 text-[10px] font-bold text-[#007A54] hover:underline"
              >
                Deploy
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Accordion Sections */}
        <div className="divide-y divide-slate-100">
          {matrixSections.map((sec) => {
            const isOpen = expandedSections[sec.id];
            return (
              <div key={sec.id} className="transition-all">
                {/* Accordion Header Row */}
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/60 transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-[#0064E0]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                    <div>
                      <span className="text-sm font-bold text-[#0F141C]">
                        {sec.title}
                      </span>
                      <span className="hidden sm:inline-block text-xs text-slate-500 ml-2">
                        · {sec.description}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#0064E0]">
                    {isOpen ? 'Collapse' : 'Expand'}
                  </span>
                </button>

                {/* Rows Inside Section */}
                {isOpen && (
                  <div className="divide-y divide-slate-100">
                    {sec.rows.map((row, rIdx) => (
                      <div
                        key={rIdx}
                        className="grid grid-cols-12 px-5 py-3.5 items-center hover:bg-blue-50/20 transition-colors text-xs"
                      >
                        <div className="col-span-5 sm:col-span-6 pr-4">
                          <div className="font-semibold text-[#0F141C]">
                            {row.feature}
                          </div>
                          <div className="text-[11px] text-slate-400 font-normal">
                            {row.tooltip}
                          </div>
                        </div>

                        <div className="col-span-7 sm:col-span-6 grid grid-cols-3 gap-2 text-center items-center">
                          <div className="text-center">{renderCell(row.core)}</div>
                          <div className="text-center font-bold">{renderCell(row.advanced)}</div>
                          <div className="text-center">{renderCell(row.premium)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Enterprise ROI & Efficiency Calculator */}
      <div className="bg-gradient-to-br from-white to-[#F0F3FF] rounded-2xl border border-blue-200/80 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-[#0064E0] text-white flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-[800] text-[#0F141C]">
            Enterprise ROI & Cost Savings Calculator
          </h3>
        </div>
        <p className="text-xs text-slate-600 mb-6 max-w-2xl">
          Estimate your monthly financial return and support team hours saved when deploying
          autonomous omnichannel agents compared to traditional manual staffing.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0F141C] mb-1.5">
                <span>Estimated Monthly Inbound Inquiries</span>
                <span className="text-[#0064E0] font-black">{monthlyInquiries.toLocaleString()} msgs</span>
              </div>
              <input
                type="range"
                min="1000"
                max="80000"
                step="1000"
                value={monthlyInquiries}
                onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                className="w-full accent-[#0064E0] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1,000 (Solo / Micro)</span>
                <span>25,000 (Mid-Market)</span>
                <span>80,000+ (High Volume)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-[#0F141C] mb-1.5">
                <span>Average Support Rep Monthly Salary / Cost</span>
                <span className="text-[#0064E0] font-black">${supportRepCost.toLocaleString()} / mo</span>
              </div>
              <input
                type="range"
                min="1500"
                max="6000"
                step="100"
                value={supportRepCost}
                onChange={(e) => setSupportRepCost(Number(e.target.value))}
                className="w-full accent-[#0064E0] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>$1,500 / rep</span>
                <span>$3,500 / rep</span>
                <span>$6,000 / rep</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase">
                Est. Monthly Net Savings
              </div>
              <div className="text-2xl font-black text-[#007A54] mt-1">
                ${monthlySavings.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {(repsNeeded * 0.85).toFixed(1)} FTEs automated
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase">
                Support Hours Reclaimed
              </div>
              <div className="text-2xl font-black text-[#0064E0] mt-1">
                {hoursSaved.toLocaleString()} hrs
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Instant 24/7 resolution
              </div>
            </div>

            <div className="col-span-2 p-3.5 rounded-xl bg-[#0F141C] text-white flex items-center justify-between">
              <div>
                <div className="text-xs font-bold">Recommended Plan</div>
                <div className="text-[11px] text-slate-300">
                  {monthlyInquiries > 25000 ? 'Premium Enterprise ($239/mo)' : monthlyInquiries > 5000 ? 'Advanced Tier ($99/mo)' : 'Core Tier ($39/mo)'}
                </div>
              </div>
              <button
                type="button"
                onClick={() => onSelectPlan(monthlyInquiries > 25000 ? 'premium' : monthlyInquiries > 5000 ? 'advanced' : 'core')}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0064E0] to-[#4D32FF] text-white text-xs font-bold shadow-xs hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

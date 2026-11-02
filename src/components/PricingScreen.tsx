import React, { useState } from 'react';
import { MetaOnePlan, PlanCategory } from '../types';
import { META_ONE_PLANS } from '../data/mockData';
import { VerifiedBadge } from './VerifiedBadge';
import { ChannelBadge } from './ChannelIcons';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, Layers, Link as LinkIcon, HardDrive, BrainCircuit } from 'lucide-react';

interface PricingScreenProps {
  onSelectPlan: (tier: MetaOnePlan) => void;
  onOpenFeatureShowcase: () => void;
  onOpenOmnichannelDemo: () => void;
  isMobileLayout?: boolean;
}

export const PricingScreen: React.FC<PricingScreenProps> = ({
  onSelectPlan,
  onOpenFeatureShowcase,
  onOpenOmnichannelDemo,
  isMobileLayout = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<PlanCategory>('business');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'GBP' ? '£' : '$';
  const currencyRate = currency === 'EUR' ? 0.92 : currency === 'GBP' ? 0.78 : 1;

  const filteredPlans = META_ONE_PLANS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Official Announcement Hero */}
      <section className="text-center pt-8 pb-8 sm:pt-12 sm:pb-12 px-4 max-w-4xl mx-auto">
        {/* News Announcement Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-5 cursor-pointer hover:border-[#0064E0]/40 transition-all" onClick={onOpenFeatureShowcase}>
          <VerifiedBadge size="sm" />
          <span className="text-xs font-bold text-[#0F141C]">
            Meta One Official Subscription Ecosystem
          </span>
          <span className="text-[10px] font-semibold text-[#0064E0] bg-blue-50 px-2 py-0.5 rounded-full flex items-center gap-1">
            <span>Explore Sep 2026 Features</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-[800] text-[#0F141C] tracking-tight leading-[1.14] mb-4">
          One Subscription.{' '}
          <span className="bg-gradient-to-r from-[#0064E0] via-[#5300D5] to-[#E1306C] bg-clip-text text-transparent">
            Instagram, WhatsApp, Facebook & Meta AI.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          Unlock native clickable links in Reels captions, official Meta Verified blue checkmarks,
          WhatsApp Plus 20 pinned chats & 2TB cloud vaults, plus Deep Reasoning Meta AI.
        </p>

        {/* Category Segmented Control (Business / Consumer / Single App) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="inline-flex p-1 rounded-2xl bg-[#EAEFFA] border border-slate-200/80 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveCategory('business')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'business'
                  ? 'bg-white text-[#0064E0] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F141C]'
              }`}
            >
              Creator & Business Tiers
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('consumer')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'consumer'
                  ? 'bg-white text-[#0064E0] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F141C]'
              }`}
            >
              Consumer & AI Bundles
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('single-app')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'single-app'
                  ? 'bg-white text-[#0064E0] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F141C]'
              }`}
            >
              Single-App Plus
            </button>
          </div>
        </div>

        {/* Billing Switcher & Currency */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#0F141C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#0064E0] to-[#4D32FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                billingCycle === 'annual' ? 'bg-white/20 text-white' : 'bg-[#00C389]/15 text-[#007A54]'
              }`}>
                Save 25%
              </span>
            </button>
          </div>

          <div className="hidden sm:inline-flex items-center text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1">
            <span className="mr-1.5">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as 'USD' | 'EUR' | 'GBP')}
              className="bg-transparent font-semibold text-[#0F141C] focus:outline-none cursor-pointer"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className={`${
            isMobileLayout
              ? 'flex flex-col gap-6 max-w-md mx-auto'
              : filteredPlans.length === 2
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto'
              : 'grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'
          }`}
        >
          {filteredPlans.map((tier) => {
            const isFeatured = tier.isPopular;
            const price = (
              (billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice) * currencyRate
            ).toFixed(2);

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-3xl bg-white transition-all duration-300 ${
                  isFeatured
                    ? 'border-2 border-[#0064E0] shadow-[0_16px_36px_-6px_rgba(0,100,224,0.18)] ring-4 ring-[#0064E0]/5 z-10'
                    : 'border border-slate-200/80 shadow-[0_8px_24px_-4px_rgba(15,20,28,0.05)] hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                {/* Plan Badge (Top-Anchored Pill) */}
                <div className="pt-6 px-6 sm:px-7">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-[700] tracking-wider uppercase px-2.5 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#0064E0] to-[#E1306C] text-white shadow-xs'
                          : tier.badgeType === 'emerald'
                          ? 'bg-[#007A54] text-white'
                          : 'bg-[#EAEFFA] text-[#004DB0]'
                      }`}
                    >
                      {tier.badge}
                    </span>

                    {/* Meta Verified Blue Badge Indicator */}
                    {tier.metaVerifiedIncluded && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#0064E0] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                        <VerifiedBadge size="xs" />
                        <span>Verified Badge</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-[800] text-[#0F141C] tracking-tight">
                    {tier.name}
                  </h3>

                  <p className="text-xs text-slate-500 font-normal mt-1 min-h-[34px]">
                    {tier.description}
                  </p>

                  {/* Bold Price Lockup */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-500">
                        {currencySymbol}
                      </span>
                      <span className="text-4xl sm:text-[44px] font-[800] text-[#0F141C] tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-medium text-slate-500 ml-1">
                        / month
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                      <span>{billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}</span>
                      <span className="font-semibold text-slate-600">{tier.aiLimits}</span>
                    </div>
                  </div>
                </div>

                {/* Integrated App Icon Pill Array */}
                <div className="px-6 sm:px-7 py-3 bg-[#F9F9FF] border-b border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Included Apps & Cloud Services
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {tier.channels.map((chan) => (
                      <ChannelBadge
                        key={chan.id}
                        channel={chan.icon}
                        name={chan.name}
                        tag={chan.tag}
                        status={chan.status}
                      />
                    ))}
                  </div>
                </div>

                {/* Benefit Step Rows */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Key Meta One Capabilities
                    </div>
                    {tier.benefitSteps.map((step) => (
                      <div key={step.step} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0064E0] to-[#6C27FF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-bold text-[#0F141C] leading-tight">
                            {step.title}
                          </h4>
                          <ul className="mt-1 space-y-0.5">
                            {step.bullets.map((b, idx) => (
                              <li key={idx} className="text-[11px] text-slate-500 leading-normal flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}

                    {/* Verified Checklist Rows */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="space-y-2">
                        {tier.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#0064E0] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span className="text-xs font-medium text-slate-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Primary Call to Action Button */}
                  <div className="mt-8 pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectPlan(tier)}
                      className={`w-full py-3 sm:py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#0064E0] via-[#4D32FF] to-[#E1306C] text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:brightness-105 active:scale-[0.98]'
                          : 'bg-white border-1.5 border-[#0064E0]/30 text-[#0064E0] hover:bg-[#0064E0]/5 active:scale-[0.98]'
                      }`}
                    >
                      <span>{tier.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 mt-2.5">
                      <span>{tier.storageBackup || 'Encrypted Cloud'}</span>
                      <span>·</span>
                      <span>Cancel Anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Discovery Banner linking to Meta One Inventions */}
      <section className="bg-gradient-to-r from-[#0064E0]/5 via-white to-[#E1306C]/5 border-y border-slate-200/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#E1306C] shadow-xs flex-shrink-0">
              <LinkIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-[#0F141C]">
                  New in Meta One: Clickable Reels Links & WhatsApp Plus
                </h4>
                <VerifiedBadge size="sm" />
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Explore interactive simulators for caption hyperlinks, story rewatch counters, and AI thinking mode.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenFeatureShowcase}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#0064E0] to-[#E1306C] shadow-sm hover:brightness-105 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Meta One Feature Demos</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

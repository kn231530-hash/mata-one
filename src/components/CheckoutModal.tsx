import React, { useState } from 'react';
import { MetaOnePlan } from '../types';
import { META_ONE_PLANS } from '../data/mockData';
import { VerifiedBadge } from './VerifiedBadge';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './ChannelIcons';
import { X, Check, ShieldCheck, Sparkles, Lock, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface CheckoutModalProps {
  initialPlanId?: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (planName: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  initialPlanId = 'advanced',
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [email, setEmail] = useState('');
  const [socialHandle, setSocialHandle] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0);

  // Add-on states
  const [addonVault, setAddonVault] = useState(false);
  const [addonPriorityDirect, setAddonPriorityDirect] = useState(true);

  if (!isOpen) return null;

  const currentPlan = META_ONE_PLANS.find((p) => p.id === selectedPlanId) || META_ONE_PLANS[1];
  const basePrice = billingCycle === 'annual' ? currentPlan.annualPrice : currentPlan.monthlyPrice;

  const vaultCost = addonVault ? 4.99 : 0;
  const directSupportCost = currentPlan.metaVerifiedIncluded ? 0 : addonPriorityDirect ? 2.99 : 0;

  let total = Number((basePrice + vaultCost + directSupportCost).toFixed(2));
  if (promoApplied) {
    total = Number((total * 0.9).toFixed(2));
  }

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'METAONE' || promoCode.trim().toUpperCase() === 'CREATOR') {
      setPromoApplied(true);
    }
  };

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDeploying(true);
    setDeployStep(1);

    setTimeout(() => setDeployStep(2), 500);
    setTimeout(() => setDeployStep(3), 1100);
    setTimeout(() => setDeployStep(4), 1800);
    setTimeout(() => {
      setIsDeploying(false);
      onSuccess(currentPlan.name);
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-[#0F141C]/60 backdrop-blur-md transition-all">
      <div className="relative w-full max-w-2xl bg-white/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_24px_48px_-12px_rgba(15,20,28,0.25)] overflow-hidden transition-all my-auto">
        
        {/* Header Bar */}
        <div className="px-5 sm:px-7 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0064E0] via-[#5300D5] to-[#E1306C] flex items-center justify-center text-white font-black text-xs">
              M1
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-bold text-[#0F141C]">
                  Subscribe to {currentPlan.name}
                </h3>
                <VerifiedBadge size="xs" />
              </div>
              <p className="text-[11px] text-slate-400">
                Official Meta One Billing · Verified Account Authentication
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body / Deployment Animation Screen */}
        {isDeploying ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="relative w-16 h-16 mx-auto">
              <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-[#0064E0] animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <VerifiedBadge size="md" />
              </div>
            </div>

            <h4 className="text-xl font-[800] text-[#0F141C]">
              Activating Your Meta One Subscription
            </h4>

            <div className="space-y-3 max-w-sm mx-auto text-left text-xs">
              <div className={`flex items-center gap-2.5 ${deployStep >= 1 ? 'text-[#007A54] font-bold' : 'text-slate-400'}`}>
                {deployStep >= 1 ? <CheckCircle2 className="w-4 h-4" /> : <span className="w-4 h-4 rounded-full border border-slate-300" />}
                <span>Verifying Meta Identity across Instagram & WhatsApp...</span>
              </div>
              <div className={`flex items-center gap-2.5 ${deployStep >= 2 ? 'text-[#007A54] font-bold' : 'text-slate-400'}`}>
                {deployStep >= 2 ? <CheckCircle2 className="w-4 h-4" /> : <span className="w-4 h-4 rounded-full border border-slate-300" />}
                <span>Unlocking Clickable Reels Links & Story Scheduling...</span>
              </div>
              <div className={`flex items-center gap-2.5 ${deployStep >= 3 ? 'text-[#007A54] font-bold' : 'text-slate-400'}`}>
                {deployStep >= 3 ? <CheckCircle2 className="w-4 h-4" /> : <span className="w-4 h-4 rounded-full border border-slate-300" />}
                <span>Provisioning 2 TB Encrypted Cloud Storage Vault...</span>
              </div>
              <div className={`flex items-center gap-2.5 ${deployStep >= 4 ? 'text-[#007A54] font-bold' : 'text-slate-400'}`}>
                {deployStep >= 4 ? <CheckCircle2 className="w-4 h-4" /> : <span className="w-4 h-4 rounded-full border border-slate-300" />}
                <span>Meta One Active with Scalloped Rosette Seal!</span>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDeploy} className="p-5 sm:p-7 space-y-6">
            
            {/* Plan Selector Carousel/Grid */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Choose Meta One Plan
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {META_ONE_PLANS.slice(0, 4).map((tier) => {
                  const isSelected = selectedPlanId === tier.id;
                  const price = billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedPlanId(tier.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#0064E0] bg-blue-50/50 ring-2 ring-[#0064E0]/20 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="text-[11px] font-bold text-[#0F141C] truncate">{tier.name}</div>
                      <div className="text-sm font-black text-[#0064E0] mt-0.5">
                        ${price}<span className="text-[9px] font-normal text-slate-500">/mo</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Billing Cycle Pill Switcher */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#F0F3FF] border border-blue-100">
              <div className="text-xs font-semibold text-[#0F141C]">
                Billing Cycle
              </div>
              <div className="inline-flex items-center p-0.5 rounded-full bg-white border border-slate-200 text-xs">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    billingCycle === 'monthly' ? 'bg-[#0064E0] text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1 ${
                    billingCycle === 'annual' ? 'bg-[#0064E0] text-white shadow-xs' : 'text-slate-600'
                  }`}
                >
                  <span>Annual</span>
                  <span className="text-[10px] font-bold text-[#00C389] bg-white/20 px-1 rounded-full">
                    -25%
                  </span>
                </button>
              </div>
            </div>

            {/* Official Meta One Add-on Options */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                Official Add-on Features
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addonVault}
                    onChange={(e) => setAddonVault(e.target.checked)}
                    className="w-4 h-4 accent-[#0064E0]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#0F141C]">
                      Expand to 4 TB Uncompressed 4K Cloud Vault
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Zero-loss backup for 4K Reels, master audio, and multi-year chat archives
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#0064E0]">
                  +$4.99/mo
                </span>
              </label>
            </div>

            {/* Account Details */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Instagram / WhatsApp Handle"
                  value={socialHandle}
                  onChange={(e) => setSocialHandle(e.target.value)}
                  className="bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs text-[#0F141C] placeholder:text-slate-400 focus:outline-none focus:border-[#0064E0] focus:ring-3 focus:ring-[#0064E0]/15"
                />
                <input
                  type="email"
                  required
                  placeholder="Meta Account Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs text-[#0F141C] placeholder:text-slate-400 focus:outline-none focus:border-[#0064E0] focus:ring-3 focus:ring-[#0064E0]/15"
                />
              </div>

              {/* Promo Code */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (Try: METAONE)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2 text-xs uppercase text-[#0F141C] placeholder:text-slate-400 focus:outline-none focus:border-[#0064E0]"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <div className="text-[11px] text-[#007A54] font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Promo applied! 10% discount included.</span>
                </div>
              )}
            </div>

            {/* Total Due & Fixed 52px CTA */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Total Due Today</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#0F141C]">${total}</span>
                  <span className="text-xs text-slate-500">
                    / {billingCycle === 'annual' ? 'mo (billed annually)' : 'month'}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="h-[52px] px-6 sm:px-8 rounded-full bg-gradient-to-r from-[#0064E0] via-[#4D32FF] to-[#E1306C] text-white font-bold text-sm shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 hover:brightness-105 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>Activate Meta One Subscription</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

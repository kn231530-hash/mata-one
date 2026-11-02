import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PricingScreen } from './components/PricingScreen';
import { MetaOneFeatureShowcase } from './components/MetaOneFeatureShowcase';
import { OmnichannelAgentScreen } from './components/OmnichannelAgentScreen';
import { VerifiedShieldScreen } from './components/VerifiedShieldScreen';
import { ComparisonMatrixScreen } from './components/ComparisonMatrixScreen';
import { CheckoutModal } from './components/CheckoutModal';
import { MobileSimulatorFrame } from './components/MobileSimulatorFrame';
import { VerifiedBadge } from './components/VerifiedBadge';
import { MetaOnePlan } from './types';
import { CheckCircle2, Shield, Heart } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'pricing' | 'features' | 'omnichannel' | 'shield' | 'matrix'>('pricing');
  const [isMobilePreview, setIsMobilePreview] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutPlanId, setCheckoutPlanId] = useState<string>('advanced');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleSelectPlan = (tier: MetaOnePlan) => {
    setCheckoutPlanId(tier.id);
    setIsCheckoutOpen(true);
  };

  const handleSelectPlanById = (tierId: string) => {
    setCheckoutPlanId(tierId);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = (planName: string) => {
    setIsCheckoutOpen(false);
    setSuccessToast(`Congratulations! Your ${planName} subscription is active with Verified Meta Sync.`);
    setTimeout(() => {
      setSuccessToast(null);
    }, 5000);
  };

  // Render the current screen's content
  const renderScreenContent = (isMobileLayout = false) => {
    switch (currentTab) {
      case 'pricing':
        return (
          <PricingScreen
            onSelectPlan={handleSelectPlan}
            onOpenFeatureShowcase={() => setCurrentTab('features')}
            onOpenOmnichannelDemo={() => setCurrentTab('omnichannel')}
            isMobileLayout={isMobileLayout}
          />
        );
      case 'features':
        return <MetaOneFeatureShowcase />;
      case 'omnichannel':
        return <OmnichannelAgentScreen />;
      case 'shield':
        return <VerifiedShieldScreen />;
      case 'matrix':
        return <ComparisonMatrixScreen onSelectPlan={handleSelectPlanById} />;
      default:
        return (
          <PricingScreen
            onSelectPlan={handleSelectPlan}
            onOpenFeatureShowcase={() => setCurrentTab('features')}
            onOpenOmnichannelDemo={() => setCurrentTab('omnichannel')}
            isMobileLayout={isMobileLayout}
          />
        );
    }
  };

  const tabLabels: Record<string, string> = {
    pricing: 'Meta One Plans',
    features: 'Headline Inventions',
    omnichannel: 'AI Agent Playground',
    shield: 'Verified Shield',
    matrix: 'Capability Matrix',
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#0F141C] flex flex-col font-sans selection:bg-[#0064E0] selection:text-white relative">
      
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 max-w-md bg-[#0F141C] text-white p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3 animate-bounce">
          <VerifiedBadge size="sm" />
          <div className="text-xs">
            <span className="font-bold block text-white">Subscription Active</span>
            <span className="text-slate-300">{successToast}</span>
          </div>
        </div>
      )}

      {/* Primary Sticky Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab as any)}
        isMobilePreview={isMobilePreview}
        onToggleMobilePreview={setIsMobilePreview}
        onOpenCheckout={(planId) => {
          if (planId) setCheckoutPlanId(planId);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Main App Content */}
      <main className="flex-1">
        {isMobilePreview ? (
          <MobileSimulatorFrame
            activeTabName={tabLabels[currentTab]}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          >
            {renderScreenContent(true)}
          </MobileSimulatorFrame>
        ) : (
          renderScreenContent(false)
        )}
      </main>

      {/* Interactive Checkout & Provisioning Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        initialPlanId={checkoutPlanId}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Meta One Enterprise Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#0064E0] via-[#5300D5] to-[#E1306C] text-white flex items-center justify-center font-bold text-[10px]">
              M1
            </div>
            <span className="font-bold text-[#0F141C]">Meta One Subscription Service</span>
            <VerifiedBadge size="xs" />
            <span className="text-slate-400">· WhatsApp · Instagram · Facebook · Meta AI</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Official News Release (Sep 2026)</span>
            <span>·</span>
            <span>2TB E2EE Cloud Vault</span>
            <span>·</span>
            <span>Meta Verified Trust</span>
            <span>·</span>
            <span>© 2026 Meta Platforms, Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

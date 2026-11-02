import React from 'react';
import { VerifiedBadge } from './VerifiedBadge';
import { Monitor, Smartphone, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isMobilePreview: boolean;
  onToggleMobilePreview: (val: boolean) => void;
  onOpenCheckout: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  isMobilePreview,
  onToggleMobilePreview,
  onOpenCheckout,
}) => {
  const tabs = [
    { id: 'pricing', label: 'Meta One Plans' },
    { id: 'features', label: 'Headline Features (Reels & Plus)' },
    { id: 'omnichannel', label: 'AI Agent Playground' },
    { id: 'shield', label: 'Meta Verified Shield' },
    { id: 'matrix', label: 'Capability Matrix' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-header border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Identity: Meta One Subscription Service */}
          <div
            onClick={() => onSelectTab('pricing')}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0064E0] via-[#5300D5] to-[#E1306C] flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-lg tracking-tight">M1</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-[#0F141C] tracking-tight">
                  Meta One
                </span>
                <VerifiedBadge size="sm" showTooltip tooltipText="Official Meta One Subscription Service" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 tracking-wide uppercase">
                Unified Ecosystem
              </span>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-[#EAEFFA]/80 p-1 rounded-2xl border border-slate-200/60">
            {tabs.map((tab) => {
              const active = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    active
                      ? 'bg-white text-[#0064E0] shadow-sm font-bold'
                      : 'text-slate-600 hover:text-[#0F141C] hover:bg-white/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Viewport Toggle & CTA */}
          <div className="flex items-center gap-2.5">
            {/* Viewport Frame Mode Toggle (Desktop vs Mobile Preview) */}
            <div className="hidden lg:flex items-center bg-[#EAEFFA]/80 p-0.5 rounded-xl border border-slate-200/60">
              <button
                type="button"
                onClick={() => onToggleMobilePreview(false)}
                title="Desktop View"
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  !isMobilePreview
                    ? 'bg-white text-[#0064E0] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onToggleMobilePreview(true)}
                title="Mobile Viewport Frame"
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  isMobilePreview
                    ? 'bg-white text-[#0064E0] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenCheckout('advanced')}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0064E0] via-[#4D32FF] to-[#E1306C] shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Meta One</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary tab bar for small screens */}
        <div className="flex md:hidden overflow-x-auto py-2 -mx-4 px-4 gap-2 border-t border-slate-200/40 no-scrollbar">
          {tabs.map((tab) => {
            const active = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`whitespace-nowrap px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  active
                    ? 'bg-[#0064E0] text-white'
                    : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

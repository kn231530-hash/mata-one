import React, { useState } from 'react';
import { VerifiedBadge } from './VerifiedBadge';
import { VerificationProfile } from '../types';
import { INITIAL_VERIFICATION } from '../data/mockData';
import { WhatsAppIcon, InstagramIcon } from './ChannelIcons';
import { ShieldCheck, Lock, CheckCircle2, Copy, Check, Download, ExternalLink, QrCode } from 'lucide-react';

export const VerifiedShieldScreen: React.FC = () => {
  const [profile, setProfile] = useState<VerificationProfile>(INITIAL_VERIFICATION);
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleCopyBadge = () => {
    const embedCode = `<div data-wistab-verified="${profile.metaVerificationId}" data-trust-score="${profile.trustScore}"></div>\n<script src="https://cdn.wistab.ai/shield-v2.js" async></script>`;
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCert = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Screen Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0064E0] text-xs font-bold mb-3">
          <VerifiedBadge size="xs" />
          <span>Meta & Wistab One Trust Protocol</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-[800] text-[#0F141C] tracking-tight">
          Verified Business & Omnichannel Trust Shield
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Eliminate brand impersonation and customer fraud. Every message sent through your
          connected channels carries an authenticated scalloped blue badge and cryptographic audit signature.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 6 cols: Verification Registration & Profile Config */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-[#0F141C]">
                  Entity Verification Credentials
                </h3>
                <p className="text-xs text-slate-500">
                  Update your official Meta Cloud API registration parameters.
                </p>
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-[#007A54] bg-[#00C389]/10 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#00C389]" />
                <span>Active & Verified</span>
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0F141C] mb-1">
                  Public Business Name
                </label>
                <input
                  type="text"
                  value={profile.businessName}
                  onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                  className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0F141C] focus:outline-none focus:border-[#0064E0] focus:ring-3 focus:ring-[#0064E0]/15 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0F141C] mb-1">
                    Official WhatsApp Phone
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={profile.officialPhone}
                      onChange={(e) => setProfile({ ...profile, officialPhone: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#0F141C] focus:outline-none focus:border-[#0064E0] focus:ring-3 focus:ring-[#0064E0]/15 transition-all"
                    />
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366] absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F141C] mb-1">
                    Verified Instagram Handle
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={profile.instagramHandle}
                      onChange={(e) => setProfile({ ...profile, instagramHandle: e.target.value })}
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#0F141C] focus:outline-none focus:border-[#0064E0] focus:ring-3 focus:ring-[#0064E0]/15 transition-all"
                    />
                    <InstagramIcon className="w-4 h-4 text-[#E1306C] absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F141C] mb-1">
                  Verified Production Domain (SSL Certified)
                </label>
                <input
                  type="text"
                  value={profile.domainUrl}
                  onChange={(e) => setProfile({ ...profile, domainUrl: e.target.value })}
                  className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0F141C] focus:outline-none focus:border-[#0064E0] focus:ring-3 focus:ring-[#0064E0]/15 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#F5F7FB] border border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    Verification ID
                  </div>
                  <div className="text-xs font-mono font-bold text-[#0F141C] mt-0.5 truncate">
                    {profile.metaVerificationId}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F7FB] border border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    Trust Rating
                  </div>
                  <div className="text-xs font-bold text-[#007A54] mt-0.5 flex items-center gap-1">
                    <span>{profile.trustScore}% Grade A+</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyBadge}
                  className="flex-1 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#0064E0] to-[#4D32FF] text-white text-xs font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-98 transition-all shadow-sm cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Code Snippet Copied!' : 'Copy Website Trust Widget'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadCert}
                  className="py-2.5 px-4 rounded-full bg-white border border-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-50 active:scale-98 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>{downloadSuccess ? 'Downloaded!' : 'Download Certificate'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right 6 cols: Customer-Facing Visual Proof Previews */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Card: Live Social Preview on WhatsApp */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Official Profile Preview</span>
              </span>
              <span className="text-[10px] font-semibold text-[#007A54] bg-[#00C389]/10 px-2 py-0.5 rounded-full">
                Live Verification
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#F0F3FF] border border-blue-100 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#004DB0] to-[#6C27FF] text-white font-black text-xl flex items-center justify-center shadow-md flex-shrink-0">
                W1
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-base font-extrabold text-[#0F141C] truncate">
                    {profile.businessName}
                  </h4>
                  <VerifiedBadge size="sm" showTooltip tooltipText="Official WhatsApp Green / Blue Verified Seal" />
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {profile.category} · {profile.officialPhone}
                </p>
                <div className="flex items-center gap-2 mt-2 text-[11px] font-medium text-[#0064E0]">
                  <span>{profile.domainUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Card: Live Instagram DM Preview */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Instagram Verified DM Header</span>
              </span>
              <span className="text-[10px] font-semibold text-[#0064E0] bg-blue-50 px-2 py-0.5 rounded-full">
                Meta Verified Sync
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs font-black text-[#0064E0]">
                    W1
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#0F141C]">
                      {profile.instagramHandle}
                    </span>
                    <VerifiedBadge size="xs" />
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Verified Business Account
                  </span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                Following
              </span>
            </div>
          </div>

          {/* Cryptographic Compliance Seal Certificate */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-[#0F141C] to-[#1E2532] text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#0064E0]/20 blur-2xl" />
            
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <VerifiedBadge size="md" />
                <span className="text-xs font-bold tracking-wider uppercase text-blue-300">
                  Cryptographic Trust Certificate
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                256-Bit SHA-GCM
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed relative z-10">
              Certified that <strong className="text-white">{profile.legalEntity}</strong> maintains valid business credentials under Meta Graph Protocol v21.0 and Wistab One Security Specifications.
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
              <span>Issued: {profile.issuedDate}</span>
              <span className="text-[#00C389] font-bold">STATUS: COMPLIANT</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

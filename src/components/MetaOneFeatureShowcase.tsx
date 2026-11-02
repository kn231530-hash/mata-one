import React, { useState } from 'react';
import { VerifiedBadge } from './VerifiedBadge';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './ChannelIcons';
import { Sparkles, Link as LinkIcon, Eye, Pin, Palette, BrainCircuit, Play, Check, ExternalLink, Calendar, ShieldCheck, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export const MetaOneFeatureShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'reels-links' | 'story-analytics' | 'wa-plus' | 'ai-thinking'>('reels-links');

  // Reels Link State
  const [linkClicked, setLinkClicked] = useState(false);

  // WhatsApp Plus Theme State
  const [waTheme, setWaTheme] = useState<'emerald' | 'obsidian' | 'violet' | 'azure'>('emerald');
  const [pinnedCount, setPinnedCount] = useState(14);

  // AI Thinking Mode State
  const [showThinking, setShowThinking] = useState(true);
  const [thinkingOutput, setThinkingOutput] = useState(false);

  const handleSimulateThinking = () => {
    setThinkingOutput(false);
    setTimeout(() => setThinkingOutput(true), 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#0064E0]/10 to-[#6C27FF]/10 border border-[#0064E0]/20 text-[#0064E0] text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#6C27FF]" />
          <span>Official Meta One News Feature Breakdown (Sep 2026)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-[800] text-[#0F141C] tracking-tight">
          Experience Meta One's Headline Inventions
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          From native clickable links inside Reels captions to WhatsApp Plus custom themes and Meta AI Deep Thinking Mode.
        </p>

        {/* Feature Segmented Switcher */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFeature('reels-links')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFeature === 'reels-links'
                ? 'bg-[#E1306C] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Clickable Reels Links</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFeature('story-analytics')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFeature === 'story-analytics'
                ? 'bg-[#E1306C] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Story Rewatch Insights</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFeature('wa-plus')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFeature === 'wa-plus'
                ? 'bg-[#25D366] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-current" />
            <span>WhatsApp Plus (Themes & 20 Pins)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFeature('ai-thinking')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFeature === 'ai-thinking'
                ? 'bg-[#6C27FF] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Meta AI Deep Thinking Mode</span>
          </button>
        </div>
      </div>

      {/* Feature 1: Clickable Links in Reels Captions */}
      {activeFeature === 'reels-links' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E1306C] bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100">
                Exclusive to Meta One Advanced ($49.99/mo)
              </span>
              <h3 className="text-2xl font-[800] text-[#0F141C] tracking-tight">
                Native Clickable Links Directly in Reels Captions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Historically, Instagram never permitted clickable links in captions, forcing creators to rely on awkward "link in bio" workarounds. With <strong>Meta One Advanced</strong>, your viewers can tap verified hyperlinks right inside the video caption to open shop items, courses, booking links, or newsletter signups directly!
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F141C]">
                  <span className="w-4 h-4 rounded-full bg-[#0064E0] text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>Direct checkout without leaving the Reels feed</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F141C]">
                  <span className="w-4 h-4 rounded-full bg-[#0064E0] text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>Full UTM attribution and conversion tracking dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F141C]">
                  <span className="w-4 h-4 rounded-full bg-[#0064E0] text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>Prominent follow button banner on viral algorithm distribution</span>
                </div>
              </div>
            </div>

            {/* Interactive Reels Simulator */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-[310px] h-[540px] rounded-[36px] bg-black text-white p-3 shadow-2xl ring-1 ring-slate-800 flex flex-col justify-between relative overflow-hidden">
                {/* Background Video Simulation */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#1E2532] to-black opacity-90" />
                
                {/* Simulated Reel Overlay Header */}
                <div className="relative z-10 flex items-center justify-between pt-2 px-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white/90">
                    <span>Reels</span>
                  </div>
                  <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-xs">
                    Meta One Active
                  </span>
                </div>

                {/* Right Side Social Actions */}
                <div className="absolute right-3 bottom-28 z-20 flex flex-col items-center gap-4 text-white text-xs">
                  <div className="flex flex-col items-center gap-1">
                    <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
                    <span className="text-[10px]">14.2K</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-[10px]">482</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Send className="w-6 h-6" />
                    <span className="text-[10px]">1.8K</span>
                  </div>
                  <Bookmark className="w-6 h-6" />
                </div>

                {/* Bottom Caption with Clickable Link */}
                <div className="relative z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-3 pt-6 rounded-b-[28px] space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] p-[1.5px]">
                      <div className="w-full h-full rounded-full bg-white text-[#0064E0] font-black text-[9px] flex items-center justify-center">
                        W1
                      </div>
                    </div>
                    <span className="text-xs font-bold">wistab.official</span>
                    <VerifiedBadge size="xs" />
                    <button className="text-[10px] font-bold bg-white text-black px-2 py-0.5 rounded-full ml-1">
                      Follow
                    </button>
                  </div>

                  <p className="text-xs text-slate-200 leading-snug">
                    Our drop is officially live! Grab the new AI ecosystem suite today 👇
                  </p>

                  {/* The Official Meta One Clickable Link */}
                  <div
                    onClick={() => setLinkClicked(!linkClicked)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-xs font-bold text-[#64FCBD] cursor-pointer transition-all active:scale-95 shadow-sm"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span className="underline">shop.wistab.ai/launch-offer</span>
                    <ExternalLink className="w-3 h-3 text-white/80" />
                  </div>

                  {linkClicked && (
                    <div className="p-2.5 rounded-xl bg-[#0064E0] text-white text-[11px] animate-fade-in flex items-center justify-between">
                      <span>✓ In-app browser opened: shop.wistab.ai</span>
                      <span className="text-[9px] underline cursor-pointer" onClick={() => setLinkClicked(false)}>Close</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature 2: Story Rewatch Analytics */}
      {activeFeature === 'story-analytics' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E1306C] bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100">
                Instagram Plus ($3.99/mo) & Meta One Core ($7.99/mo)
              </span>
              <h3 className="text-2xl font-[800] text-[#0F141C] tracking-tight">
                Story Rewatch Analytics & Secret Preview
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ever wondered which followers re-opened your Story multiple times? With <strong>Instagram Plus</strong>, unlock granular rewatch frequency counters, drop-off heatmaps, and a discreet <em>Secret Story Preview Mode</em> to browse without leaving a view receipt.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#F5F7FB] border border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    Total Rewatches
                  </div>
                  <div className="text-xl font-black text-[#E1306C] mt-0.5">
                    1,248 Times
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">38% rewatch frequency</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F7FB] border border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    Completion Rate
                  </div>
                  <div className="text-xl font-black text-[#007A54] mt-0.5">
                    94.2%
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">60s continuous clip</div>
                </div>
              </div>
            </div>

            {/* Viewer Rewatch Breakdown List */}
            <div className="lg:col-span-6">
              <div className="bg-[#F9F9FF] rounded-2xl border border-slate-200 p-5 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#E1306C]" />
                    <span className="text-xs font-bold text-[#0F141C]">
                      Story Viewer & Rewatch Audit
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#0064E0] bg-blue-50 px-2 py-0.5 rounded-full">
                    Live Feed
                  </span>
                </div>

                {[
                  { user: 'alex.creator', name: 'Alex Rivera', views: 5, time: '2m ago', badge: 'Rewatched 5x' },
                  { user: 'sophia_designs', name: 'Sophia Chen', views: 3, time: '8m ago', badge: 'Rewatched 3x' },
                  { user: 'marcus.tech', name: 'Marcus Vance', views: 2, time: '14m ago', badge: 'Rewatched 2x' },
                  { user: 'elena_style', name: 'Elena Rostova', views: 1, time: '22m ago', badge: 'First View' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/70 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">
                        {item.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-[#0F141C] flex items-center gap-1">
                          <span>{item.user}</span>
                          {idx === 0 && <VerifiedBadge size="xs" />}
                        </div>
                        <div className="text-[10px] text-slate-400">{item.time}</div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.views > 1 ? 'bg-pink-50 text-[#E1306C] border border-pink-200' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature 3: WhatsApp Plus Themes & 20 Pins */}
      {activeFeature === 'wa-plus' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                WhatsApp Plus ($2.99/mo) & Meta One Core ($7.99/mo)
              </span>
              <h3 className="text-2xl font-[800] text-[#0F141C] tracking-tight">
                WhatsApp Plus: 20 Pinned Chats & 24 Custom Themes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Standard WhatsApp limits users to only 3 pinned chats. With <strong>WhatsApp Plus</strong>, pin up to <strong>20 critical business and personal chats</strong>, choose custom app launcher icons, select custom themes, and enjoy 1 TB to 2 TB of end-to-end encrypted cloud backup vault.
              </p>

              {/* Interactive Theme Picker */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-[#0F141C] block">
                  Select WhatsApp Plus Theme:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'emerald', label: 'Emerald Pro', color: '#25D366' },
                    { id: 'obsidian', label: 'Dark Obsidian', color: '#0F141C' },
                    { id: 'violet', label: 'Electric Violet', color: '#6C27FF' },
                    { id: 'azure', label: 'Royal Azure', color: '#0064E0' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setWaTheme(t.id as any)}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                        waTheme === t.id ? 'border-slate-800 ring-2 ring-slate-800/20 shadow-xs' : 'border-slate-200'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: t.color }} />
                      <div className="text-[10px] font-bold text-slate-700">{t.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pin slider */}
              <div className="pt-2">
                <div className="flex justify-between text-xs font-bold text-[#0F141C] mb-1">
                  <span>Pinned Chats Enabled</span>
                  <span className="text-[#25D366] font-black">{pinnedCount} / 20 Pinned</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="20"
                  value={pinnedCount}
                  onChange={(e) => setPinnedCount(Number(e.target.value))}
                  className="w-full accent-[#25D366] cursor-pointer"
                />
              </div>
            </div>

            {/* Simulated WhatsApp Plus Screen */}
            <div className="lg:col-span-6 flex justify-center">
              <div className={`w-[320px] rounded-3xl p-4 shadow-xl border text-white transition-colors duration-300 ${
                waTheme === 'emerald' ? 'bg-[#075E54] border-emerald-700' :
                waTheme === 'obsidian' ? 'bg-[#0F141C] border-slate-700' :
                waTheme === 'violet' ? 'bg-[#3C096C] border-purple-800' :
                'bg-[#003566] border-blue-800'
              }`}>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span className="font-bold text-sm">WhatsApp Plus</span>
                  </div>
                  <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                    {pinnedCount} Pinned
                  </span>
                </div>

                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white/10 backdrop-blur-xs text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-[11px]">
                          VIP
                        </div>
                        <div>
                          <div className="font-bold flex items-center gap-1">
                            <span>Client Partner #{i + 1}</span>
                            <Pin className="w-3 h-3 text-[#64FCBD] fill-current" />
                          </div>
                          <div className="text-[10px] text-white/70">Contract signed · PDF attached</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-white/50">9:4{i} AM</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-center text-[10px] text-white/80">
                  <span>✓ 2 TB End-to-End Encrypted Cloud Vault Synced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature 4: Meta AI Deep Thinking Mode */}
      {activeFeature === 'ai-thinking' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6C27FF] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                Meta One Premium ($19.99/mo)
              </span>
              <h3 className="text-2xl font-[800] text-[#0F141C] tracking-tight">
                Meta AI Deep Reasoning & "Thinking Mode"
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For researchers, engineers, and creators solving non-trivial problems: <strong>Meta One Premium</strong> activates Deep Reasoning. Before delivering conclusions, the model allocates extensive reasoning compute to evaluate edge cases, calculate financial trade-offs, and debug complex syntax.
              </p>

              <button
                type="button"
                onClick={handleSimulateThinking}
                className="py-2.5 px-4 rounded-full bg-gradient-to-r from-[#6C27FF] to-[#0064E0] text-white text-xs font-bold flex items-center gap-2 shadow-sm hover:brightness-105 active:scale-98 transition-all cursor-pointer"
              >
                <BrainCircuit className="w-4 h-4" />
                <span>Simulate 12,000-Token Reasoning Prompt</span>
              </button>
            </div>

            {/* Deep Reasoning Box */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#0F141C] text-white p-5 space-y-3 font-mono text-xs border border-slate-800">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-purple-400 font-bold">
                    <BrainCircuit className="w-4 h-4" />
                    <span>Meta AI Deep Thinking Kernel</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">ZERO QUEUE PRIORITY</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
                  <span className="text-purple-400 font-bold block mb-1">
                    &lt;think&gt;
                  </span>
                  Evaluating multi-channel customer retention strategy across WhatsApp API and Instagram Reels...
                  1. Calculating optimal caption CTA placement
                  2. Allocating 2TB encrypted storage quotas
                  3. Verifying Meta business registration entity
                  <span className="text-purple-400 font-bold block mt-1">
                    &lt;/think&gt;
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-900/50 text-slate-100 text-xs font-sans leading-relaxed">
                  <strong>Meta One Conclusion:</strong> Bundling Reels Clickable Links with autonomous WhatsApp response agents yields a 3.4× conversion multiplier compared to static bio links.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

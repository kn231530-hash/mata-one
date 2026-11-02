import React, { useState, useEffect, useRef } from 'react';
import { VerifiedBadge } from './VerifiedBadge';
import { WhatsAppIcon, InstagramIcon, MessengerIcon, TelegramIcon } from './ChannelIcons';
import { ChatMessage } from '../types';
import { SAMPLE_CHAT_RESPONSES } from '../data/mockData';
import { Send, Bot, User, Sparkles, RefreshCw, CheckCheck, Sliders, Shield, Zap } from 'lucide-react';

export const OmnichannelAgentScreen: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'instagram' | 'webchat'>('whatsapp');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'customer',
      text: 'Hi! We run an e-commerce brand doing 10k orders/mo. How can Wistab One unify our WhatsApp and Instagram support?',
      time: '10:42 AM',
      channel: 'whatsapp',
    },
    {
      id: '2',
      sender: 'agent',
      text: "Hello! Wistab One uses a unified omnichannel neural engine. Whether a customer DMs your verified Instagram profile or texts your official WhatsApp number, their conversational state, cart items, and previous orders are synced seamlessly.",
      time: '10:42 AM',
      channel: 'whatsapp',
      confidenceScore: 0.99,
      verified: true,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeModel, setActiveModel] = useState<'gemini-ultra' | 'custom-rag'>('gemini-ultra');
  const [autoVerify, setAutoVerify] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const channelConfig = {
    whatsapp: {
      name: 'WhatsApp Business API',
      status: 'Live & Synced',
      uptime: '99.99%',
      latency: '118ms',
      color: '#25D366',
      icon: <WhatsAppIcon className="w-4 h-4 text-white" />,
      headerBg: 'bg-[#075E54]',
      headerText: 'text-white',
    },
    instagram: {
      name: 'Instagram Direct API',
      status: 'Live & Synced',
      uptime: '99.95%',
      latency: '142ms',
      color: '#E1306C',
      icon: <InstagramIcon className="w-4 h-4 text-white" />,
      headerBg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      headerText: 'text-white',
    },
    webchat: {
      name: 'Wistab One Web SDK',
      status: 'Active Node',
      uptime: '100.0%',
      latency: '42ms',
      color: '#0064E0',
      icon: <Bot className="w-4 h-4 text-white" />,
      headerBg: 'bg-[#0064E0]',
      headerText: 'text-white',
    },
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'customer',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: activeChannel,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Generate intelligent contextual response
    setTimeout(() => {
      let reply = "Wistab One's autonomous agent is synchronized with your enterprise catalog. I can assist with order tracking, instant payments, and escalation to human tier support.";
      const lower = text.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) {
        reply = SAMPLE_CHAT_RESPONSES.pricing;
      } else if (lower.includes('verif') || lower.includes('badge') || lower.includes('meta')) {
        reply = SAMPLE_CHAT_RESPONSES.verification;
      } else if (lower.includes('secur') || lower.includes('privacy') || lower.includes('encrypt')) {
        reply = SAMPLE_CHAT_RESPONSES.security;
      } else if (lower.includes('channel') || lower.includes('sync') || lower.includes('feature')) {
        reply = SAMPLE_CHAT_RESPONSES.features;
      }

      const agentMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        channel: activeChannel,
        confidenceScore: 0.98,
        verified: autoVerify,
      };

      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 700);
  };

  const samplePrompts = [
    'How does Meta Verified trust synchronization work?',
    'Show me the pricing tiers & discounts',
    'Can the agent hand off to human reps?',
    'What channels are supported in Advanced?',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0064E0] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              Omnichannel Agent Studio
            </span>
            <VerifiedBadge size="xs" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-[800] text-[#0F141C] tracking-tight">
            Live Omnichannel Neural Playground
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Test how Wistab One handles cross-platform conversations with verified authenticity.
          </p>
        </div>

        {/* Global Agent Status Indicator */}
        <div className="flex items-center gap-3 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00C389] animate-pulse" />
          <div className="text-left">
            <div className="text-xs font-bold text-[#0F141C] flex items-center gap-1">
              <span>Omni-Agent Node: Online</span>
              <VerifiedBadge size="xs" />
            </div>
            <div className="text-[11px] text-slate-400">
              Meta Graph v21.0 · WhatsApp Cloud Sync
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Control Panel (Left) & Channel Simulator Phone/Window (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 5 Cols: Ecosystem Channel Hub & Configurations */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Active Channel Selector Tabs */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              1. Select Connected Channel
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setActiveChannel('whatsapp')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeChannel === 'whatsapp'
                    ? 'border-[#25D366] bg-[#25D366]/5 ring-2 ring-[#25D366]/20'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center text-white mb-2 shadow-xs">
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-bold text-[#0F141C]">WhatsApp</div>
                <div className="text-[10px] text-slate-500">Official Cloud API</div>
              </button>

              <button
                type="button"
                onClick={() => setActiveChannel('instagram')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeChannel === 'instagram'
                    ? 'border-[#E1306C] bg-[#E1306C]/5 ring-2 ring-[#E1306C]/20'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] flex items-center justify-center text-white mb-2 shadow-xs">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-bold text-[#0F141C]">Instagram</div>
                <div className="text-[10px] text-slate-500">DMs & Comments</div>
              </button>

              <button
                type="button"
                onClick={() => setActiveChannel('webchat')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeChannel === 'webchat'
                    ? 'border-[#0064E0] bg-[#0064E0]/5 ring-2 ring-[#0064E0]/20'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#0064E0] flex items-center justify-center text-white mb-2 shadow-xs">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-bold text-[#0F141C]">Web SDK</div>
                <div className="text-[10px] text-slate-500">Embedded Widget</div>
              </button>
            </div>

            {/* Current Channel Metrics */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#00C389]" />
                <span>{channelConfig[activeChannel].name}</span>
              </div>
              <div className="text-slate-600 font-semibold">
                Latency: {channelConfig[activeChannel].latency}
              </div>
            </div>
          </div>

          {/* Agent Parameters & Trust Guardrails */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Autonomous Guardrails
              </h3>
              <Sliders className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {/* Model Architecture Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#0F141C]">
                Neural Model Engine
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModel('gemini-ultra')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                    activeModel === 'gemini-ultra'
                      ? 'border-[#0064E0] bg-blue-50/60 text-[#0064E0]'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold">Gemini 2.5 Flash</div>
                  <div className="text-[10px] text-slate-500">&lt; 140ms Global Edge</div>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModel('custom-rag')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                    activeModel === 'custom-rag'
                      ? 'border-[#6C27FF] bg-purple-50/60 text-[#6C27FF]'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold">Custom Enterprise RAG</div>
                  <div className="text-[10px] text-slate-500">Domain Grounded</div>
                </button>
              </div>
            </div>

            {/* Meta Verified Stamp Enforcer */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#F5F7FB] border border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <VerifiedBadge size="sm" />
                <div>
                  <div className="text-xs font-bold text-[#0F141C]">
                    Cryptographic Trust Seal
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Embed verified badge in agent replies
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={autoVerify}
                onChange={(e) => setAutoVerify(e.target.checked)}
                className="w-4 h-4 accent-[#0064E0] cursor-pointer"
              />
            </div>

            {/* Quick Prompt Injection */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Quick Test Injections
              </div>
              <div className="flex flex-wrap gap-1.5">
                {samplePrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-left text-xs bg-slate-50 hover:bg-blue-50 hover:text-[#0064E0] border border-slate-200/80 rounded-lg px-2.5 py-1.5 transition-all text-slate-600 cursor-pointer"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: The Channel Screen Simulator */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-white flex flex-col h-[580px]">
            {/* Simulator Window Header */}
            <div className={`${channelConfig[activeChannel].headerBg} px-4 py-3 flex items-center justify-between transition-colors`}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-xs">
                  {channelConfig[activeChannel].icon}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm">
                      Wistab One Assistant
                    </span>
                    {autoVerify && <VerifiedBadge size="xs" />}
                  </div>
                  <span className="text-[11px] text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C389]" />
                    <span>Verified Omnichannel Agent · Typically replies instantly</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMessages(messages.slice(0, 2))}
                title="Reset Conversation"
                className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-[#EAEFFA]/40">
              {messages.map((msg) => {
                const isCustomer = msg.sender === 'customer';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2 ${isCustomer ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isCustomer && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0064E0] to-[#6C27FF] text-white flex items-center justify-center flex-shrink-0 shadow-xs text-xs font-bold">
                        W1
                      </div>
                    )}

                    <div
                      className={`max-w-[82%] rounded-2xl p-3 sm:p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                        isCustomer
                          ? 'bg-[#0064E0] text-white rounded-br-xs'
                          : 'bg-white text-[#0F141C] border border-slate-200/80 rounded-bl-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-semibold opacity-75">
                          {isCustomer ? 'You (Customer)' : 'Wistab One AI'}
                        </span>
                        {!isCustomer && msg.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-[#0064E0] font-bold">
                            <VerifiedBadge size="xs" />
                            <span>Verified</span>
                          </span>
                        )}
                      </div>

                      <p className="whitespace-pre-line">{msg.text}</p>

                      <div className="flex items-center justify-end gap-1 text-[10px] opacity-60 mt-1.5">
                        <span>{msg.time}</span>
                        {isCustomer && <CheckCheck className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0064E0] to-[#6C27FF] text-white flex items-center justify-center text-xs font-bold">
                    W1
                  </div>
                  <div className="bg-white border border-slate-200 px-3 py-2 rounded-2xl rounded-bl-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] text-slate-400 font-medium ml-1">
                      Generating neural response...
                    </span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Type a test message on ${channelConfig[activeChannel].name}...`}
                className="flex-1 bg-[#F5F7FB] border border-slate-200 rounded-full px-4 py-2.5 text-xs sm:text-sm text-[#0F141C] placeholder:text-slate-400 focus:outline-none focus:border-[#0064E0] focus:ring-2 focus:ring-[#0064E0]/20 transition-all"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0064E0] to-[#4D32FF] text-white flex items-center justify-center shadow-sm disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

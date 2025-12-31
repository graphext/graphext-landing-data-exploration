"use client";

import { useState, useEffect } from "react";

const useCases = [
  {
    text: "Understand",
    highlight: "customer frustrations",
    suffix: "from support tickets",
  },
  {
    text: "Track",
    highlight: "brand sentiment",
    suffix: "across social media",
  },
  {
    text: "Discover",
    highlight: "hidden patterns",
    suffix: "in survey responses",
  },
  {
    text: "Monitor",
    highlight: "trending topics",
    suffix: "from news articles",
  },
  {
    text: "Analyze",
    highlight: "product feedback",
    suffix: "at scale",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % useCases.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentUseCase = useCases[currentIndex];

  return (
    <section className="relative min-h-screen overflow-hidden pt-20" style={{
      background: 'linear-gradient(180deg, #5ea3f6 0%, #7ebaf8 30%, #a8d4fa 60%, #d6edfd 80%, #ffffff 100%)'
    }}>
      {/* Background decorative elements - Mountains like Cluely */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left mountain range - blue tinted like Cluely */}
        <svg 
          className="absolute -left-10 bottom-[25%] h-[550px] w-[450px]"
          viewBox="0 0 450 550" 
          fill="none"
        >
          <path 
            d="M-30 550 L60 180 L120 300 L180 120 L250 250 L320 80 L400 200 L480 550 Z" 
            fill="url(#mountain-gradient-left)"
          />
          <defs>
            <linearGradient id="mountain-gradient-left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7aaccf" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#9cc5df" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c5dced" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Right side subtle warm glow */}
        <div className="absolute -right-20 top-[30%] h-[500px] w-[500px] rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="text-center">
          {/* Main headline - EB Garamond 500, 80px, line-height 82px, white like Cluely */}
          <h1 
            className="font-[family-name:var(--font-garamond)]"
            style={{ 
              fontSize: 'clamp(40px, 8vw, 80px)', 
              lineHeight: '1.025',
              fontWeight: 500,
              color: '#ffffff',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.08)'
            }}
          >
            Explore your Messy Complex
            <br />
            Data Visually + AI
          </h1>

          {/* Animated rotating subtitle with highlighted keywords */}
          <div 
            className="mx-auto mt-8 max-w-3xl text-center"
            style={{ 
              fontSize: '22px', 
              lineHeight: '34px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.95)'
            }}
          >
            <div className="h-[70px] flex items-center justify-center">
              <p 
                className={`transition-all duration-500 ease-out ${
                  isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                }`}
              >
                <span>{currentUseCase.text} </span>
                <span className="relative inline-block">
                  <span className="font-semibold text-white">{currentUseCase.highlight}</span>
                  {/* Blue underline highlight like Cluely */}
                  <span 
                    className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full"
                    style={{ 
                      background: 'linear-gradient(90deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
                      boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)'
                    }}
                  />
                </span>
                <span> {currentUseCase.suffix}</span>
              </p>
            </div>
            <p className="mt-2 text-base text-white/70">
              No coding required · Visual insights in minutes
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Glossy button like Cluely */}
            <a
              href="#cta"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(37, 99, 235, 0.5)'
              }}
            >
              {/* Glossy shine overlay - slightly adjusted */}
              <span 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, transparent 100%)',
                }}
              />
              <span className="relative flex items-center gap-2">
                Start Exploring Free
              </span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-white"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Product Mockup */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="relative rounded-2xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-gray-800 px-4 py-1.5 text-xs text-gray-400">
                app.graphext.com/explore
              </div>
            </div>

            {/* Mockup content */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-b-lg bg-gradient-to-br from-slate-50 to-slate-100">
              {/* Simulated dashboard */}
              <div className="absolute inset-0 p-4">
                <div className="grid h-full grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-3 rounded-lg bg-white p-3 shadow-sm">
                    <div className="mb-3 h-4 w-20 rounded bg-gray-200" />
                    <div className="space-y-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-blue-400" />
                          <div className="h-3 flex-1 rounded bg-gray-100" />
                        </div>
                      ))}
                    </div>
                    <div className="mb-3 mt-6 h-4 w-16 rounded bg-gray-200" />
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-3 rounded bg-gray-100" />
                      ))}
                    </div>
                  </div>

                  {/* Main content - Network graph visualization */}
                  <div className="col-span-6 rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-4 w-32 rounded bg-gray-200" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 rounded-full bg-blue-100" />
                        <div className="h-6 w-16 rounded-full bg-gray-100" />
                      </div>
                    </div>
                    {/* Cluster visualization */}
                    <div className="relative h-48">
                      <svg className="h-full w-full" viewBox="0 0 300 200">
                        {/* Connection lines */}
                        <line x1="150" y1="100" x2="80" y2="60" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="150" y1="100" x2="220" y2="50" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="150" y1="100" x2="60" y2="140" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="150" y1="100" x2="240" y2="130" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="150" y1="100" x2="120" y2="170" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="150" y1="100" x2="200" y2="160" stroke="#E5E7EB" strokeWidth="1" />
                        {/* Nodes */}
                        <circle cx="150" cy="100" r="20" fill="#3B82F6" />
                        <circle cx="80" cy="60" r="14" fill="#8B5CF6" />
                        <circle cx="220" cy="50" r="16" fill="#10B981" />
                        <circle cx="60" cy="140" r="12" fill="#F59E0B" />
                        <circle cx="240" cy="130" r="15" fill="#EF4444" />
                        <circle cx="120" cy="170" r="10" fill="#EC4899" />
                        <circle cx="200" cy="160" r="13" fill="#06B6D4" />
                      </svg>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="col-span-3 space-y-4">
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <div className="mb-2 h-4 w-20 rounded bg-gray-200" />
                      <div className="space-y-1.5">
                        {["Billing Issues", "Shipping Delay", "Product Quality", "Refund Request"].map((_, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="h-2.5 w-20 rounded bg-gray-100" />
                            <div className="h-2.5 w-8 rounded bg-blue-200" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <div className="mb-2 h-4 w-16 rounded bg-gray-200" />
                      <div className="flex items-center gap-2">
                        <div className="h-16 w-16 rounded-full border-4 border-green-400 border-r-red-400" />
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-green-400" />
                            <div className="h-2.5 w-12 rounded bg-gray-100" />
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-yellow-400" />
                            <div className="h-2.5 w-10 rounded bg-gray-100" />
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full bg-red-400" />
                            <div className="h-2.5 w-8 rounded bg-gray-100" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -left-4 top-1/4 rounded-lg bg-white p-3 shadow-lg ring-1 ring-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">12 topics found</span>
            </div>
          </div>

          <div className="absolute -right-4 top-1/3 rounded-lg bg-white p-3 shadow-lg ring-1 ring-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">2.3s analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

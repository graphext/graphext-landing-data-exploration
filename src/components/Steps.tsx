const steps = [
  {
    number: "1",
    title: "Upload your data",
    description:
      "Simply drag and drop your CSV or connect your tools. That's it.",
    image: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Upload zone */}
            <div className="rounded-xl border-2 border-dashed border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-50 p-3">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div className="mt-3 text-sm font-medium text-gray-900">Drop files here</div>
                <div className="mt-1 text-xs text-gray-500">CSV, Excel, JSON</div>
              </div>
            </div>
            {/* Floating cursor */}
            <div className="absolute -bottom-4 -right-4">
              <svg className="h-8 w-8 text-gray-800 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L6.35 2.86a.5.5 0 00-.85.35z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "2",
    title: "Let AI analyze",
    description:
      "Our algorithms cluster and classify automatically. No config needed.",
    image: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Processing UI */}
          <div className="rounded-xl bg-slate-800 p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-slate-700 px-3 py-2">
                <span className="text-sm text-white">for Sales (Roy)</span>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <button className="rounded bg-slate-700 p-1.5">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <button className="rounded bg-slate-700 p-1.5">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Progress indicator */}
            <div className="mt-3 flex items-center gap-2">
              <div className="h-1 flex-1 rounded-full bg-slate-700">
                <div className="h-1 w-2/3 rounded-full bg-blue-500" />
              </div>
              <span className="text-xs text-gray-400">67%</span>
            </div>
          </div>
          {/* Floating cursor */}
          <div className="absolute bottom-16 right-20">
            <svg className="h-8 w-8 text-gray-800 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L6.35 2.86a.5.5 0 00-.85.35z" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "3",
    title: "Get insights",
    description:
      "Graphext uses what it learned to generate actionable insights.",
    image: (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {/* Report card */}
          <div className="rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-100 w-full max-w-[200px]">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-gray-900">Customer Analysis</div>
              <div className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
                Complete
              </div>
            </div>
            <div className="text-[10px] text-gray-500 mb-2">Key insights</div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] text-gray-600">23% tickets about billing</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-purple-500" />
                <span className="text-[10px] text-gray-600">Sentiment improved 12%</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] text-gray-600">5 new topics detected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Steps() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            Data insights in 3 steps
          </h2>
          <p className="mt-4 text-base text-gray-500">
            The easiest way to explore text data at scale.
          </p>
        </div>

        {/* Steps - horizontal layout like Cluely */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/3 hidden md:block z-10">
                  <svg className="h-6 w-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="text-center">
                {/* Image */}
                {step.image}

                {/* Step number and title */}
                <div className="mt-6">
                  <span className="text-sm text-gray-400">{step.number}</span>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

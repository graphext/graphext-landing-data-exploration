export default function Comparison() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            No manual tagging.
            <br />
            100% automated.
          </h2>
          <p className="mt-4 text-base text-gray-500">
            How does Graphext compare to traditional tools?
          </p>
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Traditional Tools */}
            <div className="p-8 md:p-10">
              <h3 className="text-lg font-semibold text-gray-400">
                Other Analysis Tools
              </h3>
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span>Manual categorization required</span>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Requires predefined categories",
                  "Only finds what you search for",
                  "Days of manual tagging",
                  "Flat lists and tables",
                  "Needs data science expertise",
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Graphext */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                  <circle cx="10" cy="12" r="3" fill="currentColor" />
                  <circle cx="22" cy="12" r="3" fill="currentColor" />
                  <circle cx="16" cy="22" r="3" fill="currentColor" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Graphext</h3>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span>Automatic insights in seconds</span>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Discovers categories automatically",
                  "Surfaces unexpected patterns",
                  "Results in minutes",
                  "Visual, interactive exploration",
                  "Built for business teams",
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

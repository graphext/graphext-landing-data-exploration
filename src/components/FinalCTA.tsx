export default function FinalCTA() {
  return (
    <section id="cta" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
          Data analysis that helps during exploration, not after.
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Try Graphext on your next data project today.
        </p>

        {/* CTA button - Glossy style like Cluely */}
        <div className="mt-10">
          <a
            href="https://app.graphext.com/signup"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)',
              boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(37, 99, 235, 0.5)'
            }}
          >
            <span 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, transparent 100%)',
              }}
            />
            <span className="relative">Try Graphext Free</span>
          </a>
        </div>
      </div>
    </section>
  );
}

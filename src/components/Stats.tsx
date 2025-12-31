const stats = [
  {
    number: "50+",
    label: "Languages",
    description: "We support over 50 different languages, including English, Spanish, French, and more.",
  },
  {
    number: "2.3s",
    label: "Analysis time",
    description: "We have the fastest text analysis available. Test us against any competitor.",
  },
  {
    number: "99%",
    label: "Pattern accuracy",
    description: "Trusted by many teams for reliable insights. Industry-leading accuracy.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Real-time indicator */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Real-time analysis
          </span>
        </div>

        {/* Section header */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-garamond)] text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl">
            Real-time insights
          </h2>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-gray-100 bg-white p-8 text-center"
            >
              {/* Large number */}
              <div className="text-5xl font-light text-blue-500 sm:text-6xl">
                {stat.number}
              </div>
              {/* Label */}
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                {stat.label}
              </h3>
              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

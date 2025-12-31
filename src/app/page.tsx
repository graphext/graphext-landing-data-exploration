import {
  Header,
  Hero,
  Features,
  Steps,
  Comparison,
  Stats,
  UseCases,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Comparison />
        <Stats />
        <UseCases />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Differentiator from "@/components/Sections/Differentiator";
import Pipeline from "@/components/Sections/Pipeline";
import Features from "@/components/Sections/Features";
import Analytics from "@/components/Sections/Analytics";
import Persistence from "@/components/Sections/Persistence";
import Schema from "@/components/Sections/Schema";
import Philosophy from "@/components/Sections/Philosophy";
import Repository from "@/components/Sections/Repository";
import FinalCTA from "@/components/Sections/FinalCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ width: "100%", paddingTop: "var(--header-height)", background: "var(--surface)" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", color: "var(--text-on-surface)" }}>
          <Hero />
          <Differentiator />
          <Pipeline />
          <Features />
          <Analytics />
          <Persistence />
          <Schema />
          <Philosophy />
          <Repository />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

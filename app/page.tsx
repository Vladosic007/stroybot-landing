import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WorkFlow } from "@/components/WorkFlow";
import { Features } from "@/components/Features";
import { Steps } from "@/components/Steps";
import { Roles } from "@/components/Roles";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-ink-900 text-bone-50">
      <Navbar />
      <Hero />
      <WorkFlow />
      <Features />
      <Steps />
      <Roles />
      <Cta />
      <Footer />
    </main>
  );
}

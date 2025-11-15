import Hero from "@/features/landing/sections/Hero";
import {About} from "@/features/landing/sections/About";
import {Services} from "@/features/landing/sections/services";
import {Testimonials} from "@/features/landing/sections/Testimonials";
import {Differentials} from "@/features/landing/sections/Differentials";
import {CompaniesMarquee} from "@/features/landing/sections/CompaniesMarquee";
import {Resources} from "@/features/landing/sections/Resources";

export default function Home() {
  return (
      <>
          <Hero/>
          <About/>
          <Services />
          <Differentials />
          <Testimonials />
          <Resources />
          <CompaniesMarquee />
      </>
  );
}

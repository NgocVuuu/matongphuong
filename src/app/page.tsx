import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Promotion } from "@/components/promotion";
import { Products } from "@/components/products";
import { WhyUs } from "@/components/why-us";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Promotion />
      <Products />
      <WhyUs />
      <Contact />
    </div>
  );
}

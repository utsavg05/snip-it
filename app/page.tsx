import Hero from "./components/landing/Hero";
import HowItWorks from "./components/landing/HowItWorks";
import ExampleSnippets from "./components/landing/ExampleSnippets";
import Testimonials from "./components/landing/Testimonials";
import Footer from "./components/landing/Footer";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
        <HowItWorks />
        <ExampleSnippets />
        {/* <Pricing /> */}
        <Testimonials />
        <Footer />
        <Link href="/snippets/new">
          <RainbowButton variant={"outline"} className="fixed rounded-xl text-sm md:text-md bottom-7 right-4 md:bottom-8 md:right-5 px-3 py-5 cursor-pointer ">Create</RainbowButton>
        </Link>
      </div>
    </>
  );
}
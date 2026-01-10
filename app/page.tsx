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
          <RainbowButton variant={"outline"} className="fixed rounded-xl text-md bottom-10 right-6 px-4 py-5 cursor-pointer ">Create</RainbowButton>
        </Link>
      </div>
    </>
  );
}
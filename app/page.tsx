import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import HowItWorks from "./components/HowItWorks";
import ExampleSnippets from "./components/ExampleSnippets";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    {/* <SocialProof /> */}
    <HowItWorks />
    <ExampleSnippets />
    <Testimonials />
    <Footer />
    </>
  );
}
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import HowItWorks from "./components/HowItWorks";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    {/* <SocialProof /> */}
    <HowItWorks />
    </>
  );
}
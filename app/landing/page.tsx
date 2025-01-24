import Benefits from "./sections/benefits"
import Faq from "./sections/faq"
import Features from "./sections/features"
import Footer from "./sections/footer"
import HeroSection from "./sections/hero"
import Nav from "./sections/nav"
import Testimonials from "./sections/testimonials"
import Working from "./sections/working"

export default function Page() {
  return <>
    <Nav />
    <HeroSection />
    <Features />
    <Working />
    <Benefits />
    <Testimonials />
    {/* <Pricing/> */}
    <Faq />
    {/* <TryNow /> */}
    <Footer />
  </>
}

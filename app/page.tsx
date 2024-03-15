import HeroSection from "./components/sections/hero-section"
import TestimonialSection from "./components/sections/testimonial-section"

export default function Home() {
  return (
    <main className="mx-auto mt-14 w-full max-w-[90rem] sm:mt-[4.25rem] sm:px-10 xl:px-[10.25rem]">
      <HeroSection />
      <TestimonialSection />
    </main>
  )
}

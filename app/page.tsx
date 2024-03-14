import { Button } from "./components/ui/button"
import Image from "next/image"
import patternCurvedLine1 from "@/public/pattern-curved-line-1.svg"
import patternCurvedLine2 from "@/public/pattern-curved-line-2.svg"
import Stats from "./components/stats"

export default function Home() {
  return (
    <main className="mx-auto mt-14 w-full max-w-[90rem] px-4 sm:mt-[4.25rem] sm:px-10 xl:px-[10.25rem]">
      <section className="flex flex-col lg:flex-row lg:gap-[5.75rem]">
        <div className="w-full sm:relative sm:min-h-[30.125rem]">
          <div className="relative flex max-w-[35rem] flex-col items-start gap-8 sm:z-10 sm:gap-10 sm:pb-10 lg:max-w-[39.6875rem]">
            <Image
              src={patternCurvedLine1}
              alt="Pattern Curved Line 1"
              className="absolute left-[9.1rem] top-0 z-[-1] w-[9.467rem] sm:left-[13.50rem] sm:top-[2.67rem] sm:w-[14.44963rem] lg:left-[18rem] lg:w-[17.9375rem]"
            />
            <h1 className="heading-xl mt-6 sm:mt-[6.5rem]">
              A <span className="font-bold">super solution</span>
              <br /> for your <span className="font-bold">business.</span>
            </h1>
            <p className="max-w-[21.875rem] leading-7 tracking-[0.00556rem] text-dark-gray lg:text-lg lg:leading-8 lg:tracking-[0.00625rem]">
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.
            </p>
            <Button className="mt-3">Request Beta Access</Button>
          </div>

          <div className="mt-14 sm:absolute sm:inset-0 sm:left-auto sm:z-0 sm:mt-0">
            <picture>
              {/* Display the portrait images for desktops */}
              <source
                media="(min-width: 640px)"
                srcSet="/image-hero-portrait.png 1x, /image-hero-portrait@2x.png 2x"
                type="image/png"
              />
              <source
                media="(min-width: 640px)"
                srcSet="/image-hero-portrait.webp 1x, /image-hero-portrait@2x.webp 2x"
                type="image/webp"
              />

              {/* Display the landscape images for mobile */}
              <source
                media="(max-width: 639px)"
                srcSet="/image-hero-landscape.png 1x, /image-hero-landscape@2x.png 2x"
                type="image/png"
              />
              <source
                media="(max-width: 639px)"
                srcSet="/image-hero-landscape.webp 1x, /image-hero-landscape@2x.webp 2x"
                type="image/webp"
              />

              {/* Fallback image */}
              <Image
                src="/image-hero-landscape.png" // Default image
                alt="Hero Image"
                layout="responsive"
                width={500}
                height={300}
                quality={100}
                className="sm:max-h-[30.125rem] lg:max-h-[37.5rem]"
              />
            </picture>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center gap-8 sm:mt-[5.5rem] sm:flex-row sm:justify-evenly lg:mr-[4.25rem] lg:mt-10 lg:flex-col lg:justify-center lg:gap-[3.94rem]">
          <Stats label="Companies" value="2K" />
          <Stats label="Languages" value="8" />
          <Stats label="Leads" value="1.2M" />
        </div>
      </section>
    </main>
  )
}

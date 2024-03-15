import Image from "next/image"
import patternCurvedLine2 from "@/public/pattern-curved-line-2.svg"
import patternBlur from "@/public/pattern-blur.svg"

const TestimonialSection = () => {
  return (
    <section className="-mb-8 mt-[14.81rem] sm:-mb-[28.94rem] sm:mt-[17.56rem] lg:-mb-[16.5625rem] lg:mt-[15.9rem]">
      <div className="relative flex flex-col justify-center gap-10 rounded-[0.9375rem] bg-dark px-4 pb-16 pt-[21.13rem] text-center text-cream-white sm:px-14 lg:justify-start lg:py-[5.5rem] lg:pl-[39.62rem] lg:pr-[7.81rem] lg:text-left">
        <div className="absolute -top-40 left-0 flex w-full justify-center lg:bottom-0 lg:left-0 lg:top-0 lg:items-center lg:justify-start">
          <Image src={patternBlur} alt="Pattern Blur" />
        </div>
        <div className="absolute -top-[11.31rem] left-0 flex w-full flex-col items-center justify-center gap-10 lg:bottom-0 lg:left-[7.5rem] lg:top-auto lg:flex-row lg:justify-start">
          <picture>
            {/* Display the large images for desktops */}
            <source
              media="(min-width: 640px)"
              srcSet="/image-jeremy-large.png 1x, /image-jeremy-large@2x.png 2x"
              type="image/png"
            />
            <source
              media="(min-width: 640px)"
              srcSet="/image-jeremy-large.webp 1x, /image-jeremy-large@2x.webp 2x"
              type="image/webp"
            />

            {/* Display the small images for mobile */}
            <source
              media="(max-width: 639px)"
              srcSet="/image-jeremy-small.png 1x, /image-jeremy-small@2x.png 2x"
              type="image/png"
            />
            <source
              media="(max-width: 639px)"
              srcSet="/image-jeremy-small.webp 1x, /image-jeremy-small@2x.webp 2x"
              type="image/webp"
            />

            {/* Fallback image */}
            <Image
              src="/image-jeremy-small.png" // Default image
              alt="Jeremy's Portrait"
              layout="responsive"
              width={300}
              height={500}
              className="max-h-[25.125rem] lg:max-h-[37.5rem]"
            />
          </picture>
          <Image
            src={patternCurvedLine2}
            alt="Pattern Curved Line 2"
            className="w-[3.07925rem] lg:w-[4.00306rem] lg:pb-28"
          />
        </div>
        <h2 className="heading-l">
          It just <span className="font-bold">works.</span>
        </h2>
        <p className="text-lg leading-8 tracking-[0.00563rem] lg:text-xl lg:leading-[2.1875rem] lg:tracking-[0.00625rem]">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </p>
        <div>
          <h3 className="text-lg font-bold uppercase leading-8 -tracking-[0.01125rem]">
            Jermy Robinson
          </h3>
          <p className="uppercase leading-[1.625rem] tracking-[0.15625rem]">
            CMO, FYLO
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

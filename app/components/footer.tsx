import logo from "@/public/logo.svg"
import Image from "next/image"
import iconFacebook from "@/public/icon-facebook.svg"
import iconTwitter from "@/public/icon-twitter.svg"
import iconInstagram from "@/public/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className="flex w-full max-w-[90rem] flex-col items-center justify-center gap-8 bg-cream px-4 pb-20 pt-24 sm:flex-row sm:justify-between sm:px-10 sm:pt-[33.44rem] lg:pt-[22.5025rem] xl:px-[10.31rem]">
      <Image src={logo} alt="logo" />
      <p className="text-[0.9375rem] leading-8 tracking-[0.00519rem] text-dark-gray lg:pl-8">
        Copyright - Suite
      </p>
      <div className="flex gap-7">
        <Image
          src={iconFacebook}
          alt="Facebook"
          className="cursor-pointer hover:opacity-50"
        />
        <Image
          src={iconTwitter}
          alt="Twitter"
          className="cursor-pointer hover:opacity-50"
        />
        <Image
          src={iconInstagram}
          alt="Instagram"
          className="cursor-pointer hover:opacity-50"
        />
      </div>
    </footer>
  )
}

export default Footer

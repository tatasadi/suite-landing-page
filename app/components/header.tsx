import logo from "@/public/logo.svg"
import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="flex w-full max-w-[90rem] items-center justify-between px-4 pt-6 sm:px-10 sm:pt-10 lg:pt-[3rem] xl:px-[10.31rem]">
      <Image src={logo} alt="logo" />
      <Button variant="outline">Request Beta Access</Button>
    </header>
  )
}

export default Header

import logo from "@/public/logo.svg"
import Image from "next/image"

const Header = () => {
  return (
    <header className="">
      <Image src={logo} alt="logo" />
    </header>
  )
}

export default Header

import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className=" h-fit py-6 flex items-center w-[95%] m-auto max-w-[1200px]">
      <Link href={"/"}>
        <Image src="/logo.png" width={100} height={"100"} alt="Picture of the author" />
      </Link>
    </header>
  )
}

export default Header

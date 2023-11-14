import Image from "next/image"

interface ProfilePicture {
  src: string
  size: number
}

const ProfilePicture = ({ src, size }: ProfilePicture) => {
  return (
    <div
      className={
        "overflow-hidden relative rounded-[50px] " +
        (size <= 20
          ? " w-[20px] h-[20px]"
          : size <= 30
          ? " w-[30px] h-[30px]"
          : size <= 40
          ? " w-[40px] h-[40px]"
          : size <= 60
          ? " w-[60px] h-[60px]"
          : size <= 80
          ? " w-[80px] h-[80px]"
          : " w-[100px] h-[100px]")
      }
    >
      <Image src={src} alt="profile picture" fill className="object-cover" />
    </div>
  )
}

export default ProfilePicture

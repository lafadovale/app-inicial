import Image from "next/image";

export default function Background() {
  return (
    <Image
      src='https://wallpapers.com/images/featured-full/star-wars-plzcoaffexgf4h81.jpg'
      fill
      alt='background'
      className='-z-50 opacity-30 object-cover'
    />
  );
}

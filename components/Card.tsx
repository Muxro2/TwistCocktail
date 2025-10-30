import Image from "next/image";
import icon from "@/public/apple-touch-icon.png"

type CardProps = {
	image: any,
	name: string,
}

export default function Card({image, name}: CardProps) {
  return (
    <div className="flex items-center w-[100%]">
			<div className="relative h-36 w-36 bg-white">"
      <Image
        src={image}
				alt="Twist"
				fill
			/>
			<div className="absolute inset-0 bg-gradient-to-l from-[#111] to-transparent z-100" >
				
			</div>
			</div>
			<h1 className="self text-[var(--accent)] text-3xl text-bold font-serif pl-4">{name}</h1>
    </div>
  );
}
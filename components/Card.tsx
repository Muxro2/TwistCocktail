import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/navigation"

type CardProps = {
	image: any,
	name: string,
	id: string
}

export default function Card({image, name, id}: CardProps) {
	
	
  return (
    <Link 
			href={`/drink/${id}`}
			className="flex items-center w-[100%]">
			<div className="relative block h-36 w-36 overflow-hidden">
				<Image
					src={image}
					alt="thumbnail"
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 left-10 bg-gradient-to-l from-[#111] to-transparent z-10" >
					
			</div>
			</div>
			<h1 className="absolute left-42 pb-10 text-[var(--accent)] text-2xl font-serif z-20">{name}</h1>
    </Link>
  );
}
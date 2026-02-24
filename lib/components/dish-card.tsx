import Image from "next/image"

interface DishCardProps {
  name: string
  description: string
  image: string
  imageAlt: string
  layout?: "left" | "right"
}

export function DishCard({
  name,
  description,
  image,
  imageAlt,
  layout = "left",
}: DishCardProps) {
  return (
    <div
      className={`group flex flex-col ${
        layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-6 lg:gap-10 items-center`}
    >
      <div className="w-full lg:w-1/2 overflow-hidden rounded-sm">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/40 to-transparent" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-2 lg:px-4">
        <h3 className="text-xl lg:text-2xl text-[#f5efe6] font-medium tracking-[0.1em] uppercase mb-3 lg:mb-4">
          {name}
        </h3>
        <div className="w-10 h-px bg-[#c8a97e]/40 mb-3 lg:mb-4" />
        <p className="text-[#a89a8c] text-sm lg:text-base leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  )
}

interface DishCardCompactProps {
  name: string
  description: string
}

export function DishCardCompact({ name, description }: DishCardCompactProps) {
  return (
    <div className="group py-5 lg:py-6 border-b border-[#3d3229]/50">
      <h3 className="text-lg lg:text-xl text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-2 transition-colors duration-300 group-hover:text-[#c8a97e]">
        {name}
      </h3>
      <p className="text-[#a89a8c] text-sm lg:text-base leading-relaxed font-light">
        {description}
      </p>
    </div>
  )
}

interface DishCardGridProps {
  name: string
  description: string
  image: string
  imageAlt: string
}

export function DishCardGrid({
  name,
  description,
  image,
  imageAlt,
}: DishCardGridProps) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-sm mb-4 lg:mb-5">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/50 to-transparent" />
        </div>
      </div>
      <h3 className="text-base lg:text-lg text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-2 transition-colors duration-300 group-hover:text-[#c8a97e]">
        {name}
      </h3>
      <p className="text-[#a89a8c] text-xs lg:text-sm leading-relaxed font-light">
        {description}
      </p>
    </div>
  )
}

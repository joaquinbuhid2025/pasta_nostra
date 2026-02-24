interface SectionHeaderProps {
  id: string
  title: string
  subtitle: string
  description?: string
}

export function SectionHeader({
  id,
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  return (
    <div id={id} className="pt-24 lg:pt-32 pb-10 lg:pb-14 text-center scroll-mt-20">
      <p className="text-[#c8a97e] tracking-[0.4em] uppercase text-xs lg:text-sm mb-3 lg:mb-4">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#f5efe6] font-light tracking-[0.2em] uppercase mb-4 lg:mb-6 text-balance">
        {title}
      </h2>
      <div className="w-16 h-px bg-[#c8a97e]/50 mx-auto mb-4 lg:mb-6" />
      {description && (
        <p className="text-[#a89a8c] text-sm lg:text-base max-w-xl mx-auto font-light leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}

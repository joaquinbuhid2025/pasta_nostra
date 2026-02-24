import { MenuNav } from "@/components/menu-nav"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { DishCard, DishCardCompact, DishCardGrid } from "@/components/dish-card"
import Image from "next/image"

export default function CartaDePastas() {
  return (
    <main className="bg-[#1a1410] min-h-screen">
      <MenuNav />
      <HeroSection />

      {/* ============================================ */}
      {/* FOCACCIAS */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="inicio"
          title="El Inicio"
          subtitle="Focaccias"
          description="Nuestras focaccias de masa madre y fermentacion natural (48 hs) se hornean a diario hasta lograr una corteza dorada y un interior aireado."
        />
        <div className="flex flex-col gap-16 lg:gap-20">
          <DishCard
            name="Focaccia Clasica Genovese"
            description="Terminada con abundante aceite de oliva virgen extra, romero fresco de la huerta y escamas de sal marina."
            image="/images/focaccia.jpg"
            imageAlt="Focaccia clasica genovese con romero y sal marina"
            layout="left"
          />
          <DishCard
            name={'Focaccia "Rossa" con Tomates Confitados'}
            description="Cubierta con tomates cherry que concentran su dulzor en el horno, aceitunas negras griegas y oregano fresco."
            image="/images/focaccia-rossa.jpg"
            imageAlt="Focaccia rossa con tomates confitados y aceitunas"
            layout="right"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* CLASICOS DE LA CASA */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="clasicos"
          title="Los Clasicos de la Casa"
          subtitle="Tradicion"
          description="Recetas tradicionales, ejecutadas con ingredientes de calidad superior."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <DishCardGrid
            name="Sorrentinos de Jamon y Queso"
            description="Nuestra version definitiva. Masa al huevo rellena con abundante jamon cocido de seleccion y un corazon fundente de mozzarella y queso Reggianito. Un toque de pimienta blanca realza el sabor."
            image="/images/sorrentinos-jamon-queso.jpg"
            imageAlt="Sorrentinos de jamon y queso con salsa crema"
          />
          <DishCardGrid
            name="Raviolones de Pollo y Espinaca"
            description="Masa fina de espinacas frescas. Relleno suave de pechuga de pollo braseada lentamente, jamon cocido y ricota de campo fresca."
            image="/images/raviolones-pollo.jpg"
            imageAlt="Raviolones verdes de pollo y espinaca"
          />
          <DishCardGrid
            name="Agnolottis de Ricota y Espinaca"
            description="La opcion mas fresca y ligera. Mousse suave de ricota de canasta y espinacas de la huerta apenas salteadas, con un toque de nuez moscada."
            image="/images/agnolottis-ricota.jpg"
            imageAlt="Agnolottis de ricota y espinaca"
          />
          <DishCardGrid
            name="Raviolones de Ricota y Nuez"
            description="Masa delicada de semolin con un relleno cremoso de ricota artesanal y un generoso centro crocante de nueces mariposa tostadas."
            image="/images/raviolones-ricota-nuez.jpg"
            imageAlt="Raviolones de ricota y nuez"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* HUERTA Y MONTE */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="huerta"
          title="Huerta y Monte"
          subtitle="Opciones Vegetarianas"
          description="Equilibrio de sabores dulces, ahumados y quesos con caracter."
        />
        <div className="flex flex-col gap-16 lg:gap-20">
          <DishCard
            name="Sorrentinos de Calabaza al Rescoldo"
            description="Rellenos de pure de calabaza asada al horno (concentrando su dulzor natural), combinado con la intensidad de un queso de cabra artesanal y nueces."
            image="/images/sorrentinos-calabaza.jpg"
            imageAlt="Sorrentinos de calabaza con queso de cabra"
            layout="left"
          />
          <DishCard
            name="Agnolottis de Boniato y Queso Azul"
            description="Rellenos de un pure sedoso de boniatos asados en horno de barro, equilibrado con el caracter del queso azul y almendras crocantes."
            image="/images/agnolottis-boniato.jpg"
            imageAlt="Agnolottis de boniato y queso azul"
            layout="right"
          />
          <DishCard
            name="Raviolones de Berenjena Ahumada"
            description="Rellenos de berenjenas asadas a la llama viva para un gusto ahumado natural, mezcladas con ricota suave y queso azul premium."
            image="/images/raviolones-berenjena.jpg"
            imageAlt="Raviolones de berenjena ahumada"
            layout="left"
          />
          <DishCard
            name={'Sorrentinos "Trilogia Italiana"'}
            description="Relleno generoso con una crema intensa de ricota, tomates secos marinados, albahaca fresca y un corazon de mozzarella fundente."
            image="/images/sorrentinos-trilogia.jpg"
            imageAlt="Sorrentinos trilogia italiana"
            layout="right"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* COCCIONES PROLONGADAS */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="carnes"
          title="Cocciones Prolongadas"
          subtitle="Carnes"
          description="Rellenos profundos y tiernos, resultado de horas de fuego lento."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <DishCardGrid
            name="Agnolottis de Osobuco al Malbec"
            description="Masa con un toque ahumado de pimenton. Relleno de carne de osobuco braseado durante 6 horas en reduccion de vino tinto Malbec, hasta que se deshace."
            image="/images/agnolottis-osobuco.jpg"
            imageAlt="Agnolottis de osobuco al Malbec"
          />
          <DishCardGrid
            name="Raviolones de Bondiola a la Cerveza"
            description="Rellenos de bondiola de cerdo desmenuzada, cocinada durante 7 horas con cerveza negra artesanal y especias, mezclada con cebollas caramelizadas."
            image="/images/raviolones-bondiola.jpg"
            imageAlt="Raviolones de bondiola a la cerveza negra"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* TESOROS DEL MAR */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="mar"
          title="Tesoros del Mar"
          subtitle="Sabores Oceanicos"
          description="Sabores oceanicos envueltos en nuestra masa mas delicada."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <DishCardGrid
            name="Sorrentinos Negros de Salmon"
            description="Masa con tinta de calamar. Rellenos de salmon rosado confitado en vino Torrontes, mezclado con ricota fresca y ciboulette."
            image="/images/sorrentinos-salmon.jpg"
            imageAlt="Sorrentinos negros de salmon con tinta de calamar"
          />
          <DishCardGrid
            name="Sorrentinos de Langostinos y Ajo Asado"
            description="Rellenos con langostinos y una emulsion suave de quesos mascarpone y ricota, con el dulzor del ajo asado y un toque fresco de limon."
            image="/images/sorrentinos-langostinos.jpg"
            imageAlt="Sorrentinos de langostinos y ajo asado"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* CINTAS FRESCAS */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="cintas"
          title="Cintas Frescas al Huevo"
          subtitle="Pasta Larga"
          description="Pasta larga cortada a cuchillo. Elaborada para lograr la textura porosa perfecta que abraza la salsa."
        />
        <div className="relative overflow-hidden rounded-sm mb-10 lg:mb-14">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/cintas-frescas.jpg"
              alt="Cintas frescas artesanales en tres colores"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/70 to-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
            <h3 className="text-lg lg:text-xl text-[#f5efe6] font-medium tracking-[0.1em] uppercase mb-3">
              Cintas Clasicas Doradas
            </h3>
            <div className="w-8 h-px bg-[#c8a97e]/40 mx-auto mb-3" />
            <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
              Sabor tradicional de huevo de campo.
            </p>
          </div>
          <div className="text-center p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
            <h3 className="text-lg lg:text-xl text-[#f5efe6] font-medium tracking-[0.1em] uppercase mb-3">
              Cintas Verdes de Espinaca
            </h3>
            <div className="w-8 h-px bg-[#c8a97e]/40 mx-auto mb-3" />
            <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
              Con abundante espinaca fresca seleccionada.
            </p>
          </div>
          <div className="text-center p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
            <h3 className="text-lg lg:text-xl text-[#f5efe6] font-medium tracking-[0.1em] uppercase mb-3">
              Cintas Rojas al Pimenton
            </h3>
            <div className="w-8 h-px bg-[#c8a97e]/40 mx-auto mb-3" />
            <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
              Color vibrante y un sutil toque ahumado.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* SALSAS Y CREMAS */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="salsas"
          title="Nuestras Salsas y Cremas"
          subtitle="El Acompanamiento Ideal"
          description="Cocinadas a diario para realzar nuestras pastas."
        />
        <div className="relative overflow-hidden rounded-sm mb-12 lg:mb-16">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/salsas.jpg"
              alt="Variedad de salsas artesanales para pasta"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/70 to-transparent" />
          </div>
        </div>

        {/* Las Rojas */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-center text-xl lg:text-2xl text-[#c8a97e] font-light tracking-[0.2em] uppercase mb-8 lg:mb-10">
            Las Rojas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
              <h4 className="text-lg text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-2">
                Pomodoro Rustico
              </h4>
              <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
                Tomates perita, albahaca fresca, ajo suave y aceite de oliva virgen.
              </p>
            </div>
            <div className="p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
              <h4 className="text-lg text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-2">
                Bolognesa de Coccion Lenta
              </h4>
              <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
                Ragu tradicional de ternera, cocinado 4 horas a fuego suave.
              </p>
            </div>
          </div>
        </div>

        {/* Las Blancas */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-center text-xl lg:text-2xl text-[#c8a97e] font-light tracking-[0.2em] uppercase mb-8 lg:mb-10">
            Las Blancas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
              <h4 className="text-lg text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-2">
                Crema de Quesos Seleccionados
              </h4>
              <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
                Mezcla sedosa de Reggianito, Mozzarella y un toque de Azul.
              </p>
            </div>
            <div className="p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
              <h4 className="text-lg text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-2">
                Manteca Clarificada y Salvia
              </h4>
              <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
                Simpleza perfecta: manteca dorada con hojas de salvia fresca.
              </p>
            </div>
          </div>
        </div>

        {/* Especiales y Fundentes */}
        <div>
          <h3 className="text-center text-xl lg:text-2xl text-[#c8a97e] font-light tracking-[0.2em] uppercase mb-8 lg:mb-10">
            Especiales y Fundentes
          </h3>
          <p className="text-center text-[#a89a8c] text-sm font-light mb-8 lg:mb-10 max-w-lg mx-auto">
            Salsas aromaticas y mantecas compuestas disenadas para fundirse con el calor propio de la pasta recien hecha.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Pesto Genovese Autentico",
                desc: "Mortero de albahaca fresca, nueces, parmesano y oliva.",
              },
              {
                name: "Crema de Hongos de Pino",
                desc: "Salsa rustica y aromatica de hongos secos y champiñones.",
              },
              {
                name: "Salsa Rosa Suave",
                desc: "El equilibrio justo entre pomodoro y crema de campo.",
              },
              {
                name: '"Cacio e Pepe"',
                desc: "Intensa emulsion de queso Pecorino y pimienta, se funde en el plato.",
              },
              {
                name: "Manteca de Limon y Sal Marina",
                desc: "Se derrite sobre la pasta. Ideal para opciones de pescado.",
              },
              {
                name: "Manteca de Ajo Asado y Cayena",
                desc: "Toque dulce, ahumado y sutilmente picante que envuelve la pasta.",
              },
            ].map((sauce) => (
              <div
                key={sauce.name}
                className="p-5 lg:p-6 border border-[#3d3229]/50 rounded-sm hover:border-[#c8a97e]/30 transition-colors duration-300"
              >
                <h4 className="text-base text-[#f5efe6] font-medium tracking-[0.06em] uppercase mb-2">
                  {sauce.name}
                </h4>
                <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
                  {sauce.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* QUESOS */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="quesos"
          title="El Final Perfecto"
          subtitle="Quesos"
          description="Quesos de calidad superior para terminar su plato. Servidos aparte."
        />
        <div className="relative overflow-hidden rounded-sm mb-10 lg:mb-14">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/quesos.jpg"
              alt="Seleccion de quesos artesanales"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/70 to-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
            <h3 className="text-lg text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-3">
              Reggianito Estacionado 12 Meses
            </h3>
            <div className="w-8 h-px bg-[#c8a97e]/40 mx-auto mb-3" />
            <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
              Rallado en laminas finas. Sabor intenso y complejo.
            </p>
          </div>
          <div className="text-center p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
            <h3 className="text-lg text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-3">
              Queso Tipo Grana Padano
            </h3>
            <div className="w-8 h-px bg-[#c8a97e]/40 mx-auto mb-3" />
            <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
              Laminas de queso duro curado, con cristales de sabor.
            </p>
          </div>
          <div className="text-center p-6 lg:p-8 border border-[#3d3229]/50 rounded-sm">
            <h3 className="text-lg text-[#f5efe6] font-medium tracking-[0.08em] uppercase mb-3">
              Sardo de Campo Maduro
            </h3>
            <div className="w-8 h-px bg-[#c8a97e]/40 mx-auto mb-3" />
            <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
              Rallado en laminas finas. Perfil mas picante y rustico.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* GRATINADOS AL HORNO */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="gratinados"
          title="Gratinados al Horno"
          subtitle="Lasagnas y Canelones"
          description="Lasagnas y canelones generosos, terminados con una cubierta dorada de queso."
        />
        {/* Full-width hero image for this section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-14">
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/lasagna.jpg"
                alt="Lasagna gratinada al horno"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/60 to-transparent" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/canelones.jpg"
                alt="Canelones gratinados"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/60 to-transparent" />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Lasagnas */}
          <h3 className="text-center text-xl lg:text-2xl text-[#c8a97e] font-light tracking-[0.2em] uppercase mb-6 lg:mb-8">
            Lasagnas
          </h3>
          <DishCardCompact
            name="Lasagna Vegetariana de Huerta y Bosque"
            description="Capas de masa casera con ragu de hongos, vegetales asados y mezcla fresca de espinaca y ricota. Gratinada con bechamel ligera y parmesano."
          />
          <DishCardCompact
            name="Lasagna de Carne Tradicional"
            description="Capas de masa con nuestra bolognesa de coccion lenta, jamon, queso y espinaca fresca."
          />

          <div className="my-10 lg:my-14" />

          {/* Canelones */}
          <h3 className="text-center text-xl lg:text-2xl text-[#c8a97e] font-light tracking-[0.2em] uppercase mb-6 lg:mb-8">
            Canelones
          </h3>
          <DishCardCompact
            name="Canelones de Carne al Malbec"
            description="Rellenos con el braseado de carne al vino tinto, espinaca y ricota. Servidos mixtos con fileto y salsa blanca."
          />
          <DishCardCompact
            name="Canelones de Humita (Choclo)"
            description="Rellenos de crema de choclo andino, queso de campo criollo y sofrito tradicional."
          />
          <DishCardCompact
            name="Canelones de Pollo y Hongos"
            description="Rellenos de pollo y puerros, cubiertos con la crema aromatica de hongos de pino."
          />
          <DishCardCompact
            name="Canelones de Calabaza y Nuez"
            description="Rellenos de calabaza asada dulce y ricota. Terminados con manteca dorada y salvia."
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* MENU INFANTIL */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="infantil"
          title="Menu Infantil"
          subtitle="Para los mas chicos"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/menu-infantil.jpg"
                alt="Menu infantil de pasta"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/40 to-transparent" />
            </div>
          </div>
          <div>
            <DishCardCompact
              name="Sorrentinos Junior de Jamon y Queso"
              description="Formato pequeno, con relleno suave de jamon cocido y mozzarella."
            />
            <DishCardCompact
              name="Ravioles de Queso Cremoso"
              description="Faciles de comer, con un relleno super suave de ricota y queso."
            />
            <DishCardCompact
              name="Cintas al Huevo Caseras"
              description="Ideales para pedir solas con manteca y queso, o con salsa rosa."
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto my-20 lg:my-28 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
      </div>

      {/* ============================================ */}
      {/* SIN TACC */}
      {/* ============================================ */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <SectionHeader
          id="sintacc"
          title="Sin TACC"
          subtitle="Apto Celiacos"
          description="Pastas elaboradas en sector exclusivo con harinas certificadas. Nuestros rellenos y salsas son naturalmente libres de gluten."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="relative overflow-hidden rounded-sm mb-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sin-tacc.jpg"
                  alt="Pastas sin TACC aptas para celiacos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/40 to-transparent" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg lg:text-xl text-[#c8a97e] font-light tracking-[0.15em] uppercase mb-6">
              Pastas Rellenas
            </h3>
            <DishCardCompact
              name="Sorrentinos de Jamon y Mozzarella"
              description="Clasico relleno sin gluten."
            />
            <DishCardCompact
              name="Sorrentinos de Osobuco al Malbec"
              description="El braseado mas intenso, apto celiacos."
            />
            <DishCardCompact
              name={'Sorrentinos "Trilogia"'}
              description="Ricota, tomate seco y mozzarella."
            />
            <DishCardCompact
              name="Raviolones de Espinaca y Ricota"
              description="Frescura y suavidad sin gluten."
            />
            <DishCardCompact
              name="Raviolones de Salmon al Torrontes"
              description="Sabor de mar, apto celiacos."
            />
            <DishCardCompact
              name="Raviolones de Calabaza y Queso de Cabra"
              description="Dulzor natural y caracter."
            />

            <div className="mt-8 lg:mt-10">
              <h3 className="text-lg lg:text-xl text-[#c8a97e] font-light tracking-[0.15em] uppercase mb-4">
                Salsas Aptas
              </h3>
              <p className="text-[#a89a8c] text-sm font-light leading-relaxed">
                Todas nuestras salsas son sin TACC. Elija entre:{" "}
                <span className="text-[#f5efe6]">Pomodoro Rustico</span> |{" "}
                <span className="text-[#f5efe6]">Bolognesa de Coccion Lenta</span> |{" "}
                <span className="text-[#f5efe6]">Crema de Quesos</span> |{" "}
                <span className="text-[#f5efe6]">Manteca y Salvia</span> |{" "}
                <span className="text-[#f5efe6]">Pesto Genovese</span> |{" "}
                <span className="text-[#f5efe6]">Salsa Rosa</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="mt-24 lg:mt-32 pb-12 lg:pb-16 text-center px-4">
        <div className="max-w-xs mx-auto mb-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a97e]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8a97e]/40" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a97e]/30" />
        </div>
        <p className="text-[#c8a97e] tracking-[0.4em] uppercase text-xs mb-3">
          Artesania y Sabor
        </p>
        <h2 className="text-3xl lg:text-4xl text-[#f5efe6] font-light tracking-[0.15em] uppercase mb-4">
          Carta de Pastas
        </h2>
        <p className="text-[#a89a8c] text-sm font-light">
          Masas laminadas a diario con huevos de campo
        </p>
      </footer>
    </main>
  )
}

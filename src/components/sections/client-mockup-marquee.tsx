import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const mockups = [
  {
    brand: "Atelier Morel",
    sector: "Menuiserie sur-mesure",
    src: "/mockups/atelier-morel-homepage.png",
    accent: "bg-[#A8482C]",
  },
  {
    brand: "Cabinet Lyria",
    sector: "Ostéopathie",
    src: "/mockups/cabinet-lyria-homepage.png",
    accent: "bg-[#5C7A99]",
  },
  {
    brand: "Maison Aveline",
    sector: "Beauté & bien-être",
    src: "/mockups/maison-aveline-homepage.png",
    accent: "bg-[#C8956D]",
  },
  {
    brand: "Casa Luma",
    sector: "Restaurant local",
    src: "/mockups/casa-luma-homepage.png",
    accent: "bg-[#8B6F3E]",
  },
  {
    brand: "Volteo Services",
    sector: "Électricité & domotique",
    src: "/mockups/volteo-services-homepage.png",
    accent: "bg-miel",
  },
  {
    brand: "Boulangerie Talmès",
    sector: "Commerce de proximité",
    src: "/mockups/boulangerie-talmes-homepage.png",
    accent: "bg-[#B98542]",
  },
];

export function ClientMockupMarquee() {
  return (
    <Marquee
      speed="slow"
      pauseOnHover={false}
      className="py-3 md:py-5"
      fade
    >
      {mockups.map((mockup) => (
        <figure
          key={mockup.brand}
          aria-label={`Mockup de homepage pour ${mockup.brand}`}
          className="group w-[82vw] min-w-[300px] max-w-[520px] overflow-hidden rounded-[24px] border-[0.5px] border-ivoire/12 bg-ivoire/[0.055] p-2 shadow-[0_32px_90px_-55px_rgba(0,0,0,0.85)] transition duration-500 hover:-translate-y-1 hover:border-miel/55 hover:bg-ivoire/[0.075] md:w-[520px]"
        >
          <div className="flex h-10 items-center justify-between rounded-t-[18px] border-[0.5px] border-b-0 border-ivoire/10 bg-[#201d17]/95 px-4">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className={cn("h-2.5 w-2.5 rounded-full", mockup.accent)} />
              <span className="h-2.5 w-2.5 rounded-full bg-ivoire/24" />
              <span className="h-2.5 w-2.5 rounded-full bg-ivoire/14" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ivoire/45">
              {mockup.sector}
            </span>
          </div>

          <div className="overflow-hidden rounded-b-[18px] border-[0.5px] border-t-0 border-ivoire/10 bg-ivoire">
            <Image
              src={mockup.src}
              alt={`Homepage fictive ${mockup.brand}`}
              width={1536}
              height={960}
              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 520px, 520px"
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.015]"
            />
          </div>

          <figcaption className="flex items-center justify-between gap-4 px-3 pb-2 pt-4">
            <span className="font-serif text-[22px] leading-none text-ivoire">
              {mockup.brand}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ivoire/42">
              Homepage
            </span>
          </figcaption>
        </figure>
      ))}
    </Marquee>
  );
}

export function AtelierMockup() {
  return (
    <div className="aspect-[16/10] relative bg-[#F5F0E8] overflow-hidden">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-between text-[#2B1F14]">
        <span className="font-serif italic text-[15px]">Atelier Morel</span>
        <div className="flex gap-4 text-[10px] uppercase tracking-[0.18em]">
          <span>Réalisations</span>
          <span>Devis</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="absolute inset-x-6 top-14 bottom-6 grid grid-cols-12 gap-3">
        <div className="col-span-7 flex flex-col justify-end gap-3">
          <div className="font-serif text-[#2B1F14] text-[clamp(15px,3vw,28px)] leading-[1.05]">
            L'art du sur-mesure,<br />transmis depuis 1962.
          </div>
          <div className="text-[10px] text-[#2B1F14]/70 max-w-[80%]">
            Cuisines, dressings, escaliers, bibliothèques. Chaque pièce est unique.
          </div>
          <div className="flex gap-2 mt-1">
            <span className="bg-[#A8482C] text-[#F5F0E8] text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
              Demander un devis
            </span>
            <span className="border border-[#2B1F14]/60 text-[#2B1F14] text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
              Voir l'atelier
            </span>
          </div>
        </div>
        <div className="col-span-5 grid grid-rows-2 gap-3">
          <div
            className="rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=400&q=70)",
            }}
          />
          <div
            className="rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=400&q=70)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

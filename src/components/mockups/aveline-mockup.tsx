export function AvelineMockup() {
  return (
    <div className="aspect-[16/10] relative bg-[#F9F2EC] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-between text-[#3A2A24]">
        <span className="font-serif italic tracking-wide text-[15px]">Maison Aveline</span>
        <div className="flex gap-4 text-[10px] uppercase tracking-[0.2em]">
          <span>Prestations</span>
          <span>L'univers</span>
          <span>Réserver</span>
        </div>
      </div>

      <div className="absolute inset-x-6 top-16 bottom-6 grid grid-cols-12 gap-3">
        <div className="col-span-7 flex flex-col justify-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#C8956D]">
            Maison de soin · depuis 2014
          </span>
          <div className="font-serif italic text-[#3A2A24] text-[clamp(14px,2.8vw,28px)] leading-[1.05]">
            Un instant pour vous,<br />une signature pour la peau.
          </div>
          <div className="text-[10px] text-[#3A2A24]/70 max-w-[85%] leading-[1.5]">
            Soins visage, corps, rituels signature. Cinq protocoles exclusifs.
          </div>
          <div className="flex gap-2 mt-1">
            <span className="bg-[#C8956D] text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
              Réserver un soin
            </span>
          </div>
        </div>
        <div className="col-span-5">
          <div
            className="aspect-[3/4] rounded-md bg-cover bg-center w-full h-full"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=70)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

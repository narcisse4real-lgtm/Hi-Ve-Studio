export function LyriaMockup() {
  return (
    <div className="aspect-[16/10] relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-between text-[#1B2B3F]">
        <span className="font-serif tracking-tight text-[15px]">Cabinet Lyria</span>
        <div className="flex gap-4 text-[10px] uppercase tracking-[0.18em]">
          <span>Le cabinet</span>
          <span>Tarifs</span>
          <span>RDV</span>
        </div>
      </div>

      <div className="absolute inset-x-6 top-16 bottom-6 grid grid-cols-12 gap-3">
        <div className="col-span-6 flex flex-col justify-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#5C7A99]">
            Cabinet d'ostéopathie · Lyon
          </span>
          <div className="font-serif text-[#1B2B3F] text-[clamp(14px,2.6vw,24px)] leading-[1.1]">
            Une approche douce, à l'écoute de votre corps.
          </div>
          <div className="text-[10px] text-[#1B2B3F]/70 max-w-[90%] leading-[1.5]">
            Prise de rendez-vous en ligne 7j/7. Réponse sous 24h.
          </div>
          <span className="self-start bg-[#1B2B3F] text-white text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mt-1">
            Prendre rendez-vous
          </span>
        </div>
        <div className="col-span-6 flex flex-col gap-2">
          <div className="bg-[#F5F2EC] rounded-md p-3 text-[#1B2B3F]">
            <div className="text-[9px] uppercase tracking-[0.2em] text-[#5C7A99]">
              Disponibilités
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {["Mar 9h", "Mar 10h", "Mar 14h", "Mer 11h", "Mer 16h", "Jeu 9h"].map(
                (slot) => (
                  <span
                    key={slot}
                    className="text-[8px] py-1 border border-[#1B2B3F]/15 rounded text-center"
                  >
                    {slot}
                  </span>
                ),
              )}
            </div>
          </div>
          <div
            className="rounded-md flex-1 bg-cover bg-center min-h-[60px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=70)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

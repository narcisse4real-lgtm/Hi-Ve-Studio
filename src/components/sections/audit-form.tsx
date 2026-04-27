"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hexagon } from "@/components/ui/hexagon";
import { cn } from "@/lib/utils";

const auditSchema = z.object({
  name: z.string().min(2, "Votre nom est requis."),
  company: z.string().min(2, "Le nom de votre entreprise est requis."),
  sector: z.string().min(1, "Sélectionnez un secteur."),
  city: z.string().min(2, "Votre ville est requise."),
  website: z
    .string()
    .url("L'URL de votre site n'est pas valide.")
    .optional()
    .or(z.literal("")),
  goal: z.string().min(1, "Sélectionnez un objectif."),
  email: z.string().email("Adresse email invalide."),
  phone: z
    .string()
    .regex(
      /^(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}$/,
      "Numéro de téléphone français invalide.",
    )
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .max(500, "500 caractères maximum.")
    .optional()
    .or(z.literal("")),
  rgpd: z.literal(true, {
    errorMap: () => ({
      message: "Vous devez accepter pour recevoir votre audit.",
    }),
  }),
});

type AuditFormValues = z.infer<typeof auditSchema>;

const sectors = [
  "Artisanat",
  "Profession libérale",
  "Beauté & bien-être",
  "Restauration",
  "Commerce",
  "Services",
  "Autre",
];

const goals = [
  "Plus d'appels",
  "Plus de devis",
  "Plus de RDV",
  "Améliorer mon image",
  "Être visible sur Google",
  "Autre",
];

export function AuditForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = async (data: AuditFormValues) => {
    try {
      await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // best-effort: still show success because Resend may be unconfigured
    }
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border-[0.5px] border-sable p-10 md:p-14 text-center">
        <div className="inline-flex items-center justify-center size-14 rounded-full bg-sauge/15 mb-6">
          <Hexagon filled size={20} className="text-sauge" />
        </div>
        <h3 className="font-serif text-3xl md:text-4xl font-medium">
          Merci, on revient vers vous sous 48h.
        </h3>
        <p className="mt-4 max-w-md mx-auto text-gris-chaud">
          On analyse votre activité et on vous envoie un diagnostic complet
          par email. Aucune relance commerciale, juste un regard professionnel.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border-[0.5px] border-sable rounded-xl px-4 py-3.5 text-[15px] text-encre placeholder:text-gris-clair focus:outline-none focus:border-miel transition-colors";
  const errorClass = "border-miel/80 bg-miel/[0.03]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "bg-white rounded-2xl border-[0.5px] border-sable p-6 md:p-10",
        compact ? "max-w-2xl" : "",
      )}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nom et prénom" error={errors.name?.message} required>
          <input
            type="text"
            autoComplete="name"
            placeholder="Pierre Lambert"
            className={cn(inputClass, errors.name && errorClass)}
            {...register("name")}
          />
        </Field>

        <Field
          label="Nom de l'entreprise"
          error={errors.company?.message}
          required
        >
          <input
            type="text"
            autoComplete="organization"
            placeholder="Atelier Lambert"
            className={cn(inputClass, errors.company && errorClass)}
            {...register("company")}
          />
        </Field>

        <Field
          label="Secteur d'activité"
          error={errors.sector?.message}
          required
        >
          <select
            className={cn(inputClass, errors.sector && errorClass)}
            defaultValue=""
            {...register("sector")}
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Ville" error={errors.city?.message} required>
          <input
            type="text"
            autoComplete="address-level2"
            placeholder="Lyon"
            className={cn(inputClass, errors.city && errorClass)}
            {...register("city")}
          />
        </Field>

        <Field
          label="Site actuel"
          hint="optionnel"
          error={errors.website?.message}
        >
          <input
            type="url"
            placeholder="https://votre-site.fr"
            className={cn(inputClass, errors.website && errorClass)}
            {...register("website")}
          />
        </Field>

        <Field
          label="Objectif principal"
          error={errors.goal?.message}
          required
        >
          <select
            className={cn(inputClass, errors.goal && errorClass)}
            defaultValue=""
            {...register("goal")}
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            {goals.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            autoComplete="email"
            placeholder="vous@email.com"
            className={cn(inputClass, errors.email && errorClass)}
            {...register("email")}
          />
        </Field>

        <Field
          label="Téléphone"
          hint="optionnel"
          error={errors.phone?.message}
        >
          <input
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            className={cn(inputClass, errors.phone && errorClass)}
            {...register("phone")}
          />
        </Field>

        <Field
          className="md:col-span-2"
          label="Quelques mots sur votre besoin"
          hint="optionnel — 500 caractères max."
          error={errors.message?.message}
        >
          <textarea
            rows={4}
            placeholder="Quelques mots sur votre activité, vos enjeux actuels, ou ce que vous aimeriez améliorer."
            className={cn(
              inputClass,
              "resize-none min-h-[120px]",
              errors.message && errorClass,
            )}
            {...register("message")}
          />
        </Field>
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 cursor-pointer text-[14px] text-gris-chaud">
          <input
            type="checkbox"
            className="mt-1 size-4 rounded border-sable text-miel focus:ring-miel accent-miel"
            {...register("rgpd")}
          />
          <span>
            J'accepte que Hi-Ve me recontacte dans le cadre de cette demande.
            Vos informations restent confidentielles et ne sont utilisées que
            pour vous répondre.
          </span>
        </label>
        {errors.rgpd?.message ? (
          <p className="mt-1.5 text-[12.5px] text-miel">{errors.rgpd.message}</p>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-5">
        <p className="text-[12.5px] text-gris-chaud max-w-md">
          Sans engagement. Sans relance commerciale. Réponse sous 48h.
        </p>
        <Button type="submit" disabled={isSubmitting} showArrow={!isSubmitting}>
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              Envoi…
            </span>
          ) : (
            "Recevoir mon audit gratuit"
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  required,
  children,
  className,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <label className="text-[12px] uppercase tracking-label text-gris-chaud font-medium">
          {label}
          {required ? <span className="text-miel ml-1">*</span> : null}
        </label>
        {hint ? <span className="text-[11px] text-gris-clair">{hint}</span> : null}
      </div>
      {children}
      {error ? (
        <p className="mt-1.5 text-[12.5px] text-miel">{error}</p>
      ) : null}
    </div>
  );
}

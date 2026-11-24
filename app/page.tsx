const LIEN_PAIEMENT = "https://buy.stripe.com/test_cNibJ3bnt9bR8izbPz1gs00";

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-10">
      <p className="text-sm font-bold uppercase tracking-widest text-orange">
        Second Tour
      </p>

      <h1 className="font-titre mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight">
        Vos clients oublient leur prochaine révision. Rappelez-les à votre
        place.
      </h1>

      <p className="mt-5 text-lg leading-snug">
        Un client satisfait ne revient pas parce qu’il oublie, pas parce qu’il
        est déçu. Second Tour le relance pour vous, au bon moment.
      </p>

      <a
        href={LIEN_PAIEMENT}
        className="mt-8 flex min-h-14 w-full items-center justify-center rounded-xl bg-orange px-6 text-lg font-bold text-white"
      >
        Commencer
      </a>
      <p className="mt-3 text-center text-sm">
        29&nbsp;€ par mois, sans engagement.
      </p>

      <section className="mt-12 rounded-2xl border-2 border-graphite bg-white p-5">
        <p className="text-sm font-bold uppercase tracking-widest">Exemple</p>
        <p className="font-titre mt-2 text-3xl font-extrabold leading-tight">
          100 clients × 120&nbsp;€ de révision = 12&nbsp;000&nbsp;€
        </p>
        <p className="mt-2 leading-snug">
          C’est ce qui ne revient pas chaque année si personne ne les relance.
          Chez vous, ce chiffre sera différent, mais le mécanisme est le même.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-titre text-2xl font-extrabold">
          Trois choses, et rien d’autre
        </h2>
        <ul className="mt-5 space-y-4">
          <li className="border-l-4 border-orange pl-4">
            <p className="font-bold">On note le contact</p>
            <p>Un numéro ou un email, pris au moment du paiement.</p>
          </li>
          <li className="border-l-4 border-orange pl-4">
            <p className="font-bold">On relance au bon moment</p>
            <p>Le rappel part tout seul, au délai naturel de la prestation.</p>
          </li>
          <li className="border-l-4 border-orange pl-4">
            <p className="font-bold">On offre un retour simple</p>
            <p>Une offre à usage unique, et un compteur des clients revenus.</p>
          </li>
        </ul>
      </section>

      <section
        id="prix"
        className="mt-12 rounded-2xl bg-graphite p-6 text-papier"
      >
        <p className="font-titre text-4xl font-extrabold">
          29&nbsp;€<span className="text-xl font-bold"> / mois</span>
        </p>
        <p className="mt-2">Sans engagement, résiliable à tout moment.</p>
        <a
          href={LIEN_PAIEMENT}
          className="mt-5 flex min-h-14 w-full items-center justify-center rounded-xl bg-orange px-6 text-lg font-bold text-white"
        >
          Commencer
        </a>
      </section>
    </main>
  );
}

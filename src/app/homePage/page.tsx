import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section className="max-w-3xl mx-auto text-center py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-900">👋 Salut, moi c&apos;est Charles Beauchamp !</h1>
        <p className="mt-4 text-lg text-gray-700">
          Passionné par le <strong>développement web</strong>, la <strong>technologie</strong> et le
          <strong> service à la clientèle</strong>, j’aime créer des expériences interactives et résoudre 
          des problèmes techniques. Avec plusieurs années d&apos;expérience en vente, support technique et 
          installation, j&apos;ai développé une <strong>grande capacité d&apos;adaptation</strong> et un excellent 
          sens du service.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Aujourd’hui, je me spécialise dans le <strong>développement web et mobile</strong>, maîtrisant 
          des technologies comme <strong>Next.js, React, PHP et Node.js</strong>. Mon objectif ? Concevoir 
          des interfaces modernes et intuitives, tout en assurant une expérience utilisateur fluide.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          🚀 <strong>Prêt à travailler ensemble ?</strong> Jette un coup d’œil à mes projets !
        </p>
      </section>
      <button className="px-4 py-2 text-sm font-medium text-white bg-gray-500 hover:bg-gray-300 hover:text-black rounded-md">
        <Link href="/projet">Voir mes Projets</Link>
      </button>
    </main>
    </>
  );
}

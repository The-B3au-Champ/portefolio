import React from 'react';
import NavBar from '../../../components/navbarComponent';
import PïedDePage from '../../../components/footerComponent';

export default function Experience() {
  const experiences = [
    {
      title: "BestBuy St-Jérôme",
      years: "2020 - 2023, 2025",
      description:
        "Conseiller aux ventes chez Best Buy, j’étais une référence grâce à ma polyvalence et ma volonté d’apprendre. Je maîtrisais tous les départements et offrais un excellent service client. Expérience avec Geek Squad en support technique et dépannage informatique.",
      skills: ["Service client", "Support technique", "Dépannage informatique"],
    },
    {
      title: "Technitronique, St-Lin-Des-Laurentides",
      years: "2023",
      description:
        "Vendeur et installateur de télévisions et systèmes de son, ainsi qu’électroménagers. Mon rôle impliquait la communication client, le conseil et l’installation.",
      skills: ["Installation", "Vente", "Service client"],
    },
    {
      title: "Pépinière Excels, St-Roch-De-L'Achigan",
      years: "2021 - 2022",
      description:
        "Gérer des situations complexes liées à la nouvelle caisse et assister les employés. Simplification du processus d’utilisation de la caisse et réalisation de tâches diverses en soutien à la gestion.",
      skills: ["Gestion de caisse", "Support aux employés", "Organisation"],
    },
  ];

  return (
    <>
        <main className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8">💼 Mon Expérience</h1>
            <div className="flex-row gap-4">
                {experiences.map((exp, index) => (
                <div className="rounded-lg shadow-lg" key={index}>
                    <div className="mt-4 p-4 ">
                    <h2 className="text-xl font-bold">{exp.title}</h2>
                    <p>{exp.years}</p>
                    <p>{exp.description}</p>
                    <div>
                        {exp.skills.map((skill, i) => (
                        <span key={i}>{skill}</span>
                        ))}
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <div className='mb-20 rounded-lg shadow-lg mt-4 pl-4 pr-4'>
                <h2 className='font-bold text-2xl mt-8'>Mon Parcours Académique</h2>
                <p>J'ai étudié dans le domaine de l'informatique au Cégep de Saint-Jérôme au début, pour ensuite me diriger vers l'AEC en développement de sites web.</p>
                <p>Dans le programme j'ai appris les langages <b>front-End HTML, CSS, JavaScript</b> en particulier mais j'ai également eu la chance d'étudier <b>React, React-native et Next.js</b></p>
                <p>Dans le <b>Back-End</b> j'ai étudier <b>Php, Node.js et le framework Laravel</b></p>
            </div>
        </main>
    </>
  );
}


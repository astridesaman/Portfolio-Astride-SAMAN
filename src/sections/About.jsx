import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import SkillsGrid from '../components/SkillsGrid.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('astridesmn@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/Astride.png" alt="Astride" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Qui suis-je ?</p>
              <p className="grid-subtext">
                Étudiante en 3ème année d’informatique à l’Université de la Nouvelle-Calédonie, je suis passionnée par
                l’intelligence artificielle, le code et l’entrepreneuriat. Je crois en l’impact de la technologie pour
                transformer des idées en solutions concrètes, notamment dans des domaines comme la médecine.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
           <SkillsGrid/>
            <div>
              <p className="grid-headtext">Compétences Techniques</p>
              <p className="grid-subtext">
                Je maîtrise différents langages, frameworks et outils qui me permettent de créer des applications
                robustes et innovantes.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -22.276, lng: 166.457, text: 'Noumea, Nouvelle-Caledonie', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Flexible et Ouverte à la Collaboration</p>
              <p className="grid-subtext">
                Basée à Nouméa, je suis disponible pour travailler sur des projets locaux ou à distance à travers le
                monde.
              </p>
              <Button name="Contactez-moi" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="Passion" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Ma Passion pour le Code</p>
              <p className="grid-subtext">
                J'adore résoudre des problèmes et transformer des idées en réalité grâce à la programmation. Le code
                n'est pas seulement une compétence, c'est une passion qui m'anime au quotidien.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="Contact"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Me Contacter</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  astridesmn@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

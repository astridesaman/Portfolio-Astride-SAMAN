import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Student from '../components/Student.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { Schools, workExperiences } from '../constants/index.js';

const Education = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="education">
      <div className="w-full text-white-600">
        <p className="head-text">Mon parcours académique</p>

        <div className="education-container">
          <div className="education-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Student position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="education-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {Schools.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="education-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="education-content_logo">
                      <img className="w-full h-full" src={item.logo_etablissement} alt="" />
                    </div>

                    <div className="education-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.etablissement}</p>
                    <p className="text-sm mb-5">
                      {item.position} -- <span>{item.annees}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.matieres}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

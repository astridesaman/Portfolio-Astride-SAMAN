import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function RubberDuck({ position = [0, 0, 0] }) {
  const { nodes, materials } = useGLTF('/models/rubber_duck.glb');
  const duckRef = useRef();

  // Animation de flottement
  useGSAP(() => {
    if (!duckRef.current) return;
    
    gsap.to(duckRef.current.position, {
      y: "+=0.2",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <group ref={duckRef} position={position} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials.RubberDuck} 
        position={[-10, -1,-1]} 
        rotation={[Math.PI / 2, 0, 0]} 
      />
    </group>
  );
}

// Préchargement du modèle
useGLTF.preload('/models/rubber_duck.glb');

export default RubberDuck;

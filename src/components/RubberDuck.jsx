import { Float, useGLTF } from '@react-three/drei';

const RubberDuck = (props) => {
  // Charge le modèle 3D du canard
  const { nodes, materials } = useGLTF('models/rubber_duck.glb');

  console.log(nodes, materials); // Vérifie la structure des nodes et matériaux

  if (!nodes || Object.keys(nodes).length === 0) {
    console.error("Le modèle du canard ne s'est pas chargé correctement.");
    return null;
  }

  return (
    <Float floatIntensity={1}>
      <group position={[0, -1, 0]} scale={0.5} {...props} dispose={null}>
        <mesh
          geometry={nodes[Object.keys(nodes)[0]].geometry} // Récupère la bonne géométrie
          material={Object.values(materials)[0]} // Utilise le bon matériau
          position={[0, 0.079, 0.181]} // Ajuste la position si nécessaire
          rotation={[0, Math.PI, 0]} // Oriente le canard si besoin
          scale={[1, 1, 1]} // Garde la bonne échelle
        />
      </group>
    </Float>
  );
};

// Précharge le modèle du canard
useGLTF.preload('models/rubber_duck.glb');

export default RubberDuck;

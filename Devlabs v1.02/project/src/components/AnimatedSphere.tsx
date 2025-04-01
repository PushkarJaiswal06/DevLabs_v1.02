import React from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = React.useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.001;
      sphereRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={sphereRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#3b82f6"
        speed={1.5}
        distort={0.3}
        radius={1}
        roughness={0}
        metalness={0.8}
        envMapIntensity={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export default AnimatedSphere;
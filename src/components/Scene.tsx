import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <mesh ref={torusRef}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial
            color="#8844ff"
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Background particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </>
  );
}
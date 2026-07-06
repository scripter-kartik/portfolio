"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function AnimatedSphere() {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#C778DD" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
        />
      </mesh>
      
      <Sphere args={[0.8, 64, 64]}>
        <MeshDistortMaterial 
          color="#C778DD"
          emissive="#7b2d92"
          emissiveIntensity={0.5}
          envMapIntensity={0.4} 
          clearcoat={0.8} 
          clearcoatRoughness={0} 
          metalness={0.8} 
          roughness={0.2}
          distort={0.4} 
          speed={2.5} 
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute top-0 right-0 w-[600px] h-[600px] z-[-1] opacity-70 pointer-events-none translate-x-[20%] -translate-y-[10%] hidden lg:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#C778DD" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}

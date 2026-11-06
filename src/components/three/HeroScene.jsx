
import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Stars() {
  const positions = useMemo(() => {
    const values = new Float32Array(900 * 3);

    for (let i = 0; i < 900; i++) {
      values[i * 3] = (Math.random() - 0.5) * 12;
      values[i * 3 + 1] = (Math.random() - 0.5) * 12;
      values[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    return values;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#d8b4fe"
        size={0.025}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Planet() {
  const planetRef = useRef(null);

  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={planetRef}>
      {/* Main Planet */}
      <mesh>
        <sphereGeometry args={[1.45, 64, 64]} />

        <meshStandardMaterial
          color="#54218a"
          roughness={0.35}
          metalness={0.35}
          emissive="#351052"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Planet Ring */}
      <mesh rotation={[1.15, 0.2, -0.3]}>
        <torusGeometry args={[2, 0.035, 16, 120]} />

        <meshStandardMaterial
          color="#c084fc"
          emissive="#9333ea"
          emissiveIntensity={1.2}
          metalness={0.7}
        />
      </mesh>

      {/* Small Moon */}
      <mesh position={[2, 1.1, 0.3]}>
        <sphereGeometry args={[0.2, 32, 32]} />

        <meshStandardMaterial
          color="#d8b4fe"
          roughness={0.5}
          emissive="#9333ea"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <pointLight
            position={[4, 3, 5]}
            intensity={30}
            color="#c084fc"
          />
          <pointLight
            position={[-4, -2, 3]}
            intensity={15}
            color="#7c3aed"
          />

          <Stars />
          <Planet />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroScene;

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMemo, useEffect } from 'react'

function FloatingObjects() {
  useEffect(() => {
    console.log('FloatingObjects mounted');
  }, []);

  const shapes = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      position: [
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * -10 - 5
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2
    }))
  }, [])

  return (
    <>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position} rotation={shape.rotation}>
          {i % 3 === 0 ? (
            <octahedronGeometry args={[shape.scale, 0]} />
          ) : i % 3 === 1 ? (
            <boxGeometry args={[shape.scale, shape.scale, shape.scale]} />
          ) : (
            <sphereGeometry args={[shape.scale, 16, 16]} />
          )}
          <meshStandardMaterial
            color={`hsl(${Math.random() * 60 + 200}, 70%, 75%)`}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  )
}

export default function BackgroundAnimation() {
  useEffect(() => {
    console.log('BackgroundAnimation mounted');
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'transparent'
    }}>
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingObjects />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
} 
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 5000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    const color1 = new THREE.Color('#00ff41')
    const color2 = new THREE.Color('#00ffff')
    
    for (let i = 0; i < count * 3; i += 3) {
      // Spherical distribution
      const radius = 50 + Math.random() * 50
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)
      
      // Color gradient
      const t = Math.random()
      const color = color1.clone().lerp(color2, t)
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }
    
    return { positions, colors, count }
  }, [])
  
  useFrame((state) => {
    if (!pointsRef.current) return
    
    const time = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = time * 0.05
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
  })
  
  return (
    <Points ref={pointsRef} positions={particles.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff41"
        size={0.15}
        sizeAttenuation
        depthWrite={false}
        vertexColors
      />
    </Points>
  )
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null)
  
  const orbs = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 30,
      ],
      scale: 0.5 + Math.random() * 1.5,
      speed: 0.2 + Math.random() * 0.3,
      color: i % 2 === 0 ? '#00ff41' : '#00ffff',
    }))
  }, [])
  
  useFrame((state) => {
    if (!orbsRef.current) return
    
    const time = state.clock.getElapsedTime()
    
    orbsRef.current.children.forEach((orb, i) => {
      const orbData = orbs[i]
      orb.position.y += Math.sin(time * orbData.speed) * 0.01
      orb.scale.setScalar(
        orbData.scale + Math.sin(time * orbData.speed) * 0.1
      )
    })
  })
  
  return (
    <group ref={orbsRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position as any}>
          <sphereGeometry args={[orb.scale, 32, 32]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 2]}
      >
        <fog attach="fog" args={['#000000', 30, 100]} />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  )
}

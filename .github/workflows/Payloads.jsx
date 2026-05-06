import React from 'react';
import { Float, Html } from '@react-three/drei';
import { useSystemStore } from '../store/systemStore';
import '../styles/system.css';

/**
 * @description Modulo /PAYLOADS/. Rendering di card flottanti in coordinate normalizzate.
 */
export const Payloads = () => {
  const payloads = useSystemStore((state) => state.payloads);

  return (
    <group>
      {payloads.map((payload, index) => (
        <Float 
          key={payload.id} 
          position={[index * 5 - 2.5, 0, -2]} 
          speed={2} 
          rotationIntensity={0.5} 
          floatIntensity={1}
        >
          <Html distanceFactor={10} transform>
            <div className="payload-card">
              <div className="data-label">NODE_ID</div>
              <div className="data-value">{payload.id}</div>
              
              <div className="data-label">VECTOR_OF_ATTACK</div>
              <div className="data-value">{payload.vector}</div>
              
              <div className="data-label">MD5_HASH</div>
              <div className="data-value" style={{ color: '#ff0055' }}>{payload.hash}</div>
              
              <div className="data-label">STATUS</div>
              <div className="data-value" style={{ color: '#00eeff' }}>{payload.status}</div>
            </div>
          </Html>
        </Float>
      ))}
    </group>
  );
};
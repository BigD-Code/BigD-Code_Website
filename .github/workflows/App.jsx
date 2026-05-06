import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useSystemStore } from './store/systemStore';
import { Payloads } from './components/Payloads';
import { AssetHub } from './components/AssetHub';
import { InstancedPackets } from './components/InstancedPackets';
import './styles/system.css';

/**
 * @description Root Environment. Orchestrazione frame rendering.
 */
function App() {
  const view = useSystemStore((state) => state.view);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          
          {view === 'SYS_INIT' && (
            <group>
              <AssetHub />
              <InstancedPackets count={1000} />
            </group>
          )}

          {view === 'payloads' && <Payloads />}
          
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>

      <div className="overlay-container">
        <div className="ascii-header">
          {`
          ███████╗██╗   ██╗███████╗    ██╗███╗   ██╗██╗████████╗
          ██╔════╝╚██╗ ██╔╝██╔════╝    ██║████╗  ██║██║╚══██╔══╝
          ███████╗ ╚████╔╝ ███████╗    ██║██╔██╗ ██║██║   ██║   
          ╚════██║  ╚██╔╝  ╚════██║    ██║██║╚██╗██║██║   ██║   
          ███████║   ██║   ███████║    ██║██║ ╚████║██║   ██║   
          ╚══════╝   ╚═╝   ╚══════╝    ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   
          `}
        </div>
        <div className="sys-status-panel">
          KERNEL_STATUS: STABLE // SCANNING_NET_NODES... [OK]
        </div>
      </div>
    </div>
  );
}

export default App;
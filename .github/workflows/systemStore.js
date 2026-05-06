import { create } from 'zustand';

/**
 * @description Kernel State Machine per la gestione dei moduli di sistema.
 */
export const useSystemStore = create((set) => ({
  view: 'SYS_INIT',
  activeNode: null,
  payloads: [
    { 
      id: '0xAlpha_7', 
      vector: 'R3F | GLSL | WEBSOCKET_INJECTION', 
      status: 'DEPLOYED', 
      hash: '79054025255fb1a26e4bc422aef54eb4' 
    },
    { 
      id: '0xBeta_V2', 
      vector: 'WASM | MULTI_THREAD_COMPUTE', 
      status: 'STABLE', 
      hash: '5d41402abc4b2a76b9719d911017c592' 
    }
  ],
  setView: (view) => set({ view }),
}));
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Interface } from './components/Interface';

function App() {
  return (
    <main className="h-screen w-screen bg-black text-white">
      <Canvas
        className="fixed inset-0"
        camera={{ position: [0, 0, 5] }}
      >
        <color attach="background" args={['#050505']} />
        <Scene />
      </Canvas>
      <Interface />
    </main>
  );
}

export default App;
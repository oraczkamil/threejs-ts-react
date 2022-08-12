import {Canvas} from "@react-three/fiber";
import {DefaultScene} from "./scene";

function App() {


  return (
      <Canvas
        style={{width: innerWidth, height: innerHeight}}
      >
        <DefaultScene />
      </Canvas>
  )
}

export default App

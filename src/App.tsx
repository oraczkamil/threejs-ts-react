import {Canvas} from "@react-three/fiber";
import {DefaultScene} from "./scene";
import {Crosshair, UI} from "./components";

function App() {


  return (
      <>
          <UI>
              <Crosshair />
          </UI>
          <Canvas
              style={{width: innerWidth, height: innerHeight}}
          >
              <DefaultScene />
          </Canvas>
      </>
  )
}

export default App

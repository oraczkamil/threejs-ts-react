import {Plane, Camera, Player, Box} from "../prefabs";
import {Physics} from "@react-three/cannon";

const DefaultScene = () => {
    return(
        <>
            <Camera />

            <ambientLight />

            <Physics
                gravity={[0, -13, 0]}
                tolerance={0}
                iterations={50}
                broadphase={"SAP"}
            >
                <Player />

                <Plane />

                <Box position={[-3, 0.25, 4]}/>

            </Physics>
        </>
    );
}

export default DefaultScene;

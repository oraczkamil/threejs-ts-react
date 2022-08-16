import {Plane, Camera, Player} from "../prefabs";
import {Physics} from "@react-three/cannon";

const DefaultScene = () => {
    return(
        <>
            <Camera />

            <ambientLight />

            <Physics
                gravity={[0, -9, 0]}
                tolerance={0}
                iterations={50}
                broadphase={"SAP"}
            >
                <Player />

                <Plane />

                <mesh
                    position={[-3, 0.25, 1]}
                >
                    <boxBufferGeometry args={[1, 1, 1]} />
                    <meshLambertMaterial color={'#000000'} />
                </mesh>

            </Physics>
        </>
    );
}

export default DefaultScene;

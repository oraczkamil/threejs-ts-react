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

                <mesh>
                    <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
                    <meshLambertMaterial color={'#000000'} />
                </mesh>

            </Physics>
        </>
    );
}

export default DefaultScene;

import {usePlane} from "@react-three/cannon";

const Plane = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.25, 0],
        material: {
            friction: 0.1,
        }
    }))

    return(
        <mesh ref={ref} scale={[1000, 1000, 1000]}>
            <planeBufferGeometry />
            <meshPhongMaterial color={"skyblue"} />
        </mesh>
    );
}

export default Plane;

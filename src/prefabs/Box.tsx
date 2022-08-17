import { useBox } from "@react-three/cannon";

const Box = ({position = []}: {position: number[]}) => {
    const [boxRef] = useBox(() => ({
        // mass: 1,
        args: [1, 1, 1],
        material: {
            friction: 1,
            restitution: 0
        },
        position: position,
    }));

    return(
        <mesh
            ref={boxRef}
        >
            <boxBufferGeometry />
            <meshLambertMaterial color={'#000000'} />
        </mesh>
    )
}

export default Box;

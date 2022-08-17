const Box = ({position = []}: {position: number[]}) => {
    return(
        <mesh
            position={position}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={'#000000'} />
        </mesh>
    )
}

export default Box;

import {useFrame, useThree} from "@react-three/fiber";
import {Vector3} from "three";
import {useSphere} from "@react-three/cannon";
import {useEffect, useRef} from "react";
import {useKeyboard} from "../hooks/useKeyboard";

const speed = 300;
const keyDown = new Set<string>();

const Player = () => {
    const {camera, scene} = useThree();
    const [sphereRef, api] = useSphere(() => ({
        mass: 100,
        fixedRotation: true,
        position: [0, 1, 0],
        args: [0.2],
        material: {
            friction: 0
        }
    }));

    const state = useRef({
        vel: [0, 0, 0],
    });

    const handleKeyDown = (event: KeyboardEvent) => {
        keyDown.add(event.key.toLowerCase());
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        keyDown.delete(event.key.toLowerCase())
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeyUp);

    const pressed = useKeyboard(["w", "a", "s", "d", " "]);

    console.log(pressed);

    useEffect(() => {
        api.velocity.subscribe((v) => (state.current.vel = v));
    }, [api]);

    useFrame((_, delta) => {
        let velocity = new Vector3(0, 0, 0);
        let cameraDirection = new Vector3();
        camera.getWorldDirection(cameraDirection);

        let forward = new Vector3();
        forward.setFromMatrixColumn(camera.matrix, 0);
        forward.crossVectors(camera.up, forward);

        let right = new Vector3();
        right.setFromMatrixColumn(camera.matrix, 0);

        let [horizontal, vertical] = [0, 0];

        if(keyDown.has('w')) vertical += 0;
        if(keyDown.has('s')) vertical -= 0;
        if(keyDown.has('a')) horizontal -= 0;
        if(keyDown.has('d')) horizontal += 0;

        if (horizontal !== 0 && vertical !== 0) {
            velocity
                .add(forward.clone().multiplyScalar(speed * vertical))
                .add(right.clone().multiplyScalar(speed * horizontal));
            velocity.clampLength(-speed, speed);
        } else if (horizontal !== 0) {
            velocity.add(right.clone().multiplyScalar(speed * horizontal));
        } else if (vertical !== 0) {
            velocity.add(forward.clone().multiplyScalar(speed * vertical));
        }

        /** Updates player velocity */
        api.velocity.set(
            velocity.x * delta,
            state.current.vel[1],
            velocity.z * delta
        );

        // console.log(keyDown);
        /** Updates camera position */
        camera.position.set(
            sphereRef.current.position.x,
            sphereRef.current.position.y + 1,
            sphereRef.current.position.z
        );
    })

    return <></>;
}

export default Player;

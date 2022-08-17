import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import {extend, useThree} from "@react-three/fiber";
import { useEffect, useRef} from "react";

extend({PointerLockControls})

interface Controls {
    current: any;
}

const Camera = () => {
    const {camera, gl} = useThree();
    const controls: Controls = useRef();

    useEffect(() => {
        camera.layers.enable(0);
        camera.layers.enable(1);
    }, [camera]);

    useEffect(() => {
        const handleFocus = () => {
            controls.current.lock();
        };
        document.addEventListener("click", handleFocus);

        return () => {
            document.removeEventListener("click", handleFocus);
        };
    }, [gl]);

    // @ts-ignore
    return <pointerLockControls ref={controls} args={[camera, gl.domElement]} />;
}

export default Camera;

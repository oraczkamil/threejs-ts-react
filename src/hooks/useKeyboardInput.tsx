import { useCallback, useEffect, useState } from "react";

const useKeyboardInput = (keysToListen: string[] = []) => {
    const getKeys = useCallback(() => {
        const lowerCaseArray: string[] = [];
        const hookReturn: HookReturn = {};

        keysToListen.forEach((key: string) => {
            const lowerCaseKey = key.toLowerCase();
            lowerCaseArray.push(lowerCaseKey);
            hookReturn[lowerCaseKey] = false;
        });

        return {
            lowerCaseArray,
            hookReturn
        };
    }, [keysToListen]);

    const [keysPressed, setPressedKeys] = useState(getKeys().hookReturn);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const lowerKey = e.key.toLowerCase();
            if (getKeys().lowerCaseArray.includes(lowerKey)) {
                setPressedKeys((keysPressed) => ({ ...keysPressed, [lowerKey]: true }));
            }
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            const lowerKey = e.key.toLowerCase();
            if (getKeys().lowerCaseArray.includes(lowerKey)) {
                setPressedKeys((keysPressed) => ({
                    ...keysPressed,
                    [lowerKey]: false
                }));
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [keysToListen, getKeys]);

    return keysPressed;
};

export default useKeyboardInput;

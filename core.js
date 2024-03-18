import { soundCollection } from "./src";

export function soundEffect() {
    let effects = soundCollection
    const sound = (src) => {
        let audio = new Audio(src);
        try {
            audio.play();
        } catch (error) {
            console.error(`An error occurred: ${error}`);
        }
    }
    return { sound, effects }
}
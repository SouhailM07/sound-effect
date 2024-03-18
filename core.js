import { soundCollection } from "./src";

export default function soundEffect(src) {
    let effects = soundCollection
    const sound = () => {
        let audio = new Audio(src);
        try {
            audio.play();
        } catch (error) {
            console.error(`An error occurred: ${error}`);
        }
    }
    return { sound, effects }
}
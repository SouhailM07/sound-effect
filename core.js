export default function soundEffect(src) {
    let audio = new Audio(src);
    try {
        audio.play();
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}
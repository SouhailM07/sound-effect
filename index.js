export default function useSound(element, src, action) {
    try {
        let audio = new Audio(src);
        element.addEventListener(action, () => {
            audio.play();
        });
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
    return () => {
        document.removeEventListener(action);
    };
}
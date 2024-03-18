export default function useSound(element, src, action) {
    let audio = new Audio(src);
    let selectedElement = document.querySelector(element);
    try {
        selectedElement.addEventListener(action, () => {
            audio.play();
        });
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
    return () => {
        document.removeEventListener(action, () => {
            audio.play();
        });
    };
}